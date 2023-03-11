"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1900},i="supported_if",p={unversionedId:"registry-config/supported-if",id:"registry-config/supported-if",title:"supported_if",description:"From aqua v1.12.0 or later, we strongly recommend supportedenvs instead of supportedif.",source:"@site/docs/registry-config/supported-if.md",sourceDirName:"registry-config",slug:"/registry-config/supported-if",permalink:"/docs/registry-config/supported-if",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/registry-config/supported-if.md",tags:[],version:"current",sidebarPosition:1900,frontMatter:{sidebar_position:1900},sidebar:"tutorialSidebar",previous:{title:"version_constraint, version_overrides",permalink:"/docs/registry-config/version-overrides"},next:{title:"supported_envs",permalink:"/docs/registry-config/supported-envs"}},s={},u=[],l={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported_if"},"supported_if"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"From aqua v1.12.0 or later, we strongly recommend ",(0,o.kt)("a",{parentName:"p",href:"/docs/registry-config/supported-envs"},"supported_envs")," instead of supported_if.\nsupported_envs is simpler than supported_if, and better in terms of the performance.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/438"},"#438")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/439"},"#439")),(0,o.kt)("p",null,"Some packages are available on only the specific environment.\nFor example, some packages are available on only Linux, or don't support Linux ARM64."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"supported_if")," is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,o.kt)("p",null,"If the evaluation result is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", aqua skips installing the package and outputs the debug log.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"supported_if")," isn't set, the package is always installed."),(0,o.kt)("p",null,"The following values and functions are accessible in the expression."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GOOS"),": (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GOARCH"),": (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOARCH"))),(0,o.kt)("p",null,"For example, if the following configuration indicates the package doesn't support macOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'supported_if: GOOS != "darwin"\n')))}d.isMDXComponent=!0}}]);