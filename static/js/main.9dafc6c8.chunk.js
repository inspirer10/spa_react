(this["webpackJsonpsingle-page-app"]=this["webpackJsonpsingle-page-app"]||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(20),r=n.n(a),s=(n(26),n(8)),u=n(9),j=n(11),o=n(10),l=n(4),d=(n(18),n(2)),b=(n(27),n.p+"static/media/img1.4bc3b2cf.jpg"),h=n.p+"static/media/img2.6d8924e8.jpg",m=n.p+"static/media/img3.56b790fd.jpg",p=n(0),O=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(d.e,{children:[Object(p.jsx)(d.c,{path:"/",exact:!0,render:function(){return Object(p.jsx)("img",{src:b,alt:"city"})}}),Object(p.jsx)(d.c,{path:"/contact",render:function(){return Object(p.jsx)("img",{src:h,alt:"city"})}}),Object(p.jsx)(d.c,{path:"/products",render:function(){return Object(p.jsx)("img",{src:m,alt:"city"})}}),Object(p.jsx)(d.c,{path:"/admin",render:function(){return Object(p.jsx)("img",{src:b,alt:"city"})}}),Object(p.jsx)(d.c,{render:function(){return Object(p.jsx)("img",{src:h,alt:"city"})}})]})})}}]),n}(i.a.Component),x=(n(34),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),f=function(){var e=x.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(l.b,{to:e.path,exact:e.exact,children:e.name})},e.name)}));return Object(p.jsx)("nav",{children:Object(p.jsx)("ul",{children:e})})},g=function(e){var t=e.title,n=e.author,c=e.text;return Object(p.jsxs)("article",{children:[Object(p.jsx)("h3",{children:t}),Object(p.jsx)("h6",{children:n}),Object(p.jsx)("p",{children:c})]})},v=[{id:1,title:"Czym jest teoria strun?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam debitis suscipit hic quisquam aliquid repellendus. Atque esse ratione illo beatae ducimus error blanditiis nesciunt earum, in debitis assumenda iusto?"},{id:2,title:"Czym jest paradoks fermiego?",author:"Grzegorz Jankowski",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam debitis suscipit hic quisquam aliquid repellendus. Atque esse ratione illo beatae ducimus error blanditiis nesciunt earum, in debitis assumenda iusto?"},{id:3,title:"Ciemna materia i ciemna energia",author:"Irena Kowalska",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam debitis suscipit hic quisquam aliquid repellendus. Atque esse ratione illo beatae ducimus error blanditiis nesciunt earum, in debitis assumenda iusto?"}],y=function(){var e=v.map((function(e){return Object(p.jsx)(g,{text:e.text,author:e.author,title:e.title},e.id)}));return Object(p.jsx)("div",{className:"home",children:e})},k=function(){return Object(p.jsx)("div",{children:"Produkt"})},q=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"contact",children:[Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsx)("h3",{children:"Napisz do nas!"}),Object(p.jsx)("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),Object(p.jsx)("button",{children:"Wy\u015blij"})]}),Object(p.jsx)(d.a,{when:this.state.value,message:"Masz niewype\u0142niony formularz"})]})}}]),n}(i.a.Component),w=function(){return Object(p.jsx)(d.c,{render:function(){return Object(p.jsx)(d.b,{to:"/login"})}})},C=function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"",children:["Podaj login",Object(p.jsx)("input",{type:"text"})]}),Object(p.jsxs)("label",{htmlFor:"",children:["Podaj Has\u0142o",Object(p.jsx)("input",{type:"password"})]}),Object(p.jsx)("button",{children:"Zaloguj"})]})},z=function(){return Object(p.jsx)("div",{children:"ERROR"})},N=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(d.e,{children:[Object(p.jsx)(d.c,{path:"/",exact:!0,component:y}),Object(p.jsx)(d.c,{path:"/products",component:k}),Object(p.jsx)(d.c,{path:"/contact",component:q}),Object(p.jsx)(d.c,{path:"/admin",component:w}),Object(p.jsx)(d.c,{path:"/login",component:C}),Object(p.jsx)(d.c,{component:z})]})}}]),n}(i.a.Component),S=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(l.a,{children:Object(p.jsx)("div",{children:"Footer"})})}}]),n}(i.a.Component),A=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(l.a,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("header",{children:Object(p.jsx)(O,{})}),Object(p.jsxs)("main",{children:[Object(p.jsx)("aside",{children:Object(p.jsx)(f,{})}),Object(p.jsx)("section",{className:"blog",children:Object(p.jsx)(N,{})})]}),Object(p.jsx)("footer",{children:Object(p.jsx)(S,{})})]})})}}]),n}(i.a.Component);r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9dafc6c8.chunk.js.map