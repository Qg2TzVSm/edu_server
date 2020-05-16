package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"os"
	"time"
)

var addr = flag.String("addr", ":8088", "web socket serve address")

func main(){
	port := os.Getenv("PORT")
	// ws server
	flag.Parse()
	hub := NewHub()
	go hub.Run()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		ServeWs(hub, w, r)
	})

	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}





const (
	// time allowed to write a message to the peer
	writeWait = 10 * time.Second

	// time allowed to read the next pong message from the peer
	pongWait = 60 * time.Second

	// send pings to peer with this period. must be less than pongWait
	pingPeriod = (pongWait * 9) / 10

	// maximum message size allowed from peer
	maxMessageSize = 2048
)


var (
	newline = []byte{'\n'}
	space = []byte{' '}
)

var upgrader = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// client is a middleman between the websocket connection and the hub

type Client struct{
	hub *Hub

	// the websocket connection
	conn *websocket.Conn

	// Buffered channel of outbound messages
	send chan []byte
}

type Hub struct {
	clients map[*Client]string

	clientMaps map[string]*Client

	broadcast chan []byte

	register chan *Client

	unregister chan *Client
}

func NewHub() *Hub {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	return &Hub{
		clients: make(map[*Client]string),
		clientMaps: make(map[string]*Client),
		broadcast: make(chan []byte),
		register: make(chan *Client),
		unregister: make(chan *Client),
	}
}

func (h *Hub) Run() {
	for {
		select {
		case client := <- h.register:
			h.clients[client] = ""
		case client := <- h.unregister:
			if clientKey,ok := h.clients[client]; ok {
				delete(h.clients,client)
				delete(h.clientMaps, clientKey)
				close(client.send)
			}
		case message := <-h.broadcast:
			for client := range h.clients {
				select {
				case client.send <- message:
				default:
					fmt.Println("no message need to send")
					close(client.send)
					delete(h.clients,client)
				}
			}
		}

	}
}

// readPump pumps messages from the websocket connection to the hub
//
// the application runs readPump in a per-connection goroutine
// the application ensures that there is at most one reader on a connection by
// executing all reads from this goroutine

func (c *Client) readPump() {
	defer func(){
		c.hub.unregister <- c
		c.conn.Close()
	}()

	c.conn.SetReadLimit(maxMessageSize)
	c.conn.SetReadDeadline(time.Now().Add(pongWait))
	c.conn.SetPongHandler(func(string) error { c.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil})

	for {
		_, message, err := c.conn.ReadMessage()
		if err != nil{
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}
		message = bytes.TrimSpace(bytes.Replace(message, newline, space, -1))
		msg := &MsgFromUser{
			Type:   0,
			UserType: 0,
			To: 0,
			From: 0,
			Msg: "",
		}
		decodeMsg(message, msg)
		clientKey := fmt.Sprintf("%d:%d", msg.UserType, msg.From)
		_,ok := c.hub.clientMaps[clientKey]
		if !ok {
			c.hub.clients[c] = clientKey
			c.hub.clientMaps[clientKey] = c
		}else{
			toClientKey := fmt.Sprintf("%d:%d", msg.UserType, msg.To)
			toUser,check := c.hub.clientMaps[toClientKey]
			if check {
				// 用户在线 给他发消息
				toUser.send <- encodeMsg(MsgToUser{
					Type: 0,
					From: msg.From,
					Msg:  msg.Msg,
				})
			}
			//c.hub.broadcast <- message
		}
	}
}

// writePump pumps messages from the hub to the websocket connection
//
// a goroutine running writePump is started for each connection
// the application ensures that there is at most one writer to a connection by
// executing all writes from this goroutine

func (c *Client) writePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func(){
		ticker.Stop()
		c.conn.Close()
	}()

	for {
		select {
		case message, ok := <-c.send:
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				// the hub closed the channel
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := c.conn.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}

			w.Write(message)

			// add queue chat messages to the current websocket message

			n := len(c.send)

			for i := 0; i < n; i++ {
				w.Write(newline)
				w.Write(<-c.send)
			}

			if err := w.Close(); err != nil {
				return
			}

		case <- ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

// serveWs handles websocket requests from the peer
func ServeWs(hub *Hub, w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	client := &Client {
		hub: hub,
		conn: conn,
		send: make(chan []byte, 256),
	}

	client.hub.register <- client

	// allow collection of memory referenced by the caller by doing all work in
	// new goroutines

	go client.writePump()
	go client.readPump()
}

func decodeMsg(msg []byte, v interface{})  {
	err := json.Unmarshal(msg, v)
	if err != nil {
		fmt.Println(string(msg), "json decode error:", err)
	}
}

func encodeMsg(msg interface{}) []byte {
	data, err := json.Marshal(msg)
	if err != nil {
		return []byte{}
	}
	return data
}

type MsgFromUser struct {
	Type int `json:"type"` // 消息类型
	UserType int `json:"user_type"` // 发送者的用户类型
	To int `json:"id"` // 目标用户id
	From int `json:"from"` // 发送者id
	Msg string `json:"msg"`
}

type MsgToUser struct {
	Type int `json:"type"`
	From int `json:"from"`
	Msg string `json:"msg"`
}