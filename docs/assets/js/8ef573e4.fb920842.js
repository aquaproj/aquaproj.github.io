"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[375],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(t),m=n,f=l["".concat(p,".").concat(m)]||l[m]||g[m]||o;return t?a.createElement(f,s(s({ref:r},u),{},{components:t})):a.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3035:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:2150},s="error_message",i={unversionedId:"registry-config/error_message",id:"registry-config/error_message",title:"error_message",description:"aqua >= v1.35.0",source:"@site/docs/registry-config/error_message.md",sourceDirName:"registry-config",slug:"/registry-config/error_message",permalink:"/docs/registry-config/error_message",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/registry-config/error_message.md",tags:[],version:"current",sidebarPosition:2150,frontMatter:{sidebar_position:2150},sidebar:"tutorialSidebar",previous:{title:"no_asset",permalink:"/docs/registry-config/no_asset"},next:{title:"private",permalink:"/docs/registry-config/private"}},p={},c=[],u={toc:c},l="wrapper";function g(e){let{components:r,...t}=e;return(0,n.kt)(l,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"error_message"},"error_message"),(0,n.kt)("p",null,"aqua >= ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.35.0"},"v1.35.0")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1684"},"#1684")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1687"},"#1687")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please consider using ",(0,n.kt)("a",{parentName:"p",href:"/docs/registry-config/no_asset"},"no_asset")," if you don't have to customize the error message.")),(0,n.kt)("p",null,"If this field is set, it fails to install the package and outputs the error message."),(0,n.kt)("p",null,"e.g."),(0,n.kt)("p",null,"registry.yaml"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: grafana\n    repo_name: xk6\n    version_constraint: semver("< 0.9.0")\n    version_overrides:\n      - version_constraint: semver(">= 0.9.0")\n        error_message: |\n          From version xk6 v0.9.0 there are no more binaries published.\n\n          https://github.com/grafana/xk6/issues/60\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ xk6 --help                   \nERRO[0000] failed to install a package grafana/xk6@v0.9.0. From version xk6 v0.9.0 there are no more binaries published.\n\nhttps://github.com/grafana/xk6/issues/60  aqua_version= env=darwin/arm64 exe_name=xk6 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/grafana/xk6/v0.9.0/xk6_0.9.0_mac_arm64.tar.gz/xk6 package=grafana/xk6 package_name=grafana/xk6 package_version=v0.9.0 program=aqua registry=standard\nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error= exe_name=xk6 package=grafana/xk6 package_version=v0.9.0 program=aqua\n")))}g.isMDXComponent=!0}}]);