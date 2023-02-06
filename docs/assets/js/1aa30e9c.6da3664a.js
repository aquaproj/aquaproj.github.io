"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5252],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?t.createElement(g,i(i({ref:n},c),{},{components:a})):t.createElement(g,i({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5950:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(7462),r=(a(7294),a(3905));const o={sidebar_position:700},i="How does Lazy Install work?",l={unversionedId:"reference/lazy-install",id:"reference/lazy-install",title:"How does Lazy Install work?",description:"On Windows, aqua-proxy and symbolic links aren't used.",source:"@site/docs/reference/lazy-install.md",sourceDirName:"reference",slug:"/reference/lazy-install",permalink:"/docs/reference/lazy-install",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/lazy-install.md",tags:[],version:"current",sidebarPosition:700,frontMatter:{sidebar_position:700},sidebar:"tutorialSidebar",previous:{title:"Uninstall Packages",permalink:"/docs/reference/clean"},next:{title:"Progress Bar",permalink:"/docs/reference/progress-bar"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-does-lazy-install-work"},"How does Lazy Install work?"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"On Windows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-proxy"},"aqua-proxy")," and symbolic links aren't used.\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/windows-support#create-bat-files-and-shell-scripts-instead-of-symbolic-links-and-aqua-proxy"},"here"))),(0,r.kt)("p",null,"In this document we describe how the Lazy Install works.\nThe Lazy Install is the aqua's characteristic feature, and maybe you feel it like magic."),(0,r.kt)("p",null,"By ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i"),", aqua installs ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-proxy"},"aqua-proxy")," regardless the aqua's configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$AQUA_ROOT_DIR/\n  bin/\n    aqua-proxy -> ../pkgs/github_release/github.com/aquaproj/aqua-proxy/v0.2.0/aqua-proxy_darwin_amd64.tar.gz/aqua-proxy\n  pkgs/\n    github_release/github.com/aquaproj/aqua-proxy/v0.2.0/aqua-proxy_darwin_amd64.tar.gz/aqua-proxy\n")),(0,r.kt)("p",null,"And by ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i"),", aqua reads the configuration file and creates symbolic links to aqua-proxy in ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin"),".\nThe symbolic link name is the package's file name."),(0,r.kt)("p",null,"For example, by the following configuration symbolic links ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gofmt")," are created."),(0,r.kt)("p",null,"aqua.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'registries:\n- name: local\n  type: local\n  path: registry.yaml\n\npackages:\n- name: go\n  registry: local\n  version: "1.17"\n')),(0,r.kt)("p",null,"registry.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: go\n  type: http\n  url: https://golang.org/dl/go{{.Version}}.{{.OS}}-{{.Arch}}.tar.gz\n  files:\n  - name: go # the symbolic `go` is created\n    src: go/bin/go\n  - name: gofmt # the symbolic `gofmt` is created\n    src: go/bin/gofmt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$AQUA_ROOT_DIR/\n  bin/\n    go -> aqua-proxy\n    gofmt -> aqua-proxy\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin")," to the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),".\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"go version")," is executed, ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin/go")," is a symbolic link to aqua-proxy so aqua-proxy is executed.\nThen aqua-proxy executes ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua exec")," passing the program name and command line arguments.\nIn case of ",(0,r.kt)("inlineCode",{parentName:"p"},"go version"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua exec -- go version")," is executed.\n",(0,r.kt)("inlineCode",{parentName:"p"},"aqua exec")," reads the configuration file and finds the package which includes ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," and gets the package versions.\naqua installs the package version in ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/pkgs")," if it isn't installed yet\nThen aqua executes the command ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/pkgs/http/golang.org/dl/go1.17.darwin-amd64.tar.gz/go/bin/go version"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin")," is shared by every ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", so maybe in ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua exec")," the package isn't found.\nPlease comment out the package ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," and execute ",(0,r.kt)("inlineCode",{parentName:"p"},"go version")," again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'registries:\n- name: local\n  type: local\n  path: registry.yaml\n\npackages:\n# - name: go\n#   registry: local\n#   version: "1.17"\n')),(0,r.kt)("p",null,"If the package isn't found in the configuration files,\naqua finds the command from the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),".\nFor example, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin:/usr/local/bin:/bin"),", aqua checks the following files."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR/bin/go")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/go")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/bin/go"))),(0,r.kt)("p",null,"To prevent the infinite loop, aqua ignores the symbolic to aqua-proxy.\n",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/bin/go")," is a symbolic link to aqua-proxy, so this is ignored.\nIf go is installed in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/go"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/go version")," is executed.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," isn't found, aqua exits with non zero exit code."))}m.isMDXComponent=!0}}]);