(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),o=(n(12),n(6)),s=n(2),l=n.n(s),u=n(5),m=n(1),f=(n(14),n(15),function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"loader__window"},c.a.createElement("img",{className:"loader__logo",src:"./images/star-ship.png",alt:""}),"Loading data ..."))}),p=(n(16),function(e){var t=e.dataItem,n=e.handleEntities,a=Object.entries(t).map(function(e){return"object"!==typeof e[1]?c.a.createElement("div",{key:e[0],className:"item__container"},c.a.createElement("p",{className:"item__key"},e[0]),c.a.createElement("p",{className:"item__value"},e[1])):c.a.createElement("div",{key:e[0],className:"item__container"},c.a.createElement("button",{type:"button",onClick:function(){n(e[1],e[0],t)},className:"item__entity"},"See"," ",e[0]))});return c.a.createElement("li",{className:"item"},a.map(function(e){return e}))}),d=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("Films"),s=Object(m.a)(i,2),d=s[0],v=s[1],E=Object(a.useState)(!1),_=Object(m.a)(E,2),b=_[0],h=_[1],j=Object(a.useState)(""),w=Object(m.a)(j,2),N=w[0],O=w[1],y=Object(a.useRef)();Object(a.useEffect)(function(){Object(u.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch("https://swapi.co/api/films/");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n.results),h(!1);case 9:case"end":return e.stop()}},e)}))()},[]);var g=function(e,t,n){h(!0);var a=n.title||n.name;if(null===e)return v("we cant find\n               ".concat(t.toUpperCase(),"\n               of ").concat(a)),void y.current.scrollIntoView();v("".concat(t.toUpperCase(),"\n     of ").concat(a));var c=e.map(function(e){return fetch(e)});Promise.all(c).then(function(e){return e.map(function(e){return e.json()})}).then(function(e){return Promise.all(e)}).then(function(e){if(Array.isArray(e)){var n=Object(o.a)(e);return 0===e.length?void v("we cant find\n               ".concat(t.toUpperCase(),"\n               of ").concat(a)):(void 0!==e[0].name&&n.sort(function(e,t){return e.name.localeCompare(t.name)}),void r(n))}r(e)}).finally(function(){h(!1),y.current.scrollIntoView()})},k=Object(a.useMemo)(function(){return n.filter(function(e){if(""===N)return!0;for(var t=Object.values(e).filter(function(e){return"string"===typeof e}),n=0;n<t.length;n+=1)if(t[n].toLowerCase().includes(N.toLowerCase()))return!0;return!1})},[N,n]);return c.a.createElement("main",null,c.a.createElement("section",{className:"data-list-section"},b&&c.a.createElement(f,null),c.a.createElement("h2",{ref:y,className:"data-list-section__subHeading"},d),c.a.createElement("div",{className:"data-list-section__search-container"},c.a.createElement("input",{placeholder:"Type for search",value:N,onChange:function(e){var t=e.target;O(t.value)},className:"data-list-section__search-input",type:"text"})),c.a.createElement("ul",{className:"data"},k.map(function(e){return c.a.createElement(p,{key:e.title||e.name,handleEntities:g,dataItem:e})}))))};var v=function(){return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app__heading"},"STAR WARS INFO"),c.a.createElement(d,null))};i.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.499f9adf.chunk.js.map