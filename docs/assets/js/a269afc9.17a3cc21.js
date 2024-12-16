"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2068],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>y});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,y=s["".concat(u,".").concat(m)]||s[m]||f[m]||o;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2286:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(8168),a=(t(6540),t(5680));const o={sidebar_position:900},i="Experimental Feature",p={unversionedId:"reference/config/experimental-feature",id:"reference/config/experimental-feature",title:"Experimental Feature",description:"#725, aqua >= v1.6.0",source:"@site/docs/reference/config/experimental-feature.md",sourceDirName:"reference/config",slug:"/reference/config/experimental-feature",permalink:"/docs/reference/config/experimental-feature",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/config/experimental-feature.md",tags:[],version:"current",sidebarPosition:900,frontMatter:{sidebar_position:900},sidebar:"tutorialSidebar",previous:{title:"Shell Completion",permalink:"/docs/reference/config/shell-completion"},next:{title:"version_expr, version_expr_prefix",permalink:"/docs/reference/config/version-expr"}},u={},c=[{value:"AQUA_EXPERIMENTAL_X_SYS_EXEC",id:"aqua_experimental_x_sys_exec",level:2}],l={toc:c},s="wrapper";function f(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"experimental-feature"},"Experimental Feature"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/725"},"#725"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"aqua >= v1.6.0")),(0,a.yg)("p",null,"aqua supports the mechanithm for experimental features.\nThey are disabled by default, but you can enable them with environment variables or somehow."),(0,a.yg)("p",null,"Maybe experimental features would become enabled by default, or maybe they would be aborted.\naqua conforms semantic versioning, so when there are breaking changes we release major update.\nBut experimental features are exception of semantic versioning, so maybe we abort them in the minor or patch update."),(0,a.yg)("h2",{id:"aqua_experimental_x_sys_exec"},"AQUA_EXPERIMENTAL_X_SYS_EXEC"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/710"},"#710")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/715"},"#715")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/726"},"#726"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"aqua >= v1.6.0")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Deprecated in aqua v2.5.0.\nPlease see ",(0,a.yg)("a",{parentName:"p",href:"/docs/reference/execve-2"},"AQUA_X_SYS_EXEC"),".")))}f.isMDXComponent=!0}}]);