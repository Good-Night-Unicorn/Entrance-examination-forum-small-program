(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"089b":function(t,e,n){"use strict";(function(t){n("0993"),n("921b");i(n("66fd"));var e=i(n("1962"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"18db":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},1962:function(t,e,n){"use strict";n.r(e);var i=n("18db"),r=n("be12");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("3c79");var a,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"4ec66566",null,!1,i["a"],a);e["default"]=o.exports},"35c1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,r,u,a){try{var s=t[u](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(i,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function s(t){u(a,i,r,s,o,"next",t)}function o(t){u(a,i,r,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=a(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],n=t.getStorageSync("loginTable"),this.tableName=n,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),this.styleChange();case 5:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{yonghuxingbieChange:function(t){this.yonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=a(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if(this.ruleForm.nianling||"yonghu"!=this.tableName){t.next=12;break}return this.$utils.msg("年龄不能为空"),t.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=15;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 15:if(this.ruleForm.shouji||"yonghu"!=this.tableName){t.next=18;break}return this.$utils.msg("手机不能为空"),t.abrupt("return");case 18:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=21;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 21:if("yonghu"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){t.next=24;break}return this.$utils.msg("余额应输入数字"),t.abrupt("return");case 24:return t.next=26,this.$api.register("".concat(this.tableName),this.ruleForm);case 26:this.$utils.msgBack("注册成功");case 28:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("543d")["default"])},"3c79":function(t,e,n){"use strict";var i=n("4aec"),r=n.n(i);r.a},"4aec":function(t,e,n){},be12:function(t,e,n){"use strict";n.r(e);var i=n("35c1"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a}},[["089b","common/runtime","common/vendor"]]]);