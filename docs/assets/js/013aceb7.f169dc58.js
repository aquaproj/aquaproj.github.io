"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[18],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9444:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:870},p="Tracing and CPU Profiling",u={unversionedId:"reference/trace-profile",id:"reference/trace-profile",title:"Tracing and CPU Profiling",description:"#825, aqua >= v1.10.0",source:"@site/docs/reference/trace-profile.md",sourceDirName:"reference",slug:"/reference/trace-profile",permalink:"/docs/reference/trace-profile",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/trace-profile.md",tags:[],version:"current",sidebarPosition:870,frontMatter:{sidebar_position:870},sidebar:"tutorialSidebar",previous:{title:"Change `GOOS` and `GOARCH` for testing Registry",permalink:"/docs/reference/change-os-arch-for-test"},next:{title:"Windows Support",permalink:"/docs/reference/windows-support"}},l={},s=[{value:"How to use",id:"how-to-use",level:2},{value:"Tracing with <code>runtime/trace</code>",id:"tracing-with-runtimetrace",level:3},{value:"CPU Profiling with <code>runtime/pprof</code>",id:"cpu-profiling-with-runtimepprof",level:3}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tracing-and-cpu-profiling"},"Tracing and CPU Profiling"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/825"},"#825"),", aqua >= v1.10.0"),(0,a.kt)("p",null,"You can set global command line options ",(0,a.kt)("inlineCode",{parentName:"p"},"-trace")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-cpu-profile")," for tracing and CPU Profiling.\nThis is useful for the performance tuning."),(0,a.kt)("p",null,"The following Go's standard libraries are used."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime/trace"},"https://pkg.go.dev/runtime/trace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime/pprof"},"https://pkg.go.dev/runtime/pprof"))),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"All sub commands except for ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," commands support this option."),(0,a.kt)("h3",{id:"tracing-with-runtimetrace"},"Tracing with ",(0,a.kt)("inlineCode",{parentName:"h3"},"runtime/trace")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua -trace trace.out exec -- gh version # a file trace.out is created\n$ go tool trace trace.out\n2022/06/01 11:18:47 Parsing trace...\n2022/06/01 11:18:47 Splitting trace...\n2022/06/01 11:18:47 Opening browser. Trace viewer is listening on http://127.0.0.1:58380\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/171315748-2ef0945d-ccc0-45f6-af54-b46bdcfb55d6.png",alt:"image"})),(0,a.kt)("h3",{id:"cpu-profiling-with-runtimepprof"},"CPU Profiling with ",(0,a.kt)("inlineCode",{parentName:"h3"},"runtime/pprof")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua -cpu-profile pprof.out exec -- gh version # a file pprof.out is created\n$ go tool pprof -http=":8000" "$(which aqua)" pprof.out\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/171329271-c3445a29-6ebc-4740-88fa-2668eeb672f3.png",alt:"image"})))}d.isMDXComponent=!0}}]);