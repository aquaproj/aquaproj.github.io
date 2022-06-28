"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3364],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5125:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:100},u="Homebrew",s={unversionedId:"comparison/homebrew",id:"comparison/homebrew",title:"Homebrew",description:"Pros",source:"@site/docs/comparison/homebrew.md",sourceDirName:"comparison",slug:"/comparison/homebrew",permalink:"/docs/comparison/homebrew",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/comparison/homebrew.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Shell Script",permalink:"/docs/comparison/shell-script"},next:{title:"apt and yum",permalink:"/docs/comparison/apt-yum"}},p={},c=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Homebrew Bundle",id:"homebrew-bundle",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"homebrew"},"Homebrew"),(0,a.kt)("h2",{id:"pros"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"aqua supports changing tool versions per project"),(0,a.kt)("li",{parentName:"ul"},"aqua forces to pin tool version, which solves the problem due to the different of version"),(0,a.kt)("li",{parentName:"ul"},"aqua's command is always ",(0,a.kt)("inlineCode",{parentName:"li"},"aqua i [-l]"),". You don't have to specify tool names. It's user friendly"),(0,a.kt)("li",{parentName:"ul"},"aqua is a single binary written in Go, so it is easy to install aqua in a container")),(0,a.kt)("h2",{id:"cons"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aqua's install process is very simple."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Download tool"),(0,a.kt)("li",{parentName:"ol"},"Unarchive tool in $AQUA_ROOT_DIR")),(0,a.kt)("p",{parentName:"li"},"aqua doesn't support running commands after unarchiving.\nSo aqua doesn't support installing tools which some commands are required.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aqua doesn't support installing dependent tools automatically"))),(0,a.kt)("h2",{id:"homebrew-bundle"},"Homebrew Bundle"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-bundle"},"Homebrew Bundle"),", you can manage tools with Configuration file same as aqua.\nBut even if Brewfile is updated, tools aren't updated until ",(0,a.kt)("inlineCode",{parentName:"p"},"brew bundle")," explicitly."),(0,a.kt)("p",null,"On the other hand, aqua supports ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/lazy-install"},"Lazy Install")," so the update of aqua.yaml is reflected automatically."))}d.isMDXComponent=!0}}]);