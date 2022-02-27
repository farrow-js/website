"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[1837],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={slug:"/design/schema-builder",title:"Schema Builder&RPC",authors:["tqma113"],tags:["Schema"],sidebar_position:1},s=void 0,p={unversionedId:"philosophy/schema-builder",id:"philosophy/schema-builder",isDocsHomePage:!1,title:"Schema Builder&RPC",description:"The concept of Schema is actually quite general, and the Schema we are sharing today refers specifically to the Schema used to represent data types, which is usually used for data type validation. The following solution are currently available in the community.",source:"@site/docs/philosophy/schema-builder.mdx",sourceDirName:"philosophy",slug:"/design/schema-builder",permalink:"/zh-cn/docs/design/schema-builder",editUrl:"https://github.com/farrow-js/docs/docs/philosophy/schema-builder.mdx",tags:[{label:"Schema",permalink:"/zh-cn/docs/tags/schema"}],version:"current",sidebarPosition:1,frontMatter:{slug:"/design/schema-builder",title:"Schema Builder&RPC",authors:["tqma113"],tags:["Schema"],sidebar_position:1},sidebar:"philosophySidebar",previous:{title:"Introduction",permalink:"/zh-cn/docs/philosophy"},next:{title:"Why new middleware mode",permalink:"/zh-cn/docs/design/middleware-mode"}},c=[{value:"Community solutions",id:"community-solutions",children:[{value:"GraphQL",id:"graphql",children:[{value:"Official &amp; Apollo",id:"official--apollo",children:[{value:"Call development",id:"call-development",children:[],level:5},{value:"Resolver Development",id:"resolver-development",children:[],level:5},{value:"Conclusion",id:"conclusion",children:[],level:5}],level:4},{value:"NestJS",id:"nestjs",children:[{value:"Conclusion",id:"conclusion-1",children:[],level:5}],level:4}],level:3},{value:"IDL",id:"idl",children:[],level:3}],level:2},{value:"Farrow Schema",id:"farrow-schema",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"API Development",id:"api-development",children:[],level:3},{value:"Call Development",id:"call-development-1",children:[],level:3},{value:"Conclusion",id:"conclusion-2",children:[],level:3}],level:2},{value:"Introspection",id:"introspection",children:[{value:"What",id:"what",children:[{value:"Federation",id:"federation",children:[],level:4}],level:3},{value:"Others",id:"others",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The concept of Schema is actually quite general, and the Schema we are sharing today refers specifically to the Schema used to represent data types, which is usually used for data type validation. The following solution are currently available in the community."),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"JSON Schema"),(0,l.kt)("li",{parentName:"ul"},"GraphQL Schema"),(0,l.kt)("li",{parentName:"ul"},"IDL"),(0,l.kt)("li",{parentName:"ul"},"Farrow Schema (another option)")),(0,l.kt)("p",{parentName:"div"},"Farrow Schemad's solution is: TypeScript type and Schema together, providing a new development experience of TypeScript + Schema."))),(0,l.kt)("p",null,"Two main scenarios are of interest in TypeScript + Schema."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"API development at back-end"),(0,l.kt)("li",{parentName:"ul"},"Call development at front-end")),(0,l.kt)("h2",{id:"community-solutions"},"Community solutions"),(0,l.kt)("p",null,"Before introducing Farrow Schema. Let's look at the solutions that are already available in the community."),(0,l.kt)("p",null,"His main area is JSON data format validation for JavaScript, such as the format validation of various JSON configuration files, which is difficult to combine with TypeScript types, as can be seen from his design."),(0,l.kt)("h3",{id:"graphql"},"GraphQL"),(0,l.kt)("p",null,"There are two main directions in the GraphQL direction: the traditional GraphQL Schema-based solution and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/graphql/quick-start"},"NestJS's GraphQL"),"."),(0,l.kt)("h4",{id:"official--apollo"},"Official & Apollo"),(0,l.kt)("p",null,"There are two main solutions in the GraphQL direction: ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/"},"the official one")," and ",(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/"},"Apollo"),". They are similar in terms of Schema application, so they are considered together."),(0,l.kt)("h5",{id:"call-development"},"Call development"),(0,l.kt)("p",null,"In call development scenarios, Schema is mainly used to generate call codes, types, etc. for easy front-end development. Although GraphQL officially and Apollo both have their own solutions, the idea is basically the same: generate front-end TypeScript types."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL Code Generator\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.graphql-code-generator.com/"},"https://www.graphql-code-generator.com/")),(0,l.kt)("li",{parentName:"ul"},"Apollo Type generation\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/"},"https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/"))),(0,l.kt)("p",null,"For example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: ID\n  name: String\n}\n")),(0,l.kt)("p",null,"will be transformed into"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type User = {\n  id?: string;\n  name?: String;\n};\n")),(0,l.kt)("p",null,"Each field is optional (Optional), the front-end to get the type are to each field each field judgment."),(0,l.kt)("p",null,"If you want to generate:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type User = {\n  id: string;\n  name: String;\n};\n")),(0,l.kt)("p",null,"GraphQL Schema fields should be required, we need code it as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: ID!\n  name: String!\n}\n")),(0,l.kt)("p",null,"However, this approach makes it impossible to use the slicing feature of GraphQL, i.e. it is not possible to slice the data in the Query Schema, because each field is required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  user {\n    id\n    name\n  }\n}\n")),(0,l.kt)("p",null,"In the front-end call scenario, the GraphQL Schema slicing feature is fragmented from the TS type, and although GraphQL has a related type generation tool, the non-required fields in the GraphQL Schema can be sliced off."),(0,l.kt)("p",null,"Relay supports parsing the front-end Query Schema to get the indeed type."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(Type Emission)","[https://relay.dev/docs/guides/type-emission/]"),(0,l.kt)("li",{parentName:"ul"},"(Introducing the new Relay compiler)","[https://relay.dev/blog/2021/12/08/introducing-the-new-relay-compiler/]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { ExampleQuery } from "__generated__/ExampleQuery.graphql";\n\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  // variables are expected to be of type ExampleQuery$variables\n  { artistID: "banksy" }\n);\n')),(0,l.kt)("p",null,"Although it can be done to get the exact type of Query, the threshold is relatively high."),(0,l.kt)("h5",{id:"resolver-development"},"Resolver Development"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const resolvers = {\n  Query: {\n    // no type\n    user(parent, args, context, info) {\n      return queryUser(args.id);\n    },\n  },\n};\n")),(0,l.kt)("p",null,"In the GraphQL resolver development scenario, the TypeScript types of parameters and return values are also a problem, which cannot be automatically corresponded with the GraphQL Schema and need to be filled in by hand."),(0,l.kt)("h5",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Advantages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Multilingual support")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Problems")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL Schema slicing features in front-end call scenarios conflict with TS type completion."),(0,l.kt)("li",{parentName:"ul"},"TypeScript type fragmentation with Schema in Resolver development scenarios."),(0,l.kt)("li",{parentName:"ul"},"Maintain specific DSLs, increasing maintenance costs.")),(0,l.kt)("h4",{id:"nestjs"},"NestJS"),(0,l.kt)("p",null,"Their solution is to implement Schema by Class + Decorators."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Field, Int, ObjectType } from "@nestjs/graphql";\n\n@ObjectType()\nexport class User {\n  @Field((type) => Int)\n  id: number;\n\n  @Field()\n  name: string;\n}\n')),(0,l.kt)("p",null,"Resolver is also implemented via Class + Decorator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'@Resolver((of) => User)\nexport class UsersResolver {\n  constructor(\n    private authorsService: AuthorsService,\n    private postsService: PostsService\n  ) {}\n\n  @Query((returns) => User)\n  async author(@Args("id", { type: () => Int }) id: number) {\n    return this.authorsService.findOneById(id);\n  }\n}\n')),(0,l.kt)("h5",{id:"conclusion-1"},"Conclusion"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Advantages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Solved the problem of resolver's type and Schema fragmentation, resolver's development experience is better.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"New problems introduced")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The same type is written twice: type + custom Schema, but written together, the development experience and maintenance costs are greatly reduced."),(0,l.kt)("li",{parentName:"ul"},"Complex types are not as easy to write as TS type declarations, Nest uses Class to represent ObjectType which cannot be written nested.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Old unresolved issues")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The problem of GraphQL Query Schema and front-end type fragmentation is still not solved.")),(0,l.kt)("h3",{id:"idl"},"IDL"),(0,l.kt)("h2",{id:"farrow-schema"},"Farrow Schema"),(0,l.kt)("p",null,"As you can see, the type-check and TypeScript type schemes in the existing community are more or less Gap, which makes the TypeScript development experience not so smooth."),(0,l.kt)("p",null,"In Farrow, we treat TypeScript as a first-class citizen and design a Schema that combines type-checking and TypeScript types."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Farrow Schema is written like a TS type declaration, close to what TypeScript developers are used to."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { ID, Struct } from "farrow-schema";\n\nconst User = Struct({\n  id: ID,\n  name: String,\n});\n')),(0,l.kt)("p",null,"The above ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," can be used for both data validation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Validator } from "farrow-schema/validator";\n\nconst result = Validator.validate(User, {\n  id: "foo",\n  name: "foo name",\n});\n\nif (result.isOk) {\n  console.log(result.value);\n}\n')),(0,l.kt)("p",null,"It is also possible to derive the TypeScript type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { TypeOf } from "farrow-schema";\n\ntype User = TypeOf<typeof User>;\n\n// alternative\ntype User = {\n  id: string;\n  name: string;\n};\n')),(0,l.kt)("h3",{id:"api-development"},"API Development"),(0,l.kt)("p",null,"With Farrow Schema, which has these capabilities, it can be used as the basis for developing rpc-like API interfaces for TypeScript development experiences."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\n\n// \u62e5\u6709\u7c7b\u578b\u6821\u9a8c\u7684\u80fd\u529b\nexport const getUser = Api({\n  description: "get notes",\n  input: { id: String },\n  output: User,\n});\n\n// \u7c7b\u578b\u63a8\u5bfc\u53cb\u597d\ngetUser.use(({ id }) => {\n  return queryUser(id);\n});\n')),(0,l.kt)("p",null,"Initiated as a service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Http } from "farrow-http";\nimport { ApiService } from "farrow-api-server";\n\nconst http = Http();\n\nhttp.use(ApiService({ entries: { getUser } }));\n\nhttp.listen(3000, () => {\n  console.log("Listening on localhost:3000");\n});\n')),(0,l.kt)("p",null,"Local testing is also convenient, as it can be performed as a function, without the need to start a Server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const user = await getUser.run("foo");\n')),(0,l.kt)("h3",{id:"call-development-1"},"Call Development"),(0,l.kt)("p",null,"We rely on the ",(0,l.kt)("a",{parentName:"p",href:"#introspection"},(0,l.kt)("strong",{parentName:"a"},"Introspection"))," feature(will be introduced in the following section) to implement calling code generation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { createApiPipelineWithUrl, ApiInvokeOptions } from "farrow-api-client";\n\nexport type User = {\n  id: string;\n  name: string;\n};\n\nexport const apiPipeline = createApiPipelineWithUrl();\n\nexport const api = {\n  /**\n   * @remarks get note content\n   */\n  getUser: (input: { id: string }, options?: ApiInvokeOptions) =>\n    apiPipeline.invoke(\n      { type: "Single", path: ["getUser"], input },\n      options\n    ) as Promise<User | UnknownID>,\n};\n')),(0,l.kt)("p",null,"The API can be called by calling the function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { api } from "./api";\n\nconst user = await api.getUser({ id: "foo" });\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Call-side code type completion."),(0,l.kt)("li",{parentName:"ul"},"Added ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/graphql/dataloader"},"dataloader")," for automatic and unaware request merging (works with React) and data caching.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Works well when getting first screen data.")))))),(0,l.kt)("h3",{id:"conclusion-2"},"Conclusion"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Advantages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Development experience is very close to the intuition of TypeScript developers."),(0,l.kt)("li",{parentName:"ul"},"Reduced code volume, one code has type and validation capabilities, reducing development and maintenance costs."),(0,l.kt)("li",{parentName:"ul"},"No need to maintain a specific Schema DSL."),(0,l.kt)("li",{parentName:"ul"},"Easy to test.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Disadvantages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only for front and back-end projects using TypeScript development (suitable for use in the BFF layer)."),(0,l.kt)("li",{parentName:"ul"},"request parameters are specialized and different from the mainstream (RESTful) approach (GraphQL also has the same problem).")),(0,l.kt)("h2",{id:"introspection"},"Introspection"),(0,l.kt)("p",null,"With a library based on Farrow Schema, we have extended Introspection with such a powerful feature."),(0,l.kt)("h3",{id:"what"},"What"),(0,l.kt)("p",null,"Allows us to get the Schema information for requests supported by the server."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sourced from GraphQL ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"https://graphql.org/learn/introspection/"),"\nGraphQL Code Generator, GraphQL Playground are based on this feature")),(0,l.kt)("p",null,"By default, Farrow Server supports fetching Schema information by sending specific requests."),(0,l.kt)("p",null,"In the server, API development is done and added to the Server as middleware."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { ID, Struct } from "farrow-schema";\nimport { Api } from "farrow-api";\n\nimport { Http } from "farrow-http";\nimport { ApiService } from "farrow-api-server";\n\nconst User = Struct({\n  id: ID,\n  name: String,\n});\n\nexport const getUser = Api({\n  description: "get notes",\n  input: { id: String },\n  output: User,\n});\n\ngetUser.use(({ id }) => {\n  return {\n    id,\n    name: `name of ${id}`,\n  };\n});\n\nconst http = Http();\n\nhttp.use(ApiService({ entries: { getUser } }));\n\nhttp.listen(3000, () => {\n  console.log("Listening on localhost:3000");\n});\n')),(0,l.kt)("p",null,"Send request in Postman"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Introspection"\n}\n')),(0,l.kt)("p",null,"will get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\u200b\n    "type": "ApiSuccessResponse",\u200b\n    "output": {\u200b\n        "protocol": "Farrow-API",\u200b\n        "types": {\u200b\n            "0": {\u200b\n                "type": "Struct",\u200b\n                "fields": {\u200b\n                    "id": {\u200b\n                        "typeId": 1,\u200b\n                        "$ref": "#/types/1"\u200b\n                    }\u200b\n                }\u200b\n            },\u200b\n            "1": {\u200b\n                "type": "Scalar",\u200b\n                "valueType": "string",\u200b\n                "valueName": "String"\u200b\n            },\u200b\n            "2": {\u200b\n                "type": "Struct",\u200b\n                "fields": {\u200b\n                    "id": {\u200b\n                        "typeId": 3,\u200b\n                        "$ref": "#/types/3"\u200b\n                    },\u200b\n                    "name": {\u200b\n                        "typeId": 1,\u200b\n                        "$ref": "#/types/1"\u200b\n                    }\u200b\n                }\u200b\n            },\u200b\n            "3": {\u200b\n                "type": "Scalar",\u200b\n                "valueType": "string",\u200b\n                "valueName": "ID"\u200b\n            }\u200b\n        },\u200b\n        "entries": {\u200b\n            "type": "Entries",\u200b\n            "entries": {\u200b\n                "getUser": {\u200b\n                    "type": "Api",\u200b\n                    "input": {\u200b\n                        "typeId": 0,\u200b\n                        "$ref": "#/types/0"\u200b\n                    },\u200b\n                    "output": {\u200b\n                        "typeId": 2,\u200b\n                        "$ref": "#/types/2"\u200b\n                    },\u200b\n                    "description": "get notes"\u200b\n                }\u200b\n            }\u200b\n        }\u200b\n    }\u200b\n}\n')),(0,l.kt)("p",null,"The call code generation mentioned above is generated from this data."),(0,l.kt)("h4",{id:"federation"},"Federation"),(0,l.kt)("p",null,"Before we look at Farrow's Federaion, let's look at ",(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/"},"GraphQL's Federation"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GraphQL Federation",src:n(9681).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Principle")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Graph-based partitioning and aggregation"),(0,l.kt)("li",{parentName:"ul"},"Different subgraphs are part of the Supergraph and are independent and complete"),(0,l.kt)("li",{parentName:"ul"},"Aggregation is performed through a dedicated gateway")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Design Principles")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Incremental adoption"),(0,l.kt)("li",{parentName:"ul"},"Separation of concerns")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Disadvantages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Need to generate Schema file and then process it, can't be fully automatic"),(0,l.kt)("li",{parentName:"ul"},"Fixed server-side form and client-side form")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const service = await Federation([\n  {\n    url: "http://localhost:3001/api/user",\n    namespace: "user",\n  },\n  {\n    url: "http://localhost:3002/api/blog",\n    namespace: "blog",\n  },\n]);\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"// user\n{\n    getUser\n}\n\n// blog\n{\n    getBLog\n}\n\n// federation\n{\n    user: {\n        getUser\n    }\n    blog: {\n        getBlog\n    }\n}\n")),(0,l.kt)("p",null,"Calling"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { api } from "./api";\n\nconst user = await api.user.getUser({ id: "foo" });\nconst blog = await api.blog.getblog({ id: "bar" });\n')),(0,l.kt)("h3",{id:"others"},"Others"),(0,l.kt)("p",null,"There are some other interesting features based on Farrow Schema."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(WIP)Generate Documentation"),(0,l.kt)("li",{parentName:"ul"},"(Beta)",(0,l.kt)("a",{parentName:"li",href:"https://github.com/farrow-js/playground"},"Playground")),(0,l.kt)("li",{parentName:"ul"},"(WIP)Generate test cases for the interface"),(0,l.kt)("li",{parentName:"ul"},"Combining the Fakerjs Mock interface")))}d.isMDXComponent=!0},9681:function(e,t,n){t.Z=n.p+"assets/images/graphql-federation-06f00b2d3feccefa687c7672a44b3037.png"}}]);