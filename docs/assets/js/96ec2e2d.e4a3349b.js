"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4799],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,g=p["".concat(o,".").concat(d)]||p[d]||h[d]||i;return t?n.createElement(g,c(c({ref:r},l),{},{components:t})):n.createElement(g,c({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var u={};for(var o in r)hasOwnProperty.call(r,o)&&(u[o]=r[o]);u.originalType=e,u[p]="string"==typeof e?e:a,c[1]=u;for(var s=2;s<i;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8399:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const i={sidebar_position:400},c="Change the specification of require_checksum",u={unversionedId:"reference/upgrade-guide/v2/change-require_checksum",id:"reference/upgrade-guide/v2/change-require_checksum",title:"Change the specification of require_checksum",description:"#1681 #1686",source:"@site/docs/reference/upgrade-guide/v2/change-require_checksum.md",sourceDirName:"reference/upgrade-guide/v2",slug:"/reference/upgrade-guide/v2/change-require_checksum",permalink:"/docs/reference/upgrade-guide/v2/change-require_checksum",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/upgrade-guide/v2/change-require_checksum.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Fix the default files[].name",permalink:"/docs/reference/upgrade-guide/v2/fix-default-files-name"},next:{title:"Change the implementation of semver and semverWithVersion",permalink:"/docs/reference/upgrade-guide/v2/change-semver"}},o={},s=[{value:"Why this change is needed",id:"why-this-change-is-needed",level:2},{value:"How to migrate",id:"how-to-migrate",level:2}],l={toc:s},p="wrapper";function h(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"change-the-specification-of-require_checksum"},"Change the specification of ",(0,a.yg)("inlineCode",{parentName:"h1"},"require_checksum")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1681"},"#1681")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1686"},"#1686")," "),(0,a.yg)("p",null,"The specification of ",(0,a.yg)("a",{parentName:"p",href:"/docs/reference/config/checksum"},"require_checksum")," is changed."),(0,a.yg)("p",null,"AS IS"),(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"require_checksum")," is true, it fails to install a package when the checksum isn't found in ",(0,a.yg)("inlineCode",{parentName:"p"},"aqua-checksums.json")," and the package's checksum configuration is disabled."),(0,a.yg)("p",null,"TO BE"),(0,a.yg)("p",null,"If this is true, it fails to install a package when the checksum isn't found in ",(0,a.yg)("inlineCode",{parentName:"p"},"aqua-checksums.json"),"."),(0,a.yg)("h2",{id:"why-this-change-is-needed"},"Why this change is needed"),(0,a.yg)("p",null,"To enforce the checksum verification and improve the security.\nChecksum Verification has a trade off between security and user experience."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"require_checksum")," will be changed from aqua v2."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/1656"},"https://github.com/aquaproj/aqua/issues/1656"))),(0,a.yg)("p",null,"Note that checksum verification is still disabled by default.\nWe think it is a bit difficult to enable checksum verification by default in terms of user experience.\nUnfortunately, many users don't think checksum verification is mandatory."),(0,a.yg)("h2",{id:"how-to-migrate"},"How to migrate"),(0,a.yg)("p",null,"We recommend updating aqua-checksums.json by GitHub Actions."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/guides/checksum"},"Enable Checksum Verification"))))}h.isMDXComponent=!0}}]);