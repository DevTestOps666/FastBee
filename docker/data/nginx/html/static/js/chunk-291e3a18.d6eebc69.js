(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-291e3a18","chunk-cb62f12e","chunk-39413ce8","chunk-3a08d90c"],{"1e8b":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-form",{ref:"form",attrs:{model:t.user,rules:t.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[s("el-input",{attrs:{maxlength:"30"},model:{value:t.user.nickName,callback:function(e){t.$set(t.user,"nickName",e)},expression:"user.nickName"}})],1),s("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{attrs:{maxlength:"11"},model:{value:t.user.phonenumber,callback:function(e){t.$set(t.user,"phonenumber",e)},expression:"user.phonenumber"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{maxlength:"50"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),s("el-form-item",{attrs:{label:"性别"}},[s("el-radio-group",{model:{value:t.user.sex,callback:function(e){t.$set(t.user,"sex",e)},expression:"user.sex"}},[s("el-radio",{attrs:{label:"0"}},[t._v("男")]),s("el-radio",{attrs:{label:"1"}},[t._v("女")])],1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submit}},[t._v("保存")]),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.close}},[t._v("关闭")])],1)],1)},a=[],i=s("c0c7"),o={props:{user:{type:Object}},data:function(){return{rules:{nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"'请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{submit:function(){var t=this;this.$refs["form"].validate((function(e){e&&Object(i["k"])(t.user).then((function(e){t.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},n=o,l=s("2877"),u=Object(l["a"])(n,r,a,!1,null,null,null);e["default"]=u.exports},"4c1b":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6,xs:24}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("个人信息")])]),s("div",[s("div",{staticClass:"text-center"},[s("userAvatar",{attrs:{user:t.user}})],1),s("ul",{staticClass:"list-group list-group-striped"},[s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"user"}}),t._v(" 用户名称 "),s("div",{staticClass:"pull-right"},[t._v(t._s(t.user.userName))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"number"}}),t._v(" 用户编号 "),s("div",{staticClass:"pull-right"},[t._v(t._s(t.user.userId))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"phone"}}),t._v(" 手机号码 "),s("div",{staticClass:"pull-right"},[t._v(t._s(t.user.phonenumber))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"email"}}),t._v(" 用户邮箱 "),s("div",{staticClass:"pull-right"},[t._v(t._s(t.user.email))])],1),s("li",{staticClass:"list-group-item",staticStyle:{"padding-top":"40px"}},[s("svg-icon",{attrs:{"icon-class":"tree"}}),t._v(" 所属部门 "),t.user.dept?s("div",{staticClass:"pull-right"},[t._v(t._s(t.user.dept.deptName)+" / "+t._s(t.postGroup))]):t._e()],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"peoples"}}),t._v(" 所属角色 "),s("div",{staticClass:"pull-right"},[t._v(t._s(t.roleGroup))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"date"}}),t._v(" 创建日期 "),s("div",{staticClass:"pull-right"},[t._v(t._s(t.user.createTime))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"qq"}}),t._v(" QQ "),this.qqBind?s("div",{staticStyle:{float:"right",display:"flex"}},[s("span",[t._v(t._s(this.socialAccount.QQ.value.nickname))]),s("el-image",{staticStyle:{width:"25px",height:"25px","margin-top":"-7px","margin-left":"5px","margin-right":"5px"},attrs:{src:this.socialAccount.QQ.value.avatar}}),s("el-button",{staticStyle:{"margin-top":"-5px"},attrs:{size:"mini",disabled:""},on:{click:function(e){return t.unbind(t.socialAccount.QQ.name)}}},[t._v("解除绑定 ")])],1):s("div",{staticClass:"pull-right"},[s("el-button",{staticStyle:{"margin-top":"-7px"},attrs:{size:"mini",disabled:""},on:{click:function(e){return t.bind(t.socialAccount.QQ.name)}}},[t._v("未绑定")])],1)],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"wechat"}}),t._v(" 微信 "),s("div",{staticClass:"pull-right"},[s("el-button",{staticStyle:{"margin-top":"-7px"},attrs:{size:"mini",disabled:""}},[t._v("未绑定")])],1)],1)])])])],1),s("el-col",{attrs:{span:18,xs:24}},[s("el-card",[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("基本资料")])]),s("el-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[s("el-tab-pane",{attrs:{label:"基本资料",name:"userinfo"}},[s("userInfo",{attrs:{user:t.user}})],1),s("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[s("resetPwd",{attrs:{user:t.user}})],1)],1)],1)],1)],1)],1)},a=[],i=(s("d3b7"),s("159b"),s("b0c0"),s("9429")),o=s("1e8b"),n=s("ee46"),l=s("c0c7"),u=s("81c1"),c={name:"Profile",components:{userAvatar:i["default"],userInfo:o["default"],resetPwd:n["default"]},data:function(){return{user:{},roleGroup:{},postGroup:{},activeTab:"userinfo",socialGroup:[],qqBind:!1,wechatBind:!1,socialAccount:{QQ:{name:"QQ",value:null},Wechat:{name:"Wechat",value:null},Status:{bind:"0",unbind:"1"}}}},created:function(){this.getUser()},methods:{getUser:function(){var t=this;Object(l["f"])().then((function(e){t.user=e.data,t.roleGroup=e.roleGroup,t.postGroup=e.postGroup,t.socialGroup=e.socialGroup,void 0!==t.socialGroup&&null!==t.socialGroup&&t.socialGroup.forEach((function(e){if(e.status===t.socialAccount.Status.bind)switch(e.source){case t.socialAccount.QQ.name:t.qqBind=!0,t.socialAccount.QQ.value=e;break;case t.socialAccount.Wechat.name:t.wechatBind=!0,t.socialAccount.Wechat.value=e;break}}))}))},bind:function(t){switch(t){case this.socialAccount.QQ.name:this.qqBind||Object(u["b"])(t).then((function(t){window.location.href="http://localhost:8080/auth/render/qq"}));break}},unbind:function(t){var e=this;switch(t){case this.socialAccount.QQ.name:this.qqBind&&Object(u["g"])(this.socialAccount.QQ.value.socialUserId).then((function(t){e.$modal.msgSuccess(t.msg),e.qqBind=!1,e.socialAccount.QQ.value=null}));break}}}},p=c,d=s("2877"),m=Object(d["a"])(p,r,a,!1,null,null,null);e["default"]=m.exports},9429:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"user-info-head",on:{click:function(e){return t.editCropper()}}},[s("img",{staticClass:"img-circle img-lg",attrs:{src:t.options.img,title:"点击上传头像"}})]),s("el-dialog",{attrs:{title:t.title,visible:t.open,width:"800px","append-to-body":""},on:{"update:visible":function(e){t.open=e},opened:t.modalOpened,close:t.closeDialog}},[s("el-row",[s("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[t.visible?s("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}}):t._e()],1),s("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[s("div",{staticClass:"avatar-upload-preview"},[s("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),s("br"),s("el-row",[s("el-col",{attrs:{lg:2,md:2}},[s("el-upload",{attrs:{action:"#","http-request":t.requestUpload,"show-file-list":!1,"before-upload":t.beforeUpload}},[s("el-button",{attrs:{size:"small"}},[t._v(" 选择 "),s("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),s("el-col",{attrs:{lg:{span:1,offset:2},md:2}},[s("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(e){return t.changeScale(1)}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[s("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(e){return t.changeScale(-1)}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[s("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(e){return t.rotateLeft()}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[s("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(e){return t.rotateRight()}}})],1),s("el-col",{attrs:{lg:{span:2,offset:6},md:2}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.uploadImg()}}},[t._v("提 交")])],1)],1)],1)],1)},a=[],i=s("4360"),o=s("7e79"),n=s("c0c7"),l={components:{VueCropper:o["VueCropper"]},props:{user:{type:Object}},data:function(){return{open:!1,visible:!1,title:"修改头像",options:{img:i["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{editCropper:function(){this.open=!0},modalOpened:function(){this.visible=!0},requestUpload:function(){},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},beforeUpload:function(t){var e=this;if(-1==t.type.indexOf("image/"))this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var s=new FileReader;s.readAsDataURL(t),s.onload=function(){e.options.img=s.result}}},uploadImg:function(){var t=this;this.$refs.cropper.getCropBlob((function(e){var s=new FormData;s.append("avatarfile",e),Object(n["m"])(s).then((function(e){t.open=!1,t.options.img="/prod-api"+e.imgUrl,i["a"].commit("SET_AVATAR",t.options.img),t.$modal.msgSuccess("修改成功"),t.visible=!1}))}))},realTime:function(t){this.previews=t},closeDialog:function(){this.options.img=i["a"].getters.avatar,this.visible=!1}}},u=l,c=(s("b311"),s("2877")),p=Object(c["a"])(u,r,a,!1,null,"7aa4c71c",null);e["default"]=p.exports},b311:function(t,e,s){"use strict";s("ef46")},c0c7:function(t,e,s){"use strict";s.d(e,"g",(function(){return i})),s.d(e,"e",(function(){return o})),s.d(e,"a",(function(){return n})),s.d(e,"j",(function(){return l})),s.d(e,"c",(function(){return u})),s.d(e,"h",(function(){return c})),s.d(e,"b",(function(){return p})),s.d(e,"f",(function(){return d})),s.d(e,"k",(function(){return m})),s.d(e,"l",(function(){return f})),s.d(e,"m",(function(){return h})),s.d(e,"d",(function(){return g})),s.d(e,"i",(function(){return b}));var r=s("b775"),a=s("c38a");function i(t){return Object(r["a"])({url:"/system/user/list",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/system/user/"+Object(a["f"])(t),method:"get"})}function n(t){return Object(r["a"])({url:"/system/user",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/system/user",method:"put",data:t})}function u(t){return Object(r["a"])({url:"/system/user/"+t,method:"delete"})}function c(t,e){var s={userId:t,password:e};return Object(r["a"])({url:"/system/user/resetPwd",method:"put",data:s})}function p(t,e){var s={userId:t,status:e};return Object(r["a"])({url:"/system/user/changeStatus",method:"put",data:s})}function d(){return Object(r["a"])({url:"/system/user/profile",method:"get"})}function m(t){return Object(r["a"])({url:"/system/user/profile",method:"put",data:t})}function f(t,e){var s={oldPassword:t,newPassword:e};return Object(r["a"])({url:"/system/user/profile/updatePwd",method:"put",params:s})}function h(t){return Object(r["a"])({url:"/system/user/profile/avatar",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/system/user/authRole/"+t,method:"get"})}function b(t){return Object(r["a"])({url:"/system/user/authRole",method:"put",params:t})}},ee46:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-form",{ref:"form",attrs:{model:t.user,rules:t.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[s("el-input",{attrs:{placeholder:"请输入旧密码",type:"password","show-password":""},model:{value:t.user.oldPassword,callback:function(e){t.$set(t.user,"oldPassword",e)},expression:"user.oldPassword"}})],1),s("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[s("el-input",{attrs:{placeholder:"请输入新密码",type:"password","show-password":""},model:{value:t.user.newPassword,callback:function(e){t.$set(t.user,"newPassword",e)},expression:"user.newPassword"}})],1),s("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[s("el-input",{attrs:{placeholder:"请确认密码",type:"password","show-password":""},model:{value:t.user.confirmPassword,callback:function(e){t.$set(t.user,"confirmPassword",e)},expression:"user.confirmPassword"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submit}},[t._v("保存")]),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.close}},[t._v("关闭")])],1)],1)},a=[],i=s("c0c7"),o={data:function(){var t=this,e=function(e,s,r){t.user.newPassword!==s?r(new Error("两次输入的密码不一致")):r()};return{user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:e,trigger:"blur"}]}}},methods:{submit:function(){var t=this;this.$refs["form"].validate((function(e){e&&Object(i["l"])(t.user.oldPassword,t.user.newPassword).then((function(e){t.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},n=o,l=s("2877"),u=Object(l["a"])(n,r,a,!1,null,null,null);e["default"]=u.exports},ef46:function(t,e,s){}}]);