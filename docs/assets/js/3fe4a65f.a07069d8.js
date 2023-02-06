"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8369],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:445},i="Registry Style Guide",l={unversionedId:"reference/registry-style-guide",id:"reference/registry-style-guide",title:"Registry Style Guide",description:"If you develop your custom registry, you don't have to conform this style guide.",source:"@site/docs/reference/registry-style-guide.md",sourceDirName:"reference",slug:"/reference/registry-style-guide",permalink:"/docs/reference/registry-style-guide",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-style-guide.md",tags:[],version:"current",sidebarPosition:445,frontMatter:{sidebar_position:445},sidebar:"tutorialSidebar",previous:{title:"Scaffold Registry Configuration",permalink:"/docs/reference/scaffold-registry"},next:{title:"Create Private Registries",permalink:"/docs/reference/create-private-registry"}},s={},u=[{value:"Scaffold configuration by <code>aqua gr</code> command",id:"scaffold-configuration-by-aqua-gr-command",level:2},{value:"Format with prettier",id:"format-with-prettier",level:2},{value:"Remove spaces in the template <code>{{ </code> and <code> }}</code>",id:"remove-spaces-in-the-template---and--",level:2},{value:"Remove characters <code>.!</code> from the end of the description",id:"remove-characters--from-the-end-of-the-description",level:2},{value:"Trim spaces",id:"trim-spaces",level:2},{value:"Remove unneeded quotes of strings",id:"remove-unneeded-quotes-of-strings",level:2},{value:"Avoid <code>if</code> and <code>for</code> statement in templates",id:"avoid-if-and-for-statement-in-templates",level:2},{value:"<code>version_overrides</code> Style Guide",id:"version_overrides-style-guide",level:2},{value:"If the <code>format</code> is <code>raw</code>, <code>files[].src</code> isn&#39;t needed",id:"if-the-format-is-raw-filessrc-isnt-needed",level:2},{value:"Consideration about Rust",id:"consideration-about-rust",level:2},{value:"Use <code>overrides</code> instead of <code>format_overrides</code>",id:"use-overrides-instead-of-format_overrides",level:2},{value:"Don&#39;t use emojis as much as possible",id:"dont-use-emojis-as-much-as-possible",level:2},{value:"Omit the setting which is equivalent to the default value",id:"omit-the-setting-which-is-equivalent-to-the-default-value",level:2},{value:"Use <code>aliases</code> only for keeping the compatibility",id:"use-aliases-only-for-keeping-the-compatibility",level:2},{value:"Use <code>supported_envs</code> rather than <code>supported_if</code>",id:"use-supported_envs-rather-than-supported_if",level:2},{value:"Select <code>type</code> according to the following order",id:"select-type-according-to-the-following-order",level:2},{value:"Use <code>go_install</code> rather than <code>go</code>",id:"use-go_install-rather-than-go",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"registry-style-guide"},"Registry Style Guide"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you develop your custom registry, you don't have to conform this style guide.\nBut the guide would be useful to write good and consistent configuration.")),(0,r.kt)("h2",{id:"scaffold-configuration-by-aqua-gr-command"},"Scaffold configuration by ",(0,r.kt)("inlineCode",{parentName:"h2"},"aqua gr")," command"),(0,r.kt)("p",null,"First, we recommend to scaffold configuration by ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua gr")," command."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/scaffold-registry"},"Scaffold Registry Configuration"),"."),(0,r.kt)("h2",{id:"format-with-prettier"},"Format with prettier"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://prettier.io/"},"https://prettier.io/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ npm i -g prettier\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ prettier -w registry.yaml\n")),(0,r.kt)("h2",{id:"remove-spaces-in-the-template---and--"},"Remove spaces in the template ",(0,r.kt)("inlineCode",{parentName:"h2"},"{{ ")," and ",(0,r.kt)("inlineCode",{parentName:"h2"}," }}")),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"asset: tfcmt_{{.OS}}_{{.Arch}}.tar.gz\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"asset: tfcmt_{{ .OS }}_{{ .Arch }}.tar.gz\n")),(0,r.kt)("h2",{id:"remove-characters--from-the-end-of-the-description"},"Remove characters ",(0,r.kt)("inlineCode",{parentName:"h2"},".!")," from the end of the description"),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"description: A command-line tool that makes git easier to use with GitHub\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"description: A command-line tool that makes git easier to use with GitHub.\n")),(0,r.kt)("h2",{id:"trim-spaces"},"Trim spaces"),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"description: A command-line tool that makes git easier to use with GitHub\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'description: "  A command-line tool that makes git easier to use with GitHub  "\n')),(0,r.kt)("h2",{id:"remove-unneeded-quotes-of-strings"},"Remove unneeded quotes of strings"),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"description: A command-line tool that makes git easier to use with GitHub\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'description: "A command-line tool that makes git easier to use with GitHub"\n')),(0,r.kt)("h2",{id:"avoid-if-and-for-statement-in-templates"},"Avoid ",(0,r.kt)("inlineCode",{parentName:"h2"},"if")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"for")," statement in templates"),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"asset: foo.{{.Format}}\nformat: tar.gz\noverrides:\n  - goos: windows\n    format: zip\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"asset: 'foo.{{if eq .GOOS \"windows\"}}zip{{else}}tar.gz{{end}}'\n")),(0,r.kt)("h2",{id:"version_overrides-style-guide"},(0,r.kt)("inlineCode",{parentName:"h2"},"version_overrides")," Style Guide"),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Latest setting\nversion_constraint: semver(">= 5.0.0")\nversion_overrides:\n  - version_constraint: semver(">= 4.0.0")\n    # ...\n  - version_constraint: semver(">= 3.0.0")\n    # ...\n  - version_constraint: "true" # Oldest setting\n')),(0,r.kt)("h2",{id:"if-the-format-is-raw-filessrc-isnt-needed"},"If the ",(0,r.kt)("inlineCode",{parentName:"h2"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"h2"},"raw"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"files[].src")," isn't needed"),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"format: raw\nfiles:\n  - name: swagger\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"format: raw\nfiles:\n  - name: swagger\n    src: swagger_{{.OS}}_{{.Arch}} # unneeded\n")),(0,r.kt)("h2",{id:"consideration-about-rust"},"Consideration about Rust"),(0,r.kt)("p",null,"\u26a0\ufe0f The author ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke"},"@suzuki-shunsuke")," isn't familiar with Rust. If you have any opinion, please let us know."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linux: use the asset for not ",(0,r.kt)("inlineCode",{parentName:"li"},"gnu")," but ",(0,r.kt)("inlineCode",{parentName:"li"},"musl")," if both of them are supported",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ref: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/pull/2153#discussion_r805116879"},"https://github.com/aquaproj/aqua-registry/pull/2153#discussion_r805116879")))),(0,r.kt)("li",{parentName:"ul"},"windows: use the asset for not ",(0,r.kt)("inlineCode",{parentName:"li"},"gnu")," but ",(0,r.kt)("inlineCode",{parentName:"li"},"msvc")," if both of them are supported",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ref: ",(0,r.kt)("a",{parentName:"li",href:"https://rust-lang.github.io/rustup/installation/windows.html"},"https://rust-lang.github.io/rustup/installation/windows.html"))))),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"replacements:\n  linux: unknown-linux-musl\n  windows: pc-windows-msvc\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"replacements:\n  linux: unknown-linux-gnu\n  windows: pc-windows-gnu\n")),(0,r.kt)("h2",{id:"use-overrides-instead-of-format_overrides"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"overrides")," instead of ",(0,r.kt)("inlineCode",{parentName:"h2"},"format_overrides")),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"format: tar.gz\noverrides:\n  - goos: windows\n    format: zip\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"format: tar.gz\nformat_overrides:\n  - goos: windows\n    format: zip\n")),(0,r.kt)("h2",{id:"dont-use-emojis-as-much-as-possible"},"Don't use emojis as much as possible"),(0,r.kt)("p",null,"In some environments, emojis are corrupted. e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1004#issuecomment-1183710603"},"https://github.com/aquaproj/aqua/pull/1004#issuecomment-1183710603")),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"description: CLI and Go library for CODEOWNERS files\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"description: \ud83d\udd12 CLI and Go library for CODEOWNERS files\n")),(0,r.kt)("h2",{id:"omit-the-setting-which-is-equivalent-to-the-default-value"},"Omit the setting which is equivalent to the default value"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"repo_owner")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"repo_name")," are set, you can omit some attributes."),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"repo_owner: weaveworks\nrepo_name: eksctl\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"repo_owner: weaveworks\nrepo_name: eksctl\nname: weaveworks/eksctl\nlink: https://github.com/weaveworks/eksctl\nfiles:\n  - name: eksctl\n")),(0,r.kt)("h2",{id:"use-aliases-only-for-keeping-the-compatibility"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"aliases")," only for keeping the compatibility"),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/aliases#use-aliases-only-for-keeping-the-compatibility"},"here")),(0,r.kt)("h2",{id:"use-supported_envs-rather-than-supported_if"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"supported_envs")," rather than ",(0,r.kt)("inlineCode",{parentName:"h2"},"supported_if")),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/supported-if"},"the caution"),"."),(0,r.kt)("h2",{id:"select-type-according-to-the-following-order"},"Select ",(0,r.kt)("inlineCode",{parentName:"h2"},"type")," according to the following order"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"github_release"),(0,r.kt)("li",{parentName:"ol"},"github_content"),(0,r.kt)("li",{parentName:"ol"},"github_archive"),(0,r.kt)("li",{parentName:"ol"},"http"),(0,r.kt)("li",{parentName:"ol"},"go_install")),(0,r.kt)("p",null,"For example, you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," type to install the package from GitHub Releases, but in that case you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"github_release")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"http"),"."),(0,r.kt)("h2",{id:"use-go_install-rather-than-go"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"go_install")," rather than ",(0,r.kt)("inlineCode",{parentName:"h2"},"go")),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/go-package"},"the caution"),"."))}c.isMDXComponent=!0}}]);