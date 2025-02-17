"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6611],{276:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=a(8168),n=(a(6540),a(5680));const o={sidebar_position:2140},s="no_asset",i={unversionedId:"reference/registry-config/no_asset",id:"reference/registry-config/no_asset",title:"no_asset",description:"aqua >= v1.35.0",source:"@site/docs/reference/registry-config/no_asset.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/no_asset",permalink:"/docs/reference/registry-config/no_asset",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/no_asset.md",tags:[],version:"current",sidebarPosition:2140,frontMatter:{sidebar_position:2140},sidebar:"tutorialSidebar",previous:{title:"github_artifact_attestations",permalink:"/docs/reference/registry-config/github-artifact-attestations"},next:{title:"error_message",permalink:"/docs/reference/registry-config/error_message"}},c={},p=[],u={toc:p},g="wrapper";function l(e){let{components:r,...a}=e;return(0,n.yg)(g,(0,t.A)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"no_asset"},"no_asset"),(0,n.yg)("p",null,"aqua >= ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.35.0"},"v1.35.0")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1693"},"#1693")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1695"},"#1695")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"If you want to customize the error message, plse use ",(0,n.yg)("a",{parentName:"p",href:"/docs/reference/registry-config/error_message"},"error_message"),".")),(0,n.yg)("p",null,"If this field is set, it fails to install the package and outputs the error message."),(0,n.yg)("p",null,"e.g."),(0,n.yg)("p",null,"registry.yaml"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: grafana\n    repo_name: xk6\n    version_constraint: semver("< 0.9.0")\n    version_overrides:\n      - version_constraint: semver(">= 0.9.0")\n        no_asset: true\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-console"},"$ xk6 --help                   \nERRO[0000] failed to install a package grafana/xk6@v0.9.0. No asset is released in this version  aqua_version= env=darwin/arm64 exe_name=xk6 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/grafana/xk6/v0.9.0/xk6_0.9.0_mac_arm64.tar.gz/xk6 package=grafana/xk6 package_name=grafana/xk6 package_version=v0.9.0 program=aqua registry=standard\nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error= exe_name=xk6 package=grafana/xk6 package_version=v0.9.0 program=aqua\n")))}l.isMDXComponent=!0},5680:(e,r,a)=>{a.d(r,{xA:()=>u,yg:()=>m});var t=a(6540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),p=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},g="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(a),f=n,m=g["".concat(c,".").concat(f)]||g[f]||l[f]||o;return a?t.createElement(m,s(s({ref:r},u),{},{components:a})):t.createElement(m,s({ref:r},u))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[g]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);