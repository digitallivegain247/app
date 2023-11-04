(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[6],{101:function(e,n,r){"use strict";r.d(n,"a",(function(){return d}));var t=r(98),a=r.n(t),o=r(99),i=r(33),s=r(11),c=r.n(s),l=r(30),d=function(){var e=Object(i.b)("/profile"),n=e.data,r=e.mutate,t=e.error,s=!n&&!t,d=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.a.removeItem("access_token"),c.a.removeItem("refresh_token"),l.a.defaults.headers.Authorization=null,e.next=5,r();case 5:window.location.href="/account/login";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{profile:n,loading:s,error:t,mutate:r,logout:d}}},102:function(e,n,r){"use strict";var t,a=r(13),o=r(10),i=r(95),s=Object(o.d)(i.a).attrs((function(){return{as:"span"}}))(t||(t=Object(a.a)([""])));n.a=s},104:function(e,n,r){"use strict";var t,a,o,i,s,c=r(8),l=r(97),d=r(13),u=r(0),p=r(10),b=r(1),f=p.d.div(t||(t=Object(d.a)(["\n  position: relative;\n  display: ",";\n\n  font-size: 12px;\n\n  width: ",";\n  margin: ",";\n  font-weight: ",";\n  padding-top: ",";\n"])),(function(e){var n=e.display;return n&&n}),(function(e){return e.w||"100%"}),(function(e){return e.m||"8px 0"}),(function(e){return e.weight||"600"}),(function(e){return e.label&&"24px"})),x=p.d.input(a||(a=Object(d.a)(["\n  /* padding: 12px; */\n  padding: ",";\n  width: 100%;\n\n  font-size: 12px;\n\n  background-color: ",";\n\n  color: ",";\n\n  border-radius: ",";\n\n  border: none;\n  appearance: none;\n  outline: none;\n\n  ","\n"])),(function(e){return e.p||"12px"}),(function(e){var n=e.bg,r=e.theme;return r.colors[n]||n||r.colors.bg}),(function(e){var n=e.theme,r=e.color;return n.colors[r]||r||n.colors.text}),(function(e){return e.radius||"4px"}),(function(e){return e.outline&&Object(p.c)(o||(o=Object(d.a)(["\n      background: none;\n      border: 2px solid ",";\n      transition: border-color 0.3s ease;\n\n      &:focus {\n        border-color: #222;\n        transition-delay: 0.1s;\n      }\n    "])),(function(e){var n=e.bg;return e.theme.colors[n]||n||"#ddd"}))})),j=p.d.label(i||(i=Object(d.a)(["\n  position: absolute;\n  left: 12px;\n  top: 10px;\n\n  font-size: 11px;\n  color: ",";\n\n  transform: translateY(-50%);\n  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;\n\n  ","\n"])),(function(e){var n=e.error,r=e.color,t=e.theme;return n?t.colors.danger:r?t.colors[r]||r:void 0}),(function(e){return e.wide&&Object(p.c)(s||(s=Object(d.a)(["\n      width: 100%;\n      left: 0;\n      padding: 0 12px;\n    "])))})),m=function(e,n){var r=e.label,t=e.error,a=e.extra,o=e.w,i=e.m,s=e.weight,d=e.display,u=e.color,p=Object(l.a)(e,["label","error","extra","w","m","weight","display","color"]);return Object(b.jsxs)(f,{label:r,w:o,m:i,weight:s,display:d,children:[t?Object(b.jsx)(j,{error:!0,children:t}):a?Object(b.jsx)(j,{color:u,wide:!0,children:a}):r&&Object(b.jsx)(j,{color:u,children:r}),Object(b.jsx)(x,Object(c.a)({ref:n},p))]})};n.a=Object(u.forwardRef)(m)},105:function(e,n,r){"use strict";var t,a,o=r(13),i=r(10),s=r(141),c=Object(i.e)(t||(t=Object(o.a)(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),l=Object(i.d)(s.a)(a||(a=Object(o.a)(["\n  --size: ",";\n  width: var(--size);\n  height: var(--size);\n\n  display: block;\n\n  color: ",";\n\n  animation: "," 0.8s linear infinite;\n"])),(function(e){return e.size||"21px"}),(function(e){var n=e.color;return e.theme.colors[n]||n&&n}),c);n.a=l},108:function(e,n,r){"use strict";var t,a,o,i,s,c=r(0),l=r(94),d=r(31),u=r(13),p=r(19),b=r(10),f=r(100),x=r(121),j=r(95),m=r(1),h=b.d.aside(t||(t=Object(u.a)(["\n  grid-area: navbar;\n  height: 48px;\n  width: 100%;\n\n  margin: 0;\n  padding: 0 80px;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  z-index: 2;\n\n  background-color: ",";\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  /* display: none; */\n\n  @media screen and (max-width: ",") {\n    padding: 0 12px;\n  }\n"])),(function(e){var n=e.bg,r=e.theme;return r.colors[n]||n||r.colors.bgContrast}),(function(e){return e.theme.breakpoints.xl})),w=Object(b.d)(f.e)(a||(a=Object(u.a)(["\n  font-size: 24px;\n  width: 24px;\n"]))),g=b.d.h3(o||(o=Object(u.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 20px;\n    display: inline-block;\n    margin-right: 8px;\n  }\n"]))),v=b.d.div(i||(i=Object(u.a)(["\n  position: fixed;\n  top: calc(48px + 12px);\n  left: 80px;\n\n  width: calc(100% - 24px);\n  max-width: 360px;\n  max-height: 0;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n\n  background-color: ",";\n  border-radius: 12px;\n\n  ","\n\n  @media screen and (max-width: ",") {\n    left: 12px;\n  }\n"])),(function(e){var n=e.bg,r=e.theme;return r.colors[n]||n||r.colors.bgContrast}),(function(e){return e.open&&Object(b.c)(s||(s=Object(u.a)(["\n      max-height: 500px;\n      transition: max-height 0.25s ease-in;\n    "])))}),(function(e){return e.theme.breakpoints.xl})),O=function(){var e=Object(c.useState)(!1),n=Object(d.a)(e,2),r=n[0],t=n[1],a=function(){return t(!r)};return Object(m.jsxs)(h,{children:[Object(m.jsx)(w,{onClick:a}),Object(m.jsx)(p.b,{to:"/dashboard",children:Object(m.jsxs)(g,{children:[Object(m.jsx)("img",{src:"/assets/icon/favicon.png",alt:"logo"}),"Digital Live Gain 247"]})}),Object(m.jsx)(x.a,{open:r,onClick:a}),Object(m.jsx)(v,{open:r,children:Object(m.jsxs)(l.a,{p:"12px",wide:!0,children:[Object(m.jsx)(j.a,{as:"a",display:"block",href:"https://".concat("digitallivegain247.com"),children:"Home"}),Object(m.jsx)(j.a,{display:"block",to:"/account/login",children:"Login"}),Object(m.jsx)(j.a,{display:"block",to:"/account/register",children:"Register"}),Object(m.jsx)(j.a,{display:"block",to:"/account/forgot-password",children:"Forgot Password"})]})})]})};n.a=function(e){var n=e.children;return Object(m.jsxs)(l.a,{flex:"center",bg:"bg",m:"48px 0 0 0",h:"calc(100% - 48px)",minH:"calc(100vh - 48px)",children:[Object(m.jsx)(O,{}),Object(m.jsx)(l.a,{p:"16px",m:"64px 0",bg:"bgContrast",radius:"6px",maxW:"calc(100vw - 28px)",w:"400px",h:"auto",children:n})]})}},109:function(e,n,r){"use strict";var t,a=r(8),o=r(97),i=r(13),s=r(0),c=r(100),l=r(10),d=r(1),u=l.d.label(t||(t=Object(i.a)(["\n  position: relative;\n  display: ",";\n\n  display: inline-flex;\n  align-items: center;\n\n  width: ",";\n  padding: ",";\n  margin: ",";\n\n  font-size: 12px;\n\n  color: ",";\n\n  span {\n    width: 18px;\n    height: 18px;\n\n    background-color: lightgrey;\n    color: transparent;\n\n    font-size: 12px;\n    margin-right: 12px;\n\n    border-radius: 2px;\n    border: 0.5px solid #ccc;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-shrink: 0;\n\n    transition: 0.2s;\n  }\n\n  input:checked + span {\n    background-color: #2196f3;\n    color: white;\n    border-color: #2196f3;\n  }\n"])),(function(e){var n=e.display;return n&&n}),(function(e){return e.w||"100%"}),(function(e){return e.p||"12px 8px"}),(function(e){return e.m||"8px 0"}),(function(e){var n=e.color,r=e.theme;return n?r.colors[n]||n:void 0})),p=function(e,n){var r=e.label,t=e.w,i=e.p,s=e.m,l=e.weight,p=e.display,b=e.color,f=Object(o.a)(e,["label","w","p","m","weight","display","color"]);return Object(d.jsxs)(u,{w:t,p:i,m:s,weight:l,display:p,color:b,children:[Object(d.jsx)("input",Object(a.a)({type:"checkbox",hidden:!0,ref:n},f)),Object(d.jsx)("span",{children:Object(d.jsx)(c.f,{})}),r]})};n.a=Object(s.forwardRef)(p)},118:function(e,n,r){"use strict";var t=r(8),a=r(97),o=(r(0),r(101)),i=r(132),s=r(133),c=r(1);n.a=function(e){var n,r,l,d=e.size,u=void 0===d?"32px":d,p=e.user,b=Object(a.a)(e,["size","user"]),f=Object(o.a)().profile,x=p||f,j=(null===(n=x.avatar)||void 0===n?void 0:n.url)&&x.avatar.url.split("/");return j&&(j.splice(6,0,"w_200,h_200,c_fill"),l=j.join("/")),(null===(r=x.avatar)||void 0===r?void 0:r.url)?Object(c.jsx)(s.a,{src:l,w:u,h:u,radius:"50%",alt:x.fullName}):Object(c.jsx)(i.a,Object(t.a)({size:u,name:x.fullName},b))}},121:function(e,n,r){"use strict";var t,a=r(13),o=r(10).d.div(t||(t=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: ",";\n\n  overflow-y: hidden;\n\n  display: ",";\n\n  @media screen and (min-width: ",") {\n    display: ",";\n  }\n"])),(function(e){var n=e.bg;return e.theme.colors[n]||n||"rgba(0, 0, 0, 0.4)"}),(function(e){return e.z||"-1"}),(function(e){return e.open?"block":"none"}),(function(e){return e.theme.breakpoints.lg}),(function(e){var n=e.mobile;return e.open?n?"none":"block":"none"}));n.a=o},132:function(e,n,r){"use strict";var t,a=r(8),o=r(97),i=r(13),s=r(10),c=r(1),l=s.d.div(t||(t=Object(i.a)(["\n  --size: ",";\n  width: var(--size);\n  height: var(--size);\n\n  min-width: var(--size);\n\n  border-radius: 50%;\n  background-color: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n  font-size: ",";\n  cursor: pointer;\n"])),(function(e){return e.size||"32px"}),(function(e){var n=e.bg,r=e.theme;return r.colors[n]||n||r.colors.primary}),(function(e){return e.font||"calc(0.4375 * var(--size))"}));n.a=function(e){var n=e.name,r=Object(o.a)(e,["name"]),t=null===n||void 0===n?void 0:n.split(" ").slice(0,2).map((function(e){return e.substring(0,1)})).join("");return Object(c.jsx)(l,Object(a.a)(Object(a.a)({},r),{},{children:t}))}},133:function(e,n,r){"use strict";var t,a=r(13),o=r(10).d.img(t||(t=Object(a.a)(["\n  width: ",";\n  height: ",";\n  padding: ",";\n  margin: ",";\n  border-radius: ",";\n\n  max-width: ",";\n\n  object-fit: ",";\n  object-position: ",";\n"])),(function(e){var n=e.w;return n||"100%"}),(function(e){var n=e.h;return n||"100%"}),(function(e){var n=e.p;return n&&n}),(function(e){var n=e.m;return n&&n}),(function(e){var n=e.radius;return n&&n}),(function(e){return e.max||"100%"}),(function(e){return e.fit||"cover"}),(function(e){return e.pos||"center"}));n.a=o},134:function(e,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return o})),r.d(n,"c",(function(){return i}));var t=r(107),a=t.e().shape({oldPassword:t.g().trim().label("Old Password").required("Old Password is required"),password:t.g().trim().label("New Password").required("New Password is required").min(8,"Password must be at least 8 characters").notOneOf([t.f("oldPassword")],"New password cannot be same as old password"),pass:t.g().trim().label("Password Confirmation").required("Password confirmation is required").oneOf([t.f("password")],"Password do not match")}),o=t.e().shape({email:t.g().email("Invalid Email Address").lowercase().required("Email is required")}),i=t.e().shape({password:t.g().trim().label("New Password").required("New Password is required").min(8,"Password must be at least 8 characters"),pass:t.g().trim().label("Password Confirmation").required("Password confirmation is required").oneOf([t.f("password")],"Password do not match")})},346:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return B}));var t=r(0),a=r(2),o=r(32),i=r(98),s=r.n(i),c=r(97),l=r(99),d=r(11),u=r.n(d),p=r(103),b=r(106),f=r(94),x=r(95),j=r(104),m=r(109),h=r(96),w=r(105),g=r(108),v=r(101),O=r(107),y=O.e().shape({email:O.g().email("Enter a valid Email Address").lowercase().required("Email is required"),password:O.g().trim().required("Password is required")}),k=O.e().shape({email:O.g().email("Enter a valid Email Address").lowercase().required("Email is required"),firstName:O.g().trim().required("First Name is required"),lastName:O.g().trim().required("Last Name is required"),password:O.g().trim().min(8).required("Password is required"),pass:O.g().trim().oneOf([O.f("password")],"Passwords do not match").required("Please Confirm Password")}),P=r(30),z=r(1),N=function(){var e,n,r,t,o,i=Object(a.g)(),d=Object(a.h)().state,O=Object(v.a)().mutate,k=Object(p.c)({defaultValues:{email:"",password:"",showPassword:!1},resolver:Object(b.yupResolver)(y)}),N=k.register,q=k.handleSubmit,S=k.watch,R=k.errors,E=k.setError,C=k.formState.isSubmitting,A=S().showPassword,L=function(){var e=Object(l.a)(s.a.mark((function e(n){var r,t,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.showPassword,r=Object(c.a)(n,["showPassword"]),e.prev=1,e.next=4,P.a.post("/auth/login",r);case 4:return t=e.sent,a=t.data,P.a.defaults.headers.Authorization="Bearer "+a.accessToken,u.a.setItem("access_token",a.accessToken),u.a.setItem("refresh_token",a.refreshToken),e.next=11,O();case 11:i.push((null===d||void 0===d?void 0:d.from)||"/dashboard"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),o=e.t0.response.data.status,E("email",{type:"server",message:401===o||422===o?"Invalid Email Address or Password":"Something went wrong"});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.a,{children:[Object(z.jsx)(x.a,{font:"16px",align:"center",bold:!0,children:"Login"}),Object(z.jsxs)(f.a,{as:"form",wide:!0,onSubmit:q(L),children:[Object(z.jsx)(j.a,{type:"email",radius:"6px",p:"12px",m:"12px 0",placeholder:"Email Address",label:"Email Address",error:"server"!==(null===(e=R.email)||void 0===e?void 0:e.type)&&(null===(n=R.email)||void 0===n?void 0:n.message),ref:N,name:"email"}),Object(z.jsx)(j.a,{type:A?"text":"password",radius:"6px",p:"12px",m:"12px 0",placeholder:"Password",label:"Password",error:null===(r=R.password)||void 0===r?void 0:r.message,ref:N,name:"password"}),Object(z.jsx)(m.a,{m:"0",label:"Show password?",ref:N,name:"showPassword"}),"server"===(null===(t=R.email)||void 0===t?void 0:t.type)&&Object(z.jsx)(x.a,{font:"12px",p:"0",m:"12px 0 0",color:"red",align:"center",bold:!0,children:null===(o=R.email)||void 0===o?void 0:o.message}),Object(z.jsx)(h.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:C,children:C?Object(z.jsx)(w.a,{}):"Login"}),Object(z.jsxs)(x.a,{font:"12px",align:"center",children:["Don't have an account?"," ",Object(z.jsx)(x.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/register",children:"Create an Account"})]}),Object(z.jsxs)(x.a,{font:"12px",p:"0 0 12px",align:"center",children:["Forgot password?",Object(z.jsx)(x.a,{color:"primary",font:"inherit",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/forgot-password",children:"Click here"})]})]})]})},q=function(){var e,n,r,t,o,i=Object(a.g)(),d=Object(a.h)().state,O=Object(v.a)().mutate,y=Object(p.c)({defaultValues:{email:"",firstName:"",lastName:"",password:"",pass:"",showPassword:!1},resolver:Object(b.yupResolver)(k)}),N=y.register,q=y.handleSubmit,S=y.watch,R=y.errors,E=y.setError,C=y.formState.isSubmitting,A=S().showPassword,L=function(){var e=Object(l.a)(s.a.mark((function e(n){var r,t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.showPassword,r=Object(c.a)(n,["showPassword"]),(null===d||void 0===d?void 0:d.referrer)&&(r.referrer=d.referrer),e.prev=2,e.next=5,P.a.post("/auth/register",r);case 5:return t=e.sent,a=t.data,P.a.defaults.headers.Authorization="Bearer "+a.accessToken,u.a.setItem("access_token",a.accessToken),u.a.setItem("refresh_token",a.refreshToken),e.next=12,O();case 12:i.push((null===d||void 0===d?void 0:d.from)||"/dashboard"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0,e.t0.response),409===e.t0.response.data.status&&E("email",{type:"server",message:"Email Address already taken"});case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(n){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.a,{children:[Object(z.jsx)(x.a,{font:"16px",align:"center",bold:!0,children:"Create Account"}),Object(z.jsxs)(f.a,{as:"form",wide:!0,onSubmit:q(L),children:[Object(z.jsx)(j.a,{type:"email",radius:"6px",p:"12px",m:"12px 0",placeholder:"Email Address",label:"Email Address",error:null===(e=R.email)||void 0===e?void 0:e.message,ref:N,name:"email"}),Object(z.jsxs)(f.a,{flex:"space-between",m:"8px 0",wide:!0,children:[Object(z.jsx)(j.a,{w:"calc(50% - 6px)",radius:"6px",p:"12px",label:"First Name",placeholder:"First Name",ref:N,name:"firstName",error:null===(n=R.firstName)||void 0===n?void 0:n.message}),Object(z.jsx)(j.a,{w:"calc(50% - 6px)",radius:"6px",p:"12px",label:"Last Name",placeholder:"Last Name",ref:N,name:"lastName",error:null===(r=R.lastName)||void 0===r?void 0:r.message})]}),Object(z.jsx)(j.a,{type:A?"text":"password",radius:"6px",p:"12px",m:"12px 0",placeholder:"Password",label:"Password",error:null===(t=R.password)||void 0===t?void 0:t.message,ref:N,name:"password"}),Object(z.jsx)(j.a,{type:A?"text":"password",radius:"6px",p:"12px",m:"12px 0",placeholder:"Confirm Password",label:"Confirm Password",error:null===(o=R.pass)||void 0===o?void 0:o.message,ref:N,name:"pass"}),Object(z.jsx)(m.a,{m:"0",label:"Show password?",ref:N,name:"showPassword"}),Object(z.jsx)(h.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:C,children:C?Object(z.jsx)(w.a,{}):"Register"}),Object(z.jsxs)(x.a,{font:"12px",align:"center",children:["Already have an account?"," ",Object(z.jsx)(x.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/login",children:"Login"})]})]})]})},S=r(31),R=r(8),E=r(102),C=r(118),A={loading:!0,referrer:null,error:!1},L=function(e,n){var r=n.type,t=n.payload;switch(r){case"load":return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case"success":return{error:!1,loading:!1,referrer:t};case"error":return Object(R.a)(Object(R.a)({},e),{},{loading:!1,error:!0})}},_=function(){var e=Object(a.i)().ref,n=Object(t.useReducer)(L,A),r=Object(S.a)(n,2),i=r[0],c=i.loading,d=i.referrer,u=i.error,p=r[1];return Object(t.useEffect)((function(){e||p({type:"error"}),function(){var n=Object(l.a)(s.a.mark((function n(){var r,t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.a.get("/profile/"+e);case 3:r=n.sent,t=r.data,p({type:"success",payload:t}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),p({type:"error"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}()()}),[e]),c?Object(z.jsx)(o.a,{}):u?Object(z.jsx)(g.a,{children:Object(z.jsxs)(f.a,{p:"12px 0",wide:!0,children:[Object(z.jsx)(x.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Referral"}),Object(z.jsx)(x.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Sorry this link is broken"})]})}):Object(z.jsxs)(g.a,{children:[Object(z.jsx)(x.a,{font:"16px",align:"center",bold:!0,children:"Referral"}),Object(z.jsxs)(f.a,{p:"24px 0",flexCol:"center",wide:!0,children:[Object(z.jsx)(C.a,{user:d,size:"120px"}),Object(z.jsxs)(x.a,{font:"12px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:["You were referred by ",d.fullName]}),Object(z.jsxs)(x.a,{p:"12px 0",font:"12px",align:"center",multiline:!0,children:["Register under ",d.fullName," and you both earn"," ",Object(z.jsxs)(E.a,{font:"inherit",p:"0",bold:!0,children:["$","20"]})," ","when you sign up using their referral link."]})]}),Object(z.jsxs)(f.a,{wide:!0,children:[Object(z.jsx)(h.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",full:"true",bold:"true",to:{pathname:"/account/register",state:{referrer:d.id}},children:"Register Now"}),Object(z.jsxs)(x.a,{font:"12px",align:"center",children:["Register directly?"," ",Object(z.jsx)(x.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/register",children:"Click here"})]})]})]})},I=r(134),T=function(){var e,n,r,a,o=Object(t.useState)(!1),i=Object(S.a)(o,2),c=i[0],d=i[1],u=Object(p.c)({defaultValues:{email:""},resolver:Object(b.yupResolver)(I.b)}),m=u.register,v=u.handleSubmit,O=u.errors,y=u.setError,k=u.formState.isSubmitting,N=function(){var e=Object(l.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.email,e.prev=1,e.next=4,P.a.post("/auth/reset-password",{email:r});case 4:d(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),y("email",{type:"server",message:"Unable to find account"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return Object(z.jsx)(g.a,{children:c?Object(z.jsx)(x.a,{multiline:!0,children:"Please check your email to continue. We have sent you a link to reset your password"}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(f.a,{p:"12px 0",wide:!0,children:[Object(z.jsx)(x.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Reset Password"}),Object(z.jsx)(x.a,{font:"12px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Enter your email address to find your account"})]}),Object(z.jsxs)(f.a,{as:"form",wide:!0,onSubmit:v(N),children:[Object(z.jsx)(j.a,{type:"email",radius:"6px",p:"14px 12px",m:"12px 0",placeholder:"Email Address",label:"Email Address",error:"server"!==(null===(e=O.email)||void 0===e?void 0:e.type)&&(null===(n=O.email)||void 0===n?void 0:n.message),ref:m,name:"email"}),"server"===(null===(r=O.email)||void 0===r?void 0:r.type)&&Object(z.jsx)(x.a,{font:"12px",p:"0",m:"24px 0 0",color:"red",align:"center",bold:!0,children:null===(a=O.email)||void 0===a?void 0:a.message}),Object(z.jsx)(h.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",full:!0,bold:!0,disabled:k,children:k?Object(z.jsx)(w.a,{}):"Reset Password"}),Object(z.jsxs)(x.a,{font:"12px",align:"center",children:["Remember your password?"," ",Object(z.jsx)(x.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/login",children:"Login"})]})]})]})})},F={loading:!0,valid:!1},H=function(e,n){switch(n.type){case"load":return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case"success":return{loading:!1,valid:!0};case"error":return{loading:!1,valid:!1}}},W=function(){var e,n,r=Object(a.g)(),i=Object(a.i)().token,d=Object(t.useReducer)(H,F),u=Object(S.a)(d,2),v=u[0],O=v.loading,y=v.valid,k=u[1];Object(t.useEffect)((function(){i||k({type:"error"}),function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("/auth/reset-password/token",{passwordResetToken:i});case 3:k({type:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),k({type:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()()}),[i]);var N=Object(p.c)({defaultValues:{password:"",pass:"",showPassword:!1},resolver:Object(b.yupResolver)(I.c)}),q=N.register,R=N.handleSubmit,E=N.watch,C=N.formState,A=N.errors,L=E().showPassword,_=C.isSubmitting,T=function(){var e=Object(l.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.showPassword,(t=Object(c.a)(n,["showPassword"])).passwordResetToken=i,e.prev=2,e.next=5,P.a.post("/auth/reset-password/change",t);case 5:r.push("/account/login"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}();return O?Object(z.jsx)(o.a,{}):y?Object(z.jsxs)(g.a,{children:[Object(z.jsxs)(f.a,{p:"12px 0",wide:!0,children:[Object(z.jsx)(x.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Reset Password"}),Object(z.jsx)(x.a,{font:"12px",p:"0",m:"12px 0 0 0",opacity:"0.6",align:"center",bold:!0,multiline:!0,children:"Updating your password would log you out of all devices"})]}),Object(z.jsxs)(f.a,{as:"form",wide:!0,onSubmit:R(T),children:[Object(z.jsx)(j.a,{radius:"6px",p:"14px 12px",type:L?"text":"password",label:"New Password",placeholder:"New Password",ref:q,name:"password",error:null===(e=A.password)||void 0===e?void 0:e.message}),Object(z.jsx)(j.a,{radius:"6px",p:"14px 12px",type:L?"text":"password",label:"Confirm Password",placeholder:"Confirm Password",ref:q,name:"pass",error:null===(n=A.pass)||void 0===n?void 0:n.message}),Object(z.jsx)(m.a,{m:"0",label:"Show password?",ref:q,name:"showPassword"}),Object(z.jsx)(h.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"24px 0",full:!0,bold:!0,disabled:_,children:_?Object(z.jsx)(w.a,{}):"Reset Password"})]})]}):Object(z.jsx)(g.a,{children:Object(z.jsxs)(f.a,{p:"12px 0",wide:!0,children:[Object(z.jsx)(x.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Reset Password"}),Object(z.jsx)(x.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Sorry this link is broken"})]})})},V=function(e){var n=e.children,r=Object(v.a)(),t=r.profile;return r.loading?Object(z.jsx)(o.a,{}):t?Object(z.jsx)(a.a,{to:"/dashboard"}):t?void 0:n};function B(){var e=Object(a.j)(),n=e.path,r=e.url;return Object(z.jsx)(V,{children:Object(z.jsxs)(a.d,{children:[Object(z.jsx)(a.b,{exact:!0,path:"".concat(n,"/login"),children:Object(z.jsx)(N,{})}),Object(z.jsx)(a.b,{exact:!0,path:"".concat(n,"/register"),children:Object(z.jsx)(q,{})}),Object(z.jsx)(a.b,{exact:!0,path:"".concat(n,"/referral/:ref"),children:Object(z.jsx)(_,{})}),Object(z.jsx)(a.b,{exact:!0,path:"".concat(n,"/forgot-password"),children:Object(z.jsx)(T,{})}),Object(z.jsx)(a.b,{exact:!0,path:"".concat(n,"/reset-password/:token"),children:Object(z.jsx)(W,{})}),Object(z.jsx)(a.b,{children:Object(z.jsx)(a.a,{to:"".concat(r,"/login")})})]})})}},94:function(e,n,r){"use strict";var t,a,o,i,s,c,l,d,u,p,b,f=r(13),x=r(19),j=r(34),m=r(10),h=m.d.div.attrs((function(e){var n=e.to,r=e.scrollto;return{as:n&&(r?j.Link:x.b)}}))(t||(t=Object(f.a)(["\n  width: ",";\n  height: ",";\n  background: ",";\n  color: ",";\n  padding: ",";\n  border-radius: ",";\n  margin: ",";\n\n  cursor: ",";\n\n  max-width: ",";\n  min-width: ",";\n  max-height: ",";\n  min-height: ",";\n\n  display: ",";\n  overflow: ",";\n\n  // grid\n  grid-area: ",";\n  grid-gap: ",";\n  grid-auto-flow: ",";\n  grid-template-columns: ",";\n  grid-template-rows: ",";\n\n  // full width and default height\n  ","\n\n  // flex row with center align\n  ","\n\n  // flex column with center align\n  ","\n\n  // flex overrides\n  align-items: ",";\n  justify-content: ",";\n  flex-direction: ",";\n\n  // position\n  position: ",";\n  top: ",";\n  bottom: ",";\n  left: ",";\n  right: ",";\n  z-index: ",";\n\n  // border\n  border: ",";\n  border-top: ",";\n  border-bottom: ",";\n  border-left: ",";\n  border-right: ",";\n  border-color: ",";\n\n  // scroll behaviour for y-axis\n  ","\n\n  ","\n\n    // scroll behaviour for x-axis\n    ","\n\n    ","\n\n    // media overrides for screens below/above breakpoint, supports: p, m, radius, display\n    ","\n"])),(function(e){var n=e.w;return n||"100%"}),(function(e){var n=e.h;return n||"100%"}),(function(e){var n=e.bg;return e.theme.colors[n]||n&&n}),(function(e){var n=e.color;return e.theme.colors[n]||n&&n}),(function(e){var n=e.p;return n&&n}),(function(e){var n=e.radius;return n&&n}),(function(e){var n=e.m;return n&&n}),(function(e){return e.pointer&&"pointer"}),(function(e){var n=e.maxW;return n&&n}),(function(e){var n=e.minW;return n&&n}),(function(e){var n=e.maxH;return n&&n}),(function(e){var n=e.minH;return n&&n}),(function(e){var n=e.display;return n&&n}),(function(e){var n=e.o;return n&&n}),(function(e){var n=e.area;return n&&n}),(function(e){var n=e.gap;return n&&n}),(function(e){var n=e.flow;return n&&n}),(function(e){var n=e.templatecolumns;return n&&n}),(function(e){var n=e.templaterows;return n&&n}),(function(e){return e.wide&&Object(m.c)(a||(a=Object(f.a)(["\n      width: 100%;\n      height: auto;\n    "])))}),(function(e){return e.flex&&Object(m.c)(o||(o=Object(f.a)(["\n      display: flex;\n      justify-content: ",";\n      align-items: center;\n    "])),(function(e){return e.flex}))}),(function(e){return e.flexCol&&Object(m.c)(i||(i=Object(f.a)(["\n      display: flex;\n      flex-direction: column;\n      align-items: ",";\n      justify-content: center;\n    "])),(function(e){return e.flexCol}))}),(function(e){var n=e.align;return n&&n}),(function(e){var n=e.justify;return n&&n}),(function(e){var n=e.direction;return n&&n}),(function(e){var n=e.position;return n&&n}),(function(e){var n=e.top;return n&&n}),(function(e){var n=e.bottom;return n&&n}),(function(e){var n=e.left;return n&&n}),(function(e){var n=e.right;return n&&n}),(function(e){var n=e.z;return n&&n}),(function(e){var n=e.border;return n&&n}),(function(e){var n=e.bordertop;return n&&n}),(function(e){var n=e.borderbottom;return n&&n}),(function(e){var n=e.borderleft;return n&&n}),(function(e){var n=e.borderright;return n&&n}),(function(e){var n=e.theme,r=e.bordercolor;return n.colors[r]||r||"rgba(0, 0, 0, 0.1)"}),(function(e){return e.scroll&&Object(m.c)(s||(s=Object(f.a)(["\n      overflow-y: scroll;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    "])))}),(function(e){return e.noscroll&&Object(m.c)(c||(c=Object(f.a)(["\n      overflow-y: hidden;\n    "])))}),(function(e){return e.scrollX&&Object(m.c)(l||(l=Object(f.a)(["\n      overflow-x: scroll;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    "])))}),(function(e){return e.noscrollX&&Object(m.c)(d||(d=Object(f.a)(["\n      overflow-x: hidden;\n    "])))}),(function(e){var n=e.media;if(n){var r=Object(m.c)(u||(u=Object(f.a)(["\n        display: ",";\n        overflow: ",";\n\n        width: ",";\n        height: ",";\n\n        padding: ",";\n        margin: ",";\n        border-radius: ",";\n\n        background-color: ",";\n\n        max-width: ",";\n        min-width: ",";\n        max-height: ",";\n        min-height: ",";\n\n        align-items: ",";\n        justify-content: ",";\n        flex-direction: ",";\n\n        grid-area: ",";\n        grid-gap: ",";\n        grid-auto-flow: ",";\n        grid-template-columns: ",";\n        grid-template-rows: ",";\n\n        overflow-y: ",";\n        overflow-x: ",";\n        &::-webkit-scrollbar {\n          display: none;\n        }\n      "])),n.display,n.o,n.w,n.h,n.p,n.m,n.radius,(function(e){var n=e.media;return e.theme.colors[n.bg]||n.bg}),n.maxW,n.minW,n.maxH,n.minH,n.align,n.justify,n.direction,n.area,n.gap,n.flow,n.templatecolumns,n.templaterows,n.overflowY,n.overflowX),t=n.breakpoint||"xl";return n.targetBelow?Object(m.c)(p||(p=Object(f.a)(["\n            @media screen and (max-width: ",") {\n              ","\n            }\n          "])),(function(e){return e.theme.breakpoints[t]}),r):Object(m.c)(b||(b=Object(f.a)(["\n            @media screen and (min-width: ",") {\n              ","\n            }\n          "])),(function(e){return e.theme.breakpoints[t]}),r)}}));n.a=h},95:function(e,n,r){"use strict";var t,a,o,i=r(13),s=r(19),c=r(34),l=r(10),d=l.d.p.attrs((function(e){var n=e.to,r=e.scrollto,t=e.href;return{as:n?r?c.Link:s.b:t&&"a"}}))(t||(t=Object(i.a)(["\n  padding: ",";\n  margin: ",";\n  width: ",";\n  height: ",";\n\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  border-radius: ",";\n\n  font-weight: ",";\n  font-size: ",";\n  text-align: ",";\n\n  cursor: ",";\n\n  display: ",";\n\n  word-break: ",";\n  text-decoration: ",";\n\n  ","\n  ",";\n"])),(function(e){var n=e.p;return n||"12px"}),(function(e){var n=e.m;return n&&n}),(function(e){var n=e.w;return n&&n}),(function(e){var n=e.h;return n&&n}),(function(e){var n=e.color;return e.theme.colors[n]||n&&n}),(function(e){var n=e.bg;return e.theme.colors[n]||n&&n}),(function(e){var n=e.opacity;return n&&n}),(function(e){var n=e.radius;return n&&n}),(function(e){var n=e.bold,r=e.weight;return r||(n?"600":"400")}),(function(e){var n=e.font;return n||"12px"}),(function(e){var n=e.align;return n&&n}),(function(e){return e.pointer&&"pointer"}),(function(e){var n=e.display,r=e.inline;return n||r&&"inline"}),(function(e){return e.breakword&&"break-all"}),(function(e){return e.underline&&"underline"}),(function(e){return!e.multiline&&Object(l.c)(a||(a=Object(i.a)(["\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "])))}),(function(e){var n=e.flexalign,r=e.justify,t=e.align,a=e.inline;return n&&Object(l.c)(o||(o=Object(i.a)(["\n      display: ",";\n      justify-content: ",";\n      align-items: ",";\n    "])),a?"inline-flex":"flex",r&&r,t||"center")}));n.a=d},96:function(e,n,r){"use strict";var t,a,o,i,s=r(13),c=r(19),l=r(34),d=r(10),u=d.d.button.attrs((function(e){var n=e.to,r=e.scrollto;return{as:n&&(r?l.Link:c.b)}}))(t||(t=Object(s.a)(["\n  --bg: ",";\n  --color: ",";\n\n  background-color: var(--bg);\n  color: var(--color);\n\n  padding: 12px;\n  min-height: 24px;\n  /* min-width: 48px; */\n  font-size: 12px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n\n  /* appearance: none; */\n  border: none;\n  outline: none;\n\n  &:hover,\n  &:active {\n    /* filter: brightness(0.8); */\n  }\n\n  // inlines\n  padding: ",";\n  margin: ",";\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  font-size: ",";\n  font-weight: ",";\n  border-radius: ",";\n\n  // customs\n  ","\n\n  ","\n\n  ","\n"])),(function(e){var n=e.bg;return e.theme.colors[n]||n||"grey"}),(function(e){var n=e.color;return e.theme.colors[n]||n||"white"}),(function(e){var n=e.p;return n&&n}),(function(e){var n=e.m;return n&&n}),(function(e){var n=e.w;return n&&n}),(function(e){var n=e.max;return n&&n}),(function(e){var n=e.min;return n&&n}),(function(e){var n=e.font;return n&&n}),(function(e){var n=e.bold,r=e.weight;return r||n&&"600"}),(function(e){return e.radius||"4px"}),(function(e){return e.full&&Object(d.c)(a||(a=Object(s.a)(["\n      width: 100%;\n    "])))}),(function(e){return e.round&&Object(d.c)(o||(o=Object(s.a)(["\n      border-radius: 16px;\n    "])))}),(function(e){return e.outline&&Object(d.c)(i||(i=Object(s.a)(["\n      --color: ",";\n      background-color: transparent;\n      border: 1.5px solid;\n\n      &:hover,\n      &:active {\n        --bg: ",";\n        color: var(--bg);\n        background-color: var(--color);\n        border: none;\n      }\n    "])),(function(e){var n=e.color;return e.theme.colors[n]||n||"grey"}),(function(e){var n=e.bg;return e.theme.colors[n]||n||"white"}))}));n.a=u}}]);
//# sourceMappingURL=6.bf4bea5d.chunk.js.map