"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2661],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),i=n(2389),o=n(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(9521),s=n(6010),u="tabItem_vU9c";function c(e){var t,n,a,i=e.lazy,o=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,p.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,N=g.setTabGroupChoices,y=(0,r.useState)(b),T=y[0],x=y[1],O=[],E=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=w[d];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&x(j)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==T&&(E(t),x(a),null!=d&&N(d,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":T===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:C,onClick:C},null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6515:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return v}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(6396),l=n(8215),p=["components"],s={title:"farrow-vite",authors:["tqma113"],tags:["HTTP","Vite"],sidebar_position:6},u=void 0,c={unversionedId:"api/pipeline/farrow-vite",id:"api/pipeline/farrow-vite",isDocsHomePage:!1,title:"farrow-vite",description:"Vite adapter for farrow-http.",source:"@site/docs/api/pipeline/07-farrow-vite.mdx",sourceDirName:"api/pipeline",slug:"/api/pipeline/farrow-vite",permalink:"/docs/api/pipeline/farrow-vite",editUrl:"https://github.com/farrow-js/docs/docs/api/pipeline/07-farrow-vite.mdx",tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"Vite",permalink:"/docs/tags/vite"}],version:"current",sidebarPosition:6,frontMatter:{title:"farrow-vite",authors:["tqma113"],tags:["HTTP","Vite"],sidebar_position:6},sidebar:"apiSidebar",previous:{title:"farrow-react",permalink:"/docs/api/pipeline/farrow-react"},next:{title:"farrow-schema",permalink:"/docs/api/schema/farrow-schema"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"API",id:"api",children:[{value:"<code>vite</code>",id:"vite",children:[],level:3}],level:2}],d={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vite adapter for ",(0,i.kt)("strong",{parentName:"p"},"farrow-http"),"."),(0,i.kt)("p",null,"Combining ",(0,i.kt)("inlineCode",{parentName:"p"},"farrow"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"farrow-http"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"farrow-api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"farrow-vite"),", we can setup a modern full-stack development."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(o.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev farrow-vite\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D farrow-vite\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(o.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev vite farrow farrow-vite\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D vite farrow farrow-vite\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import path from "path";\nimport { Http } from "farrow-http";\nimport { vite } from "farrow-vite";\n\nimport { services } from "./api";\n\nlet http = Http();\n\nhttp.use(services);\n\nif (process.env.NODE_ENV === "development") {\n  // set up vite-dev-server in development\n  http.use(vite());\n} else {\n  // serving the bundler output in production\n  http.serve("/", path.join(__dirname, "../dist/client"));\n}\n\nhttp.listen(3002, () => {\n  console.log("server started at http://localhost:3002");\n});\n')),(0,i.kt)("p",null,"Add script in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "farrow dev",\n    "build": "tsc && vite build && farrow build"\n  }\n}\n')),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"vite"},(0,i.kt)("inlineCode",{parentName:"h3"},"vite")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const vite: (options?: InlineConfig | undefined) => RouterPipeline;\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/api-javascript.html#inlineconfig"},"InlineConfig"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/pipeline/farrow-http"},"RouterPipeline"),"\n:::"))),(0,i.kt)("h2",{parentName:"div",id:"learn-more"},"Learn more"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/pipeline/farrow-http"},"farrow-http"),": A Type-Friendly Web Framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vitejs.dev/"},"vite"),": Next Generation Frontend Tooling.")),(0,i.kt)("p",null,":::"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/farrow-js/farrow/tree/master/examples/todo-app"},"todo-app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/12-vite-react"},"farrow-sample/12-vite-react"))))))}v.isMDXComponent=!0}}]);