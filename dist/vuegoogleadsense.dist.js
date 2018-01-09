/*! vue-google-adsense v.1.0.0 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vuegoogleadsense",[],e):"object"==typeof exports?exports.vuegoogleadsense=e():t.vuegoogleadsense=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e){t.exports=function(t,e,a,n,s,o){var r,d=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(r=t,d=t.default);var l="function"==typeof d?d.options:d;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),a&&(l.functional=!0),s&&(l._scopeId=s);var u;if(o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var c=l.functional,f=c?l.render:l.beforeCreate;c?(l._injectStyles=u,l.render=function(t,e){return u.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:r,exports:d,options:l}}},function(t,e,a){"use strict";e.a={name:"Adsense",props:{rootClass:{type:String,default:"adswrapper VueAdsense"},dataAdClient:{type:String,default:""},dataAdSlot:{type:String,default:""}},data:function(){return{ADS_SCRIPT:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}},mounted:function(){(adsbygoogle=window.adsbygoogle||[]).push({})}}},function(t,e,a){"use strict";e.a={name:"InArticleAdsense",props:{rootClass:{type:String,default:"adswrapper VueInArticleAdsense"},dataAdClient:{type:String,default:""},dataAdSlot:{type:String,default:""}},data:function(){return{ADS_SCRIPT:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}},mounted:function(){(adsbygoogle=window.adsbygoogle||[]).push({})}}},function(t,e,a){"use strict";e.a={name:"InFeedAdsense",props:{rootClass:{type:String,default:"adswrapper VueInFeedAdsense"},dataAdClient:{type:String,default:""},dataAdSlot:{type:String,default:""},dataAdLayoutKey:{type:String,default:"-fg+5n+6t-e7+r"}},data:function(){return{ADS_SCRIPT:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}},mounted:function(){(adsbygoogle=window.adsbygoogle||[]).push({})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(5),s=a(7),o=a(9),r=function(t){return function(e){e.component(t.name,t)}};n.a.install=r(n.a),s.a.install=r(s.a),o.a.install=r(o.a),e.default={Adsense:n.a,InArticleAdsense:s.a,InFeedAdsense:o.a}},function(t,e,a){"use strict";var n=a(1),s=a(6),o=a(0),r=o(n.a,s.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rootClass},[a("script2",{attrs:{async:"",src:t.ADS_SCRIPT}}),t._v(" "),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":t.dataAdClient,"data-ad-slot":t.dataAdSlot,"data-ad-format":"auto"}})],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},function(t,e,a){"use strict";var n=a(2),s=a(8),o=a(0),r=o(n.a,s.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rootClass},[a("script2",{attrs:{async:"",src:t.ADS_SCRIPT}}),t._v(" "),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":t.dataAdClient,"data-ad-slot":t.dataAdSlot}})],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},function(t,e,a){"use strict";var n=a(3),s=a(10),o=a(0),r=o(n.a,s.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rootClass},[a("script2",{attrs:{async:"",src:t.ADS_SCRIPT}}),t._v(" "),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-format":"fluid","data-ad-layout-key":t.dataAdLayoutKey,"data-ad-client":t.dataAdClient,"data-ad-slot":t.dataAdSlot}})],1)},s=[],o={render:n,staticRenderFns:s};e.a=o}])});
//# sourceMappingURL=vuegoogleadsense.dist.js.map