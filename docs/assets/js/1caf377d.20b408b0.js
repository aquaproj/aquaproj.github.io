"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1713],{5680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>g});var n=a(6540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=n.createContext({}),u=function(e){var r=n.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=t,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,i(i({ref:r},c),{},{components:a})):n.createElement(g,i({ref:r},c))}));function g(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:t,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1958:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(8168),t=(a(6540),a(5680));const o={sidebar_position:310},i="Command Aliases",s={unversionedId:"guides/command-alias",id:"guides/command-alias",title:"Command Aliases",description:"v2.37.0 3224",source:"@site/docs/guides/command-alias.md",sourceDirName:"guides",slug:"/guides/command-alias",permalink:"/docs/guides/command-alias",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/command-alias.md",tags:[],version:"current",sidebarPosition:310,frontMatter:{sidebar_position:310},sidebar:"tutorialSidebar",previous:{title:"Update registries and packages by update command",permalink:"/docs/guides/update-command"},next:{title:"Install private packages",permalink:"/docs/guides/private-package"}},l={},u=[],c={toc:u},p="wrapper";function m(e){let{components:r,...a}=e;return(0,t.yg)(p,(0,n.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"command-aliases"},"Command Aliases"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.37.0"},"v2.37.0")," ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/3224"},"3224")),(0,t.yg)("p",null,"You can define command aliases in aqua.yaml."),(0,t.yg)("p",null,"This is useful to use multiple versions of the same package."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v4.246.0 # renovate: depName=aquaproj/aqua-registry\npackages:\n- name: hashicorp/terraform@v1.9.8\n- name: hashicorp/terraform\n  version: v0.13.7\n  command_aliases:\n    - command: terraform\n      alias: terraform-013\n      # no_link: true\n")),(0,t.yg)("p",null,"Then you can run ",(0,t.yg)("inlineCode",{parentName:"p"},"terraform")," (v1.9.8) and ",(0,t.yg)("inlineCode",{parentName:"p"},"terraform-013")," (v0.13.7)."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-console"},"$ terraform version\nTerraform v1.9.8\non darwin_arm64\n\n$ terraform-013 version\nTerraform v0.13.7\n\nYour version of Terraform is out of date! The latest version\nis 1.9.8. You can update by downloading from https://www.terraform.io/downloads.html\n")),(0,t.yg)("p",null,"You can skip creating symbolic links for aliases by ",(0,t.yg)("inlineCode",{parentName:"p"},"no_link: true")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"  command_aliases:\n    - command: terraform\n      alias: terraform-013\n      no_link: true\n")),(0,t.yg)("p",null,"You can still run aliases via ",(0,t.yg)("inlineCode",{parentName:"p"},"aqua exec"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"aqua exec -- terraform-013 version\n")))}m.isMDXComponent=!0}}]);