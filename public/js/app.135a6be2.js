(function(e){function t(t){for(var r,a,l=t[0],i=t[1],u=t[2],c=0,m=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,a=1;a<o.length;a++){var i=o[a];0!==s[i]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},s={app:0},n=[];function a(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5b5288ea"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o=s[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=s[e]=[t,r]}));t.push(o[2]=r);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=a(e);var u=new Error;n=function(t){i.onerror=i.onload=null,clearTimeout(c);var o=s[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,o[1](u)}s[e]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=u;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("dcc2"),s=o.n(r);s.a},1473:function(e,t,o){var r=o("b352");t=r(!1),t.push([e.i,".operating[data-v-f7f355e6]{display:flex;justify-content:flex-end;margin-bottom:50px}#msg-input[data-v-f7f355e6]{background:#000;padding:3px;position:fixed;bottom:0;width:100%}#msg-input input[data-v-f7f355e6]{border:0;padding:10px;width:100%;margin-right:.5%}#messages[data-v-f7f355e6]{list-style-type:none;margin:0;padding:0}#messages li[data-v-f7f355e6]{padding:5px 10px}#messages li[data-v-f7f355e6]:nth-child(odd){background:#eee}",""]),e.exports=t},"195a":function(e,t,o){var r=o("b352");t=r(!1),t.push([e.i,".register[data-v-60245df8]{display:inline-block;min-width:800px}.img[data-v-60245df8]{display:flex;justify-content:center;text-align:center}",""]),e.exports=t},"1ee9":function(e,t,o){var r=o("195a");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=o("85cb").default;s("6b64bbf2",r,!0,{sourceMap:!1,shadowMode:!1})},"4bb8":function(e,t,o){var r=o("1473");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=o("85cb").default;s("084676ed",r,!0,{sourceMap:!1,shadowMode:!1})},"4e92":function(e,t,o){"use strict";var r=o("b41d"),s=o.n(r);s.a},"4f8d":function(e,t,o){"use strict";var r=o("af71"),s=o.n(r);s.a},"56d7":function(e,t,o){"use strict";o.r(t);o("a133"),o("ed0d"),o("f09c"),o("e117");var r,s=o("0261"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[o("el-menu-item",{attrs:{index:"1"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e.is_teacher?o("el-submenu",{attrs:{index:"2"}},[o("template",{slot:"title"},[e._v("选择学校")]),e._l(e.options,(function(t){return o("el-menu-item",{key:t.id,attrs:{school_id:t.id,index:t.name}},[e._v(e._s(t.name))])}))],2):e._e(),e.is_teacher?o("el-menu-item",{attrs:{index:"3"}},[o("router-link",{attrs:{to:"/register-school"}},[e._v("申请学校")])],1):e._e(),e.is_teacher?o("el-menu-item",{attrs:{index:"4"}},[o("router-link",{attrs:{to:"/invite"}},[e._v("邀请老师")])],1):e._e(),e.login_state?o("el-menu-item",{attrs:{index:"5"}},[o("router-link",{attrs:{to:"/login"}},[e._v("Log in")])],1):e.login_state?e._e():o("el-menu-item",{attrs:{index:"5"}},[o("router-link",{attrs:{to:"/bind"}},[e._v("绑定line")])],1),o("el-menu-item",{attrs:{index:"6"}},[o("router-link",{attrs:{to:"/register"}},[e._v("Sign up")])],1)],1)],1),o("router-view")],1)},a=[],l=(o("053b"),o("82ae")),i=o.n(l),u=i.a.create({baseURL:"https://edudemo.herokuapp.com/api",headers:{Accept:"application/json"}}),c=u,d={data:function(){return{activeIndex:"1",options:[]}},computed:{login_state:function(){return""===this.$store.state.edu_user_token},is_teacher:function(){return 1===this.$store.state.edu_user_type},is_student:function(){return 0===this.$store.state.edu_user_type}},watch:{is_teacher:function(){this.reqProfile()},is_student:function(){this.reqProfile()}},created:function(){var e=localStorage.getItem("edu_user_token"),t=localStorage.getItem("edu_user_type");null!==e&&null!==t&&(this.$store.state.edu_user_type=parseInt(t),this.$store.state.edu_user_token=e)},mounted:function(){},methods:{handleSelect:function(e,t,o){void 0!==t&&"2"===t[0]&&this.$store.commit("setSchool",{id:o.$attrs.school_id,name:e})},reqProfile:function(){var e=this,t=this.is_teacher?"teacher/profile":"student/profile";c.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.edu_user_token,c.get(t).then((function(t){console.log(t.data),e.$store.commit("setUserProfile",t.data.result),e.is_teacher?e.options=t.data.result.schools:e.is_student&&e.$store.commit("setSchool",{id:t.data.result.school.id,name:t.data.result.school.name})})).catch((function(e){e.response&&console.log(e.response.data)}))}}},m=d,f=(o("034f"),o("4023")),p=Object(f["a"])(m,n,a,!1,null,null,null),h=p.exports,_=(o("e18c"),o("1bee")),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("el-container",[o("el-aside",{attrs:{width:"200px"}},[o("el-row",[e._v(" 角色："+e._s(e.edu_role)+" ")]),o("el-row",[e._v(" "+e._s(e.school)+" ")])],1),o("el-main",[e.is_teacher?o("el-row",{staticClass:"operating"},[o("el-button",{attrs:{type:"primary"},on:{click:e.getData}},[e._v("学生列表")]),o("el-button",{attrs:{type:"success"},on:{click:e.getFollows}},[e._v("关注我的")])],1):e._e(),e.is_teacher?o("el-row",[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"450",border:""}},[o("el-table-column",{attrs:{prop:"id",label:"ID"}}),o("el-table-column",{attrs:{prop:"name",label:"姓名"}}),o("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small"},on:{click:function(o){return e.handleClick(t.row)}}},[e._v("聊天")])]}}],null,!1,712459081)})],1)],1):e._e(),e.is_student?o("el-row",{staticClass:"operating"},[o("el-button",{attrs:{type:"primary"},on:{click:e.getData}},[e._v("老师列表")]),o("el-button",{attrs:{type:"success"},on:{click:e.getFollows}},[e._v("我关注的")])],1):e._e(),e.is_student?o("el-row",[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"450",border:""}},[o("el-table-column",{attrs:{prop:"id",label:"ID"}}),o("el-table-column",{attrs:{prop:"name",label:"姓名"}}),o("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small"},on:{click:function(o){return e.handleClick(t.row)}}},[e._v("聊天")]),e.student_chose_1?o("el-button",{attrs:{size:"small",disabled:1===t.row.followed_count},on:{click:function(o){return e.handleFollow(t.row)}}},[e._v(e._s(t.row.followed_count?"已关注":"关注"))]):e._e(),e.student_chose_2?o("el-button",{attrs:{size:"small"},on:{click:function(o){return e.handleUnFollow(t.row)}}},[e._v("取消关注")]):e._e()]}}],null,!1,3749768836)})],1)],1):e._e()],1),o("el-drawer",{attrs:{visible:e.drawer,direction:"rtl","before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[o("ul",{attrs:{id:"messages"}},e._l(e.receive,(function(t,r){return o("li",{key:r},[e._v(e._s(t.from)+"说："+e._s(t.msg))])})),0),o("form",{attrs:{action:"",id:"msg-input"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],attrs:{id:"m",autocomplete:"off"},domProps:{value:e.msg},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)},input:function(t){t.target.composing||(e.msg=t.target.value)}}})])])],1)],1)},v=[];o("ea69");Array.prototype.remove=function(e){for(var t=0;t<this.length;t++)this[t].id==e&&this.splice(t,1)};var b={data:function(){return{drawer:!1,tableData:[],msg:"",receive:[],chatWith:{},student_chose_1:!1,student_chose_2:!1}},computed:{edu_role:function(){return-1===this.$store.state.edu_user_type?"未登陆":1===this.$store.state.edu_user_type?"老师":"学生"},school:function(){return-1===this.$store.state.edu_user_type?"":"学校："+this.$store.state.school.name},is_teacher:function(){return 1===this.$store.state.edu_user_type},is_student:function(){return 0===this.$store.state.edu_user_type},login_state:function(){return""===this.$store.state.edu_user_token}},watch:{login_state:function(){}},mounted:function(){var e=sessionStorage.getItem("home_table_data_cache");e&&(this.tableData=JSON.parse(e));var t=sessionStorage.getItem("home_student_chose_cache");"2"===t?this.student_chose_2=!0:"1"===t&&(this.student_chose_1=!0)},methods:{connToWs:function(){var e=this,t="wss://edu-chat-server.herokuapp.com/ws";r=new WebSocket(t),r.onopen=function(){console.log("Connected to WebSocket server."),r.send(JSON.stringify({type:0,user_type:e.$store.state.edu_user_type,id:0,from:e.$store.state.profile.id}))},r.onclose=function(){console.log("Disconnected")},r.onmessage=function(t){console.log("Retrieved data from server: "+t.data);var o=JSON.parse(t.data),r=e.receive;r.push({from:e.chatWith.name,msg:o.msg}),e.receive=r,console.log(e.receive)},r.onerror=function(e){console.log("Error occured: "+e.data)}},handleClick:function(e){console.log(e),this.connToWs(),this.chatWith={id:e.id,name:e.name},this.drawer=!0},handleClose:function(){this.drawer=!1},sendMessage:function(){if(void 0!==r){var e=1===this.$store.state.edu_user_type?0:1;r.send(JSON.stringify({type:e,user_type:e,id:this.chatWith.id,from:this.$store.state.profile.id,msg:this.msg}));var t=this.receive;t.push({from:"我",msg:this.msg}),this.receive=t}this.msg=""},getData:function(){var e=this;c.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.edu_user_token;var t=1===this.$store.state.edu_user_type?"school/"+this.$store.state.school.id+"/students":"student/teachers";c.get(t).then((function(t){console.log(t.data),e.tableData=t.data.result,e.student_chose_1=!0,e.student_chose_2=!1,sessionStorage.setItem("home_student_chose_cache","1"),sessionStorage.setItem("home_table_data_cache",JSON.stringify(t.data.result))})).catch((function(e){e.response&&console.log(e.response.data)}))},getFollows:function(){var e=this;c.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.edu_user_token;var t=1===this.$store.state.edu_user_type?"school/"+this.$store.state.school.id+"/follows":"student/follows";c.get(t).then((function(t){console.log(t.data),e.tableData=t.data.result,e.student_chose_2=!0,e.student_chose_1=!1,sessionStorage.setItem("home_student_chose_cache","2"),sessionStorage.setItem("home_table_data_cache",JSON.stringify(t.data.result))})).catch((function(e){e.response&&console.log(e.response.data)}))},handleFollow:function(e){var t=this;c.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.edu_user_token,c.post("student/teacher/"+e.id+"/follow").then((function(o){console.log(o.data);var r=t.tableData;r.remove(e.id),t.tableData=r,sessionStorage.setItem("home_table_data_cache",JSON.stringify(r))})).catch((function(e){e.response&&console.log(e.response.data)}))},handleUnFollow:function(e){var t=this;c.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.edu_user_token,c.post("student/teacher/"+e.id+"/un-follow").then((function(o){console.log(o.data);var r=t.tableData;r.remove(e.id),t.tableData=r,sessionStorage.setItem("home_table_data_cache",JSON.stringify(r))})).catch((function(e){e.response&&console.log(e.response.data)}))}}},y=b,w=(o("bf29"),Object(f["a"])(y,g,v,!1,null,"f7f355e6",null)),k=w.exports,F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[e._m(0),o("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[o("el-input",{attrs:{type:"text"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),o("el-form-item",{attrs:{label:"角色",prop:"role"}},[o("el-radio-group",{model:{value:e.ruleForm.role,callback:function(t){e.$set(e.ruleForm,"role",t)},expression:"ruleForm.role"}},[o("el-radio",{attrs:{label:1}},[e._v("老师")]),o("el-radio",{attrs:{label:0}},[e._v("学生")])],1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]),o("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img"},[r("img",{attrs:{alt:"Vue logo",src:o("cf05")}})])}],$={data:function(){var e=function(e,t,o){if(""===t)return o(new Error("邮箱不能为空"));o()},t=function(e,t,o){""===t?o(new Error("请输入密码")):o()};return{ruleForm:{email:"",password:"",role:1},rules:{email:[{validator:e,trigger:"blur"}],password:[{validator:t,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;c.post("login",{auth_type:t.ruleForm.role,email:t.ruleForm.email,password:t.ruleForm.password}).then((function(e){localStorage.setItem("edu_user_token",e.data.result.access_token),localStorage.setItem("edu_user_type",t.ruleForm.role),t.$store.commit("setToken",e.data.result.access_token),t.$store.commit("setUserType",t.ruleForm.role),t.$router.push({name:"Home"})})).catch((function(e){e.response&&console.log(e.response.data),alert("登陆失败，请检查用户名和密码是否输对。")}))}))},resetForm:function(e){this.$refs[e].resetFields()}}},S=$,I=(o("4e92"),Object(f["a"])(S,F,x,!1,null,"2ea5b69a",null)),O=I.exports,E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"register"},[e._m(0),o("el-form",{ref:"ruleForm",attrs:{"label-position":"right",model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[o("el-form-item",{attrs:{label:"Email",prop:"email"}},[o("el-input",{attrs:{placeholder:"this will be your log in account"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),o("el-form-item",{attrs:{label:"Name",prop:"name"}},[o("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),o("el-form-item",{attrs:{label:"Passord",prop:"pass"}},[o("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),o("el-form-item",{attrs:{label:"Re-password",prop:"checkPass"}},[o("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]),o("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img"},[r("img",{attrs:{alt:"Vue logo",src:o("cf05")}})])}],j={data:function(){var e=this,t=function(e,t,o){if(""===t)return o(new Error("邮箱不能为空"));o()},o=function(e,t,o){if(""===t)return o(new Error("姓名不能为空"));o()},r=function(t,o,r){""===o?r(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),r())},s=function(t,o,r){""===o?r(new Error("请再次输入密码")):o!==e.ruleForm.pass?r(new Error("两次输入密码不一致!")):r()};return{ruleForm:{pass:"",checkPass:"",email:"",name:""},rules:{email:[{validator:t,trigger:"blur"}],pass:[{validator:r,trigger:"blur"}],checkPass:[{validator:s,trigger:"blur"}],name:[{validator:o,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;c.post("register",{email:t.ruleForm.email,password:t.ruleForm.pass,name:t.ruleForm.name}).then((function(e){console.log(e),t.$router.push({name:"Login"})})).catch((function(e){e.response&&console.log(e.response.data),alert("注册失败！")}))}))},resetForm:function(e){this.$refs[e].resetFields()}}},C=j,N=(o("bd68"),Object(f["a"])(C,E,P,!1,null,"60245df8",null)),D=N.exports,M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"school-register"},[e._m(0),o("el-form",{ref:"ruleForm",attrs:{"label-position":"right",model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[o("el-form-item",{attrs:{label:"School Name",prop:"schoolName"}},[o("el-input",{model:{value:e.ruleForm.schoolName,callback:function(t){e.$set(e.ruleForm,"schoolName",t)},expression:"ruleForm.schoolName"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]),o("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},z=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img"},[r("img",{attrs:{alt:"Vue logo",src:o("cf05")}})])}],A={data:function(){var e=function(e,t,o){if(""===t)return o(new Error("学校名不能为空"));o()};return{ruleForm:{schoolName:""},rules:{schoolName:[{validator:e,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(o){if(!o)return console.log("error submit!!"),!1;c.defaults.headers.common["Authorization"]="Bearer "+t.$store.state.edu_user_token,c.post("school/register",{schoolName:t.ruleForm.schoolName}).then((function(o){console.log(o),alert("申请成功！"),t.$refs[e].resetFields()})).catch((function(e){e.response&&console.log(e.response.data),alert("申请失败！")}))}))},resetForm:function(e){this.$refs[e].resetFields()}}},T=A,B=(o("4f8d"),Object(f["a"])(T,M,z,!1,null,"11a79986",null)),J=B.exports,W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"inviteForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[o("el-form-item",{attrs:{label:"学校"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formInline.school_id,callback:function(t){e.$set(e.formInline,"school_id",t)},expression:"formInline.school_id"}},e._l(e.options,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),o("el-form-item",{attrs:{label:"搜索用户"}},[o("el-input",{attrs:{placeholder:"请输入对方邮箱"},model:{value:e.formInline.email,callback:function(t){e.$set(e.formInline,"email",t)},expression:"formInline.email"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)},q=[],H={data:function(){return{formInline:{email:"",school_id:"邀请到此学校"},options:[]}},mounted:function(){var e=this;c.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.edu_user_token,c.get("q").then((function(t){console.log(t.data.result),e.options=t.data.result})).catch((function(e){e.response&&console.log(e.response.data),console.log(e)}))},methods:{onSubmit:function(){c.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.edu_user_token,c.post("invite",{email:this.formInline.email,school_id:this.formInline.school_id}).then((function(e){console.log(e.data.result),alert("邀请成功！")})).catch((function(e){e.response?alert(e.response.data.result):alert("邀请失败！")}))}}},U=H,L=Object(f["a"])(U,W,q,!1,null,"7125898a",null),R=L.exports,V=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1")},G=[],K={data:function(){return{first:!0}},created:function(){void 0!==this.$route.query.result&&(this.first=!1,1==this.$route.query.result?(alert("绑定成功！"),this.$router.push({name:"Home"})):(alert("绑定失败！"),this.$router.push({name:"Home"})))},mounted:function(){var e=this;this.first&&(c.defaults.headers.common["Authorization"]="Bearer "+this.$store.state.edu_user_token,c.get("bind/prepare").then((function(e){console.log(e.data),window.location.href="https://edudemo.herokuapp.com/auth?nonce="+e.data.result})).catch((function(t){t.response&&(console.log(t.response.data),e.$router.push({name:"Home"}))})))}},Q=K,X=Object(f["a"])(Q,V,G,!1,null,"2a8b30be",null),Y=X.exports;s["default"].use(_["a"]);var Z=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/login",name:"Login",component:O},{path:"/register",name:"Register",component:D},{path:"/register-school",name:"SchoolRegister",component:J},{path:"/invite",name:"Invite",component:R},{path:"/bind",name:"Bind",component:Y}],ee=new _["a"]({routes:Z}),te=ee,oe=o("ae8c");s["default"].use(oe["a"]);var re=new oe["a"].Store({state:{edu_user_token:"",edu_user_type:-1,school:{},profile:{}},mutations:{setToken:function(e,t){e.edu_user_token=t},setUserType:function(e,t){e.edu_user_type=t},setSchool:function(e,t){e.school=t},setUserProfile:function(e,t){e.profile=t}},modules:{}}),se=o("a3c5"),ne=o.n(se);o("b9b6");s["default"].use(ne.a),s["default"].config.productionTip=!1,new s["default"]({router:te,store:re,render:function(e){return e(h)}}).$mount("#app")},af71:function(e,t,o){var r=o("b53f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=o("85cb").default;s("42298390",r,!0,{sourceMap:!1,shadowMode:!1})},b10e:function(e,t,o){var r=o("b352");t=r(!1),t.push([e.i,".login[data-v-2ea5b69a]{display:inline-block;min-width:800px}.img[data-v-2ea5b69a]{display:flex;justify-content:center;text-align:center}",""]),e.exports=t},b41d:function(e,t,o){var r=o("b10e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=o("85cb").default;s("2a996dc7",r,!0,{sourceMap:!1,shadowMode:!1})},b53f:function(e,t,o){var r=o("b352");t=r(!1),t.push([e.i,".school-register[data-v-11a79986]{display:inline-block;min-width:800px}.img[data-v-11a79986]{display:flex;justify-content:center;text-align:center}",""]),e.exports=t},bd68:function(e,t,o){"use strict";var r=o("1ee9"),s=o.n(r);s.a},bf29:function(e,t,o){"use strict";var r=o("4bb8"),s=o.n(r);s.a},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},dcc2:function(e,t,o){var r=o("ffe9");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=o("85cb").default;s("405d1d2e",r,!0,{sourceMap:!1,shadowMode:!1})},ffe9:function(e,t,o){var r=o("b352");t=r(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}",""]),e.exports=t}});
//# sourceMappingURL=app.135a6be2.js.map