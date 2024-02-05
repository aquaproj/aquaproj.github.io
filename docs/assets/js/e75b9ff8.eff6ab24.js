"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[792],{5788:(e,n,r)=>{r.d(n,{Iu:()=>p,yg:()=>m});var t=r(1504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return r?t.createElement(m,o(o({ref:n},p),{},{components:r})):t.createElement(m,o({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5040:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=r(5072),a=(r(1504),r(5788));const i={sidebar_position:610},o="build",l={unversionedId:"reference/registry-config/build",id:"reference/registry-config/build",title:"build",description:"#2132 #2317 aqua >= v2.13.0",source:"@site/docs/reference/registry-config/build.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/build",permalink:"/docs/reference/registry-config/build",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/build.md",tags:[],version:"current",sidebarPosition:610,frontMatter:{sidebar_position:610},sidebar:"tutorialSidebar",previous:{title:"aliases",permalink:"/docs/reference/registry-config/aliases"},next:{title:"format",permalink:"/docs/reference/registry-config/format"}},s={},u=[{value:"Why not <code>overrides</code>?",id:"why-not-overrides",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"build"},"build"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/2132"},"#2132")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/2317"},"#2317")," aqua >= ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.13.0"},"v2.13.0")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"build")," enables to install packages by ",(0,a.yg)("inlineCode",{parentName:"p"},"go_install")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"go_build")," on platforms where prebuilt binaries aren't published."),(0,a.yg)("p",null,"e.g."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_release\n    repo_owner: suzuki-shunsuke\n    repo_name: tfcmt\n    asset: tfcmt_{{.OS}}_{{.Arch}}.{{.Format}}\n    format: tar.gz\n    supported_envs:\n      - linux\n    build:\n      type: go_build\n      files:\n        - name: tfcmt\n          src: ./cmd/tfcmt\n          dir: tfcmt-{{trimV .Version}}\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"supported_envs")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"linux"),", so on platforms other than linux aqua installs tfcmt by ",(0,a.yg)("inlineCode",{parentName:"p"},"go_build"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"go_install")," is also available."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"build:\n  type: go_install\n  path: github.com/suzuki-shunsuke/tfcmt/v4/cmd/tfcmt\n")),(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"go_build")," failed on windows/arm64 and you'd like to exclude windows/arm64, ",(0,a.yg)("inlineCode",{parentName:"p"},"excluded_envs")," is available."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"build:\n  type: go_build\n  excluded_envs:\n    - windows/arm64\n  files:\n    - name: tfcmt\n      src: ./cmd/tfcmt\n      dir: tfcmt-{{trimV .Version}}\n")),(0,a.yg)("p",null,"If you'd like to disable ",(0,a.yg)("inlineCode",{parentName:"p"},"build")," in version_overrides, ",(0,a.yg)("inlineCode",{parentName:"p"},"enabled")," is available."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"build:\n  enabled: false\n")),(0,a.yg)("h2",{id:"why-not-overrides"},"Why not ",(0,a.yg)("inlineCode",{parentName:"h2"},"overrides"),"?"),(0,a.yg)("p",null,"Of course, we can do the same thing with ",(0,a.yg)("a",{parentName:"p",href:"/docs/reference/registry-config/overrides"},"overrides"),".\nBut ",(0,a.yg)("inlineCode",{parentName:"p"},"build")," makes the intension of the code clear and simplify the code."))}d.isMDXComponent=!0}}]);