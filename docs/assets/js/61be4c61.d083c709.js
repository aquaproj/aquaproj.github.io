"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:440},i="Scaffold Registry Configuration",s={unversionedId:"develop-registry/scaffold-registry",id:"develop-registry/scaffold-registry",title:"Scaffold Registry Configuration",description:"aqua >= v1.14.0",source:"@site/docs/develop-registry/scaffold-registry.md",sourceDirName:"develop-registry",slug:"/develop-registry/scaffold-registry",permalink:"/docs/develop-registry/scaffold-registry",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/develop-registry/scaffold-registry.md",tags:[],version:"current",sidebarPosition:440,frontMatter:{sidebar_position:440},sidebar:"tutorialSidebar",previous:{title:"Add Packages to Registry",permalink:"/docs/develop-registry/add-registry"},next:{title:"Registry Style Guide",permalink:"/docs/develop-registry/registry-style-guide"}},p={},c=[{value:"Generate <code>version_overrides</code> by <code>--deep</code> option",id:"generate-version_overrides-by---deep-option",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scaffold-registry-configuration"},"Scaffold Registry Configuration"),(0,a.kt)("p",null,"aqua >= ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.14.0"},"v1.14.0")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"aqua generate-registry (gr)")," scaffolds Registry Configuration."),(0,a.kt)("p",null,"This feature allows you to add packages to Registries easily.\nNew contributors can contribute to the Standard Registry easily.\nAnd it decreases the burden to add many packages to a Registry."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Note that you probably fix generated code manually.\nGenerated code is not perfect and may be wrong.\nIt is just a template.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/usage#aqua-generate-registry"},"Usage")),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua gr cli/cli\npackages:\n  - type: github_release\n    repo_owner: cli\n    repo_name: cli\n    asset: gh_{{trimV .Version}}_{{.OS}}_{{.Arch}}.{{Format}}\n    format: tar.gz\n    description: GitHub\u2019s official command line tool\n    replacements:\n      darwin: macOS\n    overrides:\n      - goos: windows\n        format: zip\n    supported_envs:\n      - darwin\n      - linux\n      - amd64\n    rosetta2: true\n")),(0,a.kt)("h2",{id:"generate-version_overrides-by---deep-option"},"Generate ",(0,a.kt)("inlineCode",{parentName:"h2"},"version_overrides")," by ",(0,a.kt)("inlineCode",{parentName:"h2"},"--deep")," option"),(0,a.kt)("p",null,"aqua >= v1.34.0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1655"},"#1655")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1662"},"#1662")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"aqua gr")," doesn't generate ",(0,a.kt)("a",{parentName:"p",href:"/docs/registry-config/version-overrides/"},"version_constraint and version_overrides"),".\nYou can generate them by ",(0,a.kt)("inlineCode",{parentName:"p"},"--deep")," option.\nAnd you can also output testdata to a file by ",(0,a.kt)("inlineCode",{parentName:"p"},"--out-testdata")," option."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"--deep")," option is set GitHub API is called per GitHub Release, so it may cause GitHub API rate limiting if there are many GitHub Releases. You can set GitHub access token via environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"AQUA_GITHUB_TOKEN"),".")),(0,a.kt)("p",null,"You can try this feature by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow"},"GitHub Actions workflow_dispatch event"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/generate-registry-deep"},"https://github.com/aquaproj/generate-registry-deep")),(0,a.kt)("p",null,"e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/generate-registry-deep/actions/runs/4263618160"},"https://github.com/aquaproj/generate-registry-deep/actions/runs/4263618160")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua gr --deep --out-testdata pkg.yaml cloudspannerecosystem/wrench\n")),(0,a.kt)("p",null,"testdata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: cloudspannerecosystem/wrench@v1.3.3\n  - name: cloudspannerecosystem/wrench\n    version: v1.3.0\n  - name: cloudspannerecosystem/wrench\n    version: v1.1.0\n  - name: cloudspannerecosystem/wrench\n    version: v1.0.0\n")),(0,a.kt)("p",null,"Generate Registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: cloudspannerecosystem\n    repo_name: wrench\n    description: wrench - Schema management tool for Cloud Spanner -\n    asset: wrench_{{trimV .Version}}_{{.OS}}_{{.Arch}}.tar.gz\n    checksum:\n      type: github_release\n      asset: wrench_{{trimV .Version}}_checksums.txt\n      file_format: regexp\n      algorithm: sha256\n      pattern:\n        checksum: "^(\\\\b[A-Fa-f0-9]{64}\\\\b)"\n        file: "^\\\\b[A-Fa-f0-9]{64}\\\\b\\\\s+(\\\\S+)$"\n    version_constraint: semver(">= 1.3.3")\n    version_overrides:\n      - version_constraint: semver(">= 1.3.0")\n        supported_envs:\n          - linux\n          - darwin\n      - version_constraint: semver(">= 1.1.0")\n        asset: wrench_{{.OS}}_{{.Arch}}\n        format: raw\n        supported_envs:\n          - linux\n          - darwin\n        checksum:\n          enabled: false\n      - version_constraint: semver("< 1.1.0")\n        asset: wrench_{{.OS}}_{{.Arch}}\n        format: raw\n        supported_envs:\n          - linux/amd64\n          - darwin\n        rosetta2: true\n        checksum:\n          enabled: false\n')))}d.isMDXComponent=!0}}]);