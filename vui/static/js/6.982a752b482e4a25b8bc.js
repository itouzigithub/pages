webpackJsonp([6],{"/IJK":function(e,t,r){"use strict";function n(e){var t=String(e);if(!t)return e;var r=t.split(".");return r[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+(r[1]?"."+r[1]:"")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=String(e);if(!r||r.length<=t)return e;var n=r.length%t,a=r.slice(0,n);return r.slice(n).split("").reduce(function(e,r,n){return e+(n%t==0?" "+r:r)},a)}function _(e){var t=String(e);return!t||t.length<8?e:t.replace(/(\d{3})\d*(\d{4})/,"$1****$2")}function u(e){e=e<1e10?1e3*e:e;var t=new Date(e),r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return n=n<10?"0"+n:n,a=a<10?"0"+a:a,r+"-"+n+"-"+a}function v(e){e=e<1e10?1e3*e:e;var t=new Date(e),r=t.getHours(),n=t.getMinutes(),a=t.getSeconds();return r=r<10?"0"+r:r,n=n<10?"0"+n:n,a=a<10?"0"+a:a,r+":"+n+":"+a}function c(e){e=e<1e10?1e3*e:e;var t=new Date(e),r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),_=t.getHours(),u=t.getMinutes(),v=t.getSeconds();return n=n<10?"0"+n:n,a=a<10?"0"+a:a,_=_<10?"0"+_:_,u=u<10?"0"+u:u,v=v<10?"0"+v:v,r+"-"+n+"-"+a+" "+_+":"+u+":"+v}t.b=n,t.a=a,t.f=_,t.c=u,t.e=v,t.d=c},dauK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("pnOS"),a=r("zeTf"),_=r("/Xao"),u=_(n.a,a.a,!1,null,null,null);t.default=u.exports},pnOS:function(e,t,r){"use strict";var n=r("/IJK");t.a={filters:{addThousandSeparator:n.b,addSpace:n.a,hideNumber:n.f}}},zeTf:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h3",[e._v("千分位逗号")]),e._v(" "),r("p",[e._v(e._s(e._f("addThousandSeparator")(1e7)))]),e._v(" "),r("p",[e._v("对于小数，务必使用字符串，避免小数位中的零被舍掉")]),e._v(" "),r("p",[e._v(e._s(e._f("addThousandSeparator")("10000000.00")))]),e._v(" "),e._m(0,!1,!1),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("增加空格")]),e._v(" "),r("p",[e._v("可以给任意数字或字符串增加等间距的空格")]),e._v(" "),r("p",[e._v(e._s(e._f("addSpace")(102410241024)))]),e._v(" "),r("p",[e._v(e._s(e._f("addSpace")(0x9506c9a9000)))]),e._v(" "),e._m(1,!1,!1),e._v(" "),r("p",[e._v("通过参数指定间隔多少位，默认间隔为 4")]),e._v(" "),r("p",[e._v(e._s(e._f("addSpace")(123123123123,3)))]),e._v(" "),r("p",[e._v(e._s(e._f("addSpace")(1123123123,3)))]),e._v(" "),e._m(2,!1,!1),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("隐藏号码")]),e._v(" "),r("p",[e._v("保留前 3 个与后 4 个数，中间的数用 4 个 * 替代")]),e._v(" "),r("p",[e._v(e._s(e._f("hideNumber")(13588888888)))]),e._v(" "),e._m(3,!1,!1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{pre:!0},[e._v("<p>{{ '10000000.00' | addThousandSeparator }}</p>")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{pre:!0},[e._v("<p>{{ 102410241024 | addSpace }}</p>")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{pre:!0},[e._v("<p>{{ 123123123123 | addSpace(3) }}</p>")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{pre:!0},[e._v("<p>{{ 13588888888 | hideNumber }}</p>")])])}],_={render:n,staticRenderFns:a};t.a=_}});