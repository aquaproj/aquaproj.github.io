"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3695],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4261:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={sidebar_position:1900},u="supported_if",s={unversionedId:"reference/registry-config/supported-if",id:"reference/registry-config/supported-if",title:"supported_if",description:"#438 #439",source:"@site/docs/reference/registry-config/supported-if.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/supported-if",permalink:"/docs/reference/registry-config/supported-if",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/supported-if.md",tags:[],version:"current",sidebarPosition:1900,frontMatter:{sidebar_position:1900},sidebar:"tutorialSidebar",previous:{title:"version_constraint`, `version_overrides",permalink:"/docs/reference/registry-config/version-overrides"},next:{title:"Usage",permalink:"/docs/reference/usage"}},c={},l=[],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supported_if"},"supported_if"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/438"},"#438")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/439"},"#439")),(0,i.kt)("p",null,"Some packages are available on only the specific environment.\nFor example, some packages are available on only Linux, or don't support Linux ARM64."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"supported_if")," is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,i.kt)("p",null,"If the evaluation result is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", aqua skips installing the package and outputs the debug log.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"supported_if")," isn't set, the package is always installed."),(0,i.kt)("p",null,"The following values and functions are accessible in the expression."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GOOS"),": (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GOARCH"),": (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOARCH"))),(0,i.kt)("p",null,"For example, if the following configuration indicates the package doesn't support macOS."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'supported_if: GOOS != "darwin"\n')))}d.isMDXComponent=!0}}]);