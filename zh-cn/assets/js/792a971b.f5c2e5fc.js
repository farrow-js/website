"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[5591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),p=n(6550),l=n(1980),s=n(7392),u=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,p.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,p]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,s]=f({queryString:n,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&p(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var h=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:p,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==p&&(c(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":p===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},6643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const p={title:"farrow-api",authors:["tqma113"],tags:["Schema","API"],sidebar_position:0},l=void 0,s={unversionedId:"api/rpc/farrow-api",id:"api/rpc/farrow-api",title:"farrow-api",description:"Schema-based Api builder.",source:"@site/docs/api/rpc/01-farrow-api.mdx",sourceDirName:"api/rpc",slug:"/api/rpc/farrow-api",permalink:"/zh-cn/docs/api/rpc/farrow-api",draft:!1,editUrl:"https://github.com/farrow-js/docs/docs/api/rpc/01-farrow-api.mdx",tags:[{label:"Schema",permalink:"/zh-cn/docs/tags/schema"},{label:"API",permalink:"/zh-cn/docs/tags/api"}],version:"current",sidebarPosition:0,frontMatter:{title:"farrow-api",authors:["tqma113"],tags:["Schema","API"],sidebar_position:0},sidebar:"apiSidebar",previous:{title:"farrow-react",permalink:"/zh-cn/docs/api/http/farrow-react"},next:{title:"farrow-api-server",permalink:"/zh-cn/docs/api/rpc/farrow-api-server"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Simple",id:"simple",level:3},{value:"Complete",id:"complete",level:3},{value:"API",id:"api",level:2},{value:"createApi",id:"createapi",level:3},{value:"toJSON",id:"tojson",level:3},{value:"codegen",id:"codegen",level:3},{value:"controvertEntries",id:"controvertentries",level:3},{value:"controvertEntries",id:"controvertentries-1",level:4},{value:"Learn more",id:"learn-more",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Schema-based Api builder."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(o.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-api\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-api\n")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Writing ",(0,a.kt)("strong",{parentName:"p"},"farrow-api")," is just like typing in a higher-order way, we define a api-type via ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/general/farrow-schema"},"farrow-schema"),". And then use ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server")," to attach api to a HTTP server."),(0,a.kt)("h3",{id:"simple"},"Simple"),(0,a.kt)("p",null,"Work single."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\n\nconst add = Api({\n  input: { a: Number, b: Number },\n  output: Number,\n});\n\nconst result = add.run({ a: 1, b: 2 }); // 3\n')),(0,a.kt)("h3",{id:"complete"},"Complete"),(0,a.kt)("p",null,"Work with HTTP Server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Api } from "farrow-api";\nimport { Int, List, ObjectType, Type, TypeOf } from "farrow-schema";\n\n/**\n * define Todo\n */\nexport class Todo extends ObjectType {\n  id = {\n    description: `Todo id`,\n    [Type]: Int,\n  };\n\n  content = {\n    description: "Todo content",\n    [Type]: String,\n  };\n\n  completed = {\n    description: "Todo status",\n    [Type]: Boolean,\n  };\n}\n\n// infer the type of Todo\nexport type TodoType = TypeOf<Todo>;\n\n// define Todos\nexport const Todos = List(Todo);\n\n// define AddTodoInput\nexport class AddTodoInput extends ObjectType {\n  content = {\n    description: "a content of todo for creating",\n    [Type]: String,\n  };\n}\n\n// define AddTodoInput\nexport class AddTodoOutput extends ObjectType {\n  todos = {\n    description: "Todo list",\n    [Type]: Todos,\n  };\n}\n\n// define an api via input schema and output schema\nexport const addTodo = Api(\n  {\n    description: "add todo",\n    input: AddTodoInput,\n    output: AddTodoOutput,\n  },\n  (input) => {\n    // impl addTodo\n    return {\n      todos: [],\n    };\n  }\n);\n\n// define RemoveTodoInput\nexport class RemoveTodoInput extends ObjectType {\n  id = {\n    description: "Todo id for removing",\n    [Type]: Int,\n  };\n}\n\n// define RemoveTodoOutput\nexport class RemoveTodoOutput extends ObjectType {\n  todos = {\n    description: "Remain todo list",\n    [Type]: Todos,\n  };\n}\n\n// define an api without impl\nexport const removeTodo = Api({\n  description: "remove todo",\n  input: RemoveTodoInput,\n  output: RemoveTodoOutput,\n});\n\n// an api is also a pipeline\nremoveTodo.use((input, next) => {\n  return next(input);\n});\n\n// impl remove todo via pipeline.use\nremoveTodo.use((input) => {\n  state.todos = state.todos.filter((todo) => todo.id !== input.id);\n  return {\n    todos: state.todos,\n  };\n});\n\n// combine all api to an object/entries\nexport const entries = {\n  addTodo,\n  removeTodo,\n};\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"createapi"},"createApi"),(0,a.kt)("p",null,"Creator of Farrow API."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function createApi<T extends ApiDefinition<any, any>>(\n  definition: T,\n  impl?: ApiImpl<T> | undefined\n): ApiType<T>;\n\nexport type ApiDefinition<\n  Input extends SchemaCtorInput = any,\n  Output extends SchemaCtorInput = any\n> = {\n  // input schema of api\n  input: Typeable<Input>;\n\n  // output schema of api\n  output: Typeable<Output>;\n\n  // description of api\n  description?: string;\n\n  // depcreated info of api if needed\n  deprecated?: string;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\n\nconst add = Api({\n  input: { a: Number, b: Number },\n  output: Number,\n});\n\nconst result = Api.run({ a: 1, b: 2 }); // 3\n')),(0,a.kt)("h3",{id:"tojson"},"toJSON"),(0,a.kt)("p",null,"Transform API to JSON."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const toJSON: (apiEntries: ApiEntries) => FormatResult;\n\ntype ApiEntries = {\n  [key: string]: ApiType | ApiEntries;\n};\n\ntype FormatResult = {\n  protocol: "Farrow-API";\n  types: FormatTypes;\n  entries: FormatEntries;\n};\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\nimport { toJSON } from "farrow-api/dist/toJSON";\n\nconst incre = Api({\n  input: Number,\n  output: Number,\n});\n\nconst decre = Api({\n  input: Number,\n  output: Number,\n});\n\nconst result = toJSON({\n  incre,\n  decre,\n});\n')),(0,a.kt)("h3",{id:"codegen"},"codegen"),(0,a.kt)("p",null,"Code generation for client with ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api-client"},"farrow-api-client"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const codegen: (\n  formatResult: FormatResult,\n  options?: CodegenOptions | undefined\n) => string;\n\nexport type CodegenOptions = {\n  /**\n   * emit createApiClient or not\n   * if set to false, only types will be codegen\n   */\n  emitApiClient?: boolean;\n\n  /**\n   * a remote address or alias to invoke\n   */\n  url?: string;\n\n  /**\n   * add ts-nocheck or not\n   */\n  noCheck?: boolean | string;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\nimport { toJSON } from "farrow-api/dist/toJSON";\nimport { codegen } from "farrow-api/dist/codegen";\n\nconst incre = Api({\n  input: Number,\n  output: Number,\n});\n\nconst decre = Api({\n  input: Number,\n  output: Number,\n});\nconst formatResult = toJSON(entries);\n\nconst source = codegen(formatResult, {\n  noCheck: "just for testing",\n});\n')),(0,a.kt)("h3",{id:"controvertentries"},"controvertEntries"),(0,a.kt)("h4",{id:"controvertentries-1"},"controvertEntries"),(0,a.kt)("p",null,"Controvert JSON to Farrow API"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const controvertEntries: (input: FormatResult) => ApiEntries;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const incre = Api(\n  {\n    input: Int,\n    output: Int,\n  },\n  (input: number): number => {\n    return input + 1;\n  }\n);\n\nconst entries: ApiEntries = {\n  incre,\n};\n\nconst newEntries = controvertEntries(toJSON(entries));\n")),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("admonition",{title:"Relative Module",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/general/farrow-schema"},"farrow-schema"),": Powerful and extensible schema builder library. Create Schema like type of ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeSccript"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),": ",(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api")," adapter for ",(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-client"},"farrow-api-client"),": An api-client for ",(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),"."))),(0,a.kt)("admonition",{title:"Sample",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/10-api-base"},"farrow-sample/10-api-base"),": Sample of ",(0,a.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/14-api-todo-app"},"farrow-sample/14-api-todo-app"),": Todo App with ",(0,a.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/23-api-todo"},"farrow-sample/23-api-todo"),": A template for farrow with rpc api."))))}f.isMDXComponent=!0}}]);