"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8376],{5788:(e,a,t)=>{t.d(a,{Iu:()=>p,yg:()=>m});var n=t(1504);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(t),h=o,m=g["".concat(s,".").concat(h)]||g[h]||c[h]||r;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},848:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=t(5072),o=(t(1504),t(5788));const r={title:"Support building tools with Go",date:new Date("2022-05-30T00:32:46.000Z"),authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/blog/2022/05/30/support-building-go-tools",source:"@site/blog/2022-05-30-support-building-go-tools.md",title:"Support building tools with Go",description:"In this post, I describe the feature introduced from aqua v1.7.0.",date:"2022-05-30T00:32:46.000Z",formattedDate:"May 30, 2022",tags:[],readingTime:2.54,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Support building tools with Go",date:"2022-05-30T00:32:46.000Z",authors:["suzuki-shunsuke"]},nextItem:{title:"Why I use aqua",permalink:"/blog/2021/12/23/why-i-use-aqua"}},s={authorsImageUrls:[void 0]},u=[{value:"Usage",id:"usage",level:2},{value:"Benefit",id:"benefit",level:2},{value:"Specify a commit sha instead of a tag",id:"specify-a-commit-sha-instead-of-a-tag",level:2},{value:"Can we specify <code>latest</code> like <code>go install</code>?",id:"can-we-specify-latest-like-go-install",level:2},{value:"Example tools supported by package type <code>go</code>",id:"example-tools-supported-by-package-type-go",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Reference",id:"reference",level:2}],p={toc:u},g="wrapper";function c(e){let{components:a,...t}=e;return(0,o.yg)(g,(0,n.c)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In this post, I describe the feature introduced from aqua ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.7.0"},"v1.7.0"),".\nFrom v1.7.0, aqua supports building tools with Go when they are installed."),(0,o.yg)("p",null,"For example, ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/mitchellh/gox"},"mitchellh/gox")," doesn't provide built binaries, so you have to build it yourself."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/mitchellh/gox#installation"},"https://github.com/mitchellh/gox#installation")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"To install Gox, please use go get. We tag versions so feel free to checkout that tag and compile.")),(0,o.yg)("p",null,"So it was difficult for aqua to support gox."),(0,o.yg)("p",null,"But from v1.7.0, aqua has introduced a new package type named ",(0,o.yg)("inlineCode",{parentName:"p"},"go")," to support these tools.\nWhen packages of the type ",(0,o.yg)("inlineCode",{parentName:"p"},"go")," are installed, GitHub Repository archives (tarball) are downloaded and unarchived, and binaries are built by ",(0,o.yg)("inlineCode",{parentName:"p"},"go build")," command.\nTo run ",(0,o.yg)("inlineCode",{parentName:"p"},"go build"),", ",(0,o.yg)("strong",{parentName:"p"},"Go is required"),". In my understanding, we can run ",(0,o.yg)("inlineCode",{parentName:"p"},"go build")," safely because any external malicious commands aren't run in ",(0,o.yg)("inlineCode",{parentName:"p"},"go build"),"."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("p",null,"The usage of ",(0,o.yg)("inlineCode",{parentName:"p"},"go")," type packages are exactly the same as other type packages."),(0,o.yg)("p",null,"e.g."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"$ aqua init\n$ aqua g -i mitchellh/gox\n$ cat aqua.yaml\n---\n# aqua - Declarative CLI Version Manager\n# https://aquaproj.github.io/\nregistries:\n- type: standard\n  ref: v2.19.0 # renovate: depName=aquaproj/aqua-registry\npackages:\n- name: mitchellh/gox@v1.0.1\n\n$ aqua i\nINFO[0000] create a symbolic link                        aqua_version=1.9.0 env=darwin/arm64 link_file=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/bin/gox new=aqua-proxy package_name=mitchellh/gox package_version=v1.0.1 program=aqua registry=standard registry_ref=v2.19.0\nINFO[0000] download and unarchive the package            aqua_version=1.9.0 env=darwin/arm64 package_name=mitchellh/gox package_version=v1.0.1 program=aqua registry=standard registry_ref=v2.19.0\nINFO[0000] building Go tool                              aqua_version=1.9.0 env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go/github.com/mitchellh/gox/v1.0.1/bin/gox file_name=gox go_build_dir=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go/github.com/mitchellh/gox/v1.0.1/src/gox-1.0.1 go_src=. package_name=mitchellh/gox package_version=v1.0.1 program=aqua registry=standard registry_ref=v2.19.0\ngo: downloading github.com/hashicorp/go-version v1.0.0\ngo: downloading github.com/mitchellh/iochan v1.0.0\n")),(0,o.yg)("p",null,"Please see the log of ",(0,o.yg)("inlineCode",{parentName:"p"},"aqua i"),". You can confirm that gox is built."),(0,o.yg)("h2",{id:"benefit"},"Benefit"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Support installing tools that no binary is provided"),(0,o.yg)("li",{parentName:"ul"},"Pin the tool version"),(0,o.yg)("li",{parentName:"ul"},"Change the tool version per project"),(0,o.yg)("li",{parentName:"ul"},"Update tools by Renovate")),(0,o.yg)("h2",{id:"specify-a-commit-sha-instead-of-a-tag"},"Specify a commit sha instead of a tag"),(0,o.yg)("p",null,"Some tools aren't tagged properly, or there is too much difference between the latest tag and the latest default branch.\nIn that case, you can also specify a commit sha as a version instead of a tag."),(0,o.yg)("p",null,"e.g. aqua.yaml"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v2.19.0\npackages:\n- name: mitchellh/gox\n  version: 8c3b2b9e647dc52457d6ee7b5adcf97e2bafe131 # Specify commit sha\n")),(0,o.yg)("h2",{id:"can-we-specify-latest-like-go-install"},"Can we specify ",(0,o.yg)("inlineCode",{parentName:"h2"},"latest")," like ",(0,o.yg)("inlineCode",{parentName:"h2"},"go install"),"?"),(0,o.yg)("p",null,"As you know, ",(0,o.yg)("inlineCode",{parentName:"p"},"go install")," supports specifying ",(0,o.yg)("inlineCode",{parentName:"p"},"latest"),"."),(0,o.yg)("p",null,"e.g."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"$ go install github.com/google/wire/cmd/wire@latest\n")),(0,o.yg)("p",null,"On the other hand, aqua doesn't support specifying ",(0,o.yg)("inlineCode",{parentName:"p"},"latest")," because aqua is ",(0,o.yg)("strong",{parentName:"p"},"CLI Version Manager"),".\nYou must specify the version strictly."),(0,o.yg)("h2",{id:"example-tools-supported-by-package-type-go"},"Example tools supported by package type ",(0,o.yg)("inlineCode",{parentName:"h2"},"go")),(0,o.yg)("p",null,"In the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/releases/tag/v2.19.0"},"release of aqua-registry v2.19.0"),", aqua-registry has supported the following go type packages."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/golang/tools/tree/master/gopls"},"golang/tools/gopls"),": Go language server"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/google/wire"},"google/wire"),": Compile-time Dependency Injection for Go"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/katbyte/terrafmt"},"katbyte/terrafmt"),": Format terraform blocks embedded in files"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/mitchellh/gox"},"mitchellh/gox"),": A dead simple, no frills Go cross compile tool"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/anqiansong/github-compare"},"anqiansong/github-compare"),": A Command-line statistics tool to compare the GitHub repositories")),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"In this post, I've described the feature introduced from aqua ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.7.0"},"v1.7.0"),".\nFrom v1.7.0, aqua supports building tools with Go when they are installed.\nThis feature is powerful and changes the management of Go tools that don't provide binaries."),(0,o.yg)("h2",{id:"reference"},"Reference"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.7.0"},"https://github.com/aquaproj/aqua/releases/tag/v1.7.0")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/releases/tag/v2.19.0"},"https://github.com/aquaproj/aqua-registry/releases/tag/v2.19.0")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/pull/3713"},"https://github.com/aquaproj/aqua-registry/pull/3713")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://aquaproj.github.io/docs/registry-config#go-package"},"https://aquaproj.github.io/docs/registry-config#go-package")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/scraps/7e8ac509fe39bd"},"https://zenn.dev/shunsuke_suzuki/scraps/7e8ac509fe39bd")," (Japanese)")))}c.isMDXComponent=!0}}]);