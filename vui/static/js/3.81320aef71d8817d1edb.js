webpackJsonp([3],{"/EWa":function(t,i,e){var n=e("Mncc");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("0801d7fd",n,!0)},"6Fsh":function(t,i,e){"use strict";function n(t){e("wS15")}var s=e("WH1b"),a=e("h4H2"),r=e("/Xao"),o=n,l=r(s.a,a.a,!1,o,null,null);i.a=l.exports},"9+vP":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("h3",[t._v("轮播图")]),t._v(" "),e("br"),t._v(" "),e("pre",[e("code",{directives:[{name:"hl",rawName:"v-hl"}]},[t._v("// 基本用法\n<banner :pics=\"pics\" height=\"350px\" />\n\n// pics { Array } required\n// auto { Boolean } optional 控制是否自动轮播，默认为 true\n// height { String } optional 默认高度为 100%，要么定义包含块，\n   要么通过 height 传入高度\n\n// 参数格式\npics: [{\n  link_url: '',\n  pic_url: ''\n}]\n")])]),t._v(" "),e("banner",{attrs:{pics:t.pics,height:"350px"}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("自定义焦点图形")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("slot 可接收两个参数：length-图片数量，order-当前图片是第几张图，从 1 算起")]),t._v(" "),e("p",[t._v("可利用这两个参数控制焦点的展示")]),t._v(" "),t._m(0,!1,!1),t._v(" "),e("p",[t._v('注意：需加上 v-if="pics.length > 1" 的条件')]),t._v(" "),e("p",[t._v('注意：Vue2.5+ 中 scope="props" 应写为 slot-scope="props"！！！')]),t._v(" "),e("pre",[e("code",{directives:[{name:"hl",rawName:"v-hl"}]},[t._v('<banner :pics="pics" height="350px">\n  <template scope="props" v-if="pics.length > 1">\n    <div class="slot">\n      <i :style="{\n        width: 1 / props.length * 100 + \'%\', \n        left: (props.order - 1) / props.length * 100 + \'%\'\n      }">\n      </i>\n    </div>\n  </template>\n</banner>\n')])]),t._v(" "),e("banner",{attrs:{pics:t.pics,height:"350px"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{staticClass:"slot"},[e("i",{style:{width:1/t.length*100+"%",left:(t.order-1)/t.length*100+"%"}})])]}}])})],1)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",[t._v("注意：需使用"),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#作用域插槽",target:"_blank"}},[t._v("作用域插槽")])])}],a={render:n,staticRenderFns:s};i.a=a},Mncc:function(t,i,e){i=t.exports=e("BkJT")(!1),i.push([t.i,".slot[data-v-24250d6f]{width:30%;height:3px;border-radius:1.5px;text-align:center;position:absolute;left:35%;bottom:20px;background:hsla(0,0%,100%,.2);z-index:3}i[data-v-24250d6f]{display:block;height:100%;border-radius:1.5px;background-color:#fff;position:absolute;top:0;-webkit-transition:all .3s;transition:all .3s}.active[data-v-24250d6f]{background-color:hsla(0,0%,100%,.8)}",""])},WH1b:function(t,i,e){"use strict";i.a={props:{pics:{type:Array,required:!0},height:{type:String,required:!0},auto:{type:Boolean,default:!0}},data:function(){return{W:0,w:0,x:0,base:0,start:0,distance:0,loosed:!0,timer:"",index:1,length:0}},computed:{order:function(){return 0===this.index?this.length:this.index===this.length+1?1:this.index}},created:function(){this.w=window.innerWidth,this.length=this.pics.length,this.W=this.w*(this.length+2),this.x=-this.w,this.length>1&&this.auto&&this.autoPlay()},methods:{handletouchstart:function(t){clearInterval(this.timer),this.loosed=!1,this.start=t.touches[0].clientX,this.distance=0,this.base=this.x,0===this.index&&(this.index=this.length,this.base=-this.index*this.w),this.index===this.length+1&&(this.index=1,this.base=-this.w)},handletouchmove:function(t){t.preventDefault(),this.distance=t.touches[0].clientX-this.start,this.x=this.base+this.distance},handletouchend:function(){Math.abs(this.distance)<=50?this.x=this.base:this.index+=this.distance>0?-1:1,this.loosed=!0,this.autoPlay()},autoPlay:function(){var t=this;this.timer=setInterval(function(){t.index===t.length+1?(t.loosed=!1,t.index=1,setTimeout(function(){t.loosed=!0,t.index+=1},0)):t.index+=1},3e3)}},watch:{index:function(t){this.x=-t*this.w}}}},awXN:function(t,i,e){i=t.exports=e("BkJT")(!1),i.push([t.i,".bn-container{width:100%;height:100%;overflow:hidden;position:relative;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.bn-wrap{height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;z-index:2}.bn-item{display:block;width:100%;height:100%;background-size:100% 100%;background-repeat:no-repeat;background-position:50%;float:left}.trans{-webkit-transition:all .3s;transition:all .3s}",""])},d2tn:function(t,i,e){"use strict";var n=e("6Fsh");i.a={data:function(){return{pics:[{link_url:"",pic_url:"http://img1.3lian.com/2015/a1/84/d/94.jpg"},{link_url:"",pic_url:"http://img1.3lian.com/2015/a1/84/d/98.jpg"},{link_url:"",pic_url:"http://img1.3lian.com/2015/a1/84/d/102.jpg"}]}},components:{banner:n.a}}},h4H2:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.pics.length>1?e("div",{staticClass:"bn-container",style:{height:t.height},on:{touchstart:t.handletouchstart,touchmove:t.handletouchmove,touchend:t.handletouchend}},[e("div",{staticClass:"bn-wrap",class:{trans:t.loosed},style:{width:t.W+"px",transform:"translate3d("+t.x+"px, 0, 0)"}},[e("div",{staticClass:"bn-item",style:{width:t.w+"px",backgroundImage:"url("+t.pics[t.pics.length-1].pic_url+")"}}),t._v(" "),t._l(t.pics,function(i,n){return e("a",{staticClass:"bn-item",style:{width:t.w+"px",backgroundImage:"url("+i.pic_url+")"},attrs:{href:i.link_url||"javascript:void(0)"}})}),t._v(" "),e("div",{staticClass:"bn-item",style:{width:t.w+"px",backgroundImage:"url("+t.pics[0].pic_url+")"}})],2),t._v(" "),t._t("default",null,{length:t.length,order:t.order})],2):e("div",{staticClass:"bn-container"},[e("a",{staticClass:"bn-item",style:{backgroundImage:"url("+t.pics[0].pic_url+")"},attrs:{href:t.pics[0].link_url||"javascript:void(0)"}})])},s=[],a={render:n,staticRenderFns:s};i.a=a},mU3o:function(t,i,e){"use strict";function n(t){e("/EWa")}Object.defineProperty(i,"__esModule",{value:!0});var s=e("d2tn"),a=e("9+vP"),r=e("/Xao"),o=n,l=r(s.a,a.a,!1,o,"data-v-24250d6f",null);i.default=l.exports},wS15:function(t,i,e){var n=e("awXN");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("192dfb16",n,!0)}});