(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=(a(14),a(8)),s=a(1),i=a(3),d=a(5),u=function(e){var t=e.id,a=e.text,n=e.date,r=e.handleDeleteNote;return c.a.createElement("div",{className:"note"},c.a.createElement("span",null,a),c.a.createElement("div",{className:"note-footer"},c.a.createElement("small",null," ",n),c.a.createElement(d.a,{onClick:function(){return r(t)},className:"delete-icon",size:"1.3em"})))},m=function(e){var t=e.handleAddNote,a=Object(n.useState)(""),r=Object(s.a)(a,2),l=r[0],o=r[1];return c.a.createElement("div",{className:"note new"},c.a.createElement("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note",value:l,onChange:function(e){200-e.target.value.length>=0&&o(e.target.value)}}),c.a.createElement("div",{className:"note-footer"},c.a.createElement("small",null,200-l.length," Remaining"),c.a.createElement("button",{className:"save",onClick:function(){l.trim().length>0&&(t(l),o(""))}},"Save")))},h=function(e){var t=e.notes,a=e.handleAddNote,n=e.handleDeleteNote;return c.a.createElement("div",{className:"notes-list"},t.map((function(e){return c.a.createElement(u,{id:e.id,text:e.text,date:e.date,handleDeleteNote:n})})),c.a.createElement(m,{handleAddNote:a}))},f=function(e){var t=e.handleSearchNote;return c.a.createElement("div",{className:"search"},c.a.createElement(d.b,{className:"search-icons",size:"1.3em"}),c.a.createElement("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search"}))},E=function(e){var t=e.handleToggleDarkMode;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Notes"),c.a.createElement("button",{onClick:function(){return t((function(e){return!e}))},className:"save"},"Toggle Mode"))},v=function(){var e=Object(n.useState)([{id:Object(i.a)(),text:"This is my first note!",date:"02/14/2022"},{id:Object(i.a)(),text:"This is my second note!",date:"02/10/2022"},{id:Object(i.a)(),text:"This is my third note!",date:"02/12/2022"}]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),u=d[0],m=d[1],v=Object(n.useState)(!1),N=Object(s.a)(v,2),p=N[0],g=N[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&r(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(a))}),[a]);return c.a.createElement("div",{className:"".concat(p&&"dark-mode")},c.a.createElement("div",{className:"container"},c.a.createElement(E,{handleToggleDarkMode:g}),c.a.createElement(f,{handleSearchNote:m}),c.a.createElement(h,{notes:a.filter((function(e){return e.text.toLowerCase().includes(u)})),handleAddNote:function(e){var t=new Date,n={id:i.a,text:e,date:t.toLocaleDateString()},c=[].concat(Object(o.a)(a),[n]);r(c)},handleDeleteNote:function(e){var t=a.filter((function(t){return t.id!==e}));r(t)}})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a6b7842c.chunk.js.map