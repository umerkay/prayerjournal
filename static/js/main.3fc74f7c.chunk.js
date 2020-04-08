(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/loading.7d02b50b.gif"},24:function(e,a,t){e.exports=t(65)},29:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),i=(t(29),t(3)),o=(t(30),t(7)),s=t.n(o),u=t(10),m=(t(32),t(18)),d=t.n(m);t(33);function p(e){return e.msg?r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",{className:"loading"+(e.bright?" bright":" dark"),width:"50px",src:d.a,alt:""}),r.a.createElement("div",{className:""},this.props.msg)):r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",{className:"loading"+(e.bright?" bright":" dark"),width:"50px",src:d.a,alt:""}))}var f=t(4),v=t.n(f),E=t(6),h=t(5);function g(){var e=r.a.useState(v.a.get("verse")||{isLoading:!0}),a=Object(i.a)(e,2),t=a[0],c=a[1],l=r.a.useState(null),o=Object(i.a)(l,2),m=o[0],d=o[1],f=function(){var e=Object(u.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.date===(new Date).toLocaleDateString()){e.next=22;break}return c({isLoading:!0}),e.prev=2,e.next=5,fetch("https://cors-anywhere.herokuapp.com/https://salamquran.com/en/api/v6/aya/day");case 5:if((a=e.sent).ok){e.next=8;break}throw new Error(a);case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(2),c({isLoading:!1}),d("The Quran API is unreachable right now"),e.abrupt("return");case 15:return e.next=17,a.json();case 17:n=e.sent.result.translate,r={reference:n.sura+":"+n.aya,sura:n.sura,aya:n.aya,text:n.text,date:(new Date).toLocaleDateString(),isLoading:!1},d(null),v.a.set("verse",r),c(r);case 22:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),r.a.createElement("div",{className:"card quran-card"},m&&!t.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"error"},m)):t.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"reference",style:{width:150}},r.a.createElement("div",{className:"filler"})),r.a.createElement(p,{dark:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"reference"},"Quran, ",t.reference),r.a.createElement("div",{className:"verse"},'"',t.text,'"')),r.a.createElement("div",{className:"more"},m&&!t.isLoading?r.a.createElement("button",{className:"more",onClick:f,style:{width:"120px",textAlign:"center"}},"Retry"):t.isLoading?r.a.createElement("button",{className:"more",style:{width:"120px",textAlign:"center"}},r.a.createElement("span",{className:"filler"})):r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://quran.com/".concat(t.sura,"/").concat(t.aya),className:"more clickable"},r.a.createElement("span",null," ",r.a.createElement(h.a,{icon:E.a})))))}t(49);function y(e){return r.a.createElement("div",{className:"card general-card "+(e.onClick?" clickable ":"")+(e.className||""),onClick:e.onClick},r.a.createElement("span",null,e.children),r.a.createElement("span",null,e.text))}var b=t(12),N=t(8),k=t(2),O={hasInitialised:v.a.get("hasInitialised"),preferences:v.a.get("preferences"),stati:v.a.get("stati"),timings:v.a.get("timings")},j=Object(n.createContext)(O),S=j.Provider,w=function(e){var a=e.children,t=Object(n.useReducer)((function(e,a){switch(a.type){case"INITIALISE_SUCCESS":return Object(k.a)({},e,{hasInitialised:!0,preferences:a.payload.preferences,stati:a.payload.stati});case"INITIALISE_UNDO":return Object(k.a)({},e,{hasInitialised:!1});case"SYNC_STATI_DATE":case"EDIT_PRAYER_STATUS":return Object(k.a)({},e,{stati:a.payload.stati});case"EDIT_PREFERENCES":return Object(k.a)({},e,{preferences:a.payload.preferences});case"SET_TIMINGS":return Object(k.a)({},e,{timings:a.payload.timings});default:return e}}),O),c=Object(i.a)(t,2),l=c[0],o=c[1];return r.a.createElement(S,{value:{state:l,dispatch:o}},a)},C=(t(50),function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.length-1,r=Object(b.a)(a);r[n]=Object(k.a)({},r[n],{},t),e({type:"EDIT_PRAYER_STATUS",payload:{stati:r}}),v.a.set("stati",r)}),I=function(e,a){a.Zuhr=a.Dhuhr,e({type:"SET_TIMINGS",payload:{timings:a}}),v.a.set("timings",a)},x=["Fajr","Zuhr","Asr","Maghrib","Isha"];function A(e){var a=Object(n.useContext)(j),t=a.dispatch,c=a.state.stati,l=["S","M","T","W","T","F","S"],i=["o","d","m","n"];(new Date).toLocaleDateString()!==c[c.length-1].date&&function(e,a){var t=Object(b.a)(a);t.shift(),t.push({Fajr:"n",Zuhr:"n",Asr:"n",Maghrib:"n",Isha:"n",date:(new Date).toLocaleDateString()}),e({type:"SYNC_STATI_DATE",payload:{stati:t}}),v.a.set("stati",t)}(t,c);var o=x.map((function(e){return c.map((function(a){return a[e]}))})),s=(new Date).getDay(),u=l.splice(s+1);return l=[].concat(Object(b.a)(u),Object(b.a)(l)),r.a.createElement("div",{className:"card weekly-card dark"},r.a.createElement("div",{className:"heading"}," ",r.a.createElement("span",null,r.a.createElement(h.a,{icon:E.b}))," ",r.a.createElement("span",null,"This Week")),r.a.createElement("div",{className:"grid"},r.a.createElement("span",null),l.map((function(e,a){return r.a.createElement("span",{key:e+"."+a,className:"day"+(a===l.length-1?" today primary":"")},e)})),o.map((function(e){var a=x[o.indexOf(e)];return[r.a.createElement("span",{className:"prayerName",key:a},r.a.createElement("span",null,a)),e.map((function(e,n){return r.a.createElement("span",{key:a+"."+n,className:"status "+e,onClick:function(){return function(e,a,n){a=i[(i.indexOf(a)+1)%i.length],C(t,c,Object(N.a)({},e,a),n)}(a,e,n)}})}))]}))),r.a.createElement("div",{className:"key"},r.a.createElement("span",null,r.a.createElement("div",{className:"status o dormant"}),"Timely"),r.a.createElement("span",null,r.a.createElement("div",{className:"status d dormant"}),"Delayed"),r.a.createElement("span",null,r.a.createElement("div",{className:"status m dormant"}),"Missed")))}t(51);var T=t(11),D=t.n(T);t(61);function M(e){var a=e.modalIsOpen,t=e.toggle,c=e.save,l=e.prayerState,o=Object(n.useState)(Object(k.a)({},l)),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(!1),p=Object(i.a)(d,2),f=p[0],v=p[1];return r.a.createElement("div",null,r.a.createElement(D.a,{isOpen:a,shouldCloseOnOverlayClick:!0,onRequestClose:function(){return t(!1)},className:"modal prayer-modal",overlayClassName:"modal-overlay prayer-modal-overlay"},r.a.createElement("div",{className:"heading"},"Record the status of",r.a.createElement("select",{value:x.indexOf(u.name),className:"slct",onChange:function(e){m(Object(k.a)({},u,{name:x[e.target.value]})),v(!0)}},x.map((function(e,a){return r.a.createElement("option",{name:e,value:a,key:e},e)}))),"Prayer"),r.a.createElement("select",{name:"",id:"",value:u.status,className:"slct",onChange:function(e){m(Object(k.a)({},u,{status:e.target.value})),v(!0)}},r.a.createElement("option",{value:"n"},"Not sure"),r.a.createElement("option",{value:"o"},"Timely"),r.a.createElement("option",{value:"d"},"Delayed"),r.a.createElement("option",{value:"m"},"Missed")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn primary clickable",onClick:function(){return t(!1)}},r.a.createElement(h.a,{className:"icon",icon:E.f})," ",r.a.createElement("span",null,"Discard")),r.a.createElement("button",{className:"btn"+(f?" primary clickable":""),onClick:f?function(){c(u),t(!1)}:null},r.a.createElement(h.a,{className:"icon",icon:E.e})," ",r.a.createElement("span",null,"Save")))))}function L(e){var a=e.currTime,t=Object(n.useState)(!1),c=Object(i.a)(t,2),l=c[0],o=c[1],m=Object(n.useState)({}),d=Object(i.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)(!0),E=Object(i.a)(v,2),h=E[0],g=E[1],y=Object(n.useContext)(j),b=y.state,O=b.preferences,S=O.location,w=O.calcMethod,A=O.timeFormat,T=b.timings,D=b.stati,L=y.dispatch;Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a,t,n,r,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w===(null===T||void 0===T?void 0:T.calcMethod)&&T&&(null===T||void 0===T?void 0:T.date)===(new Date).toLocaleDateString()&&(null===T||void 0===T||null===(a=T.location)||void 0===a?void 0:a.city)===S.city&&(null===T||void 0===T||null===(t=T.location)||void 0===t?void 0:t.country)===S.country){e.next=19;break}return g(!0),n=S.city,r=S.country,e.next=5,fetch("https://api.aladhan.com/v1/timingsByCity?city=".concat(n,"&country=").concat(r,"&method=").concat(w,"&school=1"));case 5:if((c=e.sent).ok){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,c.json();case 10:l=e.sent,(i=l.data.timings).location=Object(k.a)({},S),i.date=(new Date).toLocaleDateString(),i.calcMethod=w,I(L,i),g(!1),e.next=20;break;case 19:g(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[w,L,S,T]);return r.a.createElement(r.a.Fragment,null,h?r.a.createElement("div",{className:"prayers-container"},x.map((function(e,a){return r.a.createElement(_,{status:"n",loading:!0,key:e})}))):r.a.createElement("div",{className:"prayers-container"},x.map((function(e,t){return r.a.createElement(_,{key:e,name:e,time:"12"===A?R(T[e]):T[e],timePassed:P(a,T[e]),status:D[D.length-1][e],onClick:function(){f({name:e,status:D[D.length-1][e]}),o(!0)}})}))),l?r.a.createElement(M,{save:function(e){C(L,D,Object(N.a)({},e.name,e.status))},prayerState:p,modalIsOpen:l,toggle:o}):null)}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"00:00",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00:01";return parseInt(e.split(":")[0])>parseInt(a.split(":")[0])||parseInt(e.split(":")[0])===parseInt(a.split(":")[0])&&parseInt(e.split(":")[1])>parseInt(a.split(":")[1])}function R(e){return(e=e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[e]).length>1&&((e=e.slice(1))[5]=+e[0]<12?" AM":" PM",e[0]=+e[0]%12||12),e.join("")}function _(e){var a={o:function(a){return"You prayed ".concat(e.name," Prayer on time")},m:function(a){return"You missed ".concat(e.name," Prayer")},n:function(a){return e.timePassed,"".concat(e.time," Onwards ").concat(e.name," Prayer")},d:function(a){return"You prayed ".concat(e.name," Prayer at a delayed time")}};return r.a.createElement("button",{onClick:e.timePassed?e.onClick:null,className:"card prayer-card "+e.status+(e.timePassed?"":" future")},e.loading?r.a.createElement("span",{className:"filler"}):a[e.status](e))}D.a.setAppElement("body");t(62),t(63);var F=["Shia Ithna-Ansari","University of Islamic Sciences, Karachi","Islamic Society of North America","Muslim World League","Umm Al-Qura University, Makkah","Egyptian General Authority of Survey","Institute of Geophysics, University of Tehran","Gulf Region","Kuwait","Qatar","Majlis Ugama Islam Singapura, Singapore","Union Organization islamic de France","Diyanet \u0130\u015fleri Ba\u015fkanl\u0131\u011f\u0131, Turkey","Spiritual Administration of Muslims of Russia"];function U(){var e,a=Object(n.useContext)(j).dispatch,t=Object(n.useState)({calcMethod:0,location:void 0,theme:"dark"}),c=Object(i.a)(t,2),l=c[0],o=c[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),p=d[0],f=d[1],E=function(e){o(Object(k.a)({},l,{},e))};return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(a){var t,n,r,c,l,i,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),E({location:a.coords}),t=a.coords,n=t.latitude,r=t.longitude,c="https://geocode.xyz/".concat(n,",").concat(r,"?json=1"),e.next=6,fetch(c);case 6:return l=e.sent,e.next=9,l.json();case 9:i=e.sent,o=i.city,u=i.country,E({location:Object(k.a)({},a.coords,{city:o,country:u})}),f(!1);case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();navigator.geolocation.getCurrentPosition(e)}),[]),r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"card register-card"},r.a.createElement("div",{className:"heading"},"Prayer Journal",r.a.createElement("br",null)),r.a.createElement("p",null,"Before we begin, select a Prayer times calculation method and give access to your location"),r.a.createElement("select",{onChange:function(e){return E({calcMethod:e.target.value})},value:l.calcMethod},F.map((function(e,a){return r.a.createElement("option",{value:a},e)}))),r.a.createElement("div",null,p?r.a.createElement("button",{className:"dormant"},"loading.."):r.a.createElement("button",{className:"dormant"},(null===(e=l.location)||void 0===e?void 0:e.city)?l.location.city+", "+l.location.country:"Give Location Access"),l.location?r.a.createElement("button",{className:"btn primary clickable",onClick:function(){return function(e,a){v.a.set("hasInitialised",!0),v.a.set("preferences",Object(k.a)({},a));for(var t=[],n={Fajr:"n",Zuhr:"n",Asr:"n",Maghrib:"n",Isha:"n"},r=6;r>=0;r--)t.push(Object(k.a)({},n));t[t.length-1].date=(new Date).toLocaleDateString(),v.a.set("stati",t),e({type:"INITIALISE_SUCCESS",source:"reg.js",payload:{preferences:a,stati:t}})}(a,l)}},"Save"):null)))}function W(e){var a=e.modalIsOpen,t=e.toggle,c=Object(n.useContext)(j),l=c.dispatch,o=c.state.preferences,s=Object(n.useState)(o),u=Object(i.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(!1),f=Object(i.a)(p,2),g=f[0],y=f[1],b=function(e){y(!0),d(Object(k.a)({},m,Object(N.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(D.a,{isOpen:a,shouldCloseOnOverlayClick:!0,onRequestClose:function(){return t(!1)},className:"modal settings-modal",overlayClassName:"modal-overlay settings-modal-overlay"},r.a.createElement("div",{className:"preference"},r.a.createElement("label",null,"Data"),r.a.createElement("button",{className:"btn clickable primary",onClick:function(){window.confirm("Are you sure you want to delete all data? This data will not be recoverable")&&function(e){e({type:"INITIALISE_UNDO"}),v.a.clearAll(),window.location.reload()}(l)}},"Clear All Data")),r.a.createElement("div",{className:"preference"},r.a.createElement("label",null,"Timing"),r.a.createElement("select",{className:"slct input",name:"calcMethod",onChange:b,value:m.calcMethod},F.map((function(e,a){return r.a.createElement("option",{value:a,key:a},e)})))),r.a.createElement("div",{className:"preference"},r.a.createElement("label",null,"Theme"),r.a.createElement("select",{className:"slct input",name:"theme",onChange:b,value:m.theme},r.a.createElement("option",{value:"dark"},"Dark"),r.a.createElement("option",{value:"light"},"Light"),r.a.createElement("option",{value:"auto"},"Auto"))),r.a.createElement("div",{className:"preference"},r.a.createElement("label",null,"Format"),r.a.createElement("select",{className:"slct input",name:"timeFormat",onChange:b,value:m.timeFormat},r.a.createElement("option",{value:"24"},"24 Hour Clock"),r.a.createElement("option",{value:"12"},"12 Hour Clock"))),r.a.createElement("div",{className:"spacer"}),r.a.createElement("button",{className:"btn primary clickable",onClick:function(){return t(!1)}},r.a.createElement(h.a,{className:"icon",icon:E.f})," ",r.a.createElement("span",null,"Discard")),r.a.createElement("button",{className:"btn"+(g?" primary clickable":""),onClick:g?function(){!function(e,a){e({type:"EDIT_PREFERENCES",payload:{preferences:Object(k.a)({},a)}}),v.a.set("preferences",a)}(l,m),t(!1)}:null},r.a.createElement(h.a,{className:"icon",icon:E.e})," ",r.a.createElement("span",null,"Save"))))}D.a.setAppElement("body");t(64);function Y(e){return r.a.createElement("div",{id:"header-mobile"},e.children)}var G=function(){var e,a=Object(n.useContext)(j).state,t=a.hasInitialised,c=a.preferences,l=a.timings,o=r.a.useState(!1),s=Object(i.a)(o,2),u=s[0],m=s[1];if(!t)return r.a.createElement(U,null);var d=(new Date).getHours()+":"+(new Date).getMinutes();return e="auto"===c.theme?P(d,null===l||void 0===l?void 0:l.Sunrise)&&P(null===l||void 0===l?void 0:l.Sunset,d)?"light":"dark":c.theme,r.a.createElement("div",{className:"App ".concat(e||"dark","-theme")},r.a.createElement(Y,null,r.a.createElement(h.a,{icon:E.c,className:"icon",onClick:function(){return m(!0)}}),r.a.createElement("div",{className:"text"},"Prayer Journal")),u?r.a.createElement(W,{toggle:m,modalIsOpen:u}):null,r.a.createElement("div",{className:"main"},r.a.createElement(A,null),r.a.createElement(L,{calcMethod:c.calcMethod,currTime:d,location:c.location})),r.a.createElement("div",{className:"side"},r.a.createElement(g,null),r.a.createElement(y,{text:c.location.city+", "+c.location.country},r.a.createElement(h.a,{icon:E.d})),r.a.createElement(y,{className:"only-desktop",text:"Preferences",onClick:function(){return m(!0)}},r.a.createElement(h.a,{icon:E.c}))))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null,r.a.createElement(G,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/prayerjournal",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/prayerjournal","/service-worker.js");q?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(a,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.3fc74f7c.chunk.js.map