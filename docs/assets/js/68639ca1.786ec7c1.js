"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2812],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(t),m=r,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return t?n.createElement(d,i(i({ref:a},c),{},{components:t})):n.createElement(d,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2702:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1300},i="go_install Package",l={unversionedId:"reference/registry-config/go-install-package",id:"reference/registry-config/go-install-package",title:"go_install Package",description:"#823 #826, aqua >= v1.10.0 is required.",source:"@site/docs/reference/registry-config/go-install-package.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/go-install-package",permalink:"/docs/reference/registry-config/go-install-package",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/go-install-package.md",tags:[],version:"current",sidebarPosition:1300,frontMatter:{sidebar_position:1300},sidebar:"tutorialSidebar",previous:{title:"go Package",permalink:"/docs/reference/registry-config/go-package"},next:{title:"cargo Package",permalink:"/docs/reference/registry-config/cargo-package"}},p={},s=[],c={toc:s},g="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(g,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go_install-package"},(0,r.kt)("inlineCode",{parentName:"h1"},"go_install")," Package"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/823"},"#823")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/826"},"#826"),", aqua >= ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.10.0"},"v1.10.0")," is required."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": Go package path. If ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," is not set but ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_name")," are set, the package path is ",(0,r.kt)("inlineCode",{parentName:"li"},"github.com/<repo_owner>/<repo_name>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": The package name. If ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is not set but ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_name")," are set, the package name is ",(0,r.kt)("inlineCode",{parentName:"li"},"<repo_owner>/<repo_name>"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_name")," aren't set, ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," is used as the package name")),(0,r.kt)("p",null,"The package is installed by ",(0,r.kt)("inlineCode",{parentName:"p"},"go install")," command.\nSo the command ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," is required.\nWhen aqua runs ",(0,r.kt)("inlineCode",{parentName:"p"},"go install"),", aqua sets the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"GOBIN"),"."),(0,r.kt)("p",null,"aqua is a CLI Version Manager, you have to specify the version. You can't specify ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),"."),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat"},"golang.org/x/perf/cmd/benchstat")),(0,r.kt)("p",null,"registry.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: go_install\n    path: golang.org/x/perf/cmd/benchstat\n    description: Benchstat computes and compares statistics about benchmarks\n")),(0,r.kt)("p",null,"aqua.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - name: local\n    type: local\n    path: registry.yaml\npackages:\n  - name: golang.org/x/perf/cmd/benchstat\n    registry: local\n    version: 84e58bfe0a7e5416369e236afa007d5d9c58a0fa\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/bin/benchstat new=aqua-proxy package_name=golang.org/x/perf/cmd/benchstat package_version=84e58bfe0a7e5416369e236afa007d5d9c58a0fa program=aqua registry=local\nINFO[0000] Installing a Go tool                          aqua_version= env=darwin/arm64 go_package_path=golang.org/x/perf/cmd/benchstat@84e58bfe0a7e5416369e236afa007d5d9c58a0fa gobin=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go_install/golang.org/x/perf/cmd/benchstat/84e58bfe0a7e5416369e236afa007d5d9c58a0fa/bin package_name=golang.org/x/perf/cmd/benchstat package_version=84e58bfe0a7e5416369e236afa007d5d9c58a0fa program=aqua registry=local\ngo: downloading golang.org/x/perf v0.0.0-20220411212318-84e58bfe0a7e\n\n$ aqua which benchstat\n/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go_install/golang.org/x/perf/cmd/benchstat/84e58bfe0a7e5416369e236afa007d5d9c58a0fa/bin/github-compare\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1084"},"#1084")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1487"},"#1487")," From aqua ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.27.0"},"v1.27.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," is treated as a template string."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: go_install\n    repo_owner: volatiletech\n    repo_name: sqlboiler\n    description: Generate a Go ORM tailored to your database schema\n    path: github.com/volatiletech/sqlboiler/v{{(semver .Version).Major}}\n")))}u.isMDXComponent=!0}}]);