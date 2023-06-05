"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[2008],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,p]=f({queryString:a,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=i??c;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var b=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=p[a].value;r!==s&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={title:"farrow-koa",authors:["tqma113"],tags:["HTTP","Adapter"],sidebar_position:3},i=void 0,p={unversionedId:"api/http/farrow-koa",id:"api/http/farrow-koa",title:"farrow-koa",description:"Adapter for farrow-http in Koa app.",source:"@site/docs/api/http/04-farrow-koa.mdx",sourceDirName:"api/http",slug:"/api/http/farrow-koa",permalink:"/docs/api/http/farrow-koa",draft:!1,editUrl:"https://github.com/farrow-js/docs/docs/api/http/04-farrow-koa.mdx",tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"Adapter",permalink:"/docs/tags/adapter"}],version:"current",sidebarPosition:3,frontMatter:{title:"farrow-koa",authors:["tqma113"],tags:["HTTP","Adapter"],sidebar_position:3},sidebar:"apiSidebar",previous:{title:"farrow-express",permalink:"/docs/api/http/farrow-express"},next:{title:"farrow-react",permalink:"/docs/api/http/farrow-react"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Learn more",id:"learn-more",level:2}],m={toc:c},d="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Adapter for ",(0,n.kt)("inlineCode",{parentName:"p"},"farrow-http")," in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/koajs/koa"},"Koa"))," app."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(o.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-koa\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-koa\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const adapter: (httpPipeline: HttpPipeline) => Middleware;\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("inlineCode",{parentName:"p"},"farrow-http")," app first:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { Http } from "farrow-http";\n\nconst http = Http();\n\nhttp\n  .match({\n    pathname: "/test",\n  })\n  .use((data) => {\n    return Response.text(JSON.stringify(data));\n  });\n')),(0,n.kt)("p",null,"And then create a ",(0,n.kt)("strong",{parentName:"p"},"Koa")," app:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import Koa from "koa";\n\nconst PORT = 3000;\n\nconst app = new Koa();\n\napp.use(async (ctx) => {\n  ctx.body = "Hello World";\n});\n\napp.listen(PORT, () => {\n  console.log(`Example app listening at http://localhost:${PORT}`);\n});\n')),(0,n.kt)("p",null,"and combine them:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import Koa from "koa";\nimport { Http } from "farrow-http";\nimport { adapter } from "farrow-koa";\n\nconst PORT = 3000;\n\nconst http = Http();\n\nhttp\n  .match({\n    pathname: "/test",\n  })\n  .use((data) => {\n    return Response.text(JSON.stringify(data));\n  });\n\nconst app = new Koa();\n\napp.use(adapter(http));\n\napp.listen(PORT, () => {\n  console.log(`Example app listening at http://localhost:${PORT}`);\n});\n')),(0,n.kt)("p",null,"Then, you can use work with farrow stack in a Koa app."),(0,n.kt)("p",null,"Or, you can combine them by ",(0,n.kt)("inlineCode",{parentName:"p"},"koa-router")," to a specific route path in ",(0,n.kt)("strong",{parentName:"p"},"Koa")," app."),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("admonition",{title:"Relative Module",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/http/farrow-http"},"farrow-http"),": A Type-Friendly Web Framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/http/farrow-express"},"farrow-express"),": Adapter for ",(0,n.kt)("inlineCode",{parentName:"li"},"farrow-http")," in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/expressjs/express"},"Express")," app."))),(0,n.kt)("admonition",{title:"Sample",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/18-http-koa"},"farrow-sample/18-http-koa"),": HTTP Server sample with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/koajs/koa"},"Koa"),"."))))}f.isMDXComponent=!0}}]);