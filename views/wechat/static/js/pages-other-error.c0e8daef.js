(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-other-error"],{"281a":function(t,n,e){"use strict";e.r(n);var a=e("553a"),r=e("557c");for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("ccfa");var u,c=e("98a2"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"abc58fba",null,!1,a["a"],u);n["default"]=o.exports},"553a":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"he-page-content"},[e("v-uni-image",{staticClass:"he-errImage",attrs:{src:t.ipAddress+"/error-background.png"}}),e("v-uni-view",[t._v("应用出错了，即将跳回首页("+t._s(t.num)+"s)")])],1)},i=[]},"557c":function(t,n,e){"use strict";e.r(n);var a=e("697d"),r=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"697d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"error",data:function(){return{num:3}},mounted:function(){this.setTime()},methods:{setTime:function(){var t=this;setTimeout((function(){t.num=t.num-1,t.num>0?t.setTime():uni.switchTab({url:"/pages/index/index"})}),1e3)}}};n.default=a},bf38:function(t,n,e){var a=e("c3aa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("3695").default;r("2d803af6",a,!0,{sourceMap:!1,shadowMode:!1})},c3aa:function(t,n,e){var a=e("a1a8");n=a(!1),n.push([t.i,".he-page-content[data-v-abc58fba]{padding-top:%?378?%;font-family:PingFang SC;font-size:%?26?%;font-weight:500;color:#999;line-height:1.3;text-align:center}.he-errImage[data-v-abc58fba]{width:%?320?%;height:%?320?%}",""]),t.exports=n},ccfa:function(t,n,e){"use strict";var a=e("bf38"),r=e.n(a);r.a}}]);