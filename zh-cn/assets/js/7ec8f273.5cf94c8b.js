"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[3008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Why Farrow",authors:["tqma113"],tags:["Why"],sidebar_position:0},i=void 0,s={unversionedId:"tutorial/why",id:"tutorial/why",title:"Why Farrow",description:"The Problem",source:"@site/docs/tutorial/why.mdx",sourceDirName:"tutorial",slug:"/tutorial/why",permalink:"/zh-cn/docs/tutorial/why",draft:!1,editUrl:"https://github.com/farrow-js/docs/docs/tutorial/why.mdx",tags:[{label:"Why",permalink:"/zh-cn/docs/tags/why"}],version:"current",sidebarPosition:0,frontMatter:{title:"Why Farrow",authors:["tqma113"],tags:["Why"],sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/zh-cn/docs/tutorial"}},l={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"The Difference",id:"the-difference",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Before fully embracing TypeScript, the backend frameworks our team had been using were Express and Koa. After fully embracing TypeScript, our team's requirement dimension increased - type-safety/type-friendliness."),(0,o.kt)("p",null,"We found that a JavaScript-oriented backend framework could not be fully type-safe simply by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"*.d.ts"),"."),(0,o.kt)("p",null,"Other upper-level TypeScript backend frameworks that are wrapped in Express.js or Koa.js still sometimes struggle to circumvent the type issues of the underlying framework."),(0,o.kt)("p",null,"We thought it might be useful to implement a new backend framework that is more type-safe, using a TypeScript-oriented design approach."),(0,o.kt)("p",null,"That's how Farrow was born. We hope you like our design approach as well."),(0,o.kt)("h2",{id:"the-difference"},"The Difference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type-safe: provide runtime-validation in all input/output or JSON.parse parsing data where possible; ensure that the request parameters accepted by the server must meet the type requirements without redundancy or fragmentation; ensure that the data fetched by the client meets the specified type and no longer requires the developer to manually as MyData pretends that the data is of the type we expect."),(0,o.kt)("li",{parentName:"ul"},"Functional: We prioritize the immutable and pure philosophy of functional programming wherever possible, preferring plain functions."),(0,o.kt)("li",{parentName:"ul"},"End-to-end type synchronization: We work to improve the tedious type synchronization nuisance between the front and back ends, pursuing to automate as much as possible the reuse of server-defined contract types on the front end, and providing the code for data types and interface calls to the front end by way of codegen code generation. In projects paired with Farrow-API, front-end projects no longer start from 0, but from inheriting back-end type definitions."),(0,o.kt)("li",{parentName:"ul"},"Progressive: Farrow officially maintains a series of packages from front-end development to back-end development, which can be introduced on demand or with different mainstream technology stacks or tool chains (e.g. react, vite, next.js, etc.) according to project requirements.")))}d.isMDXComponent=!0}}]);