"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[2025],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},6396:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7462),a=r(7294),o=r(2389),l=r(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(9521),u=r(6010),c="tabItem_vU9c";function p(e){var t,r,n,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),y=w.tabGroupChoices,k=w.setTabGroupChoices,O=(0,a.useState)(g),N=O[0],T=O[1],x=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==N&&v.some((function(e){return e.value===C}))&&T(C)}var E=function(e){var t=e.currentTarget,r=x.indexOf(t),n=v[r].value;n!==N&&(j(t),T(n),null!=m&&k(m,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},f)},v.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:E,onClick:E},null!=r?r:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},4089:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=r(6396),i=r(8215),s=["components"],u={title:"farrow-cors",authors:["tqma113"],tags:["HTTP","CORS"],sidebar_position:1},c=void 0,p={unversionedId:"api/http/farrow-cors",id:"api/http/farrow-cors",isDocsHomePage:!1,title:"farrow-cors",description:"Cross-Origin Resource Sharing(CORS) for farrow-http.",source:"@site/docs/api/http/02-farrow-cors.mdx",sourceDirName:"api/http",slug:"/api/http/farrow-cors",permalink:"/zh-cn/docs/api/http/farrow-cors",editUrl:"https://github.com/farrow-js/docs/docs/api/http/02-farrow-cors.mdx",tags:[{label:"HTTP",permalink:"/zh-cn/docs/tags/http"},{label:"CORS",permalink:"/zh-cn/docs/tags/cors"}],version:"current",sidebarPosition:1,frontMatter:{title:"farrow-cors",authors:["tqma113"],tags:["HTTP","CORS"],sidebar_position:1},sidebar:"apiSidebar",previous:{title:"farrow-http",permalink:"/zh-cn/docs/api/http/farrow-http"},next:{title:"farrow-express",permalink:"/zh-cn/docs/api/http/farrow-express"}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Learn More",id:"learn-more",children:[],level:2}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cross-Origin Resource Sharing(CORS) for ",(0,o.kt)("strong",{parentName:"p"},"farrow-http"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"This is a ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," module available through the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),(0,o.kt)(l.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-cors\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-cors\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Http, Response } from "farrow-http";\nimport { cors } from "farrow-cors";\n\nconst http = Http();\n\nhttp.use(cors());\n\nhttp\n  .match({\n    pathname: "/product/:id",\n    params: {\n      id: Number,\n    },\n  })\n  .use(() => {\n    return Response.json({ msg: "This is CORS-enabled for all origins!" });\n  });\n\nhttp.listen(80, function () {\n  console.log("CORS-enabled web server listening on port 80");\n});\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cors"},"expressjs/cors"),"."),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),": A Type-Friendly Web Framework."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/expressjs/cors"},"expressjs/cors"),": Node.js CORS middleware.")))))}f.isMDXComponent=!0}}]);