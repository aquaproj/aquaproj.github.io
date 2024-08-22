"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5717],{5680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>y});var n=r(6540);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function g(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,y=s["".concat(l,".").concat(m)]||s[m]||u[m]||t;return r?n.createElement(y,i(i({ref:a},p),{},{components:r})):n.createElement(y,i({ref:a},p))}));function y(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=m;var g={};for(var l in a)hasOwnProperty.call(a,l)&&(g[l]=a[l]);g.originalType=e,g[s]="string"==typeof e?e:o,i[1]=g;for(var c=2;c<t;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7524:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>g,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const t={sidebar_position:1200},i="go Package",g={unversionedId:"reference/registry-config/go-package",id:"reference/registry-config/go-package",title:"go Package",description:"This package type was abandoned at aqua v2.0.0.",source:"@site/docs/reference/registry-config/go-package.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/go-package",permalink:"/docs/reference/registry-config/go-package",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/go-package.md",tags:[],version:"current",sidebarPosition:1200,frontMatter:{sidebar_position:1200},sidebar:"tutorialSidebar",previous:{title:"github_archive Package",permalink:"/docs/reference/registry-config/github-archive-package"},next:{title:"go_build Package",permalink:"/docs/reference/registry-config/go-build-package"}},l={},c=[{value:"File parameter",id:"file-parameter",level:2}],p={toc:c},s="wrapper";function u(e){let{components:a,...r}=e;return(0,o.yg)(s,(0,n.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"go-package"},(0,o.yg)("inlineCode",{parentName:"h1"},"go")," Package"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("a",{parentName:"p",href:"/docs/reference/upgrade-guide/v2/remove-type-go"},"This package type was abandoned at aqua v2.0.0"),".\nUse ",(0,o.yg)("a",{parentName:"p",href:"/docs/reference/registry-config/go-install-package"},"go_install")," or ",(0,o.yg)("a",{parentName:"p",href:"/docs/reference/registry-config/go-build-package"},"go_build")," package instead.")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/798"},"#798")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/799"},"#799")),(0,o.yg)("p",null,"aqua >= ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.7.0"},"v1.7.0")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"repo_name"),": The repository name")),(0,o.yg)("p",null,"The repository archive is downloaded from GitHub and the package is built by command ",(0,o.yg)("inlineCode",{parentName:"p"},"go build")," when it is installed.\nSo the command ",(0,o.yg)("inlineCode",{parentName:"p"},"go")," is required.\naqua is a CLI Version Manager, you have to specify the version. Unlike ",(0,o.yg)("inlineCode",{parentName:"p"},"go install")," command, you can't specify the head of the default branch."),(0,o.yg)("p",null,"e.g. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/google/wire"},"https://github.com/google/wire")),(0,o.yg)("p",null,"registry.yaml"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: go\n    repo_owner: google\n    repo_name: wire\n    description: Compile-time Dependency Injection for Go\n    files:\n      - name: wire\n        src: ./cmd/wire\n        dir: wire-{{trimV .Version}}\n")),(0,o.yg)("p",null,"aqua.yaml"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - name: local\n    type: local\n    path: registry.yaml\npackages:\n  - name: google/wire@v0.5.0\n    registry: local\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua which wire\n/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/bin/wire\n\n$ aqua install\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/home/foo/.local/share/aquaproj-aqua/bin/wire new=aqua-proxy package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\nINFO[0001] building Go tool                              aqua_version= env=darwin/arm64 exe_path=/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/bin/wire file_name=wire go_build_dir=/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/src/wire-0.5.0 go_src=./cmd/wire package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\n")),(0,o.yg)("p",null,"From aqua ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.9.0"},"v1.9.0"),", if there is no GitHub Repository tag or the latest tag is old, you can specify Git revision instead of tag."),(0,o.yg)("p",null,"e.g."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: google/wire\n    registry: local\n    version: 79660af94317b9c466adc39f27f469f1079c779b\n")),(0,o.yg)("h2",{id:"file-parameter"},"File parameter"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"    files:\n      - name: wire\n        src: ./cmd/wire\n        dir: wire-{{trimV .Version}}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"name: command name"),(0,o.yg)("li",{parentName:"ul"},"dir: Directory path where ",(0,o.yg)("inlineCode",{parentName:"li"},"go build")," is run"),(0,o.yg)("li",{parentName:"ul"},"src: go build's target path")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"${AQUA_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/\n  bin/wire\n  src/ # GitHub Repository Archive\n    wire-0.5.0/ # `go build` is run on this directory\n      cmd/wire # build target\n")),(0,o.yg)("p",null,"The following command is run."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},'$ go build -o "${AQUA_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/bin/wire" "./cmd/wire"\n')))}u.isMDXComponent=!0}}]);