"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4944],{5680:(e,a,n)=>{n.d(a,{xA:()=>l,yg:()=>g});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),u=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},l=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,g=m["".concat(o,".").concat(p)]||m[p]||h[p]||i;return n?t.createElement(g,c(c({ref:a},l),{},{components:n})):t.createElement(g,c({ref:a},l))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[m]="string"==typeof e?e:r,c[1]=s;for(var u=2;u<i;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1456:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=n(8168),r=(n(6540),n(5680));const i={sidebar_position:50},c="Checksum Verification",s={unversionedId:"reference/security/checksum",id:"reference/security/checksum",title:"Checksum Verification",description:"aqua >= v1.20.0",source:"@site/docs/reference/security/checksum.md",sourceDirName:"reference/security",slug:"/reference/security/checksum",permalink:"/docs/reference/security/checksum",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/security/checksum.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/reference/security/"},next:{title:"Policy as Code",permalink:"/docs/reference/security/policy-as-code/"}},o={},u=[{value:"See also",id:"see-also",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"aqua-registry version",id:"aqua-registry-version",level:2},{value:"Remove unused checksums with <code>-prune</code> option",id:"remove-unused-checksums-with--prune-option",level:2},{value:"Verify checksums of Registries",id:"verify-checksums-of-registries",level:2},{value:"Generate checksum configuration automatically",id:"generate-checksum-configuration-automatically",level:2},{value:"Enforce Checksum Verification by environment variables",id:"enforce-checksum-verification-by-environment-variables",level:2},{value:"Question: Should <code>aqua-checksums.json</code> be managed with Git?",id:"question-should-aqua-checksumsjson-be-managed-with-git",level:2}],l={toc:u},m="wrapper";function h(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"checksum-verification"},"Checksum Verification"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"aqua >= v1.20.0")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/427"},"#427")),(0,r.yg)("p",null,"Checksum Verification is a feature verifying downloaded assets with checksum.\nChecksum Verification prevents the supply chain attack and allows you to install tools securely."),(0,r.yg)("h2",{id:"see-also"},"See also"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/guides/checksum"},"Tutorial")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/reference/config/checksum"},"Configuration")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/reference/registry-config/checksum"},"Registry Configuration")),(0,r.yg)("li",{parentName:"ul"},"Blogs",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://dev.to/suzukishunsuke/checksum-verification-by-aqua-5038"},"2022-11-08 Checksum Verification by aqua")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/aqua-checksum-verification"},"2022-10-10 aqua CLI Version Manager \u304c checksum \u306e\u691c\u8a3c\u3092\u30b5\u30dd\u30fc\u30c8"))))),(0,r.yg)("h2",{id:"how-it-works"},"How it works"),(0,r.yg)("p",null,"When a tool is installed, aqua verifies the checksum as the following."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download the tool in the temporal directory"),(0,r.yg)("li",{parentName:"ol"},"Calculate the checksum from the downloaded file"),(0,r.yg)("li",{parentName:"ol"},"Get the expected checksum"),(0,r.yg)("li",{parentName:"ol"},"If the actual checksum is different from the expected checksum, make the installation failure"),(0,r.yg)("li",{parentName:"ol"},"If the checksum isn't found in ",(0,r.yg)("inlineCode",{parentName:"li"},"aqua-checksums.json"),", the expected checksum is added to ",(0,r.yg)("inlineCode",{parentName:"li"},"aqua-checksums.json")),(0,r.yg)("li",{parentName:"ol"},"Install the tool")),(0,r.yg)("p",null,"aqua gets the expected checksum from the following sources."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"aqua-checksums.json")),(0,r.yg)("li",{parentName:"ol"},"checksum files that each tools publish"),(0,r.yg)("li",{parentName:"ol"},"If the tool doesn't publish checkfum files, aqua treats the checksum calculated from the downloaded asset as the expected checksum")),(0,r.yg)("p",null,"e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-checksums.json")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "checksums": [\n    {\n      "id": "github_release/github.com/golangci/golangci-lint/v1.49.0/golangci-lint-1.49.0-darwin-amd64.tar.gz",\n      "checksum": "20cd1215e0420db8cfa94a6cd3c9d325f7b39c07f2415a02d111568d8bc9e271",\n      "algorithm": "sha256"\n    },\n    {\n      "id": "github_release/github.com/golangci/golangci-lint/v1.49.0/golangci-lint-1.49.0-darwin-arm64.tar.gz",\n      "checksum": "cabb1a4c35fe1dadbe5a81550a00871281a331e7660cd85ae16e936a7f0f6cfc",\n      "algorithm": "sha256"\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"Many tools publish checksum files, so aqua gets checksums from them."),(0,r.yg)("p",null,"e.g."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://releases.hashicorp.com/terraform/1.2.7/terraform_1.2.7_SHA256SUMS"},"Terraform")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cli/cli/releases/download/v2.14.4/gh_2.14.4_checksums.txt"},"GitHub CLI"))),(0,r.yg)("p",null,"If no checksum file for a tool is published, aqua can also get checksums by downloading assets and calculating checksums."),(0,r.yg)("h2",{id:"aqua-registry-version"},"aqua-registry version"),(0,r.yg)("p",null,"From ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/releases/tag/v3.90.0"},"v3.90.0"),", aqua-registry supports the checksum verification."),(0,r.yg)("h2",{id:"remove-unused-checksums-with--prune-option"},"Remove unused checksums with ",(0,r.yg)("inlineCode",{parentName:"h2"},"-prune")," option"),(0,r.yg)("p",null,"aqua >= ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.28.0"},"v1.28.0")),(0,r.yg)("p",null,"When tools are updated, checksums for old versions are basically unneeded.\nOr when we remove some tools from ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua.yaml"),", checksums for those tools would be unneeded."),(0,r.yg)("p",null,"You can remove unused checksums by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"-prune")," option."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"aqua update-checksum -prune\n")),(0,r.yg)("h2",{id:"verify-checksums-of-registries"},"Verify checksums of Registries"),(0,r.yg)("p",null,"aqua >= ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.30.0"},"v1.30.0")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1491"},"#1491")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1508"},"#1508")),(0,r.yg)("p",null,"aqua verifies checksums of Registries if Checksum Verification is enabled."),(0,r.yg)("p",null,"aqua.yaml"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"checksum:\n  enabled: true\n")),(0,r.yg)("p",null,"aqua-checksums.json"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "checksums": [\n    {\n      "id": "registries/github_content/github.com/aquaproj/aqua-registry/v3.114.0/registry.yaml",\n      "checksum": "b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248bd",\n      "algorithm": "sha512"\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"If the checksum is invalid, it would fail to install Registries."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'ERRO[0000] install the registry                          actual_checksum=b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248be aqua_version= env=darwin/arm64 error="check a registry\'s checksum: checksum is invalid" exe_name=starship expected_checksum=b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248bd program=aqua registry_name=standard\nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="it failed to install some registries" exe_name=starship program=aqua\n')),(0,r.yg)("h2",{id:"generate-checksum-configuration-automatically"},"Generate checksum configuration automatically"),(0,r.yg)("p",null,"It is bothersome to write the checksum configuration manually, so aqua supports scaffolding the configuration."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/develop-registry#scaffold-registry-configuration"},"aqua gr")," scaffolds the checksum configuration too."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The scaffolding isn't perfect, so sometimes you have to fix the code manually.")),(0,r.yg)("h2",{id:"enforce-checksum-verification-by-environment-variables"},"Enforce Checksum Verification by environment variables"),(0,r.yg)("p",null,"aqua >= v2.27.0 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/2702"},"#2702")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/2806"},"#2806")),(0,r.yg)("p",null,"You can enforce checksum verification by environment variables ",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_ENFORCE_CHECKSUM")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_ENFORCE_REQUIRE_CHECKSUM"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"export AQUA_ENFORCE_CHECKSUM=true\nexport AQUA_ENFORCE_REQUIRE_CHECKSUM=true\n")),(0,r.yg)("p",null,"This is useful for both CI and local development."),(0,r.yg)("p",null,"Checksum verification is disabled by default, and you can disable checksum verification by setting.\nIf you manage a Monorepo and want to make checksum verification mandatory in CI, you can set these environment variables in CI. Then checksum verification is enabled regardless of the setting of aqua.yaml."),(0,r.yg)("p",null,"And if you want to enforce checksum verification on your laptop, you can set these environment variables in your shell configuration files such as .bashrc and .zshrc."),(0,r.yg)("h2",{id:"question-should-aqua-checksumsjson-be-managed-with-git"},"Question: Should ",(0,r.yg)("inlineCode",{parentName:"h2"},"aqua-checksums.json")," be managed with Git?"),(0,r.yg)("p",null,"Yes. You should manage ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-checksums.json")," with Git."))}h.isMDXComponent=!0}}]);