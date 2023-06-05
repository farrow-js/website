"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[8760],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=i,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={slug:"/guide",title:"Introduction",authors:["tqma113"],tags:[],sidebar_position:0},a=void 0,l={unversionedId:"guide/introduction",id:"guide/introduction",title:"Introduction",description:"\u8fd9\u4e00\u90e8\u5206\u5c06\u4ecb\u7ecd\u5728\u4e00\u4e9b\u7279\u5b9a\u573a\u666f\u4e0b\uff0c\u600e\u4e48\u4f7f\u7528 Farrow \u6765\u89e3\u51b3\u4e00\u4e9b\u95ee\u9898\u548c\u5b8c\u6210\u4e00\u4e9b\u529f\u80fd\u3002",source:"@site/docs/guide/introduction.mdx",sourceDirName:"guide",slug:"/guide",permalink:"/docs/guide",draft:!1,editUrl:"https://github.com/farrow-js/docs/docs/guide/introduction.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/guide",title:"Introduction",authors:["tqma113"],tags:[],sidebar_position:0},sidebar:"guideSidebar",previous:{title:"Work in Express/Koa",permalink:"/docs/guide/http-server/express-koa"},next:{title:"Introduction",permalink:"/docs/guide/rpc-server"}},c={},u=[],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u5c06\u4ecb\u7ecd\u5728\u4e00\u4e9b\u7279\u5b9a\u573a\u666f\u4e0b\uff0c\u600e\u4e48\u4f7f\u7528 Farrow \u6765\u89e3\u51b3\u4e00\u4e9b\u95ee\u9898\u548c\u5b8c\u6210\u4e00\u4e9b\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u662f\u4e24\u4e2a\u6bd4\u8f83\u6613\u4e8e\u7406\u89e3\u7684\u573a\u666f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guide/http-server"},"HTTP Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guide/rpc-server"},"RPC Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guide/server-and-client/create-server"},"Server and Client"))),(0,i.kt)("p",null,"\u7136\u540e\u662f\u4e24\u4e2a\u9762\u5411\u57fa\u7840\u5e93\u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u4f1a\u5c55\u793a\u4ed6\u4eec\u7684\u80fd\u529b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guide/schema/validation-type"},"Schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guide/middleware-pipeline/base"},"Middleware and Pipeline"))))}d.isMDXComponent=!0}}]);