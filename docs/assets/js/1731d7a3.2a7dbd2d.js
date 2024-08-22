"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[596],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9362:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const a={sidebar_position:500},i="Use different version per project",p={unversionedId:"tutorial/change-version-per-project",id:"tutorial/change-version-per-project",title:"Use different version per project",description:"aqua supports changing the tool versions per project.",source:"@site/docs/tutorial/change-version-per-project.md",sourceDirName:"tutorial",slug:"/tutorial/change-version-per-project",permalink:"/docs/tutorial/change-version-per-project",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial/change-version-per-project.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"aqua i's -l option",permalink:"/docs/tutorial/install-only-link"},next:{title:"Configuration file path",permalink:"/docs/tutorial/config-path"}},s={},c=[],l={toc:c},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"use-different-version-per-project"},"Use different version per project"),(0,o.yg)("p",null,"aqua supports changing the tool versions per project."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir foo bar\necho -n 'registries:\n- type: standard\n  ref: v4.79.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.1.0\n' > foo/aqua.yaml\necho -n 'registries:\n- type: standard\n  ref: v3.79.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.0.0\n' > bar/aqua.yaml\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd foo\ngh version # In foo, the version is v2.1.0.\ncd ../bar\ngh version # In bar, the version is v2.0.0.\n")),(0,o.yg)("p",null,"The version of ",(0,o.yg)("inlineCode",{parentName:"p"},"gh")," is changed seamlessly."),(0,o.yg)("p",null,"You can install multiple versions in the same laptop and switch the version by project."))}f.isMDXComponent=!0}}]);