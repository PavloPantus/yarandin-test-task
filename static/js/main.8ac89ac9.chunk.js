(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),i=a(6),o=a(2),l=a.n(o),u=a(5),m=a(1),f=(a(13),"https://swapi.co/api/films/");var d=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)("Films"),o=Object(m.a)(s,2),d=o[0],p=o[1],v=Object(n.useState)(!1),_=Object(m.a)(v,2),b=_[0],h=_[1],j=Object(n.useState)(""),E=Object(m.a)(j,2),O=E[0],w=E[1],N=Object(n.useRef)();Object(n.useEffect)(function(){Object(u.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch(f);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a.results),h(!1);case 9:case"end":return e.stop()}},e)}))()},[]);var y=Object(n.useMemo)(function(){return a.filter(function(e){if(""===O)return!0;for(var t=Object.values(e).filter(function(e){return"string"===typeof e}),a=0;a<t.length;a+=1)if(t[a].toLowerCase().includes(O.toLowerCase()))return!0;return!1})},[O,a]);return r.a.createElement("main",null,r.a.createElement("section",{className:"data-list-section"},b&&r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader__window"},"Loading data ...")),r.a.createElement("h1",{className:"data-list-section__heading"},"STAR WARS INFO"),r.a.createElement("h2",{ref:N,className:"data-list-section__subHeading"},d),r.a.createElement("div",{className:"data-list-section__search-container"},r.a.createElement("input",{placeholder:"Type for search",value:O,onChange:function(e){var t=e.target;w(t.value)},className:"data-list-section__search-input",type:"text"})),r.a.createElement("ul",{className:"data"},y.map(function(e){var t=Object.entries(e).map(function(e){return"object"!==typeof e[1]?r.a.createElement("div",{className:"data__container"},r.a.createElement("p",{className:"data__key"},e[0]),r.a.createElement("p",{className:"data__value"},e[1])):r.a.createElement("div",{className:"data__container"},r.a.createElement("button",{type:"button",onClick:function(){!function(e,t){h(!0),p(t.toUpperCase());var a=e.map(function(e){return fetch(e)});Promise.all(a).then(function(e){return e.map(function(e){return e.json()})}).then(function(e){return Promise.all(e)}).then(function(e){if(Array.isArray(e)){var a=Object(i.a)(e);return 0===e.length?void p("we cant find ".concat(t.toUpperCase())):(void 0!==e[0].name&&a.sort(function(e,t){return e.name.localeCompare(t.name)}),void c(a))}c(e)}).finally(function(){h(!1),N.current.scrollIntoView()})}(e[1],e[0])},className:"data__entity"},"See"," ",e[0]))});return r.a.createElement("li",{className:"data__item"},t.map(function(e){return e}))}))))};s.a.render(r.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8ac89ac9.chunk.js.map