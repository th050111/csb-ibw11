(this.webpackJsonptwit=this.webpackJsonptwit||[]).push([[0],{34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),i=a(12),j=a(21),o=a(3),b=a(2),u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),j=s[0],o=s[1],u=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e.target.name)},children:[Object(b.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:u}),Object(b.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:j,onChange:u}),Object(b.jsx)("input",{type:"submit",value:"Log In"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Google"})})]})},d=function(){return Object(b.jsx)("span",{children:"Home"})},l=function(e){var t=e.isLoggedIn;return Object(b.jsx)(j.a,{children:Object(b.jsx)(o.c,{children:t?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(d,{})})}):Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(u,{})})})})},p=a(18);a(32);p.a.initializeApp({apiKey:"AIzaSyALMu1dAuTCSFx8WDQDhQerH60xPNuDW18",authDomain:"twit-d4b57.firebaseapp.com",projectId:"twit-d4b57",storageBucket:"twit-d4b57.appspot.com",messagingSenderId:"847880314318",appId:"1:847880314318:web:b0e6873795406b55321f9f"});var O=p.a.auth();var h=function(){var e=Object(n.useState)(O.currentUser),t=Object(i.a)(e,2),a=t[0];return t[1],Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l,{isLoggedIn:a}),Object(b.jsxs)("footer",{children:["\xa9 twit ",(new Date).getFullYear()]})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0f2cbc8e.chunk.js.map