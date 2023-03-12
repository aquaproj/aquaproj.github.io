"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[9587],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),k=r,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||o;return t?n.createElement(d,l(l({ref:a},p),{},{components:t})):n.createElement(d,l({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5142:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:500},l="Uninstall Packages",i={unversionedId:"guides/uninstall-packages",id:"guides/uninstall-packages",title:"Uninstall Packages",description:"#538",source:"@site/docs/guides/uninstall-packages.md",sourceDirName:"guides",slug:"/guides/uninstall-packages",permalink:"/docs/guides/uninstall-packages",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/uninstall-packages.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Install private packages",permalink:"/docs/guides/private-package"},next:{title:"Filter packages with tags",permalink:"/docs/guides/package-tag"}},s={},u=[],p={toc:u},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uninstall-packages"},"Uninstall Packages"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/538"},"#538")),(0,r.kt)("p",null,"aqua installs packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR}/pkgs")," and doesn't remove them.\nEven if you change the package version, aqua doesn't remove the old package."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"aqua doesn't have a command to uninstall packages, because we think the feature is unnecessary."),"\nTo keep aqua simple, it is important not to implement unnecessary features."),(0,r.kt)("p",null,"For aqua, ",(0,r.kt)("inlineCode",{parentName:"p"},"uninstall a package")," can mean the following things."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove a package from ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua.yaml")),(0,r.kt)("li",{parentName:"ol"},"Remove symbolic links in PATH ",(0,r.kt)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR/bin")),(0,r.kt)("li",{parentName:"ol"},"Remove packages from ",(0,r.kt)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR/pkgs"))),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Remove a package from ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua.yaml")))),(0,r.kt)("p",null,"Please edit ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," with editor."),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:2},(0,r.kt)("li",{parentName:"ol"},"Remove symbolic links in PATH ",(0,r.kt)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR/bin")))),(0,r.kt)("p",null,"Basically, you don't have to remove links because aqua supports finding commands from ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," if the command isn't found in ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/lazy-install#how-does-lazy-install-work"},"How does Lazy Install work?")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the package isn't found in the configuration files,\naqua finds the command from the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),".")),(0,r.kt)("p",null,"If you want to remove links by all means, you can remove links by ",(0,r.kt)("inlineCode",{parentName:"p"},'rm "$(which COMMAND)"'),"."),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:3},(0,r.kt)("li",{parentName:"ol"},"Remove packages from ",(0,r.kt)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR/pkgs")))),(0,r.kt)("p",null,"Unlike decades, currently the storage is large and cheap."),(0,r.kt)("p",null,"If the storage is not exhausted, normally you don't have to remove old packages.\nAnd if if the storage is exhausted, you should remove ",(0,r.kt)("inlineCode",{parentName:"p"},"${AQUA_ROOT_DIR}/pkgs")," rather than picking out removed packages one by one."),(0,r.kt)("p",null,"aqua reinstalls packages automatically by Lazy Install, so you don't have to reinstall them explicitly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ rm -R "~/.local/share/aquaproj-aqua/pkgs"\n')),(0,r.kt)("p",null,"If you want to uninstall the specific package or package version by all means, you can do them by simply remove directories."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/akoi\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/akoi/v2.2.0\n")))}m.isMDXComponent=!0}}]);