(this["webpackJsonpreact-firechat"]=this["webpackJsonpreact-firechat"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),a=n(17),i=n.n(a),s=(n(22),n(1)),u=function(e){var t=e.onClick,n=void 0===t?null:t,c=e.children,r=void 0===c?null:c;return Object(s.jsxs)("button",{onClick:n,children:[r," "]})},o=n(9),j=n.n(o),l=n(12),b=n(11);n(25),n(30);b.a.initializeApp({apiKey:"AIzaSyDY5A5yj3m7yOhaqdijiUZ0RcnQ0uJ_Jog",authDomain:"fire-chat-7c661.firebaseapp.com",projectId:"fire-chat-7c661",storageBucket:"fire-chat-7c661.appspot.com",messagingSenderId:"76837266147",appId:"1:76837266147:web:26fe146590cc1bd4239bd6",measurementId:"G-B6E147ZY3Z"});var d=b.a.firestore(),h=new b.a.auth.GoogleAuthProvider,O=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.a.auth().useDeviceLanguage(),e.prev=1,e.next=4,b.a.auth().signInWithPopup(h);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),p=n(10);var x=function(e){var t=Object(c.useState)(!0),n=Object(p.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)((function(){return e.currentUser})),s=Object(p.a)(i,2),u=s[0],o=s[1];return Object(c.useEffect)((function(){return e.onAuthStateChanged((function(e){o(e||!1),r&&a(!1)}))}),[e,r]),{user:u,initializing:r}},v=n(13),m=n(32),g=function(e){var t="";return e&&(t=(t=Object(m.a)(e,new Date)).charAt(0).toUpperCase()+t.slice(1)),t},y=function(e){var t=e.createdAt,n=void 0===t?null:t,c=e.text,r=void 0===c?"":c,a=e.displayName,i=void 0===a?"":a,u=e.photoURL,o=void 0===u?"":u;return r?Object(s.jsxs)("div",{class:"todo",children:[Object(s.jsx)("button",{class:"f",children:"..."}),o?Object(s.jsx)("img",{src:o,alt:"Avatar",className:"rounded-full mr-4",width:45,height:45}):null,i?Object(s.jsx)("p",{children:i}):null,(null===n||void 0===n?void 0:n.seconds)?Object(s.jsx)("span",{children:g(new Date(1e3*n.seconds))}):null,Object(s.jsx)("div",{class:"text",children:Object(s.jsx)("p",{class:"hola",children:r})})]}):null},w=(n(28),function(e){var t=e.user,n=void 0===t?null:t,r=Object(c.useState)([]),a=Object(p.a)(r,2),i=a[0],u=a[1];Object(c.useEffect)((function(){return d.collection("messages").orderBy("createdAt").limit(100).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id})}));u(t)}))}),[]);var o=n.uid,j=n.displayName,l=n.photoURL,h=Object(c.useState)(""),O=Object(p.a)(h,2),f=O[0],x=O[1],m=d.collection("messages"),g=Object(c.useRef)();return Object(c.useEffect)((function(){g.current&&g.current.focus()}),[g]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{children:i.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(y,Object(v.a)({},e))},e.id)}))}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=f.trim();t&&(m.add({text:t,createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:o,displayName:j,photoURL:l}),x(""))},children:[Object(s.jsx)("input",{ref:g,type:"text",value:f,onChange:function(e){e.preventDefault(),x(e.target.value)},placeholder:"Escribe tu mensaje aqui..."}),Object(s.jsx)("button",{class:" enviar",type:"submit",disabled:!f,children:"Enviar"})]})]})});var C=function(){var e=x(b.a.auth()),t=e.user,n=e.initializing;return Object(s.jsxs)("div",{children:[function(){if(n)return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Cargando..."})})}(),t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("center",{children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h4",{children:"Firechat-MaximeGroup"}),Object(s.jsx)(u,{onClick:f,children:" Logout Google"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{class:"contenedor",children:[Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("h4",{class:"ben",children:"Bienvenidos al Chat!"}),Object(s.jsx)(w,{user:t}),Object(s.jsx)("hr",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})]}),Object(s.jsx)("br",{})]}):Object(s.jsx)(u,{onClick:O,children:" Sign in with Google"}),Object(s.jsx)("br",{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),S()}},[[29,1,2]]]);
//# sourceMappingURL=main.83c517a1.chunk.js.map