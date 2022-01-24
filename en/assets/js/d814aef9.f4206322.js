"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[8485],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7639:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:4},c="Build RPC",s={unversionedId:"quick-start/build-rpc",id:"quick-start/build-rpc",title:"Build RPC",description:"Create user rpc service",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick-start/build-rpc.md",sourceDirName:"quick-start",slug:"/quick-start/build-rpc",permalink:"/en/docs/quick-start/build-rpc",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/quick-start/build-rpc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Build API",permalink:"/en/docs/quick-start/build-api"},next:{title:"Introduction",permalink:"/en/docs/build-tool/tool-intro"}},u=[{value:"Create user rpc service",id:"create-user-rpc-service",children:[],level:3},{value:"Start the service and verify",id:"start-the-service-and-verify",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-rpc"},"Build RPC"),(0,o.kt)("h3",{id:"create-user-rpc-service"},"Create user rpc service"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create user rpc service")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo/mall \n$ mkdir -p user/rpc && cd user/rpc  \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"user.proto")," file, add ",(0,o.kt)("inlineCode",{parentName:"li"},"getUser")," method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim ~/go-zero-demo/mall/user/rpc/user.proto\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage user;\n\n//protoc-gen-go version greater than 1.4.0, proto file need to add go_package, otherwise it can not be generated\noption go_package = "./user";\n\nmessage IdRequest {\n    string id = 1;\n}\n\nmessage UserResponse {\n    // \u7528\u6237id\n    string id = 1;\n    // \u7528\u6237\u540d\u79f0\n    string name = 2;\n    // \u7528\u6237\u6027\u522b\n    string gender = 3;\n}\n\nservice User {\n    rpc getUser(IdRequest) returns(UserResponse);\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generate code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo/mall/user/rpc\n$ goctl rpc template -o user.proto\n$ goctl rpc proto -src user.proto -dir .\n[goclt version <=1.2.1] protoc  -I=/Users/xx/mall/user user.proto --goctl_out=plugins=grpc:/Users/xx/mall/user/user\n[goctl version > 1.2.1] protoc  -I=/Users/xx/mall/user user.proto --go_out=plugins=grpc:/Users/xx/mall/user/user\nDone.\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"protoc-gen-go version")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  If the installed version of ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc-gen-go")," is greater than 1.4.0, it is recommended to add ",(0,o.kt)("inlineCode",{parentName:"p"},"go_package")," to the proto file\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Populate business logic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/logic/getuserlogic.go\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package logic\n\nimport (\n    "context"\n\n    "go-zero-demo/mall/user/rpc/internal/svc"\n    "go-zero-demo/mall/user/rpc/user"\n    \n    "github.com/tal-tech/go-zero/core/logx"\n)\n\ntype GetUserLogic struct {\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n    logx.Logger\n}\n\nfunc NewGetUserLogic(ctx context.Context, svcCtx *svc.ServiceContext) *GetUserLogic {\n    return &GetUserLogic{\n        ctx:    ctx,\n        svcCtx: svcCtx,\n        Logger: logx.WithContext(ctx),\n    }\n}\n\nfunc (l *GetUserLogic) GetUser(in *user.IdRequest) (*user.UserResponse, error) {\n    return &user.UserResponse{\n        Id:   "1",\n        Name: "test",\n    }, nil\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify the configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim internal/config/config.go\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package config\n\nimport (\n    "github.com/tal-tech/go-zero/zrpc"\n)\n\ntype Config struct {\n    zrpc.RpcServerConf\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add yaml configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim etc/user.yaml \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: user.rpc\nListenOn: 127.0.0.1:8080\nEtcd:\n  Hosts:\n  - 127.0.0.1:2379\n  Key: user.rpc\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify the directory file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo/mall/rpc\n$ mkdir userclient && mv /user/user.go /userclient \n")),(0,o.kt)("h3",{id:"start-the-service-and-verify"},"Start the service and verify"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"etcd installation")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.5/install/"},"Click here for etcd installation tutorial"),"\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start etcd")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ etcd\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start user rpc")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go run user.go -f etc/user.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Starting rpc server at 127.0.0.1:8080...\n")))}d.isMDXComponent=!0}}]);