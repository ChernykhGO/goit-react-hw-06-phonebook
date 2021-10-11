(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={contactItem:"ContactList_contactItem__YyNOv",listContact:"ContactList_listContact__1SOcs"}},27:function(e,t,n){},29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),i=n(3),s=n(15),b=(n(27),n(14)),u=n(35),l=n(4),j={addContacts:Object(l.b)("contacts/add",(function(e){return{payload:{id:Object(u.a)(),name:e.name,number:e.number}}})),deleteContacts:Object(l.b)("contacts/delete"),changeFilter:Object(l.b)("contacts/changeFilter")},d=n(1);var O=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(b.a)(r,2),s=o[0],u=o[1],l=Object(i.c)((function(e){return e.phonebook.items})),O=Object(i.b)(),h=function(e){switch(e.target.name){case"name":a(e.currentTarget.value);break;case"number":u(e.currentTarget.value);break;default:console.warn("".concat(e.target.value," not found"))}},f=function(){a(""),u("")};return Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in contact"));O(j.addContacts({name:n,number:s})),f()},children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{type:"text",value:n,onChange:h,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Name Surname"})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",value:s,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"111-11-11"})]}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})},h=function(){var e=Object(i.c)((function(e){return e.phonebook.filter})),t=Object(i.b)();return Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Find contacts by name"}),Object(d.jsx)("input",{type:"text",value:e,onChange:function(e){return t(j.changeFilter(e.target.value))}})]})},f=n(13),p=n.n(f),m=function(){var e=Object(i.c)((function(e){return function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(e.phonebook.items,e.phonebook.filter)})),t=Object(i.b)();return Object(d.jsx)("ul",{className:p.a.listContact,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(d.jsxs)("li",{className:p.a.contactItem,children:[Object(d.jsxs)("p",{children:["\u260e ",c,": ",a]}),Object(d.jsx)("button",{type:"button",onClick:function(){return function(e){return t(j.deleteContacts(e))}(n)},children:"Delete"})]},n)}))})};n(29);function x(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(O,{}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(h,{}),Object(d.jsx)(m,{})]})})}var C,g=n(16),v=n.n(g),k=n(9),y=n(18),w=n(2),A=Object(l.c)([],(C={},Object(k.a)(C,j.addContacts,(function(e,t){return[].concat(Object(y.a)(e),[t.payload])})),Object(k.a)(C,"contacts/delete",(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),C)),N=Object(l.c)("",Object(k.a)({},j.changeFilter,(function(e,t){return t.payload}))),L=Object(w.b)({items:A,filter:N}),S=n(17),_=n.n(S),z=n(5),F={key:"phonebook",storage:_.a,blacklist:["filter"]};console.log("production");var I=Object(l.a)({reducer:{phonebook:Object(z.g)(F,L)},middleware:function(e){return e({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}}).concat(v.a)},devTools:!1}),J={store:I,persistor:Object(z.h)(I)};o.a.render(Object(d.jsxs)(a.a.StrictMode,{children:[Object(d.jsx)(i.a,{store:J.store,children:Object(d.jsx)(s.a,{loading:null,persistor:J.persistor,children:Object(d.jsx)(x,{})})}),";"]}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.620d20cc.chunk.js.map