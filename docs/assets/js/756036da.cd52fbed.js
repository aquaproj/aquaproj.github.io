"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2265],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),k=i,h=p["".concat(o,".").concat(k)]||p[k]||m[k]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:50},l="Checksum Verification",s={unversionedId:"security/checksum",id:"security/checksum",title:"Checksum Verification",description:"aqua >= v1.20.0",source:"@site/docs/security/checksum.md",sourceDirName:"security",slug:"/security/checksum",permalink:"/docs/security/checksum",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/security/checksum.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/security/"},next:{title:"Policy as Code",permalink:"/docs/security/policy-as-code"}},o={},u=[{value:"Tutorial",id:"tutorial",level:2},{value:"Configuration file path",id:"configuration-file-path",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"aqua-registry version",id:"aqua-registry-version",level:2},{value:"aqua.yaml&#39;s checksum configuration",id:"aquayamls-checksum-configuration",level:2},{value:"Registry&#39;s checksum configuration",id:"registrys-checksum-configuration",level:2},{value:"Remove unused checksums with <code>-prune</code> option",id:"remove-unused-checksums-with--prune-option",level:2},{value:"Verify checksums of Registries",id:"verify-checksums-of-registries",level:2},{value:"Generate and patch checksum configuration automatically",id:"generate-and-patch-checksum-configuration-automatically",level:2},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"checksum <code>algorithm</code>",id:"checksum-algorithm",level:3},{value:"checksum <code>type</code>",id:"checksum-type",level:3},{value:"checksum <code>file_format</code>",id:"checksum-file_format",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"checksum-verification"},"Checksum Verification"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aqua >= v1.20.0")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/427"},"#427")),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/checksum"},"tutorial"),"."),(0,i.kt)("h2",{id:"configuration-file-path"},"Configuration file path"),(0,i.kt)("p",null,"aqua finds ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".aqua-checksums.json"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," takes precedence over ",(0,i.kt)("inlineCode",{parentName:"p"},".aqua-checksums.json"),".\nIf they don't exist, ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," is created."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The checksum is case insensitive.")),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"When a tool is installed, aqua verifies the checksum as the following."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the tool in the temporal directory"),(0,i.kt)("li",{parentName:"ol"},"Calculate the checksum from the downloaded file"),(0,i.kt)("li",{parentName:"ol"},"Get the expected checksum"),(0,i.kt)("li",{parentName:"ol"},"If the actual checksum is different from the expected checksum, make the installation failure"),(0,i.kt)("li",{parentName:"ol"},"If the checksum isn't found in ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json"),", the expected checksum is added to ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json")),(0,i.kt)("li",{parentName:"ol"},"Install the tool")),(0,i.kt)("p",null,"aqua gets the expected checksum from the following sources."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json")),(0,i.kt)("li",{parentName:"ol"},"checksum files that each tools publish"),(0,i.kt)("li",{parentName:"ol"},"If the tool doesn't publish checkfum files, aqua treats the checksum calculated from the downloaded asset as the expected checksum")),(0,i.kt)("h2",{id:"aqua-registry-version"},"aqua-registry version"),(0,i.kt)("p",null,"From ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/releases/tag/v3.90.0"},"v3.90.0"),", aqua-registry supports the checksum verification."),(0,i.kt)("h2",{id:"aquayamls-checksum-configuration"},"aqua.yaml's checksum configuration"),(0,i.kt)("p",null,"aqua.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"checksum:\n  enabled: true # By default, this is false\n  require_checksum: true # By default, this is false\n  supported_envs: # By default, all envs are supported\n    - darwin\n    - linux\nregistries:\n# ...\npackages:\n# ...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled"),": If this is true, the checksum verification is enabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"require_checksum"),": If this is true, it fails to install a package when the checksum isn't found in ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json")," and the package's checksum configuration is disabled.\nBy default, ",(0,i.kt)("inlineCode",{parentName:"li"},"require_checksum")," is false and if the checksum isn't found the package is installed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supported_envs"),": (aqua >= ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.29.0"},"v1.29.0"),") If this is set, aqua adds checksums of only specific platforms. This feature makes ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json")," slim and avoids unneeded API call and download assets")),(0,i.kt)("h2",{id:"registrys-checksum-configuration"},"Registry's checksum configuration"),(0,i.kt)("p",null,"Each registry's package configuration has the configuration about checksum."),(0,i.kt)("p",null,"e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/cli/cli/registry.yaml"},"GitHub CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: cli\n    repo_name: cli\n    # ...\n    checksum:\n      type: github_release\n      asset: gh_{{trimV .Version}}_checksums.txt\n      file_format: regexp\n      algorithm: sha256\n      pattern:\n        checksum: ^(\\b[A-Fa-f0-9]{64}\\b)\n        file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n')),(0,i.kt)("p",null,"e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/argoproj/argo-cd/registry.yaml"},"ArgoCD CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: argoproj\n    repo_name: argo-cd\n    # ...\n    asset: argocd-{{.OS}}-{{.Arch}}\n    checksum:\n      type: github_release\n      asset: "{{.Asset}}.sha256"\n      file_format: raw\n      algorithm: sha256\n')),(0,i.kt)("h2",{id:"remove-unused-checksums-with--prune-option"},"Remove unused checksums with ",(0,i.kt)("inlineCode",{parentName:"h2"},"-prune")," option"),(0,i.kt)("p",null,"aqua >= ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.28.0"},"v1.28.0")),(0,i.kt)("p",null,"When tools are updated, checksums for old versions are basically unneeded.\nOr when we remove some tools from ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", checksums for those tools would be unneeded."),(0,i.kt)("p",null,"You can remove unused checksums by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"-prune")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"aqua update-checksum -prune\n")),(0,i.kt)("h2",{id:"verify-checksums-of-registries"},"Verify checksums of Registries"),(0,i.kt)("p",null,"aqua >= ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.30.0"},"v1.30.0")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1491"},"#1491")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1508"},"#1508")),(0,i.kt)("p",null,"aqua verifies checksums of Registries if Checksum Verification is enabled."),(0,i.kt)("p",null,"aqua.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"checksum:\n  enabled: true\n")),(0,i.kt)("p",null,"aqua-checksums.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "checksums": [\n    {\n      "id": "registries/github_content/github.com/aquaproj/aqua-registry/v3.114.0/registry.yaml",\n      "checksum": "b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248bd",\n      "algorithm": "sha512"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"If the checksum is invalid, it would fail to install Registries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ERRO[0000] install the registry                          actual_checksum=b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248be aqua_version= env=darwin/arm64 error="check a registry\'s checksum: checksum is invalid" exe_name=starship expected_checksum=b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248bd program=aqua registry_name=standard\nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="it failed to install some registries" exe_name=starship program=aqua\n')),(0,i.kt)("h2",{id:"generate-and-patch-checksum-configuration-automatically"},"Generate and patch checksum configuration automatically"),(0,i.kt)("p",null,"It is bothersome to write the checksum configuration manually, so aqua supports scaffolding the configuration."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/develop-registry/scaffold-registry"},"aqua gr")," scaffolds the checksum configuration too."),(0,i.kt)("p",null,"And you can also patch the checksum configuration to the existing registries by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/registry-tool/blob/main/USAGE.md#aqua-registry-patch-checksum"},"aqua-registry patch-checksum command"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The scaffolding isn't perfect, so sometimes you have to fix the code manually.")),(0,i.kt)("h3",{id:"enabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,i.kt)("p",null,"You can enable or disable the checksum download by ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_release\n    repo_owner: argoproj\n    repo_name: argo-cd\n    # ...\n    checksum:\n      enabled: false\n")),(0,i.kt)("p",null,"By default, checkdum download is disabled."),(0,i.kt)("h3",{id:"checksum-algorithm"},"checksum ",(0,i.kt)("inlineCode",{parentName:"h3"},"algorithm")),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"algorithm")," are supported."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sha1")," (aqua >= ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.29.0"},"v1.29.0"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sha256")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sha512")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"md5"))),(0,i.kt)("h3",{id:"checksum-type"},"checksum ",(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," are supported."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"github_release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"github_release")," requires the following attributes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"asset"),": GitHub Release Asset name. The format is a Go's ",(0,i.kt)("inlineCode",{parentName:"li"},"text/template")," string")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http")," requires the following attributes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url"),": Checksum file's download URL. The format is a Go's ",(0,i.kt)("inlineCode",{parentName:"li"},"text/template")," string")),(0,i.kt)("h3",{id:"checksum-file_format"},"checksum ",(0,i.kt)("inlineCode",{parentName:"h3"},"file_format")),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"file_format")," are supported."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regexp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"raw"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"regexp")," requires the following attributes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pattern.checksum"),":"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pattern.file"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pattern:\n  checksum: ^(\\b[A-Fa-f0-9]{64}\\b)\n  file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n')),(0,i.kt)("p",null,"aqua extracts pairs of checkfum and asset name using regular expressions.\nIf the checksum file includes only one checksum, you can omit ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern.file"),"."))}m.isMDXComponent=!0}}]);