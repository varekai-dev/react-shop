(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),r=c(7),s=c.n(r);c(14),c(15);function o(){return Object(n.jsx)("nav",{className:" cyan darken-2",children:Object(n.jsxs)("div",{className:"nav-wrapper",children:[Object(n.jsx)("a",{href:"/",className:"brand-logo",children:"React Shop"}),Object(n.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/varekai-dev/react-shop",children:"Repo"})})})]})})}function l(){return Object(n.jsx)("footer",{className:"page-footer  cyan darken-2",children:Object(n.jsx)("div",{className:"footer-copyright",children:Object(n.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(n.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/varekai-dev/react-shop",children:"Repo"})]})})})}var d=c(8),j=c(2),u=c(3);var b=function(){return Object(n.jsx)("div",{className:"progress",children:Object(n.jsx)("div",{className:"indeterminate"})})};var h=function(e){var t=e.id,c=e.name,a=e.description,i=e.price,r=e.full_background,s=e.addToBasket,o=void 0===s?Function.prototype:s;return Object(n.jsxs)("div",{className:"card",id:t,children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{src:r,alt:c})}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("span",{className:"card-title",children:c}),Object(n.jsx)("p",{children:a})]}),Object(n.jsxs)("div",{className:"card-action",children:[Object(n.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:c,price:i,background:r})},children:"Buy"}),Object(n.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i," points"]})]})]})};var m=function(e){var t=e.goods,c=void 0===t?[]:t,a=e.addToBasket,i=void 0===a?Function.prototype:a;return c.length?Object(n.jsx)("div",{className:"goods",children:c.map((function(e){return Object(n.jsx)(h,Object(j.a)(Object(j.a)({},e),{},{addToBasket:i}),e.id)}))}):Object(n.jsx)("h3",{children:"Nothing here"})};var O=function(e){var t=e.quantity,c=void 0===t?0:t,a=e.handleBasketShow,i=void 0===a?Function.prototype:a;return Object(n.jsxs)("div",{className:"cart  light-blue darken-3 white-text",onClick:i,children:[Object(n.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(n.jsx)("span",{className:"card-quantity",children:c}):null]})};var v=function(e){var t=e.id,c=e.name,a=e.price,i=e.quantity,r=e.removeFromBasket,s=void 0===r?Function.prototype:r,o=e.background,l=e.changeQuantity,d=void 0===l?Function.prototype:l;return Object(n.jsxs)("li",{className:"collection-item",children:[Object(n.jsx)("img",{src:o,alt:c}),Object(n.jsxs)("div",{className:"collection-item__text",onClick:function(e){return d(e,t)},children:[c," x ",Object(n.jsx)("i",{className:"material-icons remove",children:"remove"})," ",i," ",Object(n.jsx)("i",{className:"material-icons add",children:"add"})," = ",a*i," poitns"]}),Object(n.jsx)("span",{className:"secondary-content",children:Object(n.jsx)("i",{className:"material-icons basket-delete",onClick:function(){return s(t)},children:"close"})})]})};var p=function(e){var t=e.order,c=void 0===t?[]:t,a=e.handleBasketShow,i=void 0===a?Function.prototype:a,r=e.removeFromBasket,s=void 0===r?Function.prototype:r,o=e.changeQuantity,l=void 0===o?Function.prototype:o,d=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(n.jsxs)("ul",{className:"collection basket-list",children:[Object(n.jsx)("li",{className:"collection-item active",children:"Basket"}),c.length?c.map((function(e){return Object(n.jsx)(v,Object(j.a)(Object(j.a)({},e),{},{removeFromBasket:s,changeQuantity:l}),e.id)})):Object(n.jsx)("li",{className:"collection-item",children:"Basket is Empty"}),Object(n.jsxs)("li",{className:"collection-item price",children:["Total price: ",d," points"]}),Object(n.jsx)("li",{className:"collection-item order ",children:Object(n.jsx)("button",{className:"secondary-content btn",children:"Order"})}),Object(n.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})};var f=function(e){var t=e.name,c=void 0===t?"":t,i=e.closeAlert,r=void 0===i?Function.prototype:i;return Object(a.useEffect)((function(){var e=setTimeout(r,2e3);return function(){clearTimeout(e)}}),[c]),Object(n.jsx)("div",{id:"toast-container",children:Object(n.jsxs)("div",{className:"toast",children:[c," added to basket"]})})};var x=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(!0),s=Object(u.a)(r,2),o=s[0],l=s[1],h=Object(a.useState)([]),v=Object(u.a)(h,2),x=v[0],g=v[1],N=Object(a.useState)(!1),y=Object(u.a)(N,2),k=y[0],F=y[1],B=Object(a.useState)(""),S=Object(u.a)(B,2),q=S[0],w=S[1],T=function(){F(!k)};return Object(a.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=eng",{headers:{Authorization:"febeb68d-92a09738-b0596ce4-9be7e4f1"}}).then((function(e){return e.json()})).then((function(e){e.featured&&i(e.featured),l(!1)}))}),[]),Object(n.jsxs)("main",{className:"container content",children:[Object(n.jsx)(O,{quantity:x.length,handleBasketShow:T}),k?Object(n.jsx)(p,{handleBasketShow:T,order:x,removeFromBasket:function(e){var t=x.filter((function(t){return t.id!==e}));g(t)},changeQuantity:function(e,t){if(e.target.classList.contains("add")){var c=x.map((function(e){if(e.id===t){var c=e.quantity+1;return Object(j.a)(Object(j.a)({},e),{},{quantity:c})}return e}));g(c)}if(e.target.classList.contains("remove")){var n=x.map((function(e){if(e.id===t){var c=e.quantity-1;return Object(j.a)(Object(j.a)({},e),{},{quantity:c>0?c:0})}return e}));g(n)}}}):null,o?Object(n.jsx)(b,{}):Object(n.jsx)(m,{goods:c,addToBasket:function(e){var t=x.findIndex((function(t){return t.id===e.id}));if(!(t<0)){var c=x.map((function(e,c){return c===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));return g(c)}var n=Object(j.a)(Object(j.a)({},e),{},{quantity:1});g([].concat(Object(d.a)(x),[n])),w(e.name)}}),q&&Object(n.jsx)(f,{name:q,closeAlert:function(){w("")}})]})};var g=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o,{}),Object(n.jsx)(x,{}),Object(n.jsx)(l,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.bc1589af.chunk.js.map