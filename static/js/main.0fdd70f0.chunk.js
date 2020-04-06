(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/loading.7d02b50b.gif"},20:function(e,t,a){e.exports=a(58)},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=(a(25),a(2)),o=(a(26),a(4)),s=a.n(o),u=a(7),m=(a(28),a(14)),d=a.n(m);a(29);function p(e){return e.msg?r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",Object.assign({className:"loading"+(e.bright?" bright":" dark"),width:"50px",src:d.a,alt:""},e)),r.a.createElement("div",{className:""},this.props.msg)):r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",Object.assign({className:"loading"+(e.bright?" bright":" dark"),width:"50px",src:d.a,alt:""},e)))}var f=a(3),v=a.n(f);function g(){var e=r.a.useState(v.a.get("verse")||{isLoading:!0}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=r.a.useState(null),o=Object(l.a)(i,2),m=o[0],d=o[1],f=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.date===(new Date).toLocaleDateString()){e.next=22;break}return c({isLoading:!0}),e.prev=2,e.next=5,fetch("https://cors-anywhere.herokuapp.com/https://salamquran.com/en/api/v6/aya/day");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error(t);case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(2),c({isLoading:!1}),d("The Quran API is unreachable right now"),e.abrupt("return");case 15:return e.next=17,t.json();case 17:n=e.sent.result.translate,r={reference:n.sura+":"+n.aya,sura:n.sura,aya:n.aya,text:n.text,date:n.text===(new Date).toLocaleDateString(),isLoading:!1},d(null),v.a.set("verse",r),c(r);case 22:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),r.a.createElement("div",{className:"card quran-card"},m&&!a.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"error"},m)):a.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"reference",style:{width:150}},r.a.createElement("div",{className:"filler"})),r.a.createElement(p,{dark:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"reference"},"Quran, ",a.reference),r.a.createElement("div",{className:"verse"},'"',a.text,'"')),r.a.createElement("div",{className:"more"},m&&!a.isLoading?r.a.createElement("button",{className:"more",onClick:f,style:{width:"120px",textAlign:"center"}},"Retry"):a.isLoading?r.a.createElement("button",{className:"more",style:{width:"120px",textAlign:"center"}},r.a.createElement("span",{className:"filler"})):r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://quran.com/".concat(a.sura,"/").concat(a.aya),className:"more clickable"},"Continue Reading")))}a(41);function h(e){return r.a.createElement("div",{className:"card general-card "+(e.onClick?" clickable":""),onClick:e.onClick},e.text)}var E=a(9),y=a(5),b=a(1),O={hasInitialised:v.a.get("hasInitialised"),preferences:v.a.get("preferences"),stati:v.a.get("stati"),timings:v.a.get("timings")},k=Object(n.createContext)(O),j=k.Provider,N=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){switch(t.type){case"INITIALISE_SUCCESS":return Object(b.a)({},e,{hasInitialised:!0,preferences:t.payload.preferences,stati:t.payload.stati});case"SYNC_STATI_DATE":case"EDIT_PRAYER_STATUS":return Object(b.a)({},e,{stati:t.payload.stati});case"EDIT_PREFERENCES":return Object(b.a)({},e,{preferences:t.payload.preferences});case"SET_TIMINGS":return Object(b.a)({},e,{timings:t.payload.timings});default:return e}}),O),c=Object(l.a)(a,2),i=c[0],o=c[1];return r.a.createElement(j,{value:{state:i,dispatch:o}},t)},S=(a(42),function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length-1,r=Object(E.a)(t);r[n]=Object(b.a)({},r[n],{},a),e({type:"EDIT_PRAYER_STATUS",payload:{stati:r}}),v.a.set("stati",r)}),w=function(e,t){t.Zuhr=t.Dhuhr,e({type:"SET_TIMINGS",payload:{timings:t}}),v.a.set("timings",t)},C=["Fajr","Zuhr","Asr","Maghrib","Isha"];function I(e){var t=Object(n.useContext)(k),a=t.dispatch,c=t.state.stati,i=["S","M","T","W","T","F","S"],l=["o","d","m","n"];(new Date).toLocaleDateString()!==c[c.length-1].date&&function(e,t){var a=Object(E.a)(t);a.shift(),a.push({Fajr:"n",Zuhr:"n",Asr:"n",Maghrib:"n",Isha:"n",date:(new Date).toLocaleDateString()}),e({type:"SYNC_STATI_DATE",payload:{stati:a}}),v.a.set("stati",a)}(a,c);var o=C.map((function(e){return c.map((function(t){return t[e]}))})),s=(new Date).getDay(),u=i.splice(s+1);return i=[].concat(Object(E.a)(u),Object(E.a)(i)),r.a.createElement("div",{className:"card weekly-card dark"},r.a.createElement("div",{className:"heading"},"This Week"),r.a.createElement("div",{className:"grid"},r.a.createElement("span",null),i.map((function(e,t){return r.a.createElement("span",{key:e+"."+t,className:"day"+(t===i.length-1?" today primary":"")},e)})),o.map((function(e){var t=C[o.indexOf(e)];return[r.a.createElement("span",{className:"prayerName",key:t},r.a.createElement("span",null,t)),e.map((function(e,n){return r.a.createElement("span",{key:t+"."+n,className:"status "+e,onClick:function(){return function(e,t,n){t=l[(l.indexOf(t)+1)%l.length],S(a,c,Object(y.a)({},e,t),n)}(t,e,n)}})}))]}))),r.a.createElement("div",{className:"key"},r.a.createElement("span",null,r.a.createElement("div",{className:"status o"}),"Timely"),r.a.createElement("span",null,r.a.createElement("div",{className:"status d"}),"Delayed"),r.a.createElement("span",null,r.a.createElement("div",{className:"status m"}),"Missed")))}a(43);var x=a(8),T=a.n(x);a(55);function A(e){var t=e.modalIsOpen,a=e.toggle,c=e.save,i=e.prayerState,o=Object(n.useState)(Object(b.a)({},i)),s=Object(l.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement(T.a,{isOpen:t,shouldCloseOnOverlayClick:!0,onRequestClose:function(){return a(!1)},className:"modal prayer-modal",overlayClassName:"modal-overlay prayer-modal-overlay"},r.a.createElement("div",{className:"heading"},"Record the status of",r.a.createElement("select",{value:C.indexOf(u.name),className:"slct",onChange:function(e){m(Object(b.a)({},u,{name:C[e.target.value]}))}},C.map((function(e,t){return r.a.createElement("option",{name:e,value:t,key:e},e)}))),"Prayer"),r.a.createElement("select",{name:"",id:"",value:u.status,className:"slct",onChange:function(e){m(Object(b.a)({},u,{status:e.target.value}))}},r.a.createElement("option",{value:"n"},"Not sure"),r.a.createElement("option",{value:"o"},"Timely"),r.a.createElement("option",{value:"d"},"Delayed"),r.a.createElement("option",{value:"m"},"Missed")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn primary clickable",onClick:function(){return a(!1)}},"Discard"),r.a.createElement("button",{className:"btn primary clickable",onClick:function(){c(u),a(!1)}},"Save"))))}function D(e){var t=e.currTime,a=Object(n.useState)(!1),c=Object(l.a)(a,2),i=c[0],o=c[1],m=Object(n.useState)({}),d=Object(l.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)(!0),g=Object(l.a)(v,2),h=g[0],E=g[1],O=Object(n.useContext)(k),j=O.state,N=j.preferences,I=N.location,x=N.calcMethod,T=j.timings,D=j.stati,L=O.dispatch;Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,c,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T&&(null===T||void 0===T?void 0:T.date)===(new Date).toLocaleDateString()&&(null===T||void 0===T||null===(t=T.location)||void 0===t?void 0:t.city)===I.city&&(null===T||void 0===T||null===(a=T.location)||void 0===a?void 0:a.country)===I.country){e.next=18;break}return E(!0),n=I.city,r=I.country,e.next=5,fetch("https://api.aladhan.com/v1/timingsByCity?city=".concat(n,"&country=").concat(r,"&method=").concat(x,"&school=1"));case 5:if((c=e.sent).ok){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,c.json();case 10:i=e.sent,(l=i.data.timings).location=Object(b.a)({},I),l.date=(new Date).toLocaleDateString(),w(L,l),E(!1),e.next=19;break;case 18:E(!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x,L,I,T]);return r.a.createElement(r.a.Fragment,null,h?r.a.createElement("div",{className:"prayers-container"},C.map((function(e,t){return r.a.createElement(M,{status:"n",loading:!0,key:e})}))):r.a.createElement("div",{className:"prayers-container"},C.map((function(e,a){return r.a.createElement(M,{key:e,name:e,time:T[e],currTime:t,status:D[D.length-1][e],onClick:function(){f({name:e,status:D[D.length-1][e]}),o(!0)}})}))),i?r.a.createElement(A,{save:function(e){S(L,D,Object(y.a)({},e.name,e.status))},prayerState:p,modalIsOpen:i,toggle:o}):null)}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"00:00",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00:01";return parseInt(e.split(":")[0])>parseInt(t.split(":")[0])||parseInt(e.split(":")[0])===parseInt(t.split(":")[0])&&parseInt(e.split(":")[1])>parseInt(t.split(":")[1])}function M(e){var t=L(e.currTime,e.time),a={o:function(t){return"You prayed ".concat(e.name," Prayer on time")},m:function(t){return"You missed ".concat(e.name," Prayer")},n:function(t){return"".concat(e.time," Onwards ").concat(e.name," Prayer")},d:function(t){return"You prayed ".concat(e.name," Prayer at a delayed time")}};return r.a.createElement("button",{onClick:t?e.onClick:null,className:"card prayer-card "+e.status+(t?"":" future")},e.loading?r.a.createElement("span",{className:"filler"}):a[e.status](e))}T.a.setAppElement("body");a(56),a(57);var P=["Shia Ithna-Ansari","University of Islamic Sciences, Karachi","Islamic Society of North America","Muslim World League","Umm Al-Qura University, Makkah","Egyptian General Authority of Survey","Institute of Geophysics, University of Tehran","Gulf Region","Kuwait","Qatar","Majlis Ugama Islam Singapura, Singapore","Union Organization islamic de France","Diyanet \u0130\u015fleri Ba\u015fkanl\u0131\u011f\u0131, Turkey","Spiritual Administration of Muslims of Russia"];function R(){var e,t=Object(n.useContext)(k).dispatch,a=Object(n.useState)({calcMethod:0,location:void 0,theme:"dark"}),c=Object(l.a)(a,2),i=c[0],o=c[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),p=d[0],f=d[1],g=function(e){o(Object(b.a)({},i,{},e))};return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,c,i,l,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),g({location:t.coords}),a=t.coords,n=a.latitude,r=a.longitude,c="https://geocode.xyz/".concat(n,",").concat(r,"?json=1"),e.next=6,fetch(c);case 6:return i=e.sent,e.next=9,i.json();case 9:l=e.sent,o=l.city,u=l.country,g({location:Object(b.a)({},t.coords,{city:o,country:u})}),f(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();navigator.geolocation.getCurrentPosition(e)}),[]),r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"card register-card"},r.a.createElement("div",{className:"heading"},"Prayer Journal",r.a.createElement("br",null)),r.a.createElement("p",null,"Before we begin, select a Prayer times calculation method and give access to your location"),r.a.createElement("select",{onChange:function(e){return g({calcMethod:e.target.value})},value:i.calcMethod},P.map((function(e,t){return r.a.createElement("option",{value:t},e)}))),r.a.createElement("div",null,p?r.a.createElement("button",{className:"dormant"},"loading.."):r.a.createElement("button",{className:"dormant"},(null===(e=i.location)||void 0===e?void 0:e.city)?i.location.city+", "+i.location.country:"Give Location Access"),i.location?r.a.createElement("button",{onClick:function(){return function(e,t){v.a.set("hasInitialised",!0),v.a.set("preferences",Object(b.a)({},t));for(var a=[],n={Fajr:"n",Zuhr:"n",Asr:"n",Maghrib:"n",Isha:"n"},r=6;r>=0;r--)a.push(Object(b.a)({},n));a[a.length-1].date=(new Date).toLocaleDateString(),v.a.set("stati",a),e({type:"INITIALISE_SUCCESS",source:"reg.js",payload:{preferences:t,stati:a}})}(t,i)}},"Save"):null)))}function _(e){var t=e.modalIsOpen,a=e.toggle,c=Object(n.useContext)(k),i=c.dispatch,o=c.state.preferences,s=Object(n.useState)(o),u=Object(l.a)(s,2),m=u[0],d=u[1],p=function(e){d(Object(b.a)({},m,Object(y.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(T.a,{isOpen:t,shouldCloseOnOverlayClick:!0,onRequestClose:function(){return a(!1)},className:"modal settings-modal",overlayClassName:"modal-overlay settings-modal-overlay"},r.a.createElement("div",{className:"heading"},"Preferences"),r.a.createElement("div",{className:"preference"},r.a.createElement("label",null,"Timing"),r.a.createElement("select",{className:"slct input",name:"calcMethod",onChange:p,value:m.calcMethod},P.map((function(e,t){return r.a.createElement("option",{value:t,key:t},e)})))),r.a.createElement("div",{className:"preference"},r.a.createElement("label",null,"Theme"),r.a.createElement("select",{className:"slct input",name:"theme",onChange:p,value:m.theme},r.a.createElement("option",{value:"dark"},"Dark"),r.a.createElement("option",{value:"light"},"Light"),r.a.createElement("option",{value:"auto"},"Auto"))),r.a.createElement("button",{className:"btn primary clickable",onClick:function(){return a(!1)}},"Discard"),r.a.createElement("button",{className:"btn primary clickable",onClick:function(){!function(e,t){e({type:"EDIT_PREFERENCES",payload:{preferences:Object(b.a)({},t)}}),v.a.set("preferences",t)}(i,m),a(!1)}},"Save")))}T.a.setAppElement("body");var U=function(){var e,t=Object(n.useContext)(k).state,a=t.hasInitialised,c=t.preferences,i=t.timings,o=r.a.useState(!1),s=Object(l.a)(o,2),u=s[0],m=s[1];if(!a)return r.a.createElement(R,null);var d=(new Date).getHours()+":"+(new Date).getMinutes();return e="auto"===c.theme?L(d,null===i||void 0===i?void 0:i.Sunrise)&&L(null===i||void 0===i?void 0:i.Sunset,d)?"light":"dark":c.theme,r.a.createElement("div",{className:"App ".concat(e||"dark","-theme")},r.a.createElement("div",{style:{color:"white"},id:"header"},r.a.createElement("h1",null,"Prayer Journal")),u?r.a.createElement(_,{toggle:m,modalIsOpen:u}):null,r.a.createElement("div",{className:"main"},r.a.createElement(I,null),r.a.createElement(D,{calcMethod:c.calcMethod,currTime:d,location:c.location})),r.a.createElement("div",{className:"side"},r.a.createElement(h,{text:c.location.city+", "+c.location.country}),r.a.createElement(h,{text:"Preferences",onClick:function(){return m(!0)}}),r.a.createElement(g,null)))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null,r.a.createElement(U,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/prayerjournal",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/prayerjournal","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.0fdd70f0.chunk.js.map