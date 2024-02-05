"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6542],{5788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>d});var n=t(1504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=a,d=p["".concat(c,".").concat(g)]||p[g]||y[g]||i;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8308:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(5072),a=(t(1504),t(5788));const i={sidebar_position:250},o="Registry",s={unversionedId:"reference/registry",id:"reference/registry",title:"Registry",description:"Registry is a aqua's core concept.",source:"@site/docs/reference/registry.md",sourceDirName:"reference",slug:"/reference/registry",permalink:"/docs/reference/registry",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{sidebar_position:250},sidebar:"tutorialSidebar",previous:{title:"AQUA_X_SYS_EXEC",permalink:"/docs/reference/execve-2"},next:{title:"Usage",permalink:"/docs/reference/usage"}},c={},l=[{value:"Standard Registry",id:"standard-registry",level:2},{value:"Create your own Registry",id:"create-your-own-registry",level:2}],u={toc:l},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"registry"},"Registry"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Registry")," is a ",(0,a.yg)("inlineCode",{parentName:"p"},"aqua"),"'s core concept.\n",(0,a.yg)("inlineCode",{parentName:"p"},"Registry")," defines the package list and how to install them."),(0,a.yg)("p",null,"In ",(0,a.yg)("inlineCode",{parentName:"p"},"aqua.yaml"),", you specify Registries in ",(0,a.yg)("inlineCode",{parentName:"p"},"registries"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n")),(0,a.yg)("p",null,"You don't have to define how to install tools yourself because it is defined in the Registry.\nRegistry is reusable across multiple configuration."),(0,a.yg)("h2",{id:"standard-registry"},"Standard Registry"),(0,a.yg)("p",null,"In the above configuration, the Standard Registry v2.22.0 is used.\nThe Standard Registry is a registry that we maintain."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"https://github.com/aquaproj/aqua-registry")),(0,a.yg)("h2",{id:"create-your-own-registry"},"Create your own Registry"),(0,a.yg)("p",null,"Please see the following document."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/develop-registry/add-registry"},"Add Packages to Registry")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/guides/private-package"},"Install private packages"))))}y.isMDXComponent=!0}}]);