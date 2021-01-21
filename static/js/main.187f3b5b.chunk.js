(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(7),s=n.n(r);n(14),n(15);function o(){return Object(c.jsx)("nav",{className:" cyan darken-2",children:Object(c.jsxs)("div",{className:"nav-wrapper",children:[Object(c.jsx)("a",{href:"!#",className:"brand-logo",children:"React Shop"}),Object(c.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function l(){return Object(c.jsx)("footer",{className:"page-footer  cyan darken-2",children:Object(c.jsx)("div",{className:"footer-copyright",children:Object(c.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(c.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var d=n(8),j=n(2),u=n(3);var b=function(){return Object(c.jsx)("div",{className:"progress",children:Object(c.jsx)("div",{className:"indeterminate"})})};var h=function(e){var t=e.id,n=e.name,a=e.description,i=e.price,r=e.full_background,s=e.addToBasket,o=void 0===s?Function.prototype:s;return Object(c.jsxs)("div",{className:"card",id:t,children:[Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:r,alt:n})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("span",{className:"card-title",children:n}),Object(c.jsx)("p",{children:a})]}),Object(c.jsxs)("div",{className:"card-action",children:[Object(c.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:n,price:i,background:r})},children:"Buy"}),Object(c.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i," points"]})]})]})};var m=function(e){var t=e.goods,n=void 0===t?[]:t,a=e.addToBasket,i=void 0===a?Function.prototype:a;return n.length?Object(c.jsx)("div",{className:"goods",children:n.map((function(e){return Object(c.jsx)(h,Object(j.a)(Object(j.a)({},e),{},{addToBasket:i}),e.id)}))}):Object(c.jsx)("h3",{children:"Nothing here"})};var O=function(e){var t=e.quantity,n=void 0===t?0:t,a=e.handleBasketShow,i=void 0===a?Function.prototype:a;return Object(c.jsxs)("div",{className:"cart  light-blue darken-3 white-text",onClick:i,children:[Object(c.jsx)("i",{className:"material-icons",children:"shopping_cart"}),n?Object(c.jsx)("span",{className:"card-quantity",children:n}):null]})};var v=function(e){var t=e.id,n=e.name,a=e.price,i=e.quantity,r=e.removeFromBasket,s=void 0===r?Function.prototype:r,o=e.background,l=e.changeQuantity,d=void 0===l?Function.prototype:l;return Object(c.jsxs)("li",{className:"collection-item",children:[Object(c.jsx)("img",{src:o,alt:n}),Object(c.jsxs)("div",{className:"collection-item__text",onClick:function(e){return d(e,t)},children:[n," x ",Object(c.jsx)("i",{className:"material-icons remove",children:"remove"})," ",i," ",Object(c.jsx)("i",{className:"material-icons add",children:"add"})," = ",a*i," poitns"]}),Object(c.jsx)("span",{className:"secondary-content",children:Object(c.jsx)("i",{className:"material-icons basket-delete",onClick:function(){return s(t)},children:"close"})})]})};var f=function(e){var t=e.order,n=void 0===t?[]:t,a=e.handleBasketShow,i=void 0===a?Function.prototype:a,r=e.removeFromBasket,s=void 0===r?Function.prototype:r,o=e.changeQuantity,l=void 0===o?Function.prototype:o,d=n.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(c.jsxs)("ul",{className:"collection basket-list",children:[Object(c.jsx)("li",{className:"collection-item active",children:"Basket"}),n.length?n.map((function(e){return Object(c.jsx)(v,Object(j.a)(Object(j.a)({},e),{},{removeFromBasket:s,changeQuantity:l}),e.id)})):Object(c.jsx)("li",{className:"collection-item",children:"Basket is Empty"}),Object(c.jsxs)("li",{className:"collection-item price",children:["Total price: ",d," points"]}),Object(c.jsx)("li",{className:"collection-item order ",children:Object(c.jsx)("button",{className:"secondary-content btn",children:"Order"})}),Object(c.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})};var x=function(e){var t=e.name,n=void 0===t?"":t,i=e.closeAlert,r=void 0===i?Function.prototype:i;return Object(a.useEffect)((function(){var e=setTimeout(r,2e3);return function(){clearTimeout(e)}}),[n]),Object(c.jsx)("div",{id:"toast-container",children:Object(c.jsxs)("div",{className:"toast",children:[n," added to basket"]})})};var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!0),s=Object(u.a)(r,2),o=s[0],l=s[1],h=Object(a.useState)([]),v=Object(u.a)(h,2),p=v[0],g=v[1],N=Object(a.useState)(!1),y=Object(u.a)(N,2),k=y[0],F=y[1],B=Object(a.useState)(""),S=Object(u.a)(B,2),q=S[0],w=S[1],T=function(){F(!k)};return Object(a.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=eng",{headers:{Authorization:"febeb68d-92a09738-b0596ce4-9be7e4f1"}}).then((function(e){return e.json()})).then((function(e){e.featured&&i(e.featured),l(!1)}))}),[]),Object(c.jsxs)("main",{className:"container content",children:[Object(c.jsx)(O,{quantity:p.length,handleBasketShow:T}),k?Object(c.jsx)(f,{handleBasketShow:T,order:p,removeFromBasket:function(e){var t=p.filter((function(t){return t.id!==e}));g(t)},changeQuantity:function(e,t){if(e.target.classList.contains("add")){var n=p.map((function(e){if(e.id===t){var n=e.quantity+1;return Object(j.a)(Object(j.a)({},e),{},{quantity:n})}return e}));g(n)}if(e.target.classList.contains("remove")){var c=p.map((function(e){if(e.id===t){var n=e.quantity-1;return Object(j.a)(Object(j.a)({},e),{},{quantity:n>0?n:0})}return e}));g(c)}}}):null,o?Object(c.jsx)(b,{}):Object(c.jsx)(m,{goods:n,addToBasket:function(e){var t=p.findIndex((function(t){return t.id===e.id}));if(!(t<0)){var n=p.map((function(e,n){return n===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));return g(n)}var c=Object(j.a)(Object(j.a)({},e),{},{quantity:1});g([].concat(Object(d.a)(p),[c])),w(e.name)}}),q&&Object(c.jsx)(x,{name:q,closeAlert:function(){w("")}})]})};var g=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(p,{}),Object(c.jsx)(l,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.187f3b5b.chunk.js.map