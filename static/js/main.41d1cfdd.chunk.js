(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{62:function(e,a,t){e.exports=t(95)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(21),r=t.n(l),o=(t(67),t(31)),i=(t(68),t(6)),u=t(118),s=(t(69),function(e){var a=e.setValue,t=function(e){a(e)};return c.a.createElement(u.a,{display:"flex",alignItems:"center",width:"100%",height:"100%",justifyContent:"center"},c.a.createElement(u.a,{display:"flex",flexDirection:"column",className:"box"},c.a.createElement(u.a,{display:"flex"},c.a.createElement(u.a,{className:"button",onClick:function(){return t(1)}},"tell me a joke"),c.a.createElement(u.a,{className:"button",onClick:function(){return t(2)}},"ask me a question")),c.a.createElement(u.a,{display:"flex"},c.a.createElement(u.a,{className:"button",onClick:function(){return t(3)}},"teach me something"),c.a.createElement(u.a,{className:"button",onClick:function(){return t(4)}},"show me something"))))}),m=t(32),f=t.n(m),E=t(51),d=t(28),p=t(114),b=t(52),h=t.n(b),v=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(E.a)(f.a.mark((function e(){var a,t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={async:!0,url:"https://icanhazdadjoke.com/",method:"GET",headers:{Accept:"application/json"}},e.next=3,h()(a);case 3:t=e.sent,n=t.data,console.log(n),l(n.joke);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,t),c.a.createElement(p.a,{onClick:r},"Another"))},g=t(54),j=t(117),k=t(121),x=t(119),w=t(116),O=t(115),y=t(53),C=t.n(y);function N(e){var a=e.children,t=e.value,n=e.index,l=Object(g.a)(e,["children","value","index"]);return c.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"nav-tabpanel-".concat(n),"aria-labelledby":"nav-tab-".concat(n)},l),t===n&&c.a.createElement(u.a,{p:3},c.a.createElement(O.a,null,a)))}function F(e){return{id:"nav-tab-".concat(e),"aria-controls":"nav-tabpanel-".concat(e)}}function S(e){return c.a.createElement(w.a,Object.assign({component:"a",onClick:function(e){e.preventDefault()}},e))}var A=Object(j.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function J(){A();var e=c.a.useState(0),a=Object(d.a)(e,2),t=a[0],n=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,{position:"static"},c.a.createElement(x.a,{variant:"fullWidth",value:t,onChange:function(e,a){n(a)},"aria-label":"nav tabs example"},c.a.createElement(S,Object.assign({label:c.a.createElement(C.a,null)},F(0))),c.a.createElement(S,Object.assign({label:"Joke"},F(1))),c.a.createElement(S,Object.assign({label:"Question"},F(2))),c.a.createElement(S,Object.assign({label:"Teach"},F(3))),c.a.createElement(S,Object.assign({label:"Show"},F(3))))),c.a.createElement(N,{value:t,index:0},c.a.createElement(s,{setValue:n})),c.a.createElement(N,{value:t,index:1},c.a.createElement(v,null)),c.a.createElement(N,{value:t,index:2},"Page Three"),c.a.createElement(N,{value:t,index:3},"Page Four"),c.a.createElement(N,{value:t,index:4},"Page Five"))}var P=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,{path:"/",component:J}))},T=function(e){e.store;return c.a.createElement(o.a,null,c.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.41d1cfdd.chunk.js.map