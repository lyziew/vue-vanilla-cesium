!function(c){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],i=0,s=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(f,n)&&f[n]&&s.push(f[n][0]),f[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(v&&v(e);s.length;)s.shift()();return l.push.apply(l,a||[]),u()}function u(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==f[a]&&(r=!1)}r&&(l.splice(t--,1),e=d(d.s=n[0]))}return e}var n={},p={app:0},f={app:0},l=[];function d(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(l){var e=[];p[l]?e.push(p[l]):0!==p[l]&&{spa:1}[l]&&e.push(p[l]=new Promise(function(e,r){for(var t="css/"+({spa:"spa"}[l]||l)+"."+{spa:"e2d9b03a"}[l]+".css",o=d.p+t,n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===t||s===o))return e()}var c=document.getElementsByTagName("style");for(a=0;a<c.length;a++)if((s=(i=c[a]).getAttribute("data-href"))===t||s===o)return e();var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var t=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+l+" failed.\n("+t+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=t,delete p[l],u.parentNode.removeChild(u),r(n)},u.href=o,document.getElementsByTagName("head")[0].appendChild(u)}).then(function(){p[l]=0}));var t,n=f[l];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,t){n=f[l]=[e,t]});e.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.src=d.p+"js/"+({spa:"spa"}[t=l]||t)+"."+{spa:"80c69f7e"}[t]+".js";var i=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(s);var t=f[l];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;i.message="Loading chunk "+l+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,t[1](i)}f[l]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},d.m=c,d.c=n,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)d.d(n,r,function(e){return t[e]}.bind(null,r));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/event-framework/",d.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var v=r;l.push([0,"Cesium","chunk-vendors"]),u()}({0:function(e,t,n){e.exports=n("cd49")},"53e9":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,(e.exports=n).id="53e9"},cd49:function(e,t,n){"use strict";n.r(t),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=r.a.extend({name:"App",components:{},data:function(){return{}},methods:{isNotLogin:function(){return!1}}}),a=n("2877"),i=n("6544"),s=n.n(i),c=n("7496"),u=n("a75b"),l=n("0789"),p=Object(a.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("v-fade-transition"),t("v-content",{staticClass:"mx-0 px-0 my-0 py-0"},[t("router-view")],1)],1)},[],!1,null,null,null),f=p.exports;s()(p,{VApp:c.a,VContent:u.a,VFadeTransition:l.b});var d=n("9483");Object(d.a)("".concat("/event-framework/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n("caad"),n("d3b7");var v=n("8c4f"),m=new(n("2bd2").a),g=function(e){return m.next({text:e})},h=function(){return m.next()},b=function(){return m.asObservable()},w=(n("e877"),n("45bd")),y={data:function(){return{viewer:{},messages:[]}},methods:{logMessage:function(){console.log("this is a message")}},created:function(){var t=this;this.subscription=b().subscribe(function(e){e?(t.logMessage(),t.messages.push(e)):t.messages=[]})},mounted:function(){var e=new w.Viewer("cesiumContainer",{animation:!1,fullscreenButton:!1,baseLayerPicker:!1,geocoder:!1,infoBox:!1,timeline:!1,navigationHelpButton:!1,navigationInstructionsInitiallyVisible:!1,scene3DOnly:!0,homeButton:!1,shadows:!0});this.viewer=e},beforeDestroy:function(){this.subscription.unsubscribe()}},k={components:{CesiumComponent:Object(a.a)(y,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{width:"100vw",height:"100vh"},attrs:{id:"cesiumContainer"}})},[],!1,null,null,null).exports},props:{source:String},data:function(){return{drawer:null}},methods:{sendMessage:function(){g("Message from Home Page Component to App Component!")},clearMessages:function(){h()}},created:function(){this.$vuetify.theme.dark=!0}},x=n("40dc"),C=n("5bc1"),_=n("a523"),O=n("553a"),j=n("132d"),V=n("8860"),A=n("da13"),E=n("1800"),S=n("5d23"),L=n("f774"),N=n("2a7f"),P=Object(a.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mx-0 px-0 my-0 py-0",attrs:{"fill-height":"",fluid:""}},[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("dashboard")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Dashboard")])],1)],1),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.sendMessage()}}},[n("v-list-item-action",[n("v-icon",[t._v("settings")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Settings")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Application")])],1),n("keep-alive",[n("CesiumComponent",{staticStyle:{display:"inline-block"}})],1),n("v-footer",{attrs:{app:""}},[n("span",[t._v("© 2019")])])],1)},[],!1,null,null,null),T=P.exports;s()(P,{VAppBar:x.a,VAppBarNavIcon:C.a,VContainer:_.a,VFooter:O.a,VIcon:j.a,VList:V.a,VListItem:A.a,VListItemAction:E.a,VListItemContent:S.a,VListItemTitle:S.b,VNavigationDrawer:L.a,VToolbarTitle:N.a}),r.a.use(v.a);var M=[{path:"/",name:"index",component:T},{path:"/login",name:"login",component:function(){return n.e("spa").then(n.bind(null,"a55b"))}},{path:"*",redirect:"/"}],B=new v.a({mode:"history",base:"/event-framework/",routes:M});B.beforeEach(function(e,t,n){var r=!["/login"].includes(e.path),o=localStorage.getItem("vuex");if(console.log(o),r&&!o)return n("/login");n()});var I=B,D=n("2f62"),F=n("0e44");r.a.use(D.a);var $=new D.a.Store({plugins:[Object(F.a)()],state:{user:{bearer:""}},mutations:{bearer:function(e,t){e.user.bearer=t}},actions:{bearer:function(e,t){e.commit("bearer",t)}},getters:{bearer:function(e){return e.user.bearer}},modules:{}}),q=n("f309");r.a.use(q.a);var H=new q.a({icons:{iconfont:"md"}});r.a.config.productionTip=!1,new r.a({router:I,store:$,vuetify:H,render:function(e){return e(f)}}).$mount("#app")}});