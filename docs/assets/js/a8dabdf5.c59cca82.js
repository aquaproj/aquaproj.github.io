"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8964],{1100:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(8168),i=(n(6540),n(5680));const a={sidebar_position:2e3},o="cosign",s={unversionedId:"reference/registry-config/cosign",id:"reference/registry-config/cosign",title:"cosign",description:"- aqua > v1.26.0",source:"@site/docs/reference/registry-config/cosign.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/cosign",permalink:"/docs/reference/registry-config/cosign",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/cosign.md",tags:[],version:"current",sidebarPosition:2e3,frontMatter:{sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"complete_windows_ext",permalink:"/docs/reference/registry-config/complete-windows-ext"},next:{title:"slsa_provenance",permalink:"/docs/reference/registry-config/slsa-provenance"}},l={},c=[{value:"Fields",id:"fields",level:2}],g={toc:c},p="wrapper";function u(e){let{components:r,...n}=e;return(0,i.yg)(p,(0,t.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"cosign"},"cosign"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"aqua > v1.26.0"))),(0,i.yg)("p",null,"Please see ",(0,i.yg)("a",{parentName:"p",href:"/docs/reference/security/cosign-slsa"},"Cosign and SLSA Provenance Support")," too."),(0,i.yg)("h2",{id:"fields"},"Fields"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"opts ([]string): ",(0,i.yg)("a",{parentName:"li",href:"https://docs.sigstore.dev/signing/quickstart/#verifying-a-signed-blob"},"cosign verify-blob")," options"),(0,i.yg)("li",{parentName:"ul"},"signature",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"type (string): ",(0,i.yg)("inlineCode",{parentName:"li"},"github_release")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"http")),(0,i.yg)("li",{parentName:"ul"},"repo_owner (string) (optional):"),(0,i.yg)("li",{parentName:"ul"},"repo_name (string) (optional):"),(0,i.yg)("li",{parentName:"ul"},"url (string) (",(0,i.yg)("inlineCode",{parentName:"li"},"http")," requires):"),(0,i.yg)("li",{parentName:"ul"},"asset (string) (",(0,i.yg)("inlineCode",{parentName:"li"},"github_release")," requires):"))),(0,i.yg)("li",{parentName:"ul"},"key",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"same as ",(0,i.yg)("inlineCode",{parentName:"li"},"signature")))),(0,i.yg)("li",{parentName:"ul"},"certificate",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"same as ",(0,i.yg)("inlineCode",{parentName:"li"},"signature"))))),(0,i.yg)("p",null,"e.g."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"cosign:\n  opts:\n    - --signature\n    - https://github.com/terraform-linters/tflint/releases/download/{{.Version}}/checksums.txt.keyless.sig\n    - --certificate\n    - https://github.com/terraform-linters/tflint/releases/download/{{.Version}}/checksums.txt.pem\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"cosign:\n  signature:\n    type: github_release\n    asset: checksums.txt.keyless.sig\n  certificate:\n    type: github_release\n    asset: checksums.txt.pem\n")))}u.isMDXComponent=!0},5680:(e,r,n)=>{n.d(r,{xA:()=>g,yg:()=>m});var t=n(6540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},g=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=i,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return n?t.createElement(m,o(o({ref:r},g),{},{components:n})):t.createElement(m,o({ref:r},g))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);