"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6327],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7831:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:20},i="Keep configuration files in one directory",u={unversionedId:"tutorial-extras/keep-in-one-dir",id:"tutorial-extras/keep-in-one-dir",title:"Keep configuration files in one directory",description:"aqua >= v1.33.0 #1595",source:"@site/docs/tutorial-extras/keep-in-one-dir.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/keep-in-one-dir",permalink:"/docs/tutorial-extras/keep-in-one-dir",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/keep-in-one-dir.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Global Configuration",permalink:"/docs/tutorial-basics/global-config"},next:{title:"Introduce aqua to your repository",permalink:"/docs/tutorial-extras/introduce-aqua"}},c={},l=[],s={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keep-configuration-files-in-one-directory"},"Keep configuration files in one directory"),(0,a.kt)("p",null,"aqua >= v1.33.0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1595"},"#1595")),(0,a.kt)("p",null,"aqua has several configuration files such as ",(0,a.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial-extras/checksum"},"aqua-checksums.json"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial-extras/policy-as-code"},"policy file"),", and ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial-extras/split-config"},"imported files"),"."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"aqua.yaml\naqua-checksums.json\naqua-policy.yaml # You can rename freely\naqua/ # You can rename freely\n  terraform.yaml\n  ...\n")),(0,a.kt)("p",null,"From aqua v1.33.0, aqua supports keeping configuration files in one directory."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"aqua/ # or .aqua\n  aqua.yaml\n  aqua-checksums.json\n  policy.yaml # You can rename freely\n  imports/ # You can rename freely\n    terraform.yaml\n    ...\n")),(0,a.kt)("p",null,"This is useful to keep the working directory clean."))}f.isMDXComponent=!0}}]);