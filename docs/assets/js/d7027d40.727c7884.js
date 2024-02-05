"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6756],{5788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>m});var n=t(1504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,m=u["".concat(l,".").concat(g)]||u[g]||f[g]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8472:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(5072),a=(t(1504),t(5788));const o={sidebar_position:610},i="format",s={unversionedId:"reference/registry-config/format",id:"reference/registry-config/format",title:"format",description:"The asset format (e.g. zip, tar.gz).",source:"@site/docs/reference/registry-config/format.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/format",permalink:"/docs/reference/registry-config/format",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/format.md",tags:[],version:"current",sidebarPosition:610,frontMatter:{sidebar_position:610},sidebar:"tutorialSidebar",previous:{title:"build",permalink:"/docs/reference/registry-config/build"},next:{title:"search_words",permalink:"/docs/reference/registry-config/search-words"}},l={},p=[{value:"Support short file extensions",id:"support-short-file-extensions",level:2}],c={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"format"},"format"),(0,a.yg)("p",null,"The asset format (e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"zip"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"tar.gz"),")."),(0,a.yg)("p",null,"e.g."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"format: tar.gz\n")),(0,a.yg)("p",null,"This is used to unarchive or decompress the asset.\nIf this isn't specified, aqua tries to specify the format from the file extension.\nIf the file isn't archived and isn't compressed, please specify ",(0,a.yg)("inlineCode",{parentName:"p"},"raw")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"format: raw\n")),(0,a.yg)("h2",{id:"support-short-file-extensions"},"Support short file extensions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1876"},"#1876")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/2313"},"#2313")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.13.0"},"v2.13.0")),(0,a.yg)("p",null,"As of aqua v2.13.0, the following short file extensions are also supported."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"tbr"),(0,a.yg)("li",{parentName:"ul"},"tbz"),(0,a.yg)("li",{parentName:"ul"},"tbz2"),(0,a.yg)("li",{parentName:"ul"},"tgz"),(0,a.yg)("li",{parentName:"ul"},"tlz4"),(0,a.yg)("li",{parentName:"ul"},"tsz"),(0,a.yg)("li",{parentName:"ul"},"txz")))}f.isMDXComponent=!0}}]);