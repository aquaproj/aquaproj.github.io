"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4664],{5788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>d});var a=r(1504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),p=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=t,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return r?a.createElement(d,i(i({ref:n},c),{},{components:r})):a.createElement(d,i({ref:n},c))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:t,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7848:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(5072),t=(r(1504),r(5788));const o={sidebar_position:1600},i="overrides",s={unversionedId:"reference/registry-config/overrides",id:"reference/registry-config/overrides",title:"overrides",description:"aqua >= v1.3.0",source:"@site/docs/reference/registry-config/overrides.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/overrides",permalink:"/docs/reference/registry-config/overrides",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/overrides.md",tags:[],version:"current",sidebarPosition:1600,frontMatter:{sidebar_position:1600},sidebar:"tutorialSidebar",previous:{title:"format_overrides",permalink:"/docs/reference/registry-config/format-overrides"},next:{title:"Template String",permalink:"/docs/reference/registry-config/template"}},l={},p=[{value:"envs",id:"envs",level:2}],c={toc:p},g="wrapper";function u(e){let{components:n,...r}=e;return(0,t.yg)(g,(0,a.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"overrides"},(0,t.yg)("inlineCode",{parentName:"h1"},"overrides")),(0,t.yg)("p",null,"aqua >= v1.3.0"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/607"},"#607")),(0,t.yg)("p",null,"You can override the following attributes on the specific ",(0,t.yg)("inlineCode",{parentName:"p"},"GOOS")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"GOARCH"),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"asset"),(0,t.yg)("li",{parentName:"ul"},"checksum"),(0,t.yg)("li",{parentName:"ul"},"complete_windows_ext"),(0,t.yg)("li",{parentName:"ul"},"files"),(0,t.yg)("li",{parentName:"ul"},"format"),(0,t.yg)("li",{parentName:"ul"},"replacements"),(0,t.yg)("li",{parentName:"ul"},"type"),(0,t.yg)("li",{parentName:"ul"},"url"),(0,t.yg)("li",{parentName:"ul"},"windows_ext")),(0,t.yg)("p",null,"e.g. On Linux ARM64, ",(0,t.yg)("inlineCode",{parentName:"p"},"Arch")," becomes ",(0,t.yg)("inlineCode",{parentName:"p"},"aarch64"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"  overrides:\n  - goos: linux\n    replacements:\n      arm64: aarch64\n")),(0,t.yg)("p",null,"In case of ",(0,t.yg)("inlineCode",{parentName:"p"},"replacements"),", maps are merged."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"goos")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"goarch")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"envs")," is required."),(0,t.yg)("p",null,"e.g."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"  asset: arkade\n  overrides:\n  - goos: linux\n    goarch: arm64\n    asset: 'arkade-{{.Arch}}'\n  - goos: darwin\n    goarch: amd64\n    asset: 'arkade-darwin'\n  - goos: darwin \n    asset: 'arkade-darwin-{{.Arch}}'\n")),(0,t.yg)("p",null,"Even if multiple elements are matched, only first element is applied.\nFor example, Darwin AMD64 matches with second element but the second element isn't applied because the first element is matched."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"  - goos: darwin\n    goarch: amd64\n    asset: 'arkade-darwin'\n  - goos: darwin \n    asset: 'arkade-darwin-{{.Arch}}'\n")),(0,t.yg)("h2",{id:"envs"},"envs"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/2318"},"#2318")," ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/2320"},"#2320")," aqua >= ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.13.0"},"v2.13.0")),(0,t.yg)("p",null,"You can use ",(0,t.yg)("inlineCode",{parentName:"p"},"envs")," instead of ",(0,t.yg)("inlineCode",{parentName:"p"},"goos")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"goarch"),".\nThe syntax of ",(0,t.yg)("inlineCode",{parentName:"p"},"envs")," is same with ",(0,t.yg)("a",{parentName:"p",href:"/docs/reference/registry-config/supported-envs"},"supported_envs"),".\n",(0,t.yg)("inlineCode",{parentName:"p"},"envs")," is more flexible than the combination of ",(0,t.yg)("inlineCode",{parentName:"p"},"goos")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"goarch"),", so in some cases you can simplify the code."),(0,t.yg)("p",null,"e.g."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"goos")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"goarch")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"overrides:\n  - goos: windows\n    goarch: arm64\n    # ...\n  - goos: linux\n    goarch: arm64\n    # ...\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"envs")," can simplify the code."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"overrides:\n  - envs:\n      - windows/arm64\n      - linux/arm64\n    # ...\n")))}u.isMDXComponent=!0}}]);