(this.webpackJsonpdev=this.webpackJsonpdev||[]).push([[0],{20:function(e,t,a){},23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),i=(a(28),a(8)),u=a(1);function o(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"We haven't implemented this yet :-("),l.a.createElement("p",null,"Can you help us implement it ",l.a.createElement("a",{href:"https://github.com/datastructures-dev/datastructures-dev.github.io/"},"here")))}function m(e){return l.a.createElement("ul",null,e.pages.map((function(t){var a="".concat(e.prefix,"/").concat(t.route);return l.a.createElement("li",{key:a},l.a.createElement(i.b,{to:a},t.name))})))}function s(e){return l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:e.prefix},e.rootPage),e.pages.map((function(t){var a="".concat(e.prefix,"/").concat(t.route);return l.a.createElement(u.b,{key:a,exact:!0,path:a},t.page)})),e.children)}a(34);function h(e){return l.a.createElement("div",{className:"card-grid ".concat(e.className)},e.children)}function g(e){return l.a.createElement("div",{className:"card ".concat(e.className)},e.children)}var E=a(3);a(35);function d(e){return l.a.createElement("section",{className:"Controls"},e.children)}function p(e){return l.a.createElement("div",{className:"ControlGroup"},e.children)}function f(e){return l.a.createElement("section",{className:"Visual"},e.children)}function b(e){return l.a.createElement("section",{className:"Complexity"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},"Complexity"))),l.a.createElement("tbody",null,e.complexity.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.complexity))})))))}function v(e){return l.a.createElement("section",{className:"About"},e.children)}function x(e){return l.a.createElement("article",{className:"VisualPage"},l.a.createElement("h1",null,e.title),e.children)}a(36);function y(e){return l.a.createElement("div",{className:"linked-list"},e.children)}function k(e){return l.a.createElement("div",{className:"linked-list-node"+(e.highlight?" highlight":"")},e.children)}function O(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(-1),i=Object(E.a)(c,2),u=i[0],o=i[1],m=Object(n.useState)(-1),s=Object(E.a)(m,2),h=s[0],g=s[1],b=Object(n.useState)(),v=Object(E.a)(b,2),x=v[0],O=v[1],j=Object(n.useState)(),w=Object(E.a)(j,2),A=w[0],S=w[1],C=Object(n.useState)(),F=Object(E.a)(C,2),N=F[0],I=F[1];function L(e){for(var t=a.map((function(e){return Object.assign({},e,{highlight:!1})})),n=!1,l={next:e?-1:u,value:x,highlight:!1},c=0;c<t.length&&!n;c++)void 0===t[c]&&(t[c]=l,n=!0);n||(c=t.length,t.push(l)),e?(-1===h||(t[h].next=c),g(c),-1===u&&o(c)):(o(c),-1===h&&g(c)),r(t)}var q=null,P=!1;for(var D=[],T=u;-1!==T;)D.push(l.a.createElement(k,{key:T,highlight:a[T].highlight},a[T].value)),T=a[T].next;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null,l.a.createElement(p,null,l.a.createElement("label",{htmlFor:"add"},"Add item"),l.a.createElement("input",{name:"add",type:"text",onChange:function(e){return O(e.target.value)}}),l.a.createElement("button",{onClick:function(){return L(!1)}},"Add Front"),l.a.createElement("button",{onClick:function(){return L(!0)}},"Add End")),l.a.createElement(p,null,l.a.createElement("label",{htmlFor:"search"},"Search"),l.a.createElement("input",{name:"search",onChange:function(e){return S(e.target.value)}}),l.a.createElement("button",{onClick:function(){r(a.map((function(e,t){return Object.assign({},e,{highlight:!1})})));var e=u,t=[],n=setInterval((function(){if(-1===e)return r(a.map((function(e,a){return Object.assign({},e,{highlight:t.includes(a)&&e.value===A})}))),void clearInterval(n);r(a.map((function(a,n){return Object.assign({},a,{highlight:n===e||a.value===A&&t.includes(n)})}))),t.push(e),e=-1!==e&&a[e].value===A?-1:a[e].next}),1e3)}},"Search")),l.a.createElement(p,null,l.a.createElement("label",{htmlFor:"remove"},"Remove"),l.a.createElement("input",{name:"remove",onChange:function(e){return I(e.target.value)}}),l.a.createElement("button",{onClick:function(){!function(e){r(a.map((function(e,t){return Object.assign({},e,{highlight:!1})})));var t=u,n=[],l=setInterval((function(){if(-1===t)return r(a.map((function(t,a){return Object.assign({},t,{highlight:n.includes(a)&&t.value===e})}))),void clearInterval(l);r(a.map((function(a,l){return Object.assign({},a,{highlight:l===t||a.value===e&&n.includes(l)})}))),n.push(t),-1!==t&&a[t].value===e?(P=!0,q=t,t=-1,console.log("Found")):t=a[t].next}),500)}(N),setTimeout((function(){if(!1===P)alert("Value: "+N+" is not in the list");else{for(var e=Object.assign([],a),t=null,n=u;n!==q;)t=n,n=a[n].next,console.log("Here "+t+" "+n);if(console.log("tHere "+t+" "+n),null===t&&-1===e[n].next)o(-1),r([]);else if(null!==t){var l=e[n].next;e[t].next=l,console.log(e),r(e)}else{var c=e[n].next;o(c),e.splice(n,1),console.log(e),r(e)}}}),2e3)}},"Remove"))),l.a.createElement(f,null,l.a.createElement(y,null,D)))}var j=a(11),w=a(40);a(37);function A(e){return l.a.createElement("div",{className:"stack"},e.children)}function S(e){return l.a.createElement(w.a,{appear:!0,in:e.show,onExited:e.onExited,timeout:200,unmountOnExit:!0,classNames:"stack-node"},l.a.createElement("div",{className:"stack-node"+(e.highlight?" highlight":"")},e.children))}function C(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),i=Object(E.a)(c,2),u=i[0],o=i[1];function m(){r(a.slice(0,a.length-1))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null,l.a.createElement(p,null,l.a.createElement("label",{htmlFor:"add"},"Add item"),l.a.createElement("input",{name:"add",type:"text",onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{onClick:function(){r([].concat(Object(j.a)(a),[{value:u,highlight:!1,show:!0}]))}},"Push")),l.a.createElement(p,null,l.a.createElement("button",{onClick:function(){r([].concat(Object(j.a)(a.slice(0,a.length-1)),[Object.assign({},a[a.length-1],{show:!1})]))}},"Pop"))),l.a.createElement(f,null,l.a.createElement(A,null,a.map((function(e,t){return l.a.createElement(S,{key:t,index:t,show:e.show,highlight:e.highlight,onExited:m},e.value)})))))}a(20);function F(e){return l.a.createElement("div",{className:"queue"},e.children)}function N(e){return l.a.createElement(w.a,{appear:!0,in:e.show,onExited:e.onExited,timeout:200,unmountOnExit:!0,classNames:"queue-node"},l.a.createElement("div",{className:"queue-node"+(e.highlight?" highlight":"")},e.children))}function I(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),i=Object(E.a)(c,2),u=i[0],o=i[1];function m(){r(a.slice(1))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null,l.a.createElement(p,null,l.a.createElement("label",{htmlFor:"add"},"Add item"),l.a.createElement("input",{name:"add",type:"text",onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{onClick:function(){r([].concat(Object(j.a)(a),[{value:u,highlight:!1,show:!0}]))}},"Enqueue")),l.a.createElement(p,null,l.a.createElement("button",{onClick:function(){r([Object.assign({},a[0],{show:!1})].concat(Object(j.a)(a.slice(1))))}},"Dequeue"))),l.a.createElement(f,null,l.a.createElement(F,null,a.map((function(e,t){return l.a.createElement(N,{key:t,index:t,show:e.show,highlight:e.highlight,onExited:m},e.value)})))))}function L(e){return l.a.createElement("div",{className:"array"},e.children)}function q(e){return l.a.createElement(w.a,{appear:!0,in:e.show,onExited:e.onExited,timeout:200,unmountOnExit:!0,classNames:"queue-node"},l.a.createElement("div",{className:"queue-node"+(e.highlight?" highlight":"")},e.children))}function P(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(-1),i=Object(E.a)(c,2),u=i[0],o=i[1],m=Object(n.useState)(0),s=Object(E.a)(m,2),h=s[0],g=s[1],b=Object(n.useState)(0),v=Object(E.a)(b,2),x=v[0],y=v[1];function k(){r(a.slice(1))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null,l.a.createElement(p,null,l.a.createElement("label",{htmlFor:"create"},"Array Length"),l.a.createElement("input",{name:"add",type:"text",onChange:function(e){return g(e.target.value)}}),l.a.createElement("button",{onClick:function(){for(var e=[],t=0;t<h;t++)e.push({value:" ",highlight:!1,show:!0});r(e),console.log(a)}},"Create Array")),l.a.createElement("label",{htmlFor:"index"},"Index"),l.a.createElement("input",{name:"index",type:"number",onChange:function(e){return y(e.target.value)}}),l.a.createElement(p,null,l.a.createElement("label",{htmlFor:"add"},"Add item"),l.a.createElement("input",{name:"add",type:"text",onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{onClick:function(){console.log("Adding: "+u+" "+h);var e=Object.assign([],a);e[x]={value:u,highlight:!1,show:!0},r(e)}},"Insert at Index")),l.a.createElement(p,null,l.a.createElement("button",{onClick:function(){var e=Object.assign([],a);e[x]={value:" ",highlight:!1,show:!0},r(e)}},"Remove from Index"))),l.a.createElement(f,null,l.a.createElement(L,null,a.map((function(e,t){return l.a.createElement(q,{key:t,index:t,show:e.show,highlight:e.highlight,onExited:k},e.value)})))))}var D=[{name:"Array",route:"array",page:function(e){return l.a.createElement(x,{title:"Array"},l.a.createElement(v,null,l.a.createElement("h4",null,"What is an Array?"),"Arrays are sequential blocks of memory in a device that store data. They are not dynamic (size won't change). They are extremely useful if we know that input will be bounded in within a fixed size (like pictures)"),l.a.createElement(b,{complexity:[{name:"Indexing",complexity:"\u0398(1)"},{name:"Set Element at Index",complexity:"\u0398(1)"},{name:"Average wasted space",complexity:"\u0398(1)"}]}),l.a.createElement(P,null))}},{name:"Queue",route:"queue",page:function(e){return l.a.createElement(x,{title:"Queue"},l.a.createElement(v,null,l.a.createElement("h4",null,"What is a Queue?"),"Queues are a FIFO (first in- first out) structure. They are used in a lot of reactive and UI related tasks, think back button on browsers"),l.a.createElement(b,{complexity:[{name:"Indexing",complexity:"\u0398(n)"},{name:"Enqueue/Dequeue Element",complexity:"\u0398(1)"},{name:"Average wasted space",complexity:"\u0398(1)"}]}),l.a.createElement(I,null))}},{name:"Stack",route:"stack",page:function(e){return l.a.createElement(x,{title:"Stack"},l.a.createElement(v,null,l.a.createElement("h4",null,"What is a Stack?"),"Stacks are a LIFO (last in- first out) structure. They are used in a lot of reactive and UI related tasks, think back button on browsers"),l.a.createElement(b,{complexity:[{name:"Indexing",complexity:"\u0398(n)"},{name:"Push/Pop Element",complexity:"\u0398(1)"},{name:"Average wasted space",complexity:"\u0398(1)"}]}),l.a.createElement(C,null))}},{name:"Linked List",route:"linked-list",page:function(e){return l.a.createElement(x,{title:"Linked List"},l.a.createElement(v,null,l.a.createElement("h4",null,"What is a Linked List?"),"Linked List is a linear data structure and it is very common data structure which consists of group of nodes in a sequence which is divided in two parts. Each node consists of its own data and the address of the next node and forms a chain."),l.a.createElement(b,{complexity:[{name:"Indexing",complexity:"\u0398(n)"},{name:"Insert/delete at beginning",complexity:"\u0398(1)"},{name:"Insert/delete at end (when last element known)",complexity:"\u0398(1)"},{name:"Insert/delete in middle",complexity:"\u0398(n) + \u0398(1)"},{name:"Average wasted space",complexity:"\u0398(1)"}]}),l.a.createElement(O,null))}},{name:"Doubly Linked List",route:"doubly-linked-list",page:o},{name:"Hash Table",route:"hash-table",page:o},{name:"Heap",route:"heap",page:o},{name:"Tree",route:"tree",page:o},{name:"3-4-5 Tree & red-black tree",route:"3-4-5-tree",page:o},{name:"Graph",route:"graph",page:o}];function T(){return l.a.createElement(h,null,l.a.createElement(g,null,l.a.createElement("h4",null,"Data Structures"),l.a.createElement(m,{prefix:"/data-structures",pages:D})))}var W=function(){return l.a.createElement(s,{prefix:"/data-structures",rootPage:T,pages:D})},B=[{name:"Linear",route:"linear",page:o},{name:"Binary",route:"binary",page:o},{name:"Breadth First",route:"breadth-first",page:o},{name:"Depth First",route:"depth-first",page:o}],H=function(){return l.a.createElement(g,null,l.a.createElement("h4",null,"Search"),l.a.createElement(m,{prefix:"/algorithms/search",pages:B}))},Q=function(){return l.a.createElement(s,{prefix:"/algorithms/search",rootPage:H,pages:B})},V=[{name:"Bubble",route:"bubble",page:o},{name:"Insertion",route:"insertion",page:o},{name:"Merge",route:"merge",page:o},{name:"Quick",route:"quick",page:o},{name:"Heap",route:"heap",page:o},{name:"Radix",route:"radix",page:o}],z=function(){return l.a.createElement(g,null,l.a.createElement("h4",null,"Sorting"),l.a.createElement(m,{prefix:"/algorithms/sorting",pages:V}))},R=function(){return l.a.createElement(s,{prefix:"/algorithms/sorting",rootPage:z,pages:V})},J=[{name:"Dijkstra's",route:"dijkstra",page:o},{name:"A*",route:"a-star",page:o},{name:"Bellman Ford",route:"bellman-ford",page:o}],M=function(){return l.a.createElement(g,null,l.a.createElement("h4",null,"Shortest Path"),l.a.createElement(m,{prefix:"/algorithms/shortest-path",pages:J}))},G=function(){return l.a.createElement(s,{prefix:"/algorithms/shortest-path",rootPage:M,pages:J})},U=[{name:"Matchings",route:"matchings",page:o},{name:"Linear Algebra",route:"linear-algebra",page:o}];function $(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Algorithms"),l.a.createElement(h,null,l.a.createElement(H,null),l.a.createElement(z,null),l.a.createElement(M,null),l.a.createElement(g,null,l.a.createElement("h4",null,"Other Algorithms"),l.a.createElement(m,{prefix:"/algorithms",pages:U}))))}var K=function(){return l.a.createElement(s,{prefix:"/algorithms",rootPage:$,pages:U},l.a.createElement(Q,null),l.a.createElement(R,null),l.a.createElement(G,null))};a(38);function X(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"DSA Visualization"),l.a.createElement("p",null,"Visualizations of data structures and algorithms"),l.a.createElement(T,null),l.a.createElement("h3",{style:{margin:"5rem auto",textAlign:"center"}},"We're still building this site so some links haven't been implemented yet!"))}function Y(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"About"),l.a.createElement("p",null,"A repository of reactive visualisations of common Abstract Data Structures and standard Algorithms created by ",l.a.createElement("a",{href:"https://danjones.dev"},"Daniel Jones")," and ",l.a.createElement("a",{href:"https://people.rit.edu/dl1683/"},"Devansh")))}function Z(){return l.a.createElement("header",{className:"NavBar"},l.a.createElement("nav",null,l.a.createElement(i.b,{to:"/"},"Home"),l.a.createElement(i.b,{to:"/data-structures"},"Data Structures"),l.a.createElement(i.b,{to:"/algorithms"},"Algorithms"),l.a.createElement(i.b,{to:"/about"},"About")))}function _(){return l.a.createElement(i.a,null,l.a.createElement(Z,null),l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/data-structures"},l.a.createElement(W,null)),l.a.createElement(u.b,{path:"/algorithms"},l.a.createElement(K,null)),l.a.createElement(u.b,{exact:!0,path:"/"},l.a.createElement(X,null)),l.a.createElement(u.b,{exact:!0,path:"/about"},l.a.createElement(Y,null)),l.a.createElement(u.b,{exact:!0,path:"/404"},l.a.createElement("h1",null,"Error 404")),l.a.createElement(u.b,{exact:!0,path:"*"},l.a.createElement(u.a,{to:"/404"}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.40556300.chunk.js.map