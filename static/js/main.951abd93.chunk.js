(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,o){e.exports=o.p+"static/media/icon.18773506.png"},16:function(e,n,o){e.exports=o(40)},25:function(e,n,o){},26:function(e,n,o){},40:function(e,n,o){"use strict";o.r(n);var t=o(2),r=o.n(t),i=o(13),a=o.n(i),c=(o(25),o(14)),s=o.n(c),l=(o(26),o(5)),u=o.n(l),f=o(15),p=o(6),d=o.n(p),g=function(){var e=Object(f.a)(u.a.mark(function e(){var n,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=d.a.messaging(),e.next=4,n.requestPermission();case 4:return e.next=6,n.getToken();case 6:return o=e.sent,console.log(n),console.log("user token: ",o),e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}(),h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"icon"}),r.a.createElement("h1",{className:"App-title"},"Welcome to the push-notification demo !")),r.a.createElement("button",{onClick:g},"Click here to receive notifications"))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(r.a.createElement(h,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/fcm",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/fcm","/service-worker.js");m?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):v(e)})}}(),d.a.initializeApp({messagingSenderId:"525340006745"})}},[[16,1,2]]]);
//# sourceMappingURL=main.951abd93.chunk.js.map