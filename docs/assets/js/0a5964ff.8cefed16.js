"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4324],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,y=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2981:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:150},u="Registry",c={unversionedId:"reference/registry",id:"reference/registry",title:"Registry",description:"Registry is a aqua's core concept.",source:"@site/docs/reference/registry.md",sourceDirName:"reference",slug:"/reference/registry",permalink:"/docs/reference/registry",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/reference/install"},next:{title:"Configuration",permalink:"/docs/reference/config"}},l={},p=[{value:"Standard Registry",id:"standard-registry",level:2},{value:"Create your own Registry",id:"create-your-own-registry",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"registry"},"Registry"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Registry")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua"),"'s core concept.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Registry")," defines the package list and how to install them."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", you specify Registries in ",(0,i.kt)("inlineCode",{parentName:"p"},"registries"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v2.5.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n")),(0,i.kt)("p",null,"You don't have to define how to install tools by yourself because it is defined in the Registry.\nRegistry is reusable across multiple configuration."),(0,i.kt)("h2",{id:"standard-registry"},"Standard Registry"),(0,i.kt)("p",null,"In the above configuration, the Standard Registry v2.5.0 is used.\nThe Standard Registry is a registry which we maintain."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"https://github.com/aquaproj/aqua-registry")),(0,i.kt)("h2",{id:"create-your-own-registry"},"Create your own Registry"),(0,i.kt)("p",null,"Please see the following document."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tutorial-extras/add-registry"},"Add Packages to Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tutorial-extras/private-package"},"Install private packages"))))}d.isMDXComponent=!0}}]);