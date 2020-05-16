<?php

Co\run(function () {

    $clients = array();
    $server = new Co\Http\Server("0.0.0.0", 9502, false);
    $server->handle('/ws', function ($request, $ws) {
        global $clients;
        $ws->upgrade();
        // 为了简单，默认第一次接收客户端的用户识别信息
        $frame = $ws->recv();
        $user = json_decode($frame->data, true);
        // type = 1 老师 0 学生
        $client = "{$user['type']}:{$user['id']}";
        // 创建一个chan 接收发送给这个client 的信息
        $clients[$client] = new Swoole\Coroutine\Channel(2);
        echo $client.PHP_EOL;
        go(function ()use($clients, $client, $ws){
            // 另起一个协程监控chan
            while ($msg = $clients[$client]->pop()){
                $ws->push(json_encode($msg));
            }
        });

        while (true) {
            $frame = $ws->recv();
            if ($frame === false) {
                echo "error : " . swoole_last_error() . "\n";
                break;
            } else if ($frame == '') {
                break;
            } else {
                if ($frame->data == "close") {
                    // 断开连接 关闭chan
                    $clients[$client]->close();
                    unset($clients[$client]);
                    echo "{$client} is close\n";
                    $ws->close();
                    return;
                }
                // 接收到用户数据 发送到对应用户监听chan
                $data = json_decode($frame->data, true);
                echo "receive:from:{$data['from']} {$data['type']}:{$data['id']} to:{$data['id']}\n";
                // type = 1 发送给老师 0 发送给学生
                if (isset($data['msg']) && !empty($data['msg'])){
                    if (isset($clients["{$data['type']}:{$data['id']}}"])){
                        echo "send to ...\n";
                        $clients["{$data['type']}:{$data['id']}"]->push([
                            'from' => $data['from'],
                            'msg' => $data['msg']
                        ]);
                    }
                }
            }
        }
    });

    $server->start();
});