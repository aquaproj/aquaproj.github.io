"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[320],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(a),f=n,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:n,i[1]=u;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:30},i="Keep configuration files in one directory",u={unversionedId:"guides/keep-in-one-dir",id:"guides/keep-in-one-dir",title:"Keep configuration files in one directory",description:"- aqua >= v1.33.0 #1595",source:"@site/docs/guides/keep-in-one-dir.md",sourceDirName:"guides",slug:"/guides/keep-in-one-dir",permalink:"/docs/guides/keep-in-one-dir",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/keep-in-one-dir.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Share aqua configuration for teams and organizations",permalink:"/docs/guides/team-config"},next:{title:"Split the list of packages",permalink:"/docs/guides/split-config"}},l={},c=[{value:"How to migrate",id:"how-to-migrate",level:2}],p={toc:c},s="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"keep-configuration-files-in-one-directory"},"Keep configuration files in one directory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"aqua >= v1.33.0 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/1595"},"#1595")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/update-checksum-action"},"update-checksum-action")," >= v0.2.0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/update-checksum-workflow"},"update-checksum-workflow")," >= v0.1.1")),(0,n.kt)("p",null,"aqua has several configuration files such as ",(0,n.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/checksum"},"aqua-checksums.json"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/security/policy-as-code"},"policy file"),", and ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/split-config"},"imported files"),"."),(0,n.kt)("p",null,"e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"aqua.yaml\naqua-checksums.json\naqua-policy.yaml # You can rename freely\naqua/ # You can rename freely\n  terraform.yaml\n  ...\n")),(0,n.kt)("p",null,"From aqua v1.33.0, aqua supports keeping configuration files in one directory."),(0,n.kt)("p",null,"e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"aqua/ # or .aqua\n  aqua.yaml\n  aqua-checksums.json\n  policy.yaml # You can rename freely\n  imports/ # You can rename freely\n    terraform.yaml\n    ...\n")),(0,n.kt)("p",null,"This is useful to keep the working directory clean."),(0,n.kt)("h2",{id:"how-to-migrate"},"How to migrate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update aqua to v1.33.0 or later"),(0,n.kt)("li",{parentName:"ul"},"Update ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/update-checksum-action"},"update-checksum-action")," to v0.2.0 or later"),(0,n.kt)("li",{parentName:"ul"},"Update ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/update-checksum-workflow"},"update-checksum-workflow")," to v0.1.1 or later"),(0,n.kt)("li",{parentName:"ul"},"Move files",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"aqua.yaml => aqua/aqua.yaml"),(0,n.kt)("li",{parentName:"ul"},"aqua-checksums.json => aqua/aqua-checksums.json"),(0,n.kt)("li",{parentName:"ul"},"aqua-policy.yaml => aqua/policy.yaml # rename freely"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/split-config"},"imported files")," => aqua/imports/*.yaml # change the filename freely"))),(0,n.kt)("li",{parentName:"ul"},"Fix ",(0,n.kt)("a",{parentName:"li",href:"/docs/security/policy-as-code"},"AQUA_POLICY_CONFIG")),(0,n.kt)("li",{parentName:"ul"},"Fix GitHub Actions Path filters"),(0,n.kt)("li",{parentName:"ul"},"Fix ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-renovate-config"},"aqua-renovate-config"),"'s file preset argument")))}m.isMDXComponent=!0}}]);