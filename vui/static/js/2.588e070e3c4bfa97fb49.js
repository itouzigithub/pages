webpackJsonp([2],{"/WVt":function(t,e,n){"use strict";var i=n("p6p0"),a=n("HOUg"),s=n("/Xao"),r=s(i.a,a.a,!1,null,null,null);e.a=r.exports},D215:function(t,e,n){"use strict";e.a={name:"search",props:{value:{required:!0,type:String}},data:function(){return{focus:!1,content:this.text}},methods:{update:function(t){this.$emit("input",this.content)},clear:function(){this.content="",this.$emit("input",""),this.$refs.input.blur()},setFocus:function(){this.$refs.input.focus()}}}},FV2L:function(t,e,n){var i=n("PCP7");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("20802c82",i,!0)},HOUg:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-row"},[t._m(0,!1,!1),t._v(" "),n("div",{staticClass:"ipt-wrap"},[t.showPassword?n("input",{attrs:{type:"text",maxlength:t.maxlength,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.update}}):n("input",{attrs:{type:"password",maxlength:t.maxlength,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.update}})]),t._v(" "),n("div",{staticClass:"ipt-icon"},[n("i",{directives:[{name:"show",rawName:"v-show",value:0!==t.value.length,expression:"value.length !== 0"}],staticClass:"fa fa-times",on:{click:t.clear}})]),t._v(" "),n("div",{staticClass:"ipt-icon"},[n("i",{staticClass:"fa",class:[t.showPassword?"fa-eye":"fa-eye-slash"],on:{click:function(e){t.showPassword=!t.showPassword}}})])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-icon"},[n("i",{staticClass:"fa fa-lock"})])}],s={render:i,staticRenderFns:a};e.a=s},IjSR:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-search-container",on:{click:t.setFocus}},[n("div",{staticClass:"ipt-search-wrap",class:{"ipt-search-wrap--focus":t.focus}},[n("div",{staticClass:"ipt-search",class:{"ipt-search--focus":t.focus}},[n("i",{staticClass:"ipt-search-icon fa fa-search"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"input",attrs:{type:"text",placeholder:"搜索"},domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},t.update],focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}})])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"ipt-search-cancel tc",on:{click:function(e){e.stopPropagation(),t.clear(e)}}},[t._v("取消")])])],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},JW8L:function(t,e,n){"use strict";function i(t){n("FV2L")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("MvTd"),s=n("u07d"),r=n("/Xao"),o=i,c=r(a.a,s.a,!1,o,null,null);e.default=c.exports},KU52:function(t,e,n){var i=n("ku86");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("2094a029",i,!0)},MvTd:function(t,e,n){"use strict";var i=n("a5sJ"),a=n("/WVt"),s=n("iHsZ"),r=n("zJuT");e.a={data:function(){return{phone:"",password:"",number:"",search:""}},components:{"ipt-phone":i.a,"ipt-password":a.a,"ipt-number":s.a,"ipt-search":r.a},methods:{checkValidity:function(){for(var t,e=this.$children,n=0;n<e.length;n++)if(t=e[n].isInvalid())return alert(t.type+": "+t.info),!1;return!0}}}},PCP7:function(t,e,n){e=t.exports=n("BkJT")(!1),e.push([t.i,".ipt-container{width:360px;height:40px;margin-bottom:15px;margin-top:10px;position:relative}",""])},VvJR:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-row"},[t._m(0,!1,!1),t._v(" "),n("div",{staticClass:"ipt-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{type:"phone",maxlength:"11",placeholder:"请输入手机号码"},domProps:{value:t.number},on:{input:[function(e){e.target.composing||(t.number=e.target.value)},t.update]}})]),t._v(" "),n("div",{staticClass:"ipt-icon"},[n("i",{directives:[{name:"show",rawName:"v-show",value:0!==t.number.length,expression:"number.length !== 0"}],staticClass:"fa fa-times",on:{click:t.clear}})])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-icon"},[n("i",{staticClass:"fa fa-phone"})])}],s={render:i,staticRenderFns:a};e.a=s},XLAR:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-row"},[n("div",{staticClass:"ipt-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.number},on:{input:[function(e){e.target.composing||(t.number=e.target.value)},t.update]}})])])},a=[],s={render:i,staticRenderFns:a};e.a=s},a5sJ:function(t,e,n){"use strict";var i=n("nAJn"),a=n("VvJR"),s=n("/Xao"),r=s(i.a,a.a,!1,null,null,null);e.a=r.exports},czSd:function(t,e,n){"use strict";e.a={props:{value:{required:!0},placeholder:{type:String},isInvalidFn:{type:Function,default:function(){return!1}}},data:function(){return{number:this.value,nonnumericRE:/\D/g}},methods:{update:function(t){var e=t.target.value;e=e?e.replace(this.nonnumericRE,""):"",this.number=e,this.$emit("input",e)},isInvalid:function(){this.isInvalidFn(this.value)}}}},iHsZ:function(t,e,n){"use strict";var i=n("czSd"),a=n("XLAR"),s=n("/Xao"),r=s(i.a,a.a,!1,null,null,null);e.a=r.exports},ku86:function(t,e,n){e=t.exports=n("BkJT")(!1),e.push([t.i,".ipt-search-container{position:relative;width:100%;height:38px;line-height:38px}.ipt-search-wrap{width:100%;height:100%;border-radius:19px;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;background-color:#fff}.ipt-search-wrap--focus{width:88%}.ipt-search{display:-webkit-box;display:-ms-flexbox;display:flex;float:right;width:55%;height:38px;-webkit-transition:all .3s;transition:all .3s;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ipt-search--focus{width:95%}.ipt-search input{width:100%;height:100%;border:none;outline:none;padding-left:5px}.ipt-search-icon{width:16px;height:16px;line-height:16px;text-align:center;-ms-flex-negative:0;flex-shrink:0}.ipt-search-cancel{position:absolute;top:0;right:0;width:12%;height:100%;text-align:right}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}",""])},nAJn:function(t,e,n){"use strict";e.a={props:{value:{required:!0}},data:function(){return{nonnumericRE:/\D/g,number:this.value}},methods:{update:function(t){var e=t.target.value.replace(this.nonnumericRE,"");this.number=e,this.$emit("input",e)},clear:function(){this.number="",this.$emit("input","")},isInvalid:function(){var t=this.value;return 0===t.length?{type:"phone",info:"手机号不可为空"}:(t.length<11||!/^1[34578]\d{9}$/.test(t))&&{type:"phone",info:"手机号格式错误"}}}}},p6p0:function(t,e,n){"use strict";e.a={props:{value:{required:!0},maxlength:{default:16,type:Number},minlength:{default:6,type:Number},placeholder:{default:"请输入密码"}},data:function(){return{showPassword:!1}},methods:{update:function(t){this.$emit("input",t.target.value)},clear:function(){this.$emit("input","")},isInvalid:function(){var t=this.value;return(t.length<this.minlength||t.length>this.maxlength)&&{type:"password",info:"密码格式错误"}}}}},u07d:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("p",[t._v("输入框的宽高是高度不确定的，因此作为组件，宽高默认均为 100%，完全依赖于父节点的宽和高")]),t._v(" "),n("p",[t._v("因为样式具有较高复用性，单独封装是不合算的，因此样式定义在 vui.common.css 公共组件样式文件中")]),t._v(" "),n("p",[t._v("特定类型的输入框存在不同的内部逻辑，故应该分类单独封装。包括图标也应该封装在内部，而不是由外部配置")]),t._v(" "),n("p",[t._v("非特定类型、纯样式性的输入框组件无需封装，参考按钮的方式自定义样式")]),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("手机号输入框")]),t._v(" "),n("div",{staticClass:"ipt-container hair-bottom"},[n("ipt-phone",{model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),t._m(0,!1,!1),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("密码输入框")]),t._v(" "),n("div",{staticClass:"ipt-container hair-bottom"},[n("ipt-password",{model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),t._m(1,!1,!1),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("有效性验证")]),t._v(" "),n("p",[t._v("每个特定输入框组件必须包含 isInvalid() 方法，父组件仅需调用下列方法，即可获得校验结果")]),t._v(" "),t._m(2,!1,!1),t._v(" "),n("button",{on:{click:t.checkValidity}},[t._v("check validity")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("数值输入框")]),t._v(" "),n("p",[t._v("原生的 number 类型输入框允许输入负号、e、小数点")]),t._v(" "),n("p",[t._v("封装的 number 类型输入框仅仅允许输入数字")]),t._v(" "),n("div",{staticClass:"ipt-container hair-bottom"},[n("ipt-number",{model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),t._v(" "),t._m(3,!1,!1),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("搜索框")]),t._v(" "),n("p",[t._v("样式的封装，应该仅仅封装最稳定的部分，其他部分由外部配置。直接用 CSS 配置，而不是传参数")]),t._v(" "),n("div",{staticStyle:{width:"375px"}},[n("ipt-search",{model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v('<div class="ipt-container">\n  <ipt-phone v-model="phone" />\n</div>\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v('// 可选参数\n// @maxlength { Number } 默认为 16\n// @minlength { Number } 默认为 6\n// @placeholder { String }\n<div class="ipt-container hair-bottom">\n  <ipt-password v-model="password" />\n</div>\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("checkValidity () {\n  var children = this.$children;\n  var res;\n  for (var i = 0; i < children.length; i++) {\n    if (res = children[i].isInvalid()) {\n      alert(res.type + ': ' + res.info);\n      return false\n    }\n  }\n  return true\n}\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v('// 可选参数\n// @isInvalidFn { Function } 自定义有效性验证函数，默认函数总是返回 false\n// @placeholder { String }\n<div class="ipt-container">\n  <ipt-number v-model="number" />\n</div>\n')])])}],s={render:i,staticRenderFns:a};e.a=s},zJuT:function(t,e,n){"use strict";function i(t){n("KU52")}var a=n("D215"),s=n("IjSR"),r=n("/Xao"),o=i,c=r(a.a,s.a,!1,o,null,null);e.a=c.exports}});