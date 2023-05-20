"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4557],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(t),f=r,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return t?n.createElement(d,i(i({ref:a},p),{},{components:t})):n.createElement(d,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var l in a)hasOwnProperty.call(a,l)&&(u[l]=a[l]);u.originalType=e,u[s]="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9605:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:850},i="aqua doesn't support installing aqua",u={unversionedId:"reference/aqua-cant-manage-aqua",id:"reference/aqua-cant-manage-aqua",title:"aqua doesn't support installing aqua",description:"aqua doesn't support installing aqua.",source:"@site/docs/reference/aqua-cant-manage-aqua.md",sourceDirName:"reference",slug:"/reference/aqua-cant-manage-aqua",permalink:"/docs/reference/aqua-cant-manage-aqua",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/aqua-cant-manage-aqua.md",tags:[],version:"current",sidebarPosition:850,frontMatter:{sidebar_position:850},sidebar:"tutorialSidebar",previous:{title:"Lazy Install",permalink:"/docs/reference/lazy-install"},next:{title:"Uninstall aqua",permalink:"/docs/reference/uninstall"}},l={},c=[],p={toc:c},s="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(s,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aqua-doesnt-support-installing-aqua"},"aqua doesn't support installing aqua"),(0,r.kt)("p",null,"aqua doesn't support installing aqua.\nYou shouldn't write the configuration to install the command ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua")," with aqua,\nbecause it causes the infinite loop."),(0,r.kt)("p",null,"From aqua v0.8.6 (aqua-proxy v0.2.1), aqua prevents the infinite loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'# Create the symbolic link accidentally\n$ ln -s ~/.local/share/aquaproj-aqua/bin/aqua-proxy ~/.local/share/aquaproj-aqua/bin/aqua\n$ aqua i\n[ERROR] the command "aqua" can\'t be executed via aqua-proxy to prevent the infinite loop\n')),(0,r.kt)("p",null,"If you encounter the error ",(0,r.kt)("inlineCode",{parentName:"p"},'[ERROR] the command "aqua" can\'t be executed via aqua-proxy to prevent the infinite loop'),",\nremove the symbolic link ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin/aqua"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ rm $AQUA_ROOT_DIR/bin/aqua\n")))}m.isMDXComponent=!0}}]);