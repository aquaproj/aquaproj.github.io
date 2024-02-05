"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3400],{5788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>m});var n=t(1504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(t),f=o,m=g["".concat(p,".").concat(f)]||g[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[g]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6692:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(5072),o=(t(1504),t(5788));const a={sidebar_position:870},i="Tracing and CPU Profiling",c={unversionedId:"reference/config/trace-profile",id:"reference/config/trace-profile",title:"Tracing and CPU Profiling",description:"#825, aqua >= v1.10.0",source:"@site/docs/reference/config/trace-profile.md",sourceDirName:"reference/config",slug:"/reference/config/trace-profile",permalink:"/docs/reference/config/trace-profile",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/config/trace-profile.md",tags:[],version:"current",sidebarPosition:870,frontMatter:{sidebar_position:870},sidebar:"tutorialSidebar",previous:{title:"Log Color",permalink:"/docs/reference/config/log-color"},next:{title:"Shell Completion",permalink:"/docs/reference/config/shell-completion"}},p={},l=[{value:"How to use",id:"how-to-use",level:2},{value:"Tracing with <code>runtime/trace</code>",id:"tracing-with-runtimetrace",level:3},{value:"CPU Profiling with <code>runtime/pprof</code>",id:"cpu-profiling-with-runtimepprof",level:3}],u={toc:l},g="wrapper";function s(e){let{components:r,...t}=e;return(0,o.yg)(g,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"tracing-and-cpu-profiling"},"Tracing and CPU Profiling"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/825"},"#825"),", aqua >= v1.10.0"),(0,o.yg)("p",null,"You can set global command line options ",(0,o.yg)("inlineCode",{parentName:"p"},"-trace")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"-cpu-profile")," for tracing and CPU Profiling.\nThis is useful for the performance tuning."),(0,o.yg)("p",null,"The following Go's standard libraries are used."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://pkg.go.dev/runtime/trace"},"https://pkg.go.dev/runtime/trace")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://pkg.go.dev/runtime/pprof"},"https://pkg.go.dev/runtime/pprof"))),(0,o.yg)("h2",{id:"how-to-use"},"How to use"),(0,o.yg)("p",null,"All sub commands except for ",(0,o.yg)("inlineCode",{parentName:"p"},"help")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"version")," commands support this option."),(0,o.yg)("h3",{id:"tracing-with-runtimetrace"},"Tracing with ",(0,o.yg)("inlineCode",{parentName:"h3"},"runtime/trace")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua -trace trace.out exec -- gh version # a file trace.out is created\n$ go tool trace trace.out\n2022/06/01 11:18:47 Parsing trace...\n2022/06/01 11:18:47 Splitting trace...\n2022/06/01 11:18:47 Opening browser. Trace viewer is listening on http://127.0.0.1:58380\n")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/171315748-2ef0945d-ccc0-45f6-af54-b46bdcfb55d6.png",alt:"image"})),(0,o.yg)("h3",{id:"cpu-profiling-with-runtimepprof"},"CPU Profiling with ",(0,o.yg)("inlineCode",{parentName:"h3"},"runtime/pprof")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},'$ aqua -cpu-profile pprof.out exec -- gh version # a file pprof.out is created\n$ go tool pprof -http=":8000" "$(which aqua)" pprof.out\n')),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/171329271-c3445a29-6ebc-4740-88fa-2668eeb672f3.png",alt:"image"})))}s.isMDXComponent=!0}}]);