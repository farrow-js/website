"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[3919],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==i&&(c(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},1641:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={title:"farrow-react",authors:["tqma113"],tags:["HTTP","React"],sidebar_position:4},s=void 0,u={unversionedId:"api/http/farrow-react",id:"api/http/farrow-react",title:"farrow-react",description:"React adapter for farrow-http.",source:"@site/docs/api/http/05-farrow-react.mdx",sourceDirName:"api/http",slug:"/api/http/farrow-react",permalink:"/zh-cn/docs/api/http/farrow-react",draft:!1,editUrl:"https://github.com/farrow-js/docs/docs/api/http/05-farrow-react.mdx",tags:[{label:"HTTP",permalink:"/zh-cn/docs/tags/http"},{label:"React",permalink:"/zh-cn/docs/tags/react"}],version:"current",sidebarPosition:4,frontMatter:{title:"farrow-react",authors:["tqma113"],tags:["HTTP","React"],sidebar_position:4},sidebar:"apiSidebar",previous:{title:"farrow-koa",permalink:"/zh-cn/docs/api/http/farrow-koa"},next:{title:"farrow-api",permalink:"/zh-cn/docs/api/rpc/farrow-api"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2},{value:"<code>useReactView</code>",id:"usereactview",level:3},{value:"Type",id:"type",level:4},{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4},{value:"<code>usePrefix</code>",id:"useprefix",level:3},{value:"Type",id:"type-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"<code>useRenderContext</code>",id:"userendercontext",level:3},{value:"Type",id:"type-2",level:4},{value:"Usage",id:"usage-2",level:4},{value:"<code>Link</code>",id:"link",level:3},{value:"Type",id:"type-3",level:4},{value:"Usage",id:"usage-3",level:4},{value:"Learn more",id:"learn-more",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"React adapter for ",(0,n.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),"."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(l.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-react\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-react\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"usereactview"},(0,n.kt)("inlineCode",{parentName:"h3"},"useReactView")),(0,n.kt)("p",null,"For rendering React Element to Response of ",(0,n.kt)("strong",{parentName:"p"},"farrow-http"),"."),(0,n.kt)("h4",{id:"type"},"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const useReactView: (options?: ReactViewOptions | undefined) => {\n  render: <T extends JSX.Element>(element: T) => Http.Response;\n};\n")),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Http } from "farrow-http";\nimport { useReactView } from "farrow-react";\n\nconst PORT = 3000;\n\nconst http = Http();\n\nhttp.use(async (req) => {\n  const ReactView = useReactView({\n    docType: "<!doctype html>",\n    useStream: true,\n  });\n\n  const element = <div>Hello Farrow</div>;\n\n  return ReactView.render(html);\n});\n\napp.listen(PORT, () => {\n  console.log(`Example app listening at http://localhost:${PORT}`);\n});\n')),(0,n.kt)("h4",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export type ReactResponseOptions = {\n  docType?: string;\n};\nexport type ReactViewOptions = ReactResponseOptions & {\n  useStream?: boolean;\n};\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docType"))),(0,n.kt)("p",null,"Type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"docType?: string\n")),(0,n.kt)("p",null,"For setting ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Doctype"},"html doc type"),"."),(0,n.kt)("p",null,"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},'"<!doctype html>"')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"useStream"))),(0,n.kt)("p",null,"Type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"useStream?: boolean\n")),(0,n.kt)("p",null,"For setting if use stream to do the response."),(0,n.kt)("p",null,"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false")),(0,n.kt)("h3",{id:"useprefix"},(0,n.kt)("inlineCode",{parentName:"h3"},"usePrefix")),(0,n.kt)("h4",{id:"type-1"},"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const usePrefix: () => string;\n")),(0,n.kt)("h4",{id:"usage-1"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { usePrefix } from "farrow-react/hooks";\nconst Test = () => {\n  const prefix = usePrefix();\n  return <div>{prefix}</div>;\n};\n')),(0,n.kt)("h3",{id:"userendercontext"},(0,n.kt)("inlineCode",{parentName:"h3"},"useRenderContext")),(0,n.kt)("h4",{id:"type-2"},"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export type ReactRenderContext = {\n  basenames: string[];\n};\n\nconst useRenderContext: () => ReactRenderContext;\n")),(0,n.kt)("h4",{id:"usage-2"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const Test = () => {\n  let renderContext = useRenderContext();\n  return <div>{renderContext.basenames.join("")}</div>;\n};\n')),(0,n.kt)("h3",{id:"link"},(0,n.kt)("inlineCode",{parentName:"h3"},"Link")),(0,n.kt)("h4",{id:"type-3"},"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'const Link: (props: React.ComponentPropsWithoutRef<"a">) => JSX.Element;\n')),(0,n.kt)("h4",{id:"usage-3"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Link } from "farrow-react/Link";\n\nconst Test = () => {\n  // Link\'s props is equal to <a />\n  return <Link href="/">a link</Link>;\n};\n')),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("admonition",{title:"Relative Module",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),": A Type-Friendly Web Framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"react"),": A JavaScript library for building user interfaces."))),(0,n.kt)("admonition",{title:"Sample",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tqma113/me/blob/main/start.ts"},"tqma/me")))))}f.isMDXComponent=!0}}]);