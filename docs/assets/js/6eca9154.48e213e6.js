"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8179],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1537:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:610},i="search_words",s={unversionedId:"registry-config/search-words",id:"registry-config/search-words",title:"search_words",description:"#972 aqua >= v1.16.0 is required",source:"@site/docs/registry-config/search-words.md",sourceDirName:"registry-config",slug:"/registry-config/search-words",permalink:"/docs/registry-config/search-words",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/registry-config/search-words.md",tags:[],version:"current",sidebarPosition:610,frontMatter:{sidebar_position:610},sidebar:"tutorialSidebar",previous:{title:"aliases",permalink:"/docs/registry-config/aliases"},next:{title:"files",permalink:"/docs/registry-config/files"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search_words"},"search_words"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/972"},"#972")," aqua >= v1.16.0 is required"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"search_words")," is used only for searching packages by ",(0,a.kt)("inlineCode",{parentName:"p"},"aqua g")," command.\naqua searches not only the package name, aliases, and command names but also ",(0,a.kt)("inlineCode",{parentName:"p"},"search_words"),"."),(0,a.kt)("p",null,"For example, it is useful to find GitHub CLI with the word ",(0,a.kt)("inlineCode",{parentName:"p"},"github"),"."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_release\n    repo_owner: cli\n    repo_name: cli\n    description: GitHub\u2019s official command line tool\n    search_words:\n      - github\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  cli/cli [gh]: github\n  github/licensed\n> github/hub\n  8/643\n> github\n")))}d.isMDXComponent=!0}}]);