"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7896],{5788:(e,r,t)=>{t.d(r,{Iu:()=>g,yg:()=>y});var n=t(1504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},g=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=a,y=l["".concat(u,".").concat(f)]||l[f]||s[f]||i;return t?n.createElement(y,o(o({ref:r},g),{},{components:t})):n.createElement(y,o({ref:r},g))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3764:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(5072),a=(t(1504),t(5788));const i={sidebar_position:1100},o="github_archive Package",c={unversionedId:"reference/registry-config/github-archive-package",id:"reference/registry-config/github-archive-package",title:"github_archive Package",description:"The package is downloaded from GitHub Archive.",source:"@site/docs/reference/registry-config/github-archive-package.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/github-archive-package",permalink:"/docs/reference/registry-config/github-archive-package",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/github-archive-package.md",tags:[],version:"current",sidebarPosition:1100,frontMatter:{sidebar_position:1100},sidebar:"tutorialSidebar",previous:{title:"github_content Package",permalink:"/docs/reference/registry-config/github-content-package"},next:{title:"go Package",permalink:"/docs/reference/registry-config/go-package"}},u={},p=[{value:"Required fields",id:"required-fields",level:2}],g={toc:p},l="wrapper";function s(e){let{components:r,...t}=e;return(0,a.yg)(l,(0,n.c)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"github_archive-package"},(0,a.yg)("inlineCode",{parentName:"h1"},"github_archive")," Package"),(0,a.yg)("p",null,"The package is downloaded from GitHub Archive."),(0,a.yg)("p",null,"e.g. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/pkgs/tfutils/tfenv/registry.yaml"},"tfutils/tfenv")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_archive\n    repo_owner: tfutils\n    repo_name: tfenv\n    description: Terraform version manager\n    files:\n      - name: tfenv\n        src: tfenv-{{trimV .Version}}/bin/tfenv\n      - name: terraform\n        src: tfenv-{{trimV .Version}}/bin/terraform\n")),(0,a.yg)("h2",{id:"required-fields"},"Required fields"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"type"),(0,a.yg)("li",{parentName:"ul"},"repo_owner"),(0,a.yg)("li",{parentName:"ul"},"repo_name")))}s.isMDXComponent=!0}}]);