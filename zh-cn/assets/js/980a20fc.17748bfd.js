"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[6853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),p=n(6550),o=n(1980),s=n(7392),c=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[l,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,s]=f({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=o??u;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&p(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),h(e)}),[s,h,i]),tabValues:i}}var k=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:p,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==p&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":p===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162);const p={title:"farrow-api-client",authors:["tqma113"],tags:["Schema","API","Client"],sidebar_position:2},o=void 0,s={unversionedId:"api/rpc/farrow-api-client",id:"api/rpc/farrow-api-client",title:"farrow-api-client",description:"An client for farrow-api-server.",source:"@site/docs/api/rpc/03-farrow-api-client.mdx",sourceDirName:"api/rpc",slug:"/api/rpc/farrow-api-client",permalink:"/zh-cn/docs/api/rpc/farrow-api-client",draft:!1,editUrl:"https://github.com/farrow-js/docs/docs/api/rpc/03-farrow-api-client.mdx",tags:[{label:"Schema",permalink:"/zh-cn/docs/tags/schema"},{label:"API",permalink:"/zh-cn/docs/tags/api"},{label:"Client",permalink:"/zh-cn/docs/tags/client"}],version:"current",sidebarPosition:2,frontMatter:{title:"farrow-api-client",authors:["tqma113"],tags:["Schema","API","Client"],sidebar_position:2},sidebar:"apiSidebar",previous:{title:"farrow-api-server",permalink:"/zh-cn/docs/api/rpc/farrow-api-server"},next:{title:"farrow-deno-api",permalink:"/zh-cn/docs/api/rpc/farrow-deno-api"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"createApiPipeline",id:"createapipipeline",level:3},{value:"<code>apiPipeline.invoke</code>",id:"apipipelineinvoke",level:4},{value:"<code>apiPipeline.setFetcher</code>",id:"apipipelinesetfetcher",level:4},{value:"<code>apiPipeline.match</code>",id:"apipipelinematch",level:4},{value:"createApiPipelineWithUrl",id:"createapipipelinewithurl",level:3},{value:"<code>apiPipeline.invoke</code>",id:"apipipelineinvoke-1",level:4},{value:"Learn more",id:"learn-more",level:2}],m={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An client for ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(i.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-api-client\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-api-client\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/cli/farrow"},"farrow")," to codegen the code for client, and config apiPipeline if needed."),(0,r.kt)("p",null,"Simply, we can ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," the file via codegen directly without modification."),(0,r.kt)("p",null,"If we need to touch request/response, there are two ways."),(0,r.kt)("p",null,"The first way only affects one url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { apiPipeline } from "../api/todo";\n\n/**\n * farrow-api-client is based on farrow-pipeline\n * use pipeline.use(middleware) to do something you want\n */\napiPipeline.use(async (request, next) => {\n  // add extra fileds for post requeset body\n  let body = {\n    ...request.body,\n    token: "abc",\n  };\n\n  // add extra headers for post request\n  let options: RequestInit = {\n    headers: {\n      "x-access-token": "abc",\n    },\n  };\n\n  // pass new request to next and await for the response\n  let response = await next({\n    ...request,\n    body,\n    options,\n  });\n\n  // handle the response if needed\n  return response;\n});\n')),(0,r.kt)("p",null,"The second way only affects all URLs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { apiPipeline } from "farrow-api-client";\n\n// all request performed via farrow-api-client will come here\n// it should be handled carefully\napiPipeline.use(async (request, next) => {\n  let response = await next(request);\n  return response;\n});\n\n/**\n * match(string | regexp, middleware)\n * match the request url and handle it via farrow-pipeline\n * if pass a string, it will be matched by url.endsWith(pattern)\n * if pass a regexp, it will be matched by pattern.test(url)\n */\napiPipeline.match("/todo", async (request, next) => {\n  // add extra fileds for post requeset body\n  let body = {\n    ...request.body,\n    token: "abc",\n  };\n\n  // add extra headers for post request\n  let options: RequestInit = {\n    headers: {\n      "x-access-token": "abc",\n    },\n  };\n\n  // pass new request to next and await for the response\n  let response = await next({\n    ...request,\n    body,\n    options,\n  });\n\n  // handle the response if needed\n  return response;\n});\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"createapipipeline"},"createApiPipeline"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const createApiPipeline: ({ fetcher }?: ApiPipelineOptions) => ApiPipeline;\n\ntype ApiPipeline = AsyncPipeline<ApiRequest, ApiResponse> & {\n  match(\n    pattern: string | RegExp,\n    middleware: MiddlewareInput<ApiRequest, MaybeAsync<ApiResponse>>\n  ): void;\n  invoke(\n    url: string,\n    calling: SingleCalling,\n    options?: ApiInvokeOptions\n  ): Promise<JsonType | Error>;\n  invoke(\n    url: string,\n    calling: BatchCalling,\n    options?: ApiInvokeOptions\n  ): Promise<(JsonType | Error)[]>;\n  invoke(\n    url: string,\n    calling: Calling,\n    options?: ApiInvokeOptions\n  ): Promise<JsonType | Error | (JsonType | Error)[]>;\n  setFetcher(newFetcher: Fetcher): void;\n};\n\nexport type ApiPipelineOptions = {\n  // custom fetcher\n  fetcher?: Fetcher;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApiPipeline } from 'farrow-api-client'\n\ncconst apiPipeline = createApiPipeline()\n")),(0,r.kt)("h4",{id:"apipipelineinvoke"},(0,r.kt)("inlineCode",{parentName:"h4"},"apiPipeline.invoke")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"invoke(url: string, calling: SingleCalling, options?: ApiInvokeOptions): Promise<JsonType | Error>\ninvoke(url: string, calling: BatchCalling, options?: ApiInvokeOptions): Promise<(JsonType | Error)[]>\ninvoke(url: string, calling: Calling, options?: ApiInvokeOptions): Promise<JsonType | Error | (JsonType | Error)[]>\n\ntype ApiInvokeOptions = {\n  fetcher?: Fetcher\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke("http://localhost:3000/api", {\n  type: "Single",\n  path: ["getTodo"],\n  input: {},\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke("http://localhost:3000/api", {\n  type: "Batch",\n  callings: [\n    {\n      type: "Single",\n      path: ["getTodo"],\n      input: {},\n    },\n    {\n      type: "Single",\n      path: ["getUser"],\n      input: {},\n    },\n  ],\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke("http://localhost:3000/api", {\n  type: "Introspection",\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke(\n  "http://localhost:3000/api",\n  {\n    type: "Single",\n    path: ["getTodo"],\n    input: {},\n  },\n  { fetcher: customFetcher }\n);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fetcher?: Fetcher")),(0,r.kt)("p",{parentName:"li"},"Custom fetcher."))),(0,r.kt)("h4",{id:"apipipelinesetfetcher"},(0,r.kt)("inlineCode",{parentName:"h4"},"apiPipeline.setFetcher")),(0,r.kt)("p",null,"Custom fetcher."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setFetcher(newFetcher: Fetcher): void\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"apiPipeline.setFetcher(customFetcher);\n")),(0,r.kt)("h4",{id:"apipipelinematch"},(0,r.kt)("inlineCode",{parentName:"h4"},"apiPipeline.match")),(0,r.kt)("p",null,"Mocking data fro client."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"match(pattern: string | RegExp, middleware: MiddlewareInput<ApiRequest, MaybeAsync<ApiResponse>>): void\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'api.match("/api.foo", () => {\n  // do somethings\n});\n')),(0,r.kt)("h3",{id:"createapipipelinewithurl"},"createApiPipelineWithUrl"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const createApiPipelineWithUrl: (\n  url: string,\n  options?: ApiPipelineOptions\n) => ApiPipelineWithUrl;\n\ntype ApiPipelineWithUrl = AsyncPipeline<ApiRequest, ApiResponse> & {\n  invoke(\n    calling: SingleCalling,\n    options?: ApiWithUrlInvokeOptions\n  ): Promise<JsonType>;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApiPipelineWithUrl } from 'farrow-api-client'\n\ncconst apiPipeline = createApiPipelineWithUrl(\"http://localhost:3000/api\")\n")),(0,r.kt)("h4",{id:"apipipelineinvoke-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"apiPipeline.invoke")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"invoke(calling: SingleCalling, options?: ApiWithUrlInvokeOptions | undefined): Promise<JsonType>\n\ntype ApiWithUrlInvokeOptions = ApiInvokeOptions & {\n  batch?: boolean;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke({\n  type: "Single",\n  path: ["getTodo"],\n  input: {},\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const [result0, result1] = await Promise.all([\n  apiPipeline.invoke(\n    {\n      type: "Single",\n      path: ["getTodo"],\n      input: {},\n    },\n    { batch: true }\n  ),\n  apiPipeline.invoke(\n    {\n      type: "Single",\n      path: ["getTodo"],\n      input: {},\n    },\n    { batch: true }\n  ),\n]);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"batch?: boolean")),(0,r.kt)("p",{parentName:"li"},"If open the batch feature for merging request and date caching. It implement by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"dataloader"),". Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,r.kt)("p",null,"Used for CORS."),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("admonition",{title:"Relative Module",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/general/farrow-schema"},"farrow-schema"),": Powerful and extensible schema builder library. Create Schema like type of ",(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeSccript"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),": Schema-based Api builder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),": ",(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api")," adapter for ",(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-federation"},"farrow-federation"),": A aggregation tool for ",(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),"."))),(0,r.kt)("admonition",{title:"Sample",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/06-deno-api"},"farrow-sample/06-deno-api"),": Sample of deno api."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/13-api-federation"},"farrow-sample/13-api-federation"),": Sample for api federation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/14-api-todo-app"},"farrow-sample/14-api-todo-app"),": Todo App with ",(0,r.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/23-api-todo"},"farrow-sample/23-api-todo"),": A template for farrow with rpc api."))))}f.isMDXComponent=!0}}]);