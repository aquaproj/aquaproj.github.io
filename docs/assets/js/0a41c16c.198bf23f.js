"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[483],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7368:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:100},u="Install",c={unversionedId:"reference/install",id:"reference/install",isDocsHomePage:!1,title:"Install",description:"aqua is a single binary written in Go.",source:"@site/docs/reference/install.md",sourceDirName:"reference",slug:"/reference/install",permalink:"/docs/reference/install",editUrl:"https://github.com/aquaproj/aquaproj.github.io/docs/reference/install.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Share aqua configuration for teams and organizations",permalink:"/docs/tutorial-extras/team-config"},next:{title:"Registry",permalink:"/docs/reference/registry"}},s=[{value:"Homebrew",id:"homebrew",children:[],level:2},{value:"Install script",id:"install-script",children:[],level:2},{value:"GitHub Actions",id:"github-actions",children:[],level:2},{value:"CircleCI Orb",id:"circleci-orb",children:[],level:2},{value:"Download from GitHub Releases",id:"download-from-github-releases",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install"},"Install"),(0,i.kt)("p",null,"aqua is a single binary written in Go."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the binary ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")),(0,i.kt)("li",{parentName:"ol"},"add ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.aqua/bin")," to the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH"))),(0,i.kt)("h2",{id:"homebrew"},"Homebrew"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ brew install aquaproj/aqua/aqua\n$ export PATH=$HOME/.aqua/bin:$PATH\n")),(0,i.kt)("h2",{id:"install-script"},"Install script"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/int128/aqua-action"},"int128/aqua-action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer"))),(0,i.kt)("p",null,"aqua-installer just installs aqua.\nOn the other hand, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/int128/aqua-action"},"int128/aqua-action")," installs aqua and runs ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua install")," and cache tools."),(0,i.kt)("h2",{id:"circleci-orb"},"CircleCI Orb"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/aquaproj/aqua"},"https://circleci.com/developer/orbs/orb/aquaproj/aqua")),(0,i.kt)("h2",{id:"download-from-github-releases"},"Download from GitHub Releases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases"},"https://github.com/aquaproj/aqua/releases")))}d.isMDXComponent=!0}}]);