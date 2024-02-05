"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1684],{5788:(e,a,r)=>{r.d(a,{Iu:()=>p,yg:()=>g});var t=r(1504);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function u(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),y=n,g=s["".concat(l,".").concat(y)]||s[y]||m[y]||o;return r?t.createElement(g,i(i({ref:a},p),{},{components:r})):t.createElement(g,i({ref:a},p))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var u={};for(var l in a)hasOwnProperty.call(a,l)&&(u[l]=a[l]);u.originalType=e,u[s]="string"==typeof e?e:n,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5368:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var t=r(5072),n=(r(1504),r(5788));const o={sidebar_position:30},i="Keep configuration files in one directory",u={unversionedId:"guides/keep-in-one-dir",id:"guides/keep-in-one-dir",title:"Keep configuration files in one directory",description:"- aqua >= v1.33.0 #1595",source:"@site/docs/guides/keep-in-one-dir.md",sourceDirName:"guides",slug:"/guides/keep-in-one-dir",permalink:"/docs/guides/keep-in-one-dir",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/keep-in-one-dir.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Share aqua configuration for teams and organizations",permalink:"/docs/guides/team-config"},next:{title:"Split the list of packages",permalink:"/docs/guides/split-config"}},l={},c=[{value:"How to migrate",id:"how-to-migrate",level:2}],p={toc:c},s="wrapper";function m(e){let{components:a,...r}=e;return(0,n.yg)(s,(0,t.c)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"keep-configuration-files-in-one-directory"},"Keep configuration files in one directory"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"aqua >= v1.33.0 ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/1595"},"#1595")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/update-checksum-action"},"update-checksum-action")," >= v0.2.0"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/update-checksum-workflow"},"update-checksum-workflow")," >= v0.1.1")),(0,n.yg)("p",null,"aqua has several configuration files such as ",(0,n.yg)("inlineCode",{parentName:"p"},"aqua.yaml"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/guides/checksum"},"aqua-checksums.json"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/reference/security/policy-as-code"},"policy file"),", and ",(0,n.yg)("a",{parentName:"p",href:"/docs/guides/split-config"},"imported files"),"."),(0,n.yg)("p",null,"e.g."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"aqua.yaml\naqua-checksums.json\naqua-policy.yaml # You can rename freely\naqua/ # You can rename freely\n  terraform.yaml\n  ...\n")),(0,n.yg)("p",null,"From aqua v1.33.0, aqua supports keeping configuration files in one directory."),(0,n.yg)("p",null,"e.g."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"aqua/ # or .aqua\n  aqua.yaml\n  aqua-checksums.json\n  policy.yaml # You can rename freely\n  imports/ # You can rename freely\n    terraform.yaml\n    ...\n")),(0,n.yg)("p",null,"This is useful to keep the working directory clean."),(0,n.yg)("h2",{id:"how-to-migrate"},"How to migrate"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Update aqua to v1.33.0 or later"),(0,n.yg)("li",{parentName:"ul"},"Update ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/update-checksum-action"},"update-checksum-action")," to v0.2.0 or later"),(0,n.yg)("li",{parentName:"ul"},"Update ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/update-checksum-workflow"},"update-checksum-workflow")," to v0.1.1 or later"),(0,n.yg)("li",{parentName:"ul"},"Move files",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"aqua.yaml => aqua/aqua.yaml"),(0,n.yg)("li",{parentName:"ul"},"aqua-checksums.json => aqua/aqua-checksums.json"),(0,n.yg)("li",{parentName:"ul"},"aqua-policy.yaml => aqua/policy.yaml # rename freely"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/guides/split-config"},"imported files")," => aqua/imports/*.yaml # change the filename freely"))),(0,n.yg)("li",{parentName:"ul"},"Fix ",(0,n.yg)("a",{parentName:"li",href:"/docs/reference/security/policy-as-code"},"AQUA_POLICY_CONFIG")),(0,n.yg)("li",{parentName:"ul"},"Fix GitHub Actions Path filters"),(0,n.yg)("li",{parentName:"ul"},"Fix ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-renovate-config"},"aqua-renovate-config"),"'s file preset argument")))}m.isMDXComponent=!0}}]);