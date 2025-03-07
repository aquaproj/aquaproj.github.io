"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2777],{1393:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=n(8168),r=(n(6540),n(5680));const l={sidebar_position:150},i="Install",o={unversionedId:"install",id:"install",title:"Install",description:"aqua is a single binary written in Go.",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/install.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/docs/"},next:{title:"Quick Start",permalink:"/docs/tutorial/"}},s={},u=[{value:"1. Install the binary <code>aqua</code> in <code>PATH</code>",id:"1-install-the-binary-aqua-in-path",level:2},{value:"Homebrew",id:"homebrew",level:3},{value:"Winget",id:"winget",level:3},{value:"Scoop",id:"scoop",level:3},{value:"go install",id:"go-install",level:3},{value:"Download prebuilt binaries from GitHub Releases",id:"download-prebuilt-binaries-from-github-releases",level:3},{value:"Verify downloaded binaries from GitHub Releases",id:"verify-downloaded-binaries-from-github-releases",level:4},{value:"2. Set the environment variable <code>PATH</code>",id:"2-set-the-environment-variable-path",level:2},{value:"Linux, macOS",id:"linux-macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Git Bash (mingw)",id:"git-bash-mingw",level:4},{value:"PowerShell",id:"powershell",level:4},{value:"Command Prompt",id:"command-prompt",level:4}],p={toc:u},g="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"install"},"Install"),(0,r.yg)("p",null,"aqua is a single binary written in Go."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Install the binary ",(0,r.yg)("inlineCode",{parentName:"li"},"aqua")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"PATH")),(0,r.yg)("li",{parentName:"ol"},"Set the environment variable ",(0,r.yg)("inlineCode",{parentName:"li"},"PATH")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/docs/reference/config/shell-completion"},"(Optional) Shell completion"))),(0,r.yg)("h2",{id:"1-install-the-binary-aqua-in-path"},"1. Install the binary ",(0,r.yg)("inlineCode",{parentName:"h2"},"aqua")," in ",(0,r.yg)("inlineCode",{parentName:"h2"},"PATH")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#homebrew"},"Homebrew")),(0,r.yg)("li",{parentName:"ul"},"Windows",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#winget"},"Winget")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#scoop"},"Scoop")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/products/aqua-installer#shell-script"},"aqua-installer (Shell Script)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/products/aqua-installer#github-actions"},"aqua-installer (GitHub Actions)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/products/circleci-orb-aqua"},"CircleCI Orb")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#go-install"},"go install")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/devcontainer-features/tree/main/src/aqua-installer"},"Dev Container Feature")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#download-prebuilt-binaries-from-github-releases"},"Download prebuilt binaries from GitHub Releases"))),(0,r.yg)("h3",{id:"homebrew"},"Homebrew"),(0,r.yg)("p",null,"You can install aqua using ",(0,r.yg)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),"."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/aqua"},"Homebrew Core Formula: aqua")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"brew install aqua\n")),(0,r.yg)("p",null,"Or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"brew install aquaproj/aqua/aqua\n")),(0,r.yg)("h3",{id:"winget"},"Winget"),(0,r.yg)("p",null,"From ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.17.4"},"aqua v2.17.4"),", you can install aqua by ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/package-manager/winget/"},"Winget"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"winget install aquaproj.aqua\n")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Due to the mechanism of Winget, it takes a few days at most until we can install the latest version after the latest version has been released.\nEverytime a new version is released, we need to send a pull request to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/microsoft/winget-pkgs"},"microsoft/winget-pkgs")," and wait until the pull request is merged.\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/microsoft/winget-pkgs/pulls?q=is%3Aopen+is%3Apr+author%3Asuzuki-shunsuke+aquaproj.aqua+in%3Atitle"},"The list of pull requests"))),(0,r.yg)("h3",{id:"scoop"},"Scoop"),(0,r.yg)("p",null,"From ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.16.2"},"aqua v2.16.2"),", you can also install aqua by ",(0,r.yg)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),"."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/ScoopInstaller/Main"},"Main bucket"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"scoop bucket add main\nscoop install main/aqua\n")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/scoop-bucket"},"Our bucket"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"scoop bucket add aquaproj https://github.com/aquaproj/scoop-bucket\nscoop install aqua\n")),(0,r.yg)("h3",{id:"go-install"},"go install"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"go install github.com/aquaproj/aqua/v2/cmd/aqua@latest\n")),(0,r.yg)("h3",{id:"download-prebuilt-binaries-from-github-releases"},"Download prebuilt binaries from GitHub Releases"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases"},"https://github.com/aquaproj/aqua/releases")),(0,r.yg)("h4",{id:"verify-downloaded-binaries-from-github-releases"},"Verify downloaded binaries from GitHub Releases"),(0,r.yg)("p",null,"You can verify downloaded binaries using some tools."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/sigstore/cosign"},"Cosign")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/slsa-framework/slsa-verifier"},"slsa-verifier")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://cli.github.com/"},"GitHub CLI"))),(0,r.yg)("p",null,"--"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Cosign:")),(0,r.yg)("p",null,"You can install Cosign by aqua."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aqua g -i sigstore/cosign\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# Download assets from GitHub Releases.\ngh release download -R aquaproj/aqua v2.34.0\n# Verify a checksum file.\ncosign verify-blob \\\n  --signature aqua_2.34.0_checksums.txt.sig \\\n  --certificate aqua_2.34.0_checksums.txt.pem \\\n  --certificate-identity-regexp 'https://github\\.com/suzuki-shunsuke/go-release-workflow/\\.github/workflows/release\\.yaml@.*' \\\n  --certificate-oidc-issuer \"https://token.actions.githubusercontent.com\" \\\n  aqua_2.34.0_checksums.txt\n")),(0,r.yg)("p",null,"Output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Verified OK\n")),(0,r.yg)("p",null,"After verifying the checksum, verify the artifact."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cat aqua_2.34.0_checksums.txt | sha256sum -c --ignore-missing -\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"slsa-verifier")),(0,r.yg)("p",null,"You can install slsa-verifier by aqua."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aqua g -i slsa-framework/slsa-verifier\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# Download assets from GitHub Releases.\ngh release download -R aquaproj/aqua v2.34.0\n# Verify an asset.\nslsa-verifier verify-artifact aqua_darwin_arm64.tar.gz \\\n  --provenance-path multiple.intoto.jsonl \\\n  --source-uri github.com/aquaproj/aqua \\\n  --source-tag v2.34.0\n")),(0,r.yg)("p",null,"Output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'Verified signature against tlog entry index 133024968 at URL: https://rekor.sigstore.dev/api/v1/log/entries/108e9186e8c5677af3bf58014b72ab1571f566855d27109b70403a96394003283d540765fc0e2c20\nVerified build using builder "https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml@refs/tags/v2.0.0" at commit 2f9cc345c3c49b9a0c8fcd9d8e1c461bbd8fd533\nVerifying artifact aqua_darwin_arm64.tar.gz: PASSED\n\nPASSED: SLSA verification passed\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"GitHub CLI")),(0,r.yg)("p",null,"You can install GitHub CLI by aqua."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aqua g -i cli/cli\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# Download assets from GitHub Releases.\ngh release download -R aquaproj/aqua v2.35.0-1 -p aqua_darwin_arm64.tar.gz\n# Verify an asset.\ngh attestation verify aqua_darwin_arm64.tar.gz \\\n  -R aquaproj/aqua \\\n  --signer-workflow suzuki-shunsuke/go-release-workflow/.github/workflows/release.yaml\n")),(0,r.yg)("p",null,"Output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Loaded digest sha256:763c8d5e6b8585ebb9d9bab0ee1fcafd4a29c3e7f44a85ac77780bac3ca6fff1 for file://aqua_darwin_arm64.tar.gz\nLoaded 1 attestation from GitHub API\n\u2713 Verification succeeded!\n\nsha256:763c8d5e6b8585ebb9d9bab0ee1fcafd4a29c3e7f44a85ac77780bac3ca6fff1 was attested by:\nREPO                                 PREDICATE_TYPE                  WORKFLOW                                                               \nsuzuki-shunsuke/go-release-workflow  https://slsa.dev/provenance/v1  .github/workflows/release.yaml@7f97a226912ee2978126019b1e95311d7d15c97a\n")),(0,r.yg)("h2",{id:"2-set-the-environment-variable-path"},"2. Set the environment variable ",(0,r.yg)("inlineCode",{parentName:"h2"},"PATH")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"From aqua v2.8.0, ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua root-dir")," command is available."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'export PATH="$(aqua root-dir)/bin:$PATH"\n'))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you use aqua combined with other version manager such as asdf,\nplease add ",(0,r.yg)("inlineCode",{parentName:"p"},"${AQUA_ROOT_DIR}/bin")," to the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"PATH")," after other version manager.\nFor detail, please see ",(0,r.yg)("a",{parentName:"p",href:"/docs/reference/use-aqua-with-other-tools"},"here"),".")),(0,r.yg)("h3",{id:"linux-macos"},"Linux, macOS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"\n')),(0,r.yg)("h3",{id:"windows"},"Windows"),(0,r.yg)("p",null,"About Windows, please see ",(0,r.yg)("a",{parentName:"p",href:"/docs/reference/windows-support"},"here")," too."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Git Bash (mingw)"),(0,r.yg)("li",{parentName:"ul"},"PowerShell"),(0,r.yg)("li",{parentName:"ul"},"Command Prompt")),(0,r.yg)("h4",{id:"git-bash-mingw"},"Git Bash (mingw)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-${LOCALAPPDATA:-$HOME/AppData/Local}}/aquaproj-aqua}/bin:$PATH"\n')),(0,r.yg)("p",null,"The order of priority is as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR/bin"),": If ",(0,r.yg)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR")," is set"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME/aquaproj-aqua/bin"),": If ",(0,r.yg)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME")," is set"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"$LOCALAPPDATA/aquaproj-aqua/bin"),": If ",(0,r.yg)("inlineCode",{parentName:"li"},"$LOCALAPPDATA")," is set"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"$HOME/AppData/Local/aquaproj-aqua/bin"))),(0,r.yg)("h4",{id:"powershell"},"PowerShell"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'Set-Item Env:Path "$Env:LOCALAPPDATA\\aquaproj-aqua\\bin;$Env:Path"\n')),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"LOCALAPPDATA")," isn't set,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'Set-Item Env:Path "$Env:HOMEPATH\\AppData\\Local\\aquaproj-aqua\\bin;$Env:Path"\n')),(0,r.yg)("p",null,"You can customize the path with the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'Set-Item Env:Path "$Env:AQUA_ROOT_DIR\\bin;$ENV:Path"\n')),(0,r.yg)("h4",{id:"command-prompt"},"Command Prompt"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"SET PATH=%LOCALAPPDATA%\\aquaproj-aqua\\bin;%PATH%\n")),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"LOCALAPPDATA")," isn't set,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"SET PATH=%HOMEPATH%\\AppData\\Local\\aquaproj-aqua\\bin;%PATH%\n")),(0,r.yg)("p",null,"You can also customize the path with the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"SET PATH=%AQUA_ROOT_DIR%\\bin;%PATH%\n")))}m.isMDXComponent=!0},5680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>y});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(n),c=r,y=g["".concat(s,".").concat(c)]||g[c]||m[c]||l;return n?t.createElement(y,i(i({ref:a},p),{},{components:n})):t.createElement(y,i({ref:a},p))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);