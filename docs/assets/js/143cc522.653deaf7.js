"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[502],{162:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(8168),a=(n(6540),n(5680));const i={sidebar_position:2100},o="slsa_provenance",l={unversionedId:"reference/registry-config/slsa-provenance",id:"reference/registry-config/slsa-provenance",title:"slsa_provenance",description:"- aqua > v1.26.0",source:"@site/docs/reference/registry-config/slsa-provenance.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/slsa-provenance",permalink:"/docs/reference/registry-config/slsa-provenance",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/slsa-provenance.md",tags:[],version:"current",sidebarPosition:2100,frontMatter:{sidebar_position:2100},sidebar:"tutorialSidebar",previous:{title:"cosign",permalink:"/docs/reference/registry-config/cosign"},next:{title:"minisign",permalink:"/docs/reference/registry-config/minisign"}},s={},c=[{value:"Fields",id:"fields",level:2}],p={toc:c},u="wrapper";function g(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"slsa_provenance"},"slsa_provenance"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"aqua > v1.26.0"))),(0,a.yg)("p",null,"Please see ",(0,a.yg)("a",{parentName:"p",href:"/docs/reference/security/cosign-slsa"},"Cosign and SLSA Provenance Support")," too."),(0,a.yg)("h2",{id:"fields"},"Fields"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"type (string): ",(0,a.yg)("inlineCode",{parentName:"li"},"github_release")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"http")),(0,a.yg)("li",{parentName:"ul"},"repo_owner (string) (optional):"),(0,a.yg)("li",{parentName:"ul"},"repo_name (string) (optional):"),(0,a.yg)("li",{parentName:"ul"},"url (string) (",(0,a.yg)("inlineCode",{parentName:"li"},"http")," requires):"),(0,a.yg)("li",{parentName:"ul"},"asset (string) (",(0,a.yg)("inlineCode",{parentName:"li"},"github_release")," requires):")),(0,a.yg)("p",null,"e.g."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"slsa_provenance:\n  type: github_release\n  asset: multiple.intoto.jsonl\n")))}g.isMDXComponent=!0},5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>f});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,f=u["".concat(s,".").concat(y)]||u[y]||g[y]||i;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);