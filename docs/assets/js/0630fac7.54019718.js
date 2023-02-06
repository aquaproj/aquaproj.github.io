"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(c,".").concat(g)]||p[g]||f[g]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:600},i="Global Configuration",l={unversionedId:"tutorial-basics/global-config",id:"tutorial-basics/global-config",title:"Global Configuration",description:"aqua finds the configuration files from the current directory to the root directory.",source:"@site/docs/tutorial-basics/global-config.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/global-config",permalink:"/docs/tutorial-basics/global-config",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-basics/global-config.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"Configuration file path",permalink:"/docs/tutorial-basics/config-path"},next:{title:"Keep configuration files in one directory",permalink:"/docs/tutorial-extras/keep-in-one-dir"}},c={},u=[{value:"<code>aqua i</code> ignores global configuration by default",id:"aqua-i-ignores-global-configuration-by-default",level:2}],s={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"global-configuration"},"Global Configuration"),(0,r.kt)("p",null,"aqua finds the configuration files from the current directory to the root directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ pwd\n/tmp\n$ gh version\nFATA[0000] aqua failed                                   aqua_version=1.19.2 error="command is not found" exe_name=gh program=aqua\n')),(0,r.kt)("p",null,"If you want to install tools regardless the current directory,\nlet's add the global configuration.\nCreate a global configuration file and add the path to the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\nYou can change the global configuration file path freely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ mkdir -p "${XDG_CONFIG_HOME:-$HOME/.config}/aquaproj-aqua"\n$ vi "${XDG_CONFIG_HOME:-$HOME/.config}/aquaproj-aqua/aqua.yaml"\n$ export AQUA_GLOBAL_CONFIG=${AQUA_GLOBAL_CONFIG:-}:${XDG_CONFIG_HOME:-$HOME/.config}/aquaproj-aqua/aqua.yaml\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ gh version\ngh version 2.2.0 (2021-10-25)\nhttps://github.com/cli/cli/releases/tag/v2.2.0\n")),(0,r.kt)("h2",{id:"aqua-i-ignores-global-configuration-by-default"},(0,r.kt)("inlineCode",{parentName:"h2"},"aqua i")," ignores global configuration by default"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"aqua i")," ignores global configuration by default.\nTo install tools of global configuration by ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i"),", please set the ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," option."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i -a\n"))))}f.isMDXComponent=!0}}]);