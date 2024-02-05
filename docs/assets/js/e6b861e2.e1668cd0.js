"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2526],{5788:(e,r,t)=>{t.d(r,{Iu:()=>l,yg:()=>d});var n=t(1504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(t),g=o,d=c["".concat(s,".").concat(g)]||c[g]||f[g]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6508:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=t(5072),o=(t(1504),t(5788));const a={sidebar_position:1900},i="supported_if",p={unversionedId:"reference/registry-config/supported-if",id:"reference/registry-config/supported-if",title:"supported_if",description:"From aqua v1.12.0 or later, we strongly recommend supportedenvs instead of supportedif.",source:"@site/docs/reference/registry-config/supported-if.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/supported-if",permalink:"/docs/reference/registry-config/supported-if",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/supported-if.md",tags:[],version:"current",sidebarPosition:1900,frontMatter:{sidebar_position:1900},sidebar:"tutorialSidebar",previous:{title:"version_constraint, version_overrides",permalink:"/docs/reference/registry-config/version-overrides"},next:{title:"checksum",permalink:"/docs/reference/registry-config/checksum"}},s={},u=[],l={toc:u},c="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(c,(0,n.c)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"supported_if"},"supported_if"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"From aqua v1.12.0 or later, we strongly recommend ",(0,o.yg)("a",{parentName:"p",href:"/docs/reference/registry-config/supported-envs"},"supported_envs")," instead of supported_if.\nsupported_envs is simpler than supported_if, and better in terms of the performance.")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/438"},"#438")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/439"},"#439")),(0,o.yg)("p",null,"Some packages are available on only the specific environment.\nFor example, some packages are available on only Linux, or don't support Linux ARM64."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"supported_if")," is ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,o.yg)("p",null,"If the evaluation result is ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),", aqua skips installing the package and outputs the debug log.\nIf ",(0,o.yg)("inlineCode",{parentName:"p"},"supported_if")," isn't set, the package is always installed."),(0,o.yg)("p",null,"The following values and functions are accessible in the expression."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"GOOS"),": (type: ",(0,o.yg)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,o.yg)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"GOARCH"),": (type: ",(0,o.yg)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,o.yg)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOARCH"))),(0,o.yg)("p",null,"For example, if the following configuration indicates the package doesn't support macOS."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'supported_if: GOOS != "darwin"\n')))}f.isMDXComponent=!0}}]);