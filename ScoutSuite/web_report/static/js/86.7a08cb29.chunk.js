(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[86],{532:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(640));n(103);t.default=function(e){return e.data?Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Informations"}),Object(a.jsx)(c.c,{label:"ARN",valuePath:"arn"}),Object(a.jsx)(c.c,{label:"ID",valuePath:"id"}),Object(a.jsx)(c.c,{label:"Architecture",valuePath:"Architecture"}),Object(a.jsx)(c.c,{label:"Public",valuePath:"Public"})]}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),c=n.n(a),r={path_to_issue:[],item:{}},i=c.a.createContext(r),o=c.a.createContext(""),l=c.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),c=n(1),r=n(0),i=n(633),o=n(7),l=n.n(o),u=n(15),s=n.n(u),b=n(10),d=n.n(b),j=n(637),f=n(103),p=n(83),h=(n(641),n(624)),v=n(191),x=n.n(v),O=n(192),P=n(130),m=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(r.useContext)(P.a),l=o.exceptions,u=o.addException,b=Object(O.b)().enqueueSnackbar,d=s()(l,[t,n],[]).includes(a);return Object(c.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(c.jsx)(h.a,{disabled:d,size:"small",startIcon:Object(c.jsx)(x.a,{}),className:"exception-btn",onClick:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},A=n(29),C=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,b=e.errorPath,h=e.className,v=e.inline,x=e.tooltip,O=e.tooltipProps,P=e.renderValue,C=e.basePathOverwrite,g=Object(A.g)(),N=Object(r.useContext)(j.a),k=Object(r.useContext)(j.b),w=Object(r.useContext)(j.c),D=Object(f.a)(C||k,u),I=P(e.value||s()(N.item,D,e.value));("boolean"===typeof I&&(I=String(I)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(f.a)(C||k,e)})):t=[D];var _=t.some((function(e){return N.path_to_issues.includes(e)})),E=N.level;if(Object(r.useEffect)((function(){_&&w(E)}),[E]),void 0===I||null===I)return null;var y=Object(c.jsx)(m,{service:g.service,finding:g.finding,path:"".concat(N.path,".").concat(t[0])}),z=Object(c.jsxs)("span",{className:l()(_&&l()("issue",E)),children:[I,_&&y]});return Object(c.jsx)(p.a,{className:l()(h,"partial-value",{inline:v}),label:n,separator:o,value:x?Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({title:I},O),{},{children:z})):z})};C.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=C},639:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,o=Object(c.useContext)(r.b);return Object(a.jsx)(r.b.Provider,{value:Object(i.a)(o,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),c=(n(0),n(637)),r=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(c.a.Provider,{value:t,children:n})}),i=n(639),o=n(638)},641:function(e,t,n){}}]);
//# sourceMappingURL=86.7a08cb29.chunk.js.map