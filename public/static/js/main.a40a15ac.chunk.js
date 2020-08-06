(this["webpackJsonpsave-food-client"]=this["webpackJsonpsave-food-client"]||[]).push([[0],{34:function(e,a,t){e.exports=t(64)},39:function(e,a,t){},41:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var r,n=t(0),l=t.n(n),o=t(32),c=t.n(o),s=(t(39),t(1)),m=t.n(s),i=t(13),u=t(3),p=t(4),d=t(6),f=t(2),b=t(5),h=(t(41),t(15)),E=t.n(h),v=E.a.create({baseURL:"http://save-food-project.herokuapp.com/api",withCredentials:!0}),g=t(12),y=function(e){function a(a){e.setUser(Object(p.a)(Object(p.a)({},e.user),{},Object(g.a)({},a.currentTarget.name,a.currentTarget.value)))}function t(){return(t=Object(u.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),e.handleSubmit(e.user);case 2:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return l.a.createElement("form",{onSubmit:function(e){return t.apply(this,arguments)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Username"),l.a.createElement("input",{type:"text",className:"form-control form-control-lg",id:"authUsernameField",name:"username",onChange:a,value:e.user.username})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{type:"password",className:"form-control form-control-lg",name:"password",id:"authPasswordField",onChange:a,value:e.user.password})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},e.buttonText))},N=function(){var e=Object(b.f)(),a=Object(n.useState)({username:"",password:""}),t=Object(d.a)(a,2),r=t[0],o=t[1];function c(){return(c=Object(u.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.post("/user/signup",t);case 3:a.sent,e.push("/user/login"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))).apply(this,arguments)}return l.a.createElement("div",null,l.a.createElement("h1",null,"Signup"),l.a.createElement("hr",null),l.a.createElement(y,{handleSubmit:function(e){return c.apply(this,arguments)},setUser:o,user:r,buttonText:"Sign up"}))},O=function(e){var a=Object(b.f)(),t=Object(n.useState)({username:"",password:""}),r=Object(d.a)(t,2),o=r[0],c=r[1];function s(){return(s=Object(u.a)(m.a.mark((function t(r){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.post("/user/login",r);case 3:n=t.sent,console.log("tentativa de login"),e.setUser(Object(p.a)({},n.data)),console.log("pos setUser Props"),localStorage.setItem("loggedInUser",JSON.stringify(Object(p.a)({},n.data))),a.push("/establishment/profile/".concat(n.data.userObj._id)),console.log(n.data),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"),l.a.createElement("hr",null),l.a.createElement(y,{handleSubmit:function(e){return s.apply(this,arguments)},setUser:c,user:o,buttonText:"Login"}))},j=function(e){var a=Object(b.f)();return Object(n.useEffect)((function(){!function(){var t=Object(u.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.post("/logout");case 3:localStorage.removeItem("loggedInUser"),e.setUser({}),a.push("/login"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),l.a.createElement("div",null,"logout complete")},w=E.a.create({baseURL:"http://save-food-project.herokuapp.com/api",withCredentials:!0}),x=function(){var e=Object(b.f)(),a=Object(n.useState)({title:"",value:0,active:"",photo:"",availableQty:0,reservationLimitPeriod:"",owner:""}),t=Object(d.a)(a,2),r=t[0],o=t[1];function c(e){o(Object(p.a)(Object(p.a)({},r),{},Object(g.a)({},e.currentTarget.name,e.currentTarget.value))),console.log(e.currentTarget.value)}function s(){return(s=Object(u.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,w.post("/offer/create",r);case 4:a.sent,e.push("/offers"),e.go(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return l.a.createElement("div",{className:"backgroundColor"},l.a.createElement("h1",null,"Cadastrar oferta"),l.a.createElement("hr",{className:"form-group"}),l.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},l.a.createElement("div",{className:"form-group ml-5"},l.a.createElement("label",{htmlFor:"nomePrato"},"Nome do Prato"),l.a.createElement("input",{type:"text",className:"form-control form-control-lg col-5",id:"offerTitleField",name:"title","aria-describedby":"emailHelp",onChange:c,value:r.title})),l.a.createElement("div",{className:"form-group ml-5"},l.a.createElement("label",{htmlFor:"valorPrato"},"Valor do Prato"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"value",id:"offerValueField",onChange:c,value:r.value})),l.a.createElement("div",{className:"form-group ml-5"},l.a.createElement("label",{htmlFor:"quantidadeDisp"},"Quantidade Dispon\xedvel"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"availableQty",id:"offerValueField",onChange:c,value:r.availableQty})),l.a.createElement("div",{className:"form-group ml-5"},l.a.createElement("label",{htmlFor:"fotoPrato"},"Foto do Prato"),l.a.createElement("input",{type:"text",className:"form-control form-control-lg col-5",id:"offerPhotoField",name:"photo","aria-describedby":"emailHelp",onChange:c,value:r.photo})),l.a.createElement("div",null,l.a.createElement("input",{type:"date"})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},"Save")))},k=function(e){return Object(n.useEffect)((function(){e.allOffers.length&&(console.log(e.allOffers),r=Object(i.a)(e.allOffers))}),[e]),l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("input",{className:"form-control mr-sm-2",onKeyUp:function(a){var t=a.currentTarget.value;if(!t)return console.log("caiu no if"),e.setOffers(Object(i.a)(r));var n=e.allOffers.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return e.setOffers(Object(i.a)(n))},type:"search",placeholder:"Search","aria-label":"Search"}))},F={width:"60rem",padding:"5px",color:"#276359"},C={"background-color":"#276359"},T=function(e){return console.log(e),l.a.createElement("div",null,l.a.createElement(k,{allOffers:e.allOffers,offers:e.offers,setOffers:e.setOffers}),l.a.createElement("div",{className:"offersBody"},e.offers.map((function(e){return l.a.createElement("div",{className:"card",style:F},l.a.createElement("img",{className:"card-img-top",src:e.photo,alt:"Cardimagecap"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"R$ ".concat(e.value)),l.a.createElement("p",{className:"card-text"},e.title),l.a.createElement(f.b,{type:"button",className:"btn btn-primary",style:C,to:"offer/".concat(e._id)},"RESERVAR")))}))))},S=E.a.create({baseURL:"http://save-food-project.herokuapp.com/api",withCredentials:!0}),P=function(){var e=Object(b.g)().id,a=Object(n.useState)({_id:"",title:"",value:0,photo:"",availableQty:0,reservationLimitPeriod:"",owner:""}),t=Object(d.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)({companyName:"",category:"",address:{street:"",number:0,neighborhood:"",city:""},phone:"",email:"",takeawayTime:{startTime:"00:00:00",endTime:"00:00:00"}}),s=Object(d.a)(c,2),i=s[0],f=s[1];return Object(n.useEffect)((function(){!function(){var a=Object(u.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.get("/offer/".concat(e));case 3:t=a.sent,o(Object(p.a)({},t.data[0])),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()()}),[]),Object(n.useEffect)((function(){!function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/establishment/profile/".concat(r.owner));case 3:a=e.sent,f(Object(p.a)({},a.data.establishment)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[r]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Detalhes da oferta: ",r.title)),l.a.createElement("hr",null),l.a.createElement("div",{className:"offerDetailsContainer"},l.a.createElement("div",{className:"offerCard"},l.a.createElement("div",{className:"offerImage"},l.a.createElement("img",{src:"https://img.cybercook.com.br/receitas/859/file-de-frango-a-milanesa-623x350.jpeg",alt:"offer"}),l.a.createElement("p",null,r.title)),l.a.createElement("div",{className:"offerData"},l.a.createElement("p",null,l.a.createElement("strong",null,"R$ ",r.value)),l.a.createElement("p",null,"Retirada at\xe9: ",r.reservationLimitPeriod),l.a.createElement("p",null,"Hor\xe1rio de retirada: das ",i.takeawayTime.startTime," \xe0s"," ",i.takeawayTime.endTime),l.a.createElement("p",null,"Qtd dispon\xedvel: ",r.availableQty))),l.a.createElement("div",{className:"establishmentCard"},l.a.createElement("div",{className:"establishmentImage"},l.a.createElement("img",{src:"https://res.cloudinary.com/tf-lab/image/upload/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant/6ab8a164-2453-4903-9e6f-10585ebf73d6/f6672791-fef1-4d0d-b659-5622c7d09780.jpg",alt:"establishment"}),l.a.createElement("p",null,i.companyName)),l.a.createElement("div",{className:"establishmentData"},l.a.createElement("p",null," Cozinha: ",i.cuisine),l.a.createElement("p",null," ",i.address.street,", ",i.address.number," -"," ",i.address.neighborhood),l.a.createElement("p",null," ",i.phone),l.a.createElement("p",null," ",i.email)),l.a.createElement("div",{className:"PaymentDelivery"},l.a.createElement("p",null," ",l.a.createElement("img",{src:"",alt:"payment icon"})," ",i.paymentForms),l.a.createElement("p",null,l.a.createElement("img",{src:"",alt:"payment icon"})," ",i.takeaway))),l.a.createElement("div",null,l.a.createElement("iframe",{width:"500",height:"350",src:"https://maps.google.com/maps?width=500&height=350&hl=en&q=Rua%20Vitor%20Bastos%2027%20campolide%20lisboa%20+(T%C3%ADtulo)&ie=UTF8&t=&z=16&iwloc=B&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}))),l.a.createElement("hr",null))},D=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(f.b,{className:"navbar-brand",to:"/home"},"Logo"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(f.b,{className:"nav-link",to:"/home"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(f.b,{className:"nav-link",to:"/user/signup"},"Fa\xe7a parte")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(f.b,{className:"nav-link",to:"/blog/howWorks"},"Como funciona")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(f.b,{className:"nav-link",to:"/blog/aboutUs"},"Quem somos")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(f.b,{className:"nav-link",to:"/user/login"},"Login"))))))},U=function(e){return l.a.createElement("div",{className:"home-background"},l.a.createElement("h1",null,"Home"),l.a.createElement(k,{allOffers:e.allOffers,offers:e.offers,setOffers:e.setOffers}),l.a.createElement(f.b,{to:"/offers",className:"btn btn-success"},"Buscar"))},I=function(){return l.a.createElement("div",{id:"section-2"},l.a.createElement("h1",null,"Sobre n\xf3s"),l.a.createElement("p",null,"Somos um grupo formado para desenvolver aplica\xe7\xf5es inteligentes que melhorem a vida dos usu\xe1rios, trazendo solu\xe7\xf5es inteligentes para o dia-a-dia."),l.a.createElement("h2",null,"Reduzir o desperd\xedcio"),l.a.createElement("p",null,"A Organiza\xe7\xe3o das Na\xe7\xf5es Unidas para a Alimenta\xe7\xe3o e a Agricultura (FAO) divulgou que 1,3 bilh\xe3o de toneladas de alimentos s\xe3o perdidos no planeta a cada ano, cerca de 30% do total produzido. No Brasil, os \xfaltimos dados, divulgados em 2013, revelam que em apenas um ano o pa\xeds perdeu ou desperdi\xe7ou 26,3 milh\xf5es de toneladas de alimentos. Isso representa quase 10% dos alimentos dispon\xedveis. Enquanto isso, 5,2 milh\xf5es de pessoas no Brasil passam fome. Segundo a FAO, a perda de alimentos prevalece nos pa\xedses em desenvolvimento, como o Brasil. J\xe1 o desperd\xedcio ocorre no final da cadeia alimentar (varejo e consumo), e estaria mais associado \xe0s na\xe7\xf5es desenvolvidas."),l.a.createElement("p",null,"Enquanto isso, com a situa\xe7\xe3o financeira do pa\xeds debilitada, muitos consumidores procuram por solu\xe7\xf5es para adquirir alimentos de qualidade mais baratos, enquanto os comerciantes buscam reduzir seu preju\xedzo gerado pelo desperd\xedcio alimentar de produtos produzidos com curta dura\xe7\xe3o de validade e aparas de alimentos que s\xe3o processados. Assim nasce a Save Food."))},q=function(){return l.a.createElement("div",{className:"howWorksBkg"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("image",{src:"https://image.freepik.com/free-photo/closeup-two-business-men-shaking-hands_1262-3740.jpg",className:"shakingHandsImg",alt:"shaking-hands-photo"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mauris consequat, semper erat in, ullamcorper dui. In hac habitasse platea dictumst. Integer interdum velit tellus, eget semper est faucibus eget. Donec a egestas elit, in pretium ante. Quisque nisi erat, vehicula eget interdum nec, maximus non purus. Nullam ut sodales quam. Morbi vel purus porttitor, consectetur lorem vel, malesuada lectus. Fusce eros urna, condimentum at lacus ut, dictum tempus turpis. Vivamus id est sed elit congue pulvinar.")),l.a.createElement("div",{class:"jumbotron"},l.a.createElement("h1",{class:"display-4"},"Hello, world!"),l.a.createElement("p",{class:"lead"},"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),l.a.createElement("hr",{class:"my-4"}),l.a.createElement("p",null,"It uses utility classes for typography and spacing to space content out within the larger container."),l.a.createElement("p",{class:"lead"},l.a.createElement(f.b,{class:"btn btn-primary btn-lg",href:"#",role:"button"},"Learn more"))))},_=function(){var e=Object(b.g)().id,a=Object(b.f)(),t=Object(n.useState)({title:"",value:"",active:"",photo:"",availableQty:"",reservationLimitPeriod:"",owner:""}),r=Object(d.a)(t,2),o=r[0],c=r[1];function s(e){c(Object(p.a)(Object(p.a)({},o),{},Object(g.a)({},e.currentTarget.name,e.currentTarget.value)))}function i(){return(i=Object(u.a)(m.a.mark((function t(r){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,w.put("/offer/update/".concat(e),o);case 4:n=t.sent,console.log(n),a.push("/offer/".concat(e)),a.go(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){var a=Object(u.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.get("/offer/".concat(e));case 3:t=a.sent,c(Object(p.a)({},t.data[0])),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()()}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Editar Oferta"),l.a.createElement("hr",{className:"form-group"}),l.a.createElement("form",{onSubmit:function(e){return i.apply(this,arguments)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"nomePrato"},"Nome do Prato (title)"),l.a.createElement("input",{type:"text",className:"form-control form-control-lg col-5",id:"offerTitleField",name:"title","aria-describedby":"emailHelp",onChange:s,value:o.title})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"valorPrato"},"Valor do prato (Value)"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"value",id:"offerValueField",onChange:s,value:o.value})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fotoPrato"},"Foto do Prato (photo)"),l.a.createElement("input",{type:"text",className:"form-control form-control-lg col-5",id:"offerPhotoField",name:"photo","aria-describedby":"emailHelp",onChange:s,value:o.photo})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"quantidadeDisp"},"Quantidade Dispon\xedvel"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"availableQty",id:"offerValueField",onChange:s,value:o.availableQty})),l.a.createElement("div",null,l.a.createElement("input",{type:"date"})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},"Save Edit")))},L=function(e){var a=Object(b.g)().id,t=Object(b.f)();function r(){return(r=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.delete("/offer/delete/".concat(a));case 3:e.sent,t.push("/offers"),t.go(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return l.a.createElement("div",{className:"modal fade show",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Delete Project"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true",onClick:function(){return t.push("/offers")}},"\xd7"))),l.a.createElement("div",{className:"modal-body"},"Are you sure you want to delete this offer?"),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){return t.push("/offers")}},"Close"),l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return r.apply(this,arguments)}},"I'm sure")))))},H=function(){var e=Object(b.g)().id,a=Object(n.useState)([]),t=Object(d.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){console.log("tem erro"),function(){var a=Object(u.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.get("/offers/".concat(e));case 3:t=a.sent,o(Object(i.a)(t.data)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()()}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"offersBody"},r.map((function(e){return l.a.createElement("div",{className:"container",key:e.owner._id},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{className:"photo",src:e.photo,alt:"foodPhoto"})),l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,"R$ ".concat(e.value)),l.a.createElement("p",null,e.owner),l.a.createElement(f.b,{type:"button",className:"button",to:"/offer/update/".concat(e._id)},"EDITAR")))}))))},Q=function(){var e=Object(b.g)().id,a=Object(n.useState)({companyName:"",category:"",address:{street:"",number:0,neighborhood:"",city:""},phone:"",email:"",takeawayTime:{startTime:"00:00:00",endTime:"00:00:00"}}),t=Object(d.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){!function(){var a=Object(u.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S.get("/establishment/profile/".concat(e));case 3:t=a.sent,o(Object(p.a)({},t.data.establishment)),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("caiu no erro"),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()()}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"profileMenu"},l.a.createElement("p",null,l.a.createElement("h2",null,"Perfil")),l.a.createElement(f.b,{to:"/establishment/profile/offers/".concat(e)},"Minhas Ofertas"),l.a.createElement("hr",null)),l.a.createElement("div",{className:"establishmentProfileContainer"},l.a.createElement("div",{className:"establishmentProfile"},l.a.createElement("div",{className:"establishmentImage"},l.a.createElement("img",{src:"https://res.cloudinary.com/tf-lab/image/upload/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant/6ab8a164-2453-4903-9e6f-10585ebf73d6/f6672791-fef1-4d0d-b659-5622c7d09780.jpg",alt:"establishment"}),l.a.createElement("p",null,r.companyName),l.a.createElement("hr",null)),l.a.createElement("div",{className:"establishmentData"},l.a.createElement("p",null," ",r.address.street,", ",r.address.number,l.a.createElement("p",null,r.address.neighborhood)),l.a.createElement("p",null," ",r.phone),l.a.createElement("p",null," ",r.email))),l.a.createElement("div",{className:"greetingProfileContainer"},l.a.createElement("p",null," ",l.a.createElement("h1",null,"Ol\xe1, ",r.companyName,"! ")," "),l.a.createElement("p",null,"Categoria: ",r.category),l.a.createElement("p",null,"Cozinha: ",r.cuisine),l.a.createElement("hr",null),l.a.createElement("div",{className:"PaymentDelivery"},l.a.createElement("p",null," ",l.a.createElement("img",{src:"",alt:"payment icon"})," ",r.paymentForms),l.a.createElement("p",null,l.a.createElement("img",{src:"",alt:"payment icon"})," ",r.takeaway),l.a.createElement("p",null,"Hor\xe1rio de retirada: das ",r.takeawayTime.startTime," \xe0s"," ",r.takeawayTime.endTime)))))},R=function(){var e=Object(b.g)().id,a=Object(b.f)(),t=Object(n.useState)({companyName:"",category:"",cuisine:[],phone:"",email:"",address:{street:"",number:0,complement:"",neighborhood:"",city:""},paymentForms:[],offers:[],delivery:!0,takeaway:!0,takeawayTime:{startTime:"",endTime:""},sales:[]}),r=Object(d.a)(t,2),o=r[0],c=r[1];function s(e){c(Object(p.a)(Object(p.a)({},o),{},Object(g.a)({},e.currentTarget.name,e.currentTarget.value)))}function i(){return(i=Object(u.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,S.put("/establishment/profile/update/".concat(e),{establishment:Object(p.a)({},o)});case 4:t.sent,console.log(o),a.push("/establishment/profile/".concat(e)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){var a=Object(u.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S.get("/establishment/profile/".concat(e));case 3:t=a.sent,c(Object(p.a)({},t.data.establishment)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()()}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Editar Profile"),l.a.createElement("hr",{className:"form-group"}),l.a.createElement("form",{onSubmit:function(e){return i.apply(this,arguments)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"companyName"},"Nome da Empresa"),l.a.createElement("input",{type:"text",className:"form-control form-control-lg col-5",id:"companyNameField",name:"companyName","aria-describedby":"emailHelp",onChange:s,value:o.companyName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"category"},"Tipo de Estabelecimento"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"category",id:"categoryField",onChange:s,value:o.category})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"cuisine"},"Tipo de Cozinha"),l.a.createElement("input",{type:"text",className:"form-control form-control-lg col-5",id:"cuisineField",name:"photo","aria-describedby":"emailHelp",onChange:s,value:o.cuisine})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Telefone"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"availableQty",id:"offerValueField",onChange:s,value:o.phone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"E-mail"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"email",id:"emailField",onChange:s,value:o.email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Endere\xe7o"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"street",id:"streetField",onChange:s,value:o.address.street})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"N\xfamero"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"number",id:"numberField",onChange:s,value:o.address.number})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Complemento"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"complement",id:"complementField",onChange:s,value:o.address.complement})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Bairro"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"neighborhood",id:"neighborhoodField",onChange:s,value:o.address.neighborhood})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Cidade"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"city",id:"offerValueField",onChange:s,value:o.address.city})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Formas de Pagamento"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"paymentForms",id:"paymentFormsField",onChange:s,value:o.paymentForms})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Entrega"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"delivery",id:"deliveryField",onChange:s,value:o.delivery})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Retira"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"takeaway",id:"takeawayField",onChange:s,value:o.takeaway})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Hor\xe1rio retirada inicio"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"startTime",id:"startTimeField",onChange:s,value:o.takeawayTime.startTime})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Hor\xe1rio Retirada Final"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"endTime",id:"endTimeField",onChange:s,value:o.takeawayTime.endTime})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phone"},"Photo"),l.a.createElement("input",{className:"form-control form-control-lg col-5",name:"availableQty",id:"offerValueField",onChange:s,value:o.phone})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},"Save Edit")))},B=[];var V=function(){var e=Object(n.useState)({}),a=Object(d.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("loggedInUser")||'""');r(Object(p.a)({},e))}),[]);var o=Object(n.useState)([]),c=Object(d.a)(o,2),s=c[0],h=c[1];return Object(n.useEffect)((function(){!function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/offers");case 3:a=e.sent,h(Object(i.a)(a.data)),B=Object(i.a)(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[]),l.a.createElement(f.a,null,l.a.createElement("div",null,l.a.createElement(D,{offers:s,setOffers:h}),l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/home",render:function(){return l.a.createElement(U,{allOffers:B,offers:s,setOffers:h})}}),l.a.createElement(b.a,{path:"/user/signup",exact:!0,component:N}),l.a.createElement(b.a,{path:"/user/login",exact:!0,render:function(){return l.a.createElement(O,{user:t,setUser:r})}}),l.a.createElement(b.a,{path:"/user/logout",exact:!0,render:function(){return l.a.createElement(j,{setUser:r})}}),l.a.createElement(b.a,{path:"/offers",render:function(){return l.a.createElement(T,{allOffers:B,offers:s,setOffers:h})},exact:!0,user:""}),l.a.createElement(b.a,{path:"/offer/create",render:function(){return l.a.createElement(x,{offers:s,setOffers:h})}}),l.a.createElement(b.a,{path:"/offer/:id",exact:!0,component:P}),l.a.createElement(b.a,{path:"/offer/update/:id",render:function(){return l.a.createElement(_,{offers:s,setOffers:h})}}),l.a.createElement(b.a,{path:"/offer/delete/:id",exact:!0,render:function(){return l.a.createElement(L,{offers:s,setOffers:h})}}),l.a.createElement(b.a,{path:"/offer/update/:id",component:_}),l.a.createElement(b.a,{path:"/establishment/profile/:id",exact:!0,component:Q}),l.a.createElement(b.a,{path:"/establishment/profile/update/:id",exact:!0,component:R}),l.a.createElement(b.a,{path:"/blog/AboutUs",component:I}),l.a.createElement(b.a,{path:"/blog/HowWorks",component:q}),l.a.createElement(b.a,{path:"/establishment/profile/:id",exact:!0,component:Q}),l.a.createElement(b.a,{path:"/establishment/profile/offers/:id",component:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.a40a15ac.chunk.js.map