"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1066],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var o=t(6540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),s=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},y=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),y=n,f=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return t?o.createElement(f,i(i({ref:r},p),{},{components:t})):o.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7379:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=t(8168),n=(t(6540),t(5680));const a={sidebar_position:1100},i="this package isn't allowed",c={unversionedId:"reference/codes/002",id:"reference/codes/002",title:"this package isn't allowed",description:"It may fail to install a tool by the error this package isn't allowed.",source:"@site/docs/reference/codes/002.md",sourceDirName:"reference/codes",slug:"/reference/codes/002",permalink:"/docs/reference/codes/002",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/codes/002.md",tags:[],version:"current",sidebarPosition:1100,frontMatter:{sidebar_position:1100},sidebar:"tutorialSidebar",previous:{title:"Checksum is required",permalink:"/docs/reference/codes/001"},next:{title:'The policy file is ignored unless it is allowed by "aqua policy allow" command',permalink:"/docs/reference/codes/003"}},l={},s=[{value:"What does this error mean?",id:"what-does-this-error-mean",level:2},{value:"How to solve the error",id:"how-to-solve-the-error",level:2}],p={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,o.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"this-package-isnt-allowed"},"this package isn't allowed"),(0,n.yg)("p",null,"It may fail to install a tool by the error ",(0,n.yg)("inlineCode",{parentName:"p"},"this package isn't allowed"),"."),(0,n.yg)("p",null,"e.g."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -v\nFATA[0000] aqua failed aqua_version= env=darwin/arm64 error="validate the installed package for security: this package isn\'t allowed" program=aqua\n')),(0,n.yg)("h2",{id:"what-does-this-error-mean"},"What does this error mean?"),(0,n.yg)("p",null,"This error means your ",(0,n.yg)("a",{parentName:"p",href:"/docs/reference/security/policy-as-code"},"Policy")," forbids the package.\nAbout Policy, please see ",(0,n.yg)("a",{parentName:"p",href:"/docs/reference/security/policy-as-code"},"Policy as Code"),"."),(0,n.yg)("h2",{id:"how-to-solve-the-error"},"How to solve the error"),(0,n.yg)("p",null,"Please configure Policy."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/guides/policy-as-code"},"Guides > Policy as Code")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/reference/security/policy-as-code"},"Reference"))))}d.isMDXComponent=!0}}]);