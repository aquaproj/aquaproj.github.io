"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1805],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>d});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),g=a,d=s["".concat(c,".").concat(g)]||s[g]||f[g]||o;return n?t.createElement(d,i(i({ref:r},p),{},{components:n})):t.createElement(d,i({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7951:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=n(8168),a=(n(6540),n(5680));const o={sidebar_position:550},i="Configuration file path",l={unversionedId:"tutorial/config-path",id:"tutorial/config-path",title:"Configuration file path",description:"aqua finds configuration files from the current directory to the root directory.",source:"@site/docs/tutorial/config-path.md",sourceDirName:"tutorial",slug:"/tutorial/config-path",permalink:"/docs/tutorial/config-path",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial/config-path.md",tags:[],version:"current",sidebarPosition:550,frontMatter:{sidebar_position:550},sidebar:"tutorialSidebar",previous:{title:"Use different version per project",permalink:"/docs/tutorial/change-version-per-project"},next:{title:"Install tools globally",permalink:"/docs/tutorial/global-config"}},c={},u=[],p={toc:u},s="wrapper";function f(e){let{components:r,...n}=e;return(0,a.yg)(s,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"configuration-file-path"},"Configuration file path"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# aqua.yaml\nregistries:\n- type: standard\n  ref: v4.155.1 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.1.0\n- name: junegunn/fzf@0.28.0\n- name: tfmigrator/cli@v0.2.1\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# bar/aqua.yaml\nregistries:\n- type: standard\n  ref: v4.155.1 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.0.0\n")),(0,a.yg)("p",null,"aqua finds configuration files from the current directory to the root directory."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"$ pwd\n/home/foo/workspace/bar\n$ mkdir zoo\n$ cd zoo\n\n$ gh version # find the configuration file /home/foo/workspace/bar/aqua.yaml\ngh version 2.0.0 (2021-08-24)\nhttps://github.com/cli/cli/releases/tag/v2.0.0\n")),(0,a.yg)("p",null,"aqua reads configuration files until the tool is found."),(0,a.yg)("p",null,"tfmigrator isn't found in ",(0,a.yg)("inlineCode",{parentName:"p"},"../aqua.yaml"),", but is found in ",(0,a.yg)("inlineCode",{parentName:"p"},"../../aqua.yaml"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"$ tfmigrator -v\nINFO[0000] download and unarchive the package            aqua_version=2.25.1 package_name=tfmigrator/cli package_version=v0.2.1 program=aqua registry=standard\ntfmigrator version 0.2.1 (3993c0824016673338530f4e7e8966c35efa5706)\n")),(0,a.yg)("p",null,"If the configuration file isn't found and the tool isn't installed outside aqua, the command fails."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},'$ cd /tmp\n$ gh version\nFATA[0000] aqua failed                                   aqua_version=2.25.1 error="command is not found" exe_name=gh program=aqua\n')))}f.isMDXComponent=!0}}]);