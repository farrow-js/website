"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[2921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),p=r(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:r,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==i&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={slug:"/tutorial/rpc-server",title:"Start with RPC Server",authors:["tqma113"],tags:["RPC","Server"],sidebar_position:3},s=void 0,u={unversionedId:"tutorial/rpc-server",id:"tutorial/rpc-server",title:"Start with RPC Server",description:"Farrow also support the RPC-like server services. It focus on providing type friendly, validation for JSON value. It will service as the middleware of Farrow HTTP Server.",source:"@site/docs/tutorial/rpc-server.mdx",sourceDirName:"tutorial",slug:"/tutorial/rpc-server",permalink:"/docs/tutorial/rpc-server",draft:!1,editUrl:"https://github.com/farrow-js/docs/docs/tutorial/rpc-server.mdx",tags:[{label:"RPC",permalink:"/docs/tags/rpc"},{label:"Server",permalink:"/docs/tags/server"}],version:"current",sidebarPosition:3,frontMatter:{slug:"/tutorial/rpc-server",title:"Start with RPC Server",authors:["tqma113"],tags:["RPC","Server"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Start with HTTP Server",permalink:"/docs/tutorial/http-server"}},p={},c=[{value:"RPC",id:"rpc",level:2},{value:"Code Generation",id:"code-generation",level:2}],d={toc:c},m="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Farrow also support the RPC-like server services. It focus on providing type friendly, validation for JSON value. It will service as the middleware of ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/http-server"},"Farrow HTTP Server"),"."),(0,a.kt)("h2",{id:"rpc"},"RPC"),(0,a.kt)("p",null,"Before continuing the development, the packages(which support validation, code generation... by ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/schema/validation-type"},"Farrow Schema"),") for Farrow RPC API need be installed."),(0,a.kt)(o.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-schema farrow farrow-api farrow-api-server\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-schema farrow farrow-api farrow-api-server\n")))),(0,a.kt)("p",null,"Creating the Schema of greeting API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Struct } from "farrow-schema";\n\n// input schema\nconst GreetingInput = Struct({\n  name: String,\n});\n\n// output schema\nconst GreetingOutput = Struct({\n  greeting: String,\n});\n')),(0,a.kt)("p",null,"Construct the API with input schema, output schema and the calling handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\n\nconst greeting = Api(\n  {\n    input: GreetingInput,\n    output: GreetingOutput,\n  },\n  (input) => {\n    const greeting = `Hello ${input.name}!`;\n    return { greeting };\n  }\n);\n')),(0,a.kt)("p",null,"Combine APIs into Service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { ApiService } from "farrow-api-server";\n\nexport const GreetingService = ApiService({\n  entries: {\n    greeting,\n  },\n});\n')),(0,a.kt)("p",null,"Add the service to HTTP Server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'http.route("/api/greeting").use(GreetingService);\n')),(0,a.kt)("p",null,"For now, open Farrow Playground and connect the service."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Farrow Playground Connect",src:r(11).Z,width:"1328",height:"104"})),(0,a.kt)("p",null,"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting")," API."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Farrow Playground Select API",src:r(233).Z,width:"1328",height:"218"})),(0,a.kt)("p",null,"And send the input object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo"\n}\n')),(0,a.kt)("p",null,"Will get the response object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "greeting": "foo"\n}\n')),(0,a.kt)("p",null,"You also can send the request with ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),". But the input shuold be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Single",\n  "path": ["greeting"],\n  "input": {\n    "name": "foo"\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to know more detail about Farrow API, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/rpc-server"},"RPC"),"."),(0,a.kt)("p",{parentName:"admonition"},"If you want to know the design philosophy about Farrow API, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/rpc-like"},"Why RPC-like API")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/schema-builder"},"Why Schema Builder Based on TypeScript"),".")),(0,a.kt)("h2",{id:"code-generation"},"Code Generation"),(0,a.kt)("p",null,"For better presentation, we need a SPA project. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app"),"."),(0,a.kt)(o.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init react-app react-project --template typescript\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create react-app react-project --template typescript\n")))),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"farrow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"farrow-api-client"),"."),(0,a.kt)(o.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-api-client\nnpm install --dev farrow\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-api-client\nyarn add -D farrow\n")))),(0,a.kt)("p",null,"Creating ",(0,a.kt)("inlineCode",{parentName:"p"},"farrow.config.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="farrow.config.js"',title:'"farrow.config.js"'},'const { createFarrowConfig } = require("farrow");\n\nmodule.exports = createFarrowConfig({\n  api: [\n    {\n      src: "http://localhost:3000/api/greeting",\n      dist: `${__dirname}/src/api/greeting.ts`,\n    },\n  ],\n});\n')),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"farrow dev")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," script in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", and run it. The calling code for client will be generated to ",(0,a.kt)("inlineCode",{parentName:"p"},"/src/api/greeting.ts"),"Call it in React Component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { api } from "./api/greeting";\n\n// ...\n\nuseEffect(() => {\n  api.greeting({ name: "foo" }).then(({ greeting }) => {\n    console.log(greeting);\n  });\n}, []);\n')),(0,a.kt)("p",null,"Open the SPA page in browser, you will see the request and the consoled greeting message."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to know more detail about ",(0,a.kt)("strong",{parentName:"p"},"Code generation")," of Farrow API, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/server-and-client/client"},"Get code at Client"),"."),(0,a.kt)("p",{parentName:"admonition"},"If you want to know the design philosophy about Farrow API, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/rpc-like"},"Why RPC-like API")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/schema-builder"},"Why Schema Builder Based on TypeScript"),".")))}g.isMDXComponent=!0},11:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/farrow-playground-connect-e870fb10ed41a10725150e9a5f817bbb.png"},233:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/farrow-playground-select-api-42fc8bc7382a8c368a4beddb69312464.png"}}]);