"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3790],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=n,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return t?a.createElement(g,o(o({ref:r},p),{},{components:t})):a.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5715:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const i={sidebar_position:100},o="Registry Configuration",l={unversionedId:"reference/registry-config/index",id:"reference/registry-config/index",title:"Registry Configuration",description:"e.g. registry.yaml",source:"@site/docs/reference/registry-config/index.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/",permalink:"/docs/reference/registry-config/",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/index.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Experimental Feature",permalink:"/docs/reference/config/experimental-feature"},next:{title:"version_filter",permalink:"/docs/reference/registry-config/version-filter"}},s={},c=[{value:"JSON Schema",id:"json-schema",level:2},{value:"Package types",id:"package-types",level:2},{value:"Common attributes",id:"common-attributes",level:2},{value:"Default values if <code>repo_owner</code> and <code>repo_name</code> are set",id:"default-values-if-repo_owner-and-repo_name-are-set",level:2}],p={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"registry-configuration"},"Registry Configuration"),(0,n.kt)("p",null,"e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml"},"registry.yaml")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n# init: a\n- type: github_release\n  repo_owner: accurics\n  repo_name: terrascan\n  asset: 'terrascan_{{trimV .Version}}_{{title .OS}}_{{.Arch}}.tar.gz'\n  link: https://docs.accurics.com/projects/accurics-terrascan/en/latest/\n  description: Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure\n  replacements:\n    amd64: x86_64\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"packages"),": The list of packages")),(0,n.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/tree/main/json-schema"},"https://github.com/aquaproj/aqua/tree/main/json-schema")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/blob/main/json-schema/registry.json"},"https://github.com/aquaproj/aqua/blob/main/json-schema/registry.json")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/registry.json"},"https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/registry.json"))),(0,n.kt)("h2",{id:"package-types"},"Package types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/cargo-package"},"cargo"),": The package is installed by ",(0,n.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/commands/cargo-install.html"},"cargo install")," command. ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua >= v2.8.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/github-archive-package"},"github_archive"),": The package is downloaded from GitHub Archive"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/github-content-package"},"github_content"),": The package is downloaded from GitHub Content"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/github-release-package"},"github_release"),": The package is downloaded from GitHub Releases"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/go-build-package"},"go_build"),": The package is installed by ",(0,n.kt)("inlineCode",{parentName:"li"},"go build")," command. ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua >= v2.11.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/go-install-package"},"go_install"),": The package is installed by ",(0,n.kt)("inlineCode",{parentName:"li"},"go install")," command. ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua >= v1.10.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/http-package"},"http"),": The package is downloaded from the specified URL")),(0,n.kt)("h2",{id:"common-attributes"},"Common attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type"),": (string, required) the package type"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),": (string) the package name. This is used to specify the package in ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua.yaml"),". name must be unique in the same registry"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/search-words"},"search_words")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/aliases"},"aliases"),": Aliases of the package"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/files"},"files"),": The list of executable files"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/format"},"format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/format"},"append_ext")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"link"),": URL about the package. This is used for ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua g")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"description"),": The description about the package. This is used for ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua g")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/replacements"},"replacements"),": A map which is used to replace some Template Variables like ",(0,n.kt)("inlineCode",{parentName:"li"},"OS")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Arch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/format-overrides"},"format_overrides"),": A list of the pair OS and the asset format"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/overrides"},"overrides")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/version-overrides"},"version_constraint"),": ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression. The evaluation result must be a boolean"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/version-overrides"},"version_overrides")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/supported-if"},"supported_if")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/supported-envs"},"supported_envs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/rosetta2"},"rosetta2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/windows_arm_emulation"},"windows_arm_emulation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/version-filter"},"version_filter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/version-source"},"version_source")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/complete-windows-ext"},"complete_windows_ext")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/security/checksum"},"checksum")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/cosign"},"cosign")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/slsa-provenance"},"slsa_provenance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/private"},"private")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/no_asset"},"no_asset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/error_message"},"error_message"))),(0,n.kt)("h2",{id:"default-values-if-repo_owner-and-repo_name-are-set"},"Default values if ",(0,n.kt)("inlineCode",{parentName:"h2"},"repo_owner")," and ",(0,n.kt)("inlineCode",{parentName:"h2"},"repo_name")," are set"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"<repo owner>/<repo name>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"link"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/<repo owner>/<repo name>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"files"),": ",(0,n.kt)("inlineCode",{parentName:"li"},'[{"name":"<repo name>"}]'))),(0,n.kt)("p",null,"For example, in case of ",(0,n.kt)("inlineCode",{parentName:"p"},"weaveworks/eksctl")," the following default values are set."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"name: weaveworks/eksctl\nlink: https://github.com/weaveworks/eksctl\nfiles:\n- name: eksctl\n")))}u.isMDXComponent=!0}}]);