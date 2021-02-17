(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var a,c,s=n(0),r=n(1),l=n.n(r),i=n(30),o=n.n(i),d=n(21),u=n(7),b=function(){return Object(s.jsxs)("div",{className:"page-wrapper with-navbar",children:[Object(s.jsxs)("nav",{className:"navbar",children:[Object(s.jsx)("span",{className:"navbar-brand anchor",children:"Ocean Memory Sonification"}),Object(s.jsx)("ul",{className:"navbar-nav d-none d-md-flex",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.b,{to:"/workstation",className:"nav-link",children:"Workstation"})})})]}),Object(s.jsx)("div",{className:"content-wrapper",children:"Homepage"})]})},j=n(2),f=n(8),m=n.n(f),h=n(17),g=n(10),O=n(18),p=n.n(O),x=n(5),v="UPLOAD_FILE",N="ADD_TRACK",w="SET_SETTINGS",y="SET_GLOBAL_SETTINGS",k="FOCUS_WINDOW",S="DELETE_TRACK",C="SET_DATA",M={files:[],tracks:[],globalSettings:{bpm:120,key:"C",timesig:[4,4],dark:["dark-mode","not-set"].includes(p.a.getPreferredMode()),channels:[]},windows:[]},E={mute:!1,volume:100,pan:0,continuous:!1,channel:[]},T={continuous:!1,tracks:[],features:[{name:"Volume",controller:-1},{name:"Pitch",controller:-1},{name:"Pan",controller:-1},{name:"Tempo",controller:-1}]},L=n(9),A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return e.some((function(e){return isNaN(e)}))?null:e.map((function(e){switch(t){case"logistic":return(n-a)/(1+Math.pow(Math.E,-1*(e-c)))-1+(n+a)/2;case"tanh":return(n-a)*Math.tanh(e-c)+(n+a)/2;case"arctan":return 2*(n-a)/Math.PI*Math.atan(e-c)+(n+a)/2;case"sign":return(n-a)*Math.sign(e-c)+(n+a)/2;default:return e}}))},F=function(e){var t=e.split(/\n/g),n=t[t.length/2].split(",").length;return(t=t.filter((function(e){return e.split(",").length===n}))).join("\n")},B=function(e){return e.forEach((function(e){Object.keys(e).forEach((function(t){isNaN(e[t])||(e[t]=parseFloat(e[t]))}))})),e},R=function(e){var t=0;return e.forEach((function(e){return t+=e})),t/e.length},D=function(){var e=Object(h.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=B,e.next=3,L.c(F(n));case 3:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.abrupt("return",{type:v,payload:{name:t,data:a}});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(e,t){return{type:w,payload:{id:e,settings:t}}},G=function(e){return{type:y,payload:e}},I=function(e){return{type:k,payload:e}},P=Object(x.b)((function(e){return{dark:e.globalSettings.dark}}),(function(e){return{uploadFile:function(){var t=Object(h.a)(m.a.mark((function t(n,a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,D(n,a);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),setGlobalSettings:function(t){return e(G(t))}}}))((function(e){var t=e.uploadFile,n=e.setGlobalSettings,a=e.dark,c=Object(r.createRef)(),l=Object(r.createRef)(),i=Object(r.createRef)(),o=Object(r.useState)({sidebar:!0}),u=Object(g.a)(o,2),b=u[0],f=u[1],O=function(){var e=Object(h.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.target.files.length){e.next=13;break}return a=URL.createObjectURL(n.target.files[0]),e.t0=t,e.t1=n.target.files[0].name,e.next=6,fetch(a);case 6:return e.next=8,e.sent.text();case 8:return e.t2=e.sent,e.next=11,(0,e.t0)(e.t1,e.t2);case 11:n.target.value="",c.current.click();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("nav",{className:"navbar",children:[Object(s.jsx)("span",{className:"navbar-brand anchor",children:"Workstation"}),Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsxs)("li",{className:"nav-item dropdown",children:[Object(s.jsx)("span",{className:"nav-link anchor","data-toggle":"dropdown",id:"nav-dropdown-file",ref:c,children:"File"}),Object(s.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"nav-dropdown-file",children:[Object(s.jsxs)("label",{htmlFor:"upload",className:"dropdown-item",children:[Object(s.jsx)("input",{type:"file",id:"upload",className:"d-none",accept:"text/csv",onChange:O}),Object(s.jsx)("i",{className:"fa fa-folder-open"}),"\u2003Open"]}),Object(s.jsxs)("span",{className:"dropdown-item anchor",onClick:function(){return c.current.click()},children:[Object(s.jsx)("i",{className:"fa fa-file-export"}),"\u2003Export"]})]})]}),Object(s.jsxs)("li",{className:"nav-item dropdown",children:[Object(s.jsx)("span",{className:"nav-link anchor","data-toggle":"dropdown",id:"nav-dropdown-file",ref:l,children:"Edit"}),Object(s.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"nav-dropdown-file",children:[Object(s.jsxs)("span",{className:"dropdown-item anchor",onClick:function(){return l.current.click()},children:[Object(s.jsx)("i",{className:"fa fa-trash"}),"\u2003Delete Track"]}),Object(s.jsxs)("span",{className:"dropdown-item anchor",onClick:function(){return l.current.click()},children:[Object(s.jsx)("i",{className:"fa fa-trash"}),"\u2003Remove File"]})]})]}),Object(s.jsxs)("li",{className:"nav-item dropdown",children:[Object(s.jsx)("span",{className:"nav-link anchor","data-toggle":"dropdown",id:"nav-dropdown-file",ref:i,children:"View"}),Object(s.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"nav-dropdown-file",children:[Object(s.jsxs)("span",{className:"dropdown-item anchor",onClick:function(){i.current.click(),p.a.toggleSidebar(),f(Object(j.a)(Object(j.a)({},b),{},{sidebar:!b.sidebar}))},children:[Object(s.jsx)("i",{className:"fa fa-toggle-".concat(b.sidebar?"off":"on")}),"\u2003",b.sidebar?"Close":"Open"," file browser"]}),Object(s.jsxs)("span",{className:"dropdown-item anchor",onClick:function(){i.current.click(),p.a.toggleDarkMode(),n({dark:!a})},children:[Object(s.jsx)("i",{className:"fa fa-".concat(a?"sun":"moon")}),"\u2003Toggle ",a?"light":"dark"," mode"]})]})]})]}),Object(s.jsx)("div",{className:"navbar-content ml-auto",children:Object(s.jsxs)(d.b,{to:"/",className:"btn btn-danger",children:[Object(s.jsx)("i",{className:"fa fa-sign-out-alt"}),"\u2003Exit Workstation"]})})]})})),W=Object(x.b)((function(e){return{files:e.files}}),(function(e){return{focusWindow:function(t){return e(I(t))}}}))((function(e){var t=e.files,n=e.focusWindow,a=Object(r.useState)({content:null}),c=Object(g.a)(a,2),l=c[0],i=c[1];return Object(r.useEffect)((function(){t.length&&i(Object(j.a)(Object(j.a)({},l),{},{content:t.map((function(e){return Object(s.jsxs)("span",{"data-toggle":"modal","data-target":"modal-".concat(e.name),onClick:(t="#modal-".concat(e.name),function(){return n(t)}),className:"sidebar-link sidebar-link-with-icon anchor",children:[Object(s.jsx)("span",{className:"sidebar-icon",children:Object(s.jsx)("i",{className:"fa fa-file-csv"})}),e.name]},"anchor-".concat(e.name));var t}))}))}),[t]),Object(s.jsx)("div",{className:"sidebar",children:Object(s.jsxs)("div",{className:"sidebar-menu",children:[Object(s.jsxs)("h5",{className:"sidebar-title",children:[Object(s.jsx)("i",{className:"fa fa-folder"}),"\u2003Files"]}),Object(s.jsx)("hr",{className:"sidebar-divider"}),l.content]})})})),_=n(6),V=T.features.map((function(e){return e.name})),z={C:"C Major",c:"C Minor","C#":"C# Major","c#":"C# Minor",D:"D Major",d:"D Minor",Eb:"E&#9837; Major",eb:"E&#9837; Minor",E:"E Major",e:"E Minor",F:"F Major",f:"F Minor","F#":"F# Major","f#":"F# Minor",G:"G Major",g:"G Minor",Ab:"A&#9837; Major",ab:"A&#9837; Minor",A:"A Major",a:"A Minor",Bb:"B&#9837; Major",bb:"B&#9837; Minor",B:"B Major",b:"B Minor",chromatic:"Chromatic",whole:"Whole Tone",penta:"Pentatonic",harmonic:"Harmonic Minor",none:"None"},U={a:0,"a#":1,bb:1,b:2,cb:2,"b#":3,c:3,"c#":4,db:4,d:5,"d#":6,eb:6,e:7,fb:7,"e#":8,f:8,"f#":9,gb:9,g:10,"g#":11,ab:11},X={C:["c","d","e","f","g","a","b"],c:["c","d","eb","f","g","ab","bb"],"C#":["c#","d#","e#","f#","g#","a#","b#"],"c#":["c#","d#","e","f#","g#","a","b"],D:["d","e","f#","g","a","b","c#"],d:["d","e","f","g","a","bb","c"],Eb:["eb","f","g","ab","bb","c","d"],eb:["eb","f","gb","ab","bb","cb","db"],E:["e","f#","g#","a","b","c#","d#"],e:["e","f#","g","a","b","c","d"],F:["f","g","a","bb","c","d","e"],f:["f","g","ab","bb","c","db","eb"],"F#":["f#","g#","a#","b","c#","d#","e"],"f#":["f#","g#","a","b","c#","d","e"],G:["g","a","b","c","d","e","f#"],g:["g","a","bb","c","d","eb","f"],Ab:["ab","bb","c","db","eb","f","g"],ab:["ab","bb","cb","db","eb","fb","gb"],A:["a","b","c#","d","e","f#","g#"],a:["a","b","c","d","e","f","g"],Bb:["bb","c","d","eb","f","g","a"],bb:["bb","c","db","eb","f","gb","ab"],B:["b","c#","d#","e","f#","g#","a#"],b:["b","c#","d","e","f#","g","a"],chromatic:["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],whole:["c","d","e","f#","g#","a#"],penta:["c","d","e","g","a"],harmonic:["a","b","c","d","e","f","g#"],none:[]},Y=Object(x.b)((function(e){return{tracks:e.tracks}}),(function(e){return{setSettings:function(t,n){return e(q(t,n))},deleteTrack:function(t){return e(function(e){return{type:S,payload:e}}(t))},focusWindow:function(t){return e(I(t))}}}))((function(e){var t=e.column,n=e.i,a=e.tracks,c=e.setSettings,r=e.deleteTrack,l=e.focusWindow;return Object(s.jsxs)("details",{className:"collapse-panel",children:[Object(s.jsxs)("summary",{className:"collapse-header",children:[Object(s.jsx)("i",{className:"fa fa-cog"}),"\u2003Settings"]}),Object(s.jsxs)("div",{className:"collapse-content",children:[a[n].settings.channel.length>0?null:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h6",{className:"font-weight-semi-bold",children:"Volume"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-3",children:Object(s.jsxs)("div",{className:"custom-switch",children:[Object(s.jsx)("input",{type:"checkbox",id:"".concat(t,"-row-").concat(n,"-mute"),checked:!a[n].settings.mute,onChange:function(){return c(n,{mute:!a[n].settings.mute})}}),Object(s.jsx)("label",{htmlFor:"".concat(t,"-row-").concat(n,"-mute"),children:" "})]})}),Object(s.jsx)("div",{className:"col-9",children:Object(s.jsx)("div",{className:"h-full d-flex align-content-start",children:Object(s.jsx)("input",{disabled:a[n].settings.mute,className:a[n].settings.mute?"disabled":"",type:"range",min:"0",max:"100",defaultValue:"100",onMouseUp:function(e){return c(n,{volume:e.target.value})}})})})]}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),Object(s.jsx)("h6",{className:"font-weight-semi-bold",children:"Pan"}),Object(s.jsx)("div",{className:"h-full d-flex align-content-start",children:Object(s.jsx)("input",{type:"range",min:"-50",max:"50",value:a[n].settings.pan,onChange:function(e){return c(n,{pan:Math.abs(e.target.value)<5?0:parseInt(e.target.value)})}})}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{})]}),Object(s.jsx)("button",{onClick:function(){return l("#sonification-".concat(a[n].name,"-").concat(n))},"data-toggle":"modal","data-target":"sonification-".concat(a[n].name.replace(/\s/g,"-"),"-").concat(n),className:"btn btn-block btn-primary",children:"Sonification Settings (Advanced)"}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),Object(s.jsxs)("button",{onClick:function(){return r(n)},className:"btn btn-block btn-danger",children:[Object(s.jsx)("i",{className:"fa fa-trash"}),"\u2003Delete Track"]})]})]})})),H=-1,K=Object(x.b)((function(e){return{dark:e.globalSettings.dark,tracks:e.tracks}}))((function(e){var t=e.dark,n=e.tracks,a=e.id,c=Object(r.createRef)(),l=Object(r.createRef)(),i=Object(r.createRef)(),o=Object(r.useState)({graph:""}),d=Object(g.a)(o,2),u=d[0],b=d[1],f=n.find((function(e){return e.id===a})).data.map((function(e,t){return[t,e]}));return Object(r.useEffect)((function(){var e=getComputedStyle(c.current).width;H<0&&(H=getComputedStyle(c.current).height);var t=L.g().domain(L.d(f,(function(e){return e[0]}))).range([30,parseFloat(e.slice(0,e.length-2))]),n=L.g().domain(L.d(f,(function(e){return e[1]}))).range([parseFloat(H.slice(0,H.length-2))-20,0]);if(f.every((function(e){return!isNaN(e[1])}))){var a=L.e().x((function(e){return t(e[0])})).y((function(e){return n(e[1])}));b(Object(j.a)(Object(j.a)({},u),{},{graph:a(f)}));var s=[L.a().scale(t).ticks(0),L.b().scale(n)];L.h(l.current).call(s[0]),L.h(i.current).call(s[1])}l.current.style.transform="translateY(calc(".concat(H," - 20px))"),i.current.style.transform="translateX(30px)"}),[n]),Object(s.jsx)("svg",{className:"track-graph",ref:c,children:Object(s.jsxs)("g",{className:"graph-content",children:[Object(s.jsx)("g",{className:"x",ref:l}),Object(s.jsx)("g",{className:"y",ref:i}),Object(s.jsx)("g",{className:"line",children:Object(s.jsx)("path",{d:u.graph,fill:"none",stroke:t?"white":"black"})})]})})})),J=function(e){var t=e.i,n=e.id,a=e.column,c=e.name;return Object(s.jsxs)("div",{className:"row row-eq-spacing",children:[Object(s.jsx)("div",{className:"col-".concat(4),children:Object(s.jsxs)("div",{className:"card track",children:[Object(s.jsxs)("h2",{className:"card-title",children:["Track ",t+1," - ",a]}),Object(s.jsx)("p",{className:"text-muted",children:c}),Object(s.jsx)(Y,{column:a,i:t})]})}),Object(s.jsx)("div",{className:"col-".concat(8),children:Object(s.jsx)("div",{className:"card track overflow-scroll d-flex align-content-center",children:Object(s.jsx)(K,{id:n})})})]})},$=Object(x.b)((function(e){return{files:e.files,tracks:e.tracks}}))((function(e){var t=e.files,n=e.tracks,a=[];return n.forEach((function(e){var n,c=e.file,s=e.name,r=e.id,l=Object(_.a)(t);try{for(l.s();!(n=l.n()).done;){var i=n.value;if(i.name===c){a.push({file:i,column:s,id:r});break}}}catch(o){l.e(o)}finally{l.f()}})),Object(s.jsx)("div",{className:"content-wrapper",children:Object(s.jsx)("div",{className:"container-fluid ".concat(n.length?"":"h-full"),children:a.length?a.map((function(e,t){var n=e.file,a=e.column,c=e.id;return Object(s.jsx)(J,{i:t,id:c,column:a,name:n.name},"".concat(a,"-row-").concat(t))})):Object(s.jsx)("div",{className:"d-flex justify-content-center align-items-center h-full",children:Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("i",{className:"fa fa-music icon-lg"}),Object(s.jsxs)("p",{className:"font-size-20",children:["Nothing to see here..., open a ",Object(s.jsx)("kbd",{children:".csv"})," file to get started!"]})]})})})})})),Q=Object(x.b)((function(e){return{windows:e.windows}}),(function(e){return{focusWindow:function(t){return e(I(t))}}}))((function(e){var t=e.anchor,n=e.buttons,a=e.children,c=e.title,l=e.windows,i=e.focusWindow,o=e.onClose,d=e.width;n||(n=[]),o||(o=function(){return null});var u=Object(r.createRef)(),b=Object(r.createRef)(),f=Object(r.useRef)({x:null,y:null}),m=Object(r.useState)({x:null,y:null,offsetX:null,offsetY:null,click:!1,zIndex:-1e3}),h=Object(g.a)(m,2),O=h[0],p=h[1];Object(r.useEffect)((function(){p(Object(j.a)(Object(j.a)({},O),{},{x:b.current.offsetLeft,initial:{x:b.current.offsetLeft,y:b.current.offsetTop}})),f.current={x:b.current.offsetLeft,y:b.current.offsetTop},u.current.style.height="".concat(b.current.getBoundingClientRect().height,"px"),u.current.style.width="".concat(b.current.getBoundingClientRect().width,"px"),i("#".concat(t))}),[]),Object(r.useEffect)((function(){u.current.classList.contains("show")?p(Object(j.a)(Object(j.a)({},O),{},{zIndex:100+l.length-l.indexOf("#".concat(t)),x:f.current.x,y:f.current.y})):(o(),p(Object(j.a)(Object(j.a)({},O),{},{zIndex:-1e3})))}),[l]);var x=function(){return p(Object(j.a)(Object(j.a)({},O),{},{x:f.current.x,y:null}))};return Object(s.jsx)("div",{className:"modal window",id:t,tabIndex:"-1",role:"dialog",style:{top:O.y,left:O.x,zIndex:O.zIndex},ref:u,"data-overlay-dismissal-disabled":"true","data-esc-dismissal-disabled":"true",children:Object(s.jsx)("div",{className:"modal-dialog",role:"document",children:Object(s.jsxs)("div",{className:"modal-content",ref:b,style:{width:d||null},children:[Object(s.jsxs)("h5",{className:"modal-title window-title",onMouseDown:function(e){i("#".concat(t)),p(Object(j.a)(Object(j.a)({},O),{},{offsetX:e.clientX-O.x,offsetY:e.clientY-O.y,click:!0}))},onMouseMove:function(e){O.click&&p(Object(j.a)(Object(j.a)({},O),{},{x:e.clientX-O.offsetX,y:e.clientY-O.offsetY}))},onMouseUp:function(){return p(Object(j.a)(Object(j.a)({},O),{},{click:!1}))},children:[Object(s.jsx)("button",{className:"btn btn-square rounded-circle custom-modal-dismiss red",onClick:x,"data-dismiss":"modal",children:"\xa0"}),"\xa0\xa0",n.map((function(e,n){var a=e.close,c=e.color,r=e.onClick,l=e.disabled;return Object(s.jsxs)("span",{children:[Object(s.jsx)("button",{className:"btn btn-square rounded-circle custom-modal-dismiss ".concat(c),onClick:function(){r(),a&&x()},"data-dismiss":a?"modal":null,disabled:l,children:"\xa0"}),"\xa0\xa0"]},"btn-".concat(t,"-").concat(n))})),Object(s.jsx)("br",{}),c]}),Object(s.jsx)("div",{children:a})]})})})})),Z=Object(x.b)((function(e){return{files:e.files}}),(function(e){return{addTrack:function(t,n,a){return e(function(e,t,n){return{type:N,payload:{name:e,file:t,data:n}}}(t,n,a))}}}))((function(e){var t=e.anchor,n=e.track,a=e.files,c=e.addTrack,l=Object(r.useState)({column:""}),i=Object(g.a)(l,2),o=i[0],d=i[1],u=a.find((function(e){return e.name===n}));return Object(s.jsx)(Q,{anchor:t,buttons:[{close:!0,color:""===o.column?"":"green",onClick:function(){""!==o.column&&(c(o.column,u.name,u.data.map((function(e){return e[o.column]}))),d(Object(j.a)(Object(j.a)({},o),{},{column:""})))},disabled:""===o.column}],title:"Add Track",children:Object(s.jsxs)("select",{className:"form-control form-control-lg",value:o.column,onChange:function(e){return d(Object(j.a)(Object(j.a)({},o),{},{column:e.target.value}))},children:[Object(s.jsx)("option",{value:"",disabled:!0,children:"Select a column"}),Object.keys(u.data[0]).map((function(e){return Object(s.jsx)("option",{value:e,children:e},"column-".concat(e))}))]})})})),ee=n(4),te=function(e){var t=e.title,n=e.children;return Object(s.jsx)(Q,{anchor:"help-window",title:"Info: ".concat(t),children:n||Object(s.jsx)("div",{className:"p-20 m-20"})})},ne=function(e){return Array.from(e.children).forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")}))},ae=Object(x.b)((function(e){return{tracks:e.tracks,channels:e.globalSettings.channels}}),(function(e){return{setGlobalSettings:function(t){return e(G(t))}}}))((function(e){var t=e.anchor,n=e.title,a=e.i,c=e.tracks,l=e.channels,i=e.setGlobalSettings,o=Object(r.useState)({selected:-1}),d=Object(g.a)(o,2),u=d[0],b=d[1],f=Object(r.createRef)(),m=u.selected<0?{features:[]}:l.find((function(e){return e.id===u.selected}));Object(r.useEffect)((function(){-1===u.selected&&ne(f.current)}),[u.selected]),Object(r.useEffect)((function(){c[a].settings.channel.length<=u.selected&&b(Object(j.a)(Object(j.a)({},u),{},{selected:-1}))}),[c[a].settings.channel]);var h=function(e){return function(t){ne(t.target.parentElement.parentElement),t.target.parentElement.classList.add("active"),b(Object(j.a)(Object(j.a)({},u),{},{selected:e}))}},O=function(e){var t=Object(ee.a)(l),n=l.findIndex((function(e){return e.id===u.selected}));e.target.classList.contains("btn-primary")?(e.target.classList.remove("btn-primary"),t[n].features.find((function(t){return t.name===e.target.innerText.trim()})).controller=-1):(e.target.classList.add("btn-primary"),t[n].features.find((function(t){return t.name===e.target.innerText.trim()})).controller=a),i({channels:t})};return Object(s.jsxs)(Q,{anchor:t,title:"".concat(n,": Channel Settings"),onClose:function(){return b(Object(j.a)(Object(j.a)({},u),{},{channel:-1}))},children:[Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{className:"pagination text-center",ref:f,children:[Object(s.jsx)("li",{className:"page-item",children:Object(s.jsxs)("button",{className:"page-link",children:[Object(s.jsx)("i",{className:"fa fa-angle-left","aria-hidden":"true"}),Object(s.jsx)("span",{className:"sr-only",children:"Previous"})]})}),c[a].settings.channel.map((function(e){return Object(s.jsx)("li",{className:"page-item",children:Object(s.jsx)("button",{className:"page-link",onClick:h(e),children:e})},"pagination-".concat(e))})),Object(s.jsx)("li",{className:"page-item",children:Object(s.jsxs)("button",{className:"page-link",children:[Object(s.jsx)("i",{className:"fa fa-angle-right","aria-hidden":"true"}),Object(s.jsx)("span",{className:"sr-only",children:"Next"})]})})]})}),Object(s.jsxs)("div",{className:-1===u.selected?"transparent":"",children:[Object(s.jsxs)("h5",{className:"font-weight-bold",children:["Channel ",u.selected," Controlled Features"]}),V.map((function(e){var t=m.features.find((function(t){return t.name===e}));return[-1,a].includes(null===t||void 0===t?void 0:t.controller)?Object(s.jsx)("button",{className:"btn ml-5",onClick:O,children:e},e):null}))]})]})})),ce=Object(s.jsx)("p",{children:"Channels group tracks into one output, allowing for tracks to affect different aspects of the sonification."}),se=Object(s.jsx)("p",{children:"Select a subset of the data to sonify."}),re=function(e,t){t?(e.style.background="var(--dm-table-primary-bg-color)",e.style.color="var(--dm-table-primary-text-color)",e.style.rowBorder="var(--dm-table-primary-row-border-color)",e.style.cellBorder="var(--dm-table-primary-cell-border-color)"):(e.style.background="var(--lm-table-primary-bg-color)",e.style.color="var(--lm-table-primary-text-color)",e.style.rowBorder="var(--lm-table-primary-row-border-color)",e.style.cellBorder="var(--lm-table-primary-cell-border-color)")},le=Object(x.b)((function(e){return{tracks:e.tracks,globalSettings:e.globalSettings,files:e.files}}),(function(e){return{setSettings:function(t,n){return e(q(t,n))},setGlobalSettings:function(t){return e(G(t))},focusWindow:function(t){return e(I(t))},setData:function(t,n){return e(function(e,t){return{type:C,payload:{id:e,data:t}}}(t,n))}}}))((function(e){var t=e.anchor,n=e.trackno,a=e.tracks,c=e.setSettings,l=e.globalSettings,i=e.setGlobalSettings,o=e.focusWindow,d=e.setData,u=e.files,b=Object(r.useState)({title:"",children:null,segment:"",data:Object(ee.a)(a[n].data)}),f=Object(g.a)(b,2),m=f[0],h=f[1];Object(r.useEffect)((function(){Array.from(document.getElementsByClassName("datum-selected")).forEach((function(e){return re(e,l.dark)}))}),[l.dark]);var O=function(e){return function(t){if(t.target.classList.contains("btn-primary")){t.target.classList.remove("btn-primary");var s=Object(ee.a)(a[n].settings.channel);s.splice(a[n].settings.channel.indexOf(e),1),c(n,{channel:s});var r=Object(ee.a)(l.channels);r[e].tracks.splice(r[e].tracks.indexOf(n),1),i({channels:r})}else{t.target.classList.add("btn-primary"),c(n,{channel:[].concat(Object(ee.a)(a[n].settings.channel),[e]).sort((function(e,t){return e-t}))});var o=Object(ee.a)(l.channels);o[e].tracks=[].concat(Object(ee.a)(o[e].tracks),[n]),i({channels:o})}}},p=function(e,t){return function(c){var s=a[n].data;c.target.classList.contains("datum-selected")?(c.target.classList.remove("datum-selected"),c.target.style.background=null,c.target.style.color=null,c.target.style.rowBorder=null,c.target.style.cellBorder=null,s.splice(t,1),d(n,s)):(c.target.classList.add("datum-selected"),re(c.target,l.dark),s.splice(t,0,e),d(n,s))}},x=function(e,t){return function(){h(Object(j.a)(Object(j.a)({},m),{},{title:e,children:t})),o("#help-window")}};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(Q,{anchor:t,title:"".concat(a[n].name,": Sonification Settings"),width:"50vw",children:[Object(s.jsxs)("h5",{className:"font-weight-bold d-flex align-items-baseline",children:["Connect to Channel\u2003",Object(s.jsx)("i",{className:"fa fa-question-circle anchor","data-toggle":"modal","data-target":"help-window",onClick:x("Connect to Channel",ce)})]}),Object(s.jsxs)("div",{className:"w-full",children:[Object(s.jsx)("button",{className:"btn btn-square btn-primary m-5",onClick:function(){return i({channels:[].concat(Object(ee.a)(l.channels),[Object(j.a)(Object(j.a)({},T),{},{id:l.channels.length})])})},children:"+"}),Object(ee.a)(l.channels).map((function(e,t){return Object(s.jsx)("button",{className:"btn btn-square m-5",onClick:O(t),children:t},"channel-".concat(t))}))]}),0===a[n].settings.channel.length?null:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"w-full",children:Object(s.jsx)("button",{className:"btn btn-primary ml-5","data-toggle":"modal","data-target":"channel-".concat(a[n].name.replace(/\s/g,"-"),"-").concat(n),onClick:function(){return o("#channel-".concat(a[n].name,"-").concat(n))},children:"Channel Settings"})})]}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),Object(s.jsx)("h5",{className:"font-weight-bold d-flex align-items-baseline",children:"Data Processing"}),Object(s.jsxs)("h6",{className:"font-weight-semi-bold d-flex align-items-baseline",children:["Data Points\u2003",Object(s.jsx)("i",{className:"fa fa-question-circle anchor","data-toggle":"modal","data-target":"help-window",onClick:x("Data Points",se)})]}),Object(s.jsx)("div",{className:"w-full overflow-scroll",children:Object(s.jsx)("table",{className:"table",children:Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:a[n].name}),m.data.map((function(e,t){return Object(s.jsx)("td",{className:"anchor sonification-data-point is-primary datum-selected",onClick:p(e,t),children:e},"data-".concat(t))}))]})})})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-6",children:Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){return d(n,function(e){var t=L.f(e,.25),n=L.f(e,.75),a=[];return e.forEach((function(e){e<1.5*t||e>1.5*n||a.push(e)})),a}(a[n].data))},children:"Remove Outliers"})}),Object(s.jsx)("div",{className:"col-6",children:Object(s.jsx)("input",{className:"form-control",placeholder:"Segmentation Size",type:"number",min:"1",value:m.segment,onChange:function(e){d(n,function(e,t){for(var n=[],a=0;a<e.length-t;a+=t){for(var c=[],s=0;s<t;s++)c.push(e[a+s]);n.push(c)}return n}(a[n].data,e.target.value)),h(Object(j.a)(Object(j.a)({},m),{},{segment:e.target.value}))}})})]}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){d(n,u.find((function(e){return e.name===a[n].file})).data.map((function(e){return isNaN(e[a[n].name])?e[a[n].name]:parseFloat(e[a[n].name])}))),h(Object(j.a)(Object(j.a)({},m),{},{segment:""}))},children:"Restore Data"}),Object(s.jsx)("br",{}),a[n].settings.channel.length>0?null:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),Object(s.jsxs)("h5",{className:"font-weight-bold d-flex align-items-baseline",children:[a[n].settings.continuous?"Continuous":"Discrete","\u2003",Object(s.jsx)("i",{className:"fa fa-question-circle anchor","data-toggle":"modal","data-target":"help-window"})]}),Object(s.jsx)("div",{className:"d-flex w-full justify-items-center align-items-center",children:Object(s.jsxs)("div",{className:"custom-switch",children:[Object(s.jsx)("input",{type:"checkbox",id:"continuous-".concat(t),value:a[n].settings.continuous,onChange:function(e){return c(n,{continuous:e.target.checked})}}),Object(s.jsx)("label",{htmlFor:"continuous-".concat(t)})]})})]})]}),Object(s.jsx)(te,{title:m.title,children:m.children}),Object(s.jsx)(ae,{anchor:"channel-".concat(a[n].name.replace(/\s/g,"-"),"-").concat(n),title:a[n].name,i:n})]})})),ie=n(55),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object.assign({},e,{files:[].concat(Object(ee.a)(e.files),[t.payload])});case N:return Object.assign({},e,{tracks:[].concat(Object(ee.a)(e.tracks),[Object(j.a)(Object(j.a)({},t.payload),{},{settings:Object(j.a)({},E),id:e.tracks.length})])});case w:return Object.assign({},e,{tracks:e.tracks.map((function(e){return t.payload.id===e.id?Object(j.a)(Object(j.a)({},e),{},{settings:Object(j.a)(Object(j.a)({},e.settings),t.payload.settings)}):e}))});case y:return Object.assign({},e,{globalSettings:Object(j.a)(Object(j.a)({},e.globalSettings),t.payload)});case k:var n=e.windows.indexOf(t.payload);return n>=0?Object.assign({},e,{windows:[t.payload].concat(Object(ee.a)(e.windows.slice(0,n)),Object(ee.a)(e.windows.slice(n+1,e.windows.length)))}):Object.assign({},e,{windows:[t.payload].concat(Object(ee.a)(e.windows))});case S:var a,c=0,s=Object(_.a)(e.tracks);try{for(s.s();!(a=s.n()).done;){var r=a.value;if(t.payload===r.id)break;c++}}catch(l){s.e(l)}finally{s.f()}return Object.assign({},e,{tracks:[].concat(Object(ee.a)(e.tracks.slice(0,c)),Object(ee.a)(e.tracks.slice(c+1,e.tracks.length)))});case C:return Object.assign({},e,{tracks:e.tracks.map((function(e){return e.id!==t.payload.id?e:Object(j.a)(Object(j.a)({},e),{},{data:t.payload.data})}))});default:return e}},de=Object(ie.b)(oe),ue=function(e,t){if(a)a.resume();else{a=new AudioContext;var n=t.bpm<0?60:t.bpm,c="none"===t.key?"chromatic":t.key,s=a.currentTime;e.forEach((function(r){if(0===r.settings.channel.length){var l=new OscillatorNode(a,{type:"sine"}),i=new GainNode(a),o=new StereoPannerNode(a);l.connect(i).connect(o).connect(a.destination),i.gain.value=r.settings.mute?0:r.settings.volume/100/(e.length+t.channels.length),o.pan.value=r.settings.pan/50;var d=Math.max.apply(Math,Object(ee.a)(r.data)),u=Math.min.apply(Math,Object(ee.a)(r.data)),b=2*X[c].length,j=function(e){return Math.round(b/(d-u)*(e-u))};r.settings.continuous?r.data.forEach((function(e,t){var a=j(e);l.frequency.linearRampToValueAtTime(be(X[c][a%X[c].length],4+Math.floor(a/X[c].length)),s+60*t/n)})):r.data.forEach((function(e,t){var a=j(e);l.frequency.setValueAtTime(be(X[c][a%X[c].length],4+Math.floor(a/X[c].length)),s+60*t/n)})),l.start(),l.stop(s+60*r.data.length/n)}})),t.channels.forEach((function(r){var l=new OscillatorNode(a,{type:"sine"}),i=new GainNode(a),o=new StereoPannerNode(a);l.connect(i).connect(o).connect(a.destination);var d=function(e){var t=r.features.find((function(t){return t.name===e})).controller;return t<0?[]:de.getState().tracks.find((function(e){return e.id===t})).data},u=d("Pitch"),b=d("Volume"),j=d("Pan"),f=A(b,"logistic",1,0,R(b)),m=A(j,"logistic",1,-1,R(j)),h=Math.max.apply(Math,Object(ee.a)(u)),g=Math.min.apply(Math,Object(ee.a)(u)),O=2*X[c].length,p=function(e){return Math.round(O/(h-g)*(e-g))};0===f.length&&(i.gain.value=1/(e.length+t.channels.length)),f.forEach((function(e,t){return i.gain.linearRampToValueAtTime(e,s+60*t/n)})),m.forEach((function(e,t){return o.pan.linearRampToValueAtTime(e,s+60*t/n)})),0===u.length&&(l.frequency.value=be(X[c][0],4)),r.continuous?u.forEach((function(e,t){var a=p(e);l.frequency.linearRampToValueAtTime(be(X[c][a%X[c].length],4+Math.floor(a/X[c].length)),s+60*t/n)})):u.forEach((function(e,t){var a=p(e);l.frequency.setValueAtTime(be(X[c][a%X[c].length],4+Math.floor(a/X[c].length)),s+60*t/n)})),l.start(),l.stop(s+60*Math.max(u.length,f.length,m.length)/n)}))}},be=function(e,t){return 440*Math.pow(2,t-(U[e]>2?5:4))*Math.pow(2,U[e]/12)},je=Object(x.b)((function(e){return{globalSettings:e.globalSettings,tracks:e.tracks}}),(function(e){return{setGlobalSettings:function(t){return e(G(t))}}}))((function(e){var t=e.globalSettings,n=e.setGlobalSettings,c=e.tracks,r=0!==c.length,l=function(e){return function(a){return n({timesig:e?[a.target.value,t.timesig[1]]:Number.isInteger(Math.log(a.target.value)/Math.log(2))?[t.timesig[0],a.target.value]:Object(ee.a)(t.timesig)})}};return Object(s.jsx)("nav",{className:"navbar navbar-fixed-bottom controls",children:Object(s.jsx)("div",{className:"navbar-content w-full",children:Object(s.jsxs)("div",{className:"row w-full",children:[Object(s.jsx)("div",{className:"col-4",children:Object(s.jsxs)("div",{className:"row h-full",children:[Object(s.jsx)("div",{className:"col-6 d-flex justify-content-center",children:Object(s.jsx)("div",{className:"h-full w-full d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"dropdown dropup with-arrow align-self-center",children:[Object(s.jsxs)("button",{className:"btn btn-lg","data-toggle":"dropdown",type:"button",id:"bpm-dropup",children:[Object(s.jsx)("i",{className:"fa fa-drum"}),"\u2003BPM: ",Object(s.jsx)("span",{className:"text-monospace",children:t.bpm<0?"N/A":t.bpm})]}),Object(s.jsx)("div",{className:"dropdown-menu","aria-labelledby":"bpm-dropup",children:Object(s.jsx)("div",{className:"container mt-15",children:Object(s.jsxs)("div",{className:"form-group w-full",children:[Object(s.jsx)("label",{htmlFor:"bpm",children:"Set BPM"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"custom-switch align-self-center",children:[Object(s.jsx)("input",{type:"checkbox",id:"bpm-toggle",checked:t.bpm>0,onChange:function(){return n({bpm:t.bpm>0?-1:120})}}),Object(s.jsx)("label",{htmlFor:"bpm-toggle"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:t.bpm<0?"text":"number",className:"form-control",id:"bpm",min:"30",max:"240",value:t.bpm<0?"N/A":t.bpm,disabled:t.bpm<0,placeholder:"BPM",onChange:function(e){return n({bpm:0===e.target.value.length?30:parseInt(e.target.value)})}})]})})})]})})}),Object(s.jsx)("div",{className:"col-6 d-flex justify-content-center",children:Object(s.jsx)("div",{className:"h-full w-full d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"dropdown dropup with-arrow align-self-center",children:[Object(s.jsxs)("button",{className:"btn btn-lg","data-toggle":"dropdown",type:"button",id:"key-dropup",children:[Object(s.jsx)("i",{className:"fa fa-hashtag"}),"\u2003Key: ",Object(s.jsx)("span",{dangerouslySetInnerHTML:{__html:z[t.key]}})]}),Object(s.jsx)("div",{className:"dropdown-menu","aria-labelledby":"key-dropup",children:Object(s.jsx)("div",{className:"container mt-15",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"key",children:"Set Key"}),Object(s.jsx)("select",{className:"form-control",id:"key",onChange:function(e){return n({key:e.target.value})},children:Object.keys(z).map((function(e){return Object(s.jsx)("option",{value:e,dangerouslySetInnerHTML:{__html:z[e]}},e)}))})]})})})]})})})]})}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)("div",{className:"w-full d-flex justify-content-center",children:Object(s.jsx)("button",{className:"btn btn-square rounded-circle btn-success play font-size-24",type:"button",disabled:!r,onClick:function(e){if(e.target.classList.contains("btn-danger"))e.target.classList.add("btn-success"),e.target.classList.remove("btn-danger"),a.close(),a=void 0;else if(e.target.classList.contains("btn-secondary"))e.target.classList.add("btn-danger"),e.target.classList.remove("btn-secondary"),a.suspend();else{e.target.classList.add("btn-danger"),e.target.classList.remove("btn-success");var n=[];c.forEach((function(e){0===e.settings.channel.length&&n.push(e)})),Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(n,t);case 2:case"end":return e.stop()}}),e)})))()}}})})}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)("div",{className:"row h-full",children:Object(s.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(s.jsx)("div",{className:"h-full w-full d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"dropdown dropup with-arrow align-self-center",children:[Object(s.jsxs)("button",{className:"btn btn-lg d-flex align-items-center","data-toggle":"dropdown",type:"button",id:"timesig-dropup",children:[Object(s.jsx)("i",{className:"fa fa-stopwatch"}),"\u2003Time Signature:\xa0",Object(s.jsxs)("span",{className:"supsub",children:[Object(s.jsx)("sup",{children:t.timesig[0]<=0?"N/A":t.timesig[0]}),Object(s.jsx)("sub",{children:t.timesig[1]<=0?"N/A":t.timesig[1]})]})]}),Object(s.jsx)("div",{className:"dropdown-menu","aria-labelledby":"timesig-dropup",children:Object(s.jsx)("div",{className:"container mt-15",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"timesig",children:"Set Time Signature"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"custom-switch align-self-center",children:[Object(s.jsx)("input",{type:"checkbox",id:"timesig-toggle",checked:t.timesig[0]>0,onChange:function(){return n({timesig:t.timesig[0]>0?[-1,-1]:[4,4]})}}),Object(s.jsx)("label",{htmlFor:"timesig-toggle",children:" "})]}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"number",className:"form-control",id:"timesig",min:"1",max:"20",placeholder:t.timesig[0]<=0?"N/A":t.timesig[0],onChange:l(!0)}),Object(s.jsx)("input",{type:"number",className:"form-control",id:"timesig-bottom",min:"1",max:"32",placeholder:t.timesig[1]<=0?"N/A":t.timesig[1],onChange:l(!1)})]})})})]})})})})})]})})})})),fe=Object(x.b)((function(e){return c=e.globalSettings.dark,{files:e.files,tracks:e.tracks}}),(function(e){return{setGlobalSettings:function(t){return e(G(t))}}}))((function(e){var t=e.files,n=e.tracks,a=e.setGlobalSettings,l=function(e){2===e.length&&"shift"===e[0]&&"d"===e[1]&&a({dark:c=!c})};return Object(r.useEffect)((function(){var e=[];document.addEventListener("keydown",(function(t){document.querySelector("input:focus")||document.querySelector("textarea:focus")||document.querySelector("select:focus")||(e.push(t.key.toLowerCase()),l(e))})),document.addEventListener("keyup",(function(t){document.querySelector("input:focus")||document.querySelector("textarea:focus")||document.querySelector("select:focus")||(e.splice(e.indexOf(t.key.toLowerCase()),1),l(e))}))}),[]),Object(s.jsxs)("div",{className:"page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom",children:[Object(s.jsx)("div",{className:"sticky-alerts"}),t.map((function(e){var t=e.name;return Object(s.jsx)(Z,{anchor:"modal-".concat(t),track:t},"modal-".concat(t))})),n.map((function(e,t){e.file;var n=e.name;return Object(s.jsx)(le,{anchor:"sonification-".concat(n.replace(/\s/g,"-"),"-").concat(t),trackno:t},"sonification-".concat(n,"-").concat(t))})),Object(s.jsx)(P,{}),Object(s.jsx)(W,{}),Object(s.jsx)($,{}),Object(s.jsx)(je,{})]})})),me=function(){return Object(s.jsx)(d.a,{children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(s.jsx)(u.a,{path:"/workstation",component:fe})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(171),n(172);window.onload=function(){return p.a.onDOMContentLoaded()},o.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(x.a,{store:de,children:Object(s.jsx)(me,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[173,1,2]]]);
//# sourceMappingURL=main.da62e384.chunk.js.map