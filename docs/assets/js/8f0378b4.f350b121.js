"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7693],{5680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>y});var t=n(6540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=i,y=g["".concat(s,".").concat(m)]||g[m]||c[m]||o;return n?t.createElement(y,r(r({ref:a},u),{},{components:n})):t.createElement(y,r({ref:a},u))}));function y(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1634:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(8168),i=(n(6540),n(5680));const o={sidebar_position:100},r="Contributing",l={unversionedId:"products/aqua-registry/contributing",id:"products/aqua-registry/contributing",title:"Contributing",description:"How to contribute to Standard Registry. https://github.com/aquaproj/aqua-registry",source:"@site/docs/products/aqua-registry/contributing.md",sourceDirName:"products/aqua-registry",slug:"/products/aqua-registry/contributing",permalink:"/docs/products/aqua-registry/contributing",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/products/aqua-registry/contributing.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"aqua-registry",permalink:"/docs/products/aqua-registry/"},next:{title:"Changelog",permalink:"/docs/products/aqua-registry/changelog"}},s={},p=[{value:"See also",id:"see-also",level:2},{value:"Changelog of development workflow",id:"changelog-of-development-workflow",level:2},{value:"Should you create an Issue before sending a Pull Request?",id:"should-you-create-an-issue-before-sending-a-pull-request",level:2},{value:"aqua can&#39;t support some tools&#39; plugin mechanism",id:"aqua-cant-support-some-tools-plugin-mechanism",level:2},{value:"Commit Signing",id:"commit-signing",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Set up",id:"set-up",level:2},{value:"cmdx - Task Runner",id:"cmdx---task-runner",level:2},{value:"How to add a package",id:"how-to-add-a-package",level:2},{value:"Use <code>cmdx s</code> definitely",id:"use-cmdx-s-definitely",level:3},{value:"\ud83d\udca1 How to recreate containers",id:"-how-to-recreate-containers",level:3},{value:"\ud83d\udca1 Set a GitHub Access token to avoid GitHub API rate limiting",id:"-set-a-github-access-token-to-avoid-github-api-rate-limiting",level:3},{value:"How to execute a package in your machine during development",id:"how-to-execute-a-package-in-your-machine-during-development",level:3},{value:"1. Execute a package in linux containers via <code>cmdx con</code>",id:"1-execute-a-package-in-linux-containers-via-cmdx-con",level:4},{value:"2. Import <code>pkgs/&lt;package&gt;/pkg.yaml</code> in aqua.yaml",id:"2-import-pkgspackagepkgyaml-in-aquayaml",level:4},{value:"3. Add aqua-all.yaml in <code>$AQUA_GLOBAL_CONFIG</code>",id:"3-add-aqua-allyaml-in-aqua_global_config",level:4},{value:"Supported OS and CPU Architecture",id:"supported-os-and-cpu-architecture",level:2},{value:"Test multiple versions",id:"test-multiple-versions",level:2},{value:"Trouble shooting",id:"trouble-shooting",level:2},{value:"<code>cmdx new</code> fails to push a commit to the origin",id:"cmdx-new-fails-to-push-a-commit-to-the-origin",level:3}],u={toc:p},g="wrapper";function c(e){let{components:a,...n}=e;return(0,i.yg)(g,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"contributing"},"Contributing"),(0,i.yg)("p",null,"How to contribute to Standard Registry. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"https://github.com/aquaproj/aqua-registry")),(0,i.yg)("h2",{id:"see-also"},"See also"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u2b50 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/oss-contribution-guide"},"OSS Contribution Guide")),(0,i.yg)("li",{parentName:"ul"},"\u2b50 ",(0,i.yg)("a",{parentName:"li",href:"/docs/develop-registry/registry-style-guide"},"Registry Style Guide")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/reference/registry-config/"},"Registry Configuration")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/develop-registry/change-os-arch-for-test"},"Change ",(0,i.yg)("inlineCode",{parentName:"a"},"GOOS")," and ",(0,i.yg)("inlineCode",{parentName:"a"},"GOARCH")," for testing"))),(0,i.yg)("h2",{id:"changelog-of-development-workflow"},"Changelog of development workflow"),(0,i.yg)("p",null,"We have been improving the development workflow continuously.\nSo sometimes the development workflow is changed.\nPlease check ",(0,i.yg)("a",{parentName:"p",href:"/docs/products/aqua-registry/changelog"},"the change log"),"."),(0,i.yg)("h2",{id:"should-you-create-an-issue-before-sending-a-pull-request"},"Should you create an Issue before sending a Pull Request?"),(0,i.yg)("p",null,"Basically, you don't have to create an Issue before sending a Pull Request.\nBut if the pull request requires the discussion before reviewing, you have to create an Issue in advance."),(0,i.yg)("p",null,"For example, you don't have to create an Issue in the following cases."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Add a package"),(0,i.yg)("li",{parentName:"ul"},"Fix a typo")),(0,i.yg)("p",null,"On the other hand, for example if you want to change the directory structure in ",(0,i.yg)("inlineCode",{parentName:"p"},"pkgs")," or the workflow adding a package,\nyou have to create an Issue and describe what is changed and why the change is needed."),(0,i.yg)("h2",{id:"aqua-cant-support-some-tools-plugin-mechanism"},"aqua can't support some tools' plugin mechanism"),(0,i.yg)("p",null,"Some tools have the plugin mechanism."),(0,i.yg)("p",null,"e.g."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.github.com/en/github-cli/github-cli/creating-github-cli-extensions"},"GitHub CLI Extension")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/language/providers"},"Terraform provider")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.gauge.org/plugin.html?os=macos&language=java&ide=null"},"Gauge plugin")),(0,i.yg)("li",{parentName:"ul"},"etc")),(0,i.yg)("p",null,"aqua simply installs commands in PATH (",(0,i.yg)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR/bin"),"), but some of these plugins expect to be installed in the other location.\nIf aqua can't support the plugin, we will reject the pull request adding the plugin to aqua-registry."),(0,i.yg)("p",null,"So if you send a pull request adding a plugin to aqua-registry, please check if aqua can support the plugin.\nWe aren't necessarily familiar with the plugin, so please explain where the plugin expects to be installed and how the plugin works in the pull request description."),(0,i.yg)("p",null,"If you don't know well, please create a pull request and consult us."),(0,i.yg)("h2",{id:"commit-signing"},"Commit Signing"),(0,i.yg)("p",null,"All commits of pull requests must be signed.\nPlease see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/oss-contribution-guide/blob/main/docs/commit-signing.md"},"the document"),"."),(0,i.yg)("h2",{id:"requirements"},"Requirements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://aquaproj.github.io/docs/install"},"aqua")),(0,i.yg)("li",{parentName:"ul"},"Docker")),(0,i.yg)("p",null,"Please use the latest version."),(0,i.yg)("h2",{id:"set-up"},"Set up"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/aquaproj/aqua-registry\ncd aqua-registry\naqua i -l # Install dependencies\n")),(0,i.yg)("h2",{id:"cmdx---task-runner"},"cmdx - Task Runner"),(0,i.yg)("p",null,"We use ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/cmdx"},"cmdx")," as a task runner.\ncmdx is installed by ",(0,i.yg)("a",{parentName:"p",href:"#set-up"},"Set up")," already.\nWe also use Docker to run tests in a container.\nPlease run ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx help")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx help <task>")," to show the help."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cmdx help\ncmdx help scaffold\n")),(0,i.yg)("h2",{id:"how-to-add-a-package"},"How to add a package"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Scaffold configuration: ",(0,i.yg)("inlineCode",{parentName:"li"},"cmdx s <package name>"))),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," creates a commit, but please don't edit the commit by ",(0,i.yg)("inlineCode",{parentName:"p"},"git commit --amend"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"git rebase"),", or somehow.\n",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," creates a commit to distinguish scaffolded code from manual changes.\nPlease add new commits if you update code.")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Sometimes the scaffold by ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s <package name>")," would fail, but this is expected.\nIn this case, please check the error message and fix ",(0,i.yg)("inlineCode",{parentName:"p"},"pkgs/<package name>/{pkg.yaml,registry.yaml"),".\nPlease check ",(0,i.yg)("a",{parentName:"p",href:"/docs/trouble-shooting"},"Troubleshooting")," too.\nIf you can't figure out how to fix, please open a pull request and ask us for help.")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Fix generated files ",(0,i.yg)("inlineCode",{parentName:"li"},"pkgs/<package name>/{pkg.yaml,registry.yaml}")," if necessary"),(0,i.yg)("li",{parentName:"ol"},"(Optional) Remove containers to clean up them if necessary: ",(0,i.yg)("inlineCode",{parentName:"li"},"cmdx rm")),(0,i.yg)("li",{parentName:"ol"},"Run test: ",(0,i.yg)("inlineCode",{parentName:"li"},"cmdx t <package name>")),(0,i.yg)("li",{parentName:"ol"},"Update registry.yaml: ",(0,i.yg)("inlineCode",{parentName:"li"},"cmdx gr"))),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"When you update ",(0,i.yg)("inlineCode",{parentName:"p"},"pkgs/**/registry.yaml"),", you have to run ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx gr")," to reflect the update to ",(0,i.yg)("inlineCode",{parentName:"p"},"registry.yaml")," in the repository.")),(0,i.yg)("ol",{start:6},(0,i.yg)("li",{parentName:"ol"},"Commit ",(0,i.yg)("inlineCode",{parentName:"li"},"registry.yaml")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"pkgs/<package name>/{pkg.yaml,registry.yaml")),(0,i.yg)("li",{parentName:"ol"},"Repeat the step 2 ~ 6 until packages are installed properly"),(0,i.yg)("li",{parentName:"ol"},"Create a pull request: ",(0,i.yg)("inlineCode",{parentName:"li"},"cmdx new <package name>")),(0,i.yg)("li",{parentName:"ol"},"(Optional) Stop containers: ",(0,i.yg)("inlineCode",{parentName:"li"},"cmdx stop"))),(0,i.yg)("h3",{id:"use-cmdx-s-definitely"},"Use ",(0,i.yg)("inlineCode",{parentName:"h3"},"cmdx s")," definitely"),(0,i.yg)("p",null,"We don't accept pull requests not following this guide.\nEspecially, we don't accept pull requests not using ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s"),".\nStandard Registry must support not only the latest version but also almost all versions and ",(0,i.yg)("a",{parentName:"p",href:"#supported-os-and-cpu-architecture"},"variaous platforms"),".\nMany tools have so many versions that people can't check all of them manually.\nSo we can't trust the code not using ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s"),".\n",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," checks all GitHub Releases and generates code supporting all of them (Strictly speaking, if there are too many GitHub Releases we have to restrict the number of GitHub Releases, though ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," can still check over 200 versions).\n",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," generates much better code than us."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," isn't perfect and sometimes ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," causes errors and generates invalid code.\nThen you have to fix the code according to the error message.\n",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," supports only ",(0,i.yg)("inlineCode",{parentName:"p"},"github_release")," type packages, so for other package types you have to fix the code.\nEven if so, you must still use ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s"),".\n",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," guarantees the quality of code."),(0,i.yg)("h3",{id:"-how-to-recreate-containers"},"\ud83d\udca1 How to recreate containers"),(0,i.yg)("p",null,"We usually reuse same containers, but sometimes you would want to run test in new containers.\nIn that case, you can remove containers by ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx rm")," command.\nThen ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx s")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx t")," create new containers."),(0,i.yg)("h3",{id:"-set-a-github-access-token-to-avoid-github-api-rate-limiting"},"\ud83d\udca1 Set a GitHub Access token to avoid GitHub API rate limiting"),(0,i.yg)("p",null,"If you face GitHub API rate limiting, please set the GitHub Access token with environment variable ",(0,i.yg)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"AQUA_GITHUB_TOKEN"),"."),(0,i.yg)("p",null,"e.g."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"export GITHUB_TOKEN=<YOUR PERSONAL ACCESS TOKEN>\n")),(0,i.yg)("h3",{id:"how-to-execute-a-package-in-your-machine-during-development"},"How to execute a package in your machine during development"),(0,i.yg)("p",null,"There are several ways"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Execute a package in linux containers via ",(0,i.yg)("inlineCode",{parentName:"li"},"cmdx con")),(0,i.yg)("li",{parentName:"ol"},"Import ",(0,i.yg)("inlineCode",{parentName:"li"},"pkgs/<package>/pkg.yaml")," in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/blob/main/aqua.yaml"},"aqua.yaml")),(0,i.yg)("li",{parentName:"ol"},"Add ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/blob/main/aqua-all.yaml"},"aqua-all.yaml")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"$AQUA_GLOBAL_CONFIG"))),(0,i.yg)("h4",{id:"1-execute-a-package-in-linux-containers-via-cmdx-con"},"1. Execute a package in linux containers via ",(0,i.yg)("inlineCode",{parentName:"h4"},"cmdx con")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ cmdx con\n+ bash scripts/connect.sh\n[INFO] Connecting to the container aqua-registry (linux/arm64)\n")),(0,i.yg)("p",null,"Then you can execute a package in the container."),(0,i.yg)("h4",{id:"2-import-pkgspackagepkgyaml-in-aquayaml"},"2. Import ",(0,i.yg)("inlineCode",{parentName:"h4"},"pkgs/<package>/pkg.yaml")," in aqua.yaml"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  # ...\n  - import: pkgs/<package>/pkg.yaml\n")),(0,i.yg)("p",null,"Please don't commit this change."),(0,i.yg)("p",null,"You need to run ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow")," to use the local registry."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aqua policy allow\n")),(0,i.yg)("p",null,"Then you can execute the package."),(0,i.yg)("h4",{id:"3-add-aqua-allyaml-in-aqua_global_config"},"3. Add aqua-all.yaml in ",(0,i.yg)("inlineCode",{parentName:"h4"},"$AQUA_GLOBAL_CONFIG")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"export AQUA_GLOBAL_CONFIG=$PWD/aqua-all.yaml:$AQUA_GLOBAL_CONFIG\n")),(0,i.yg)("p",null,"You need to run ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow")," to use the local registry."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aqua policy allow\n")),(0,i.yg)("p",null,"Then you can execute all packages."),(0,i.yg)("h2",{id:"supported-os-and-cpu-architecture"},"Supported OS and CPU Architecture"),(0,i.yg)("p",null,"Please consider the following OS and CPU Architecture."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"OS",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"windows"),(0,i.yg)("li",{parentName:"ul"},"darwin"),(0,i.yg)("li",{parentName:"ul"},"linux"))),(0,i.yg)("li",{parentName:"ul"},"CPU Architecture",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"amd64"),(0,i.yg)("li",{parentName:"ul"},"arm64")))),(0,i.yg)("p",null,"We test the registry in CI on the above environments by GitHub Actions' build matrix."),(0,i.yg)("h2",{id:"test-multiple-versions"},"Test multiple versions"),(0,i.yg)("p",null,"If the package has the field ",(0,i.yg)("a",{parentName:"p",href:"/docs/reference/registry-config/version-overrides"},"version_overrides"),",\nplease add not only the latest version but also old versions in ",(0,i.yg)("inlineCode",{parentName:"p"},"pkg.yaml")," to test if old versions can be installed properly."),(0,i.yg)("p",null,"e.g. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/pkgs/scaleway/scaleway-cli/pkg.yaml"},"pkg.yaml")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/pkgs/scaleway/scaleway-cli/registry.yaml"},"registry.yaml")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: scaleway/scaleway-cli@v2.12.0\n  - name: scaleway/scaleway-cli\n    version: v2.4.0\n")),(0,i.yg)("p",null,"\u26a0\ufe0f Don't use the short syntax ",(0,i.yg)("inlineCode",{parentName:"p"},"<package name>@<version>")," for the old version to prevent Renovate from updating the old version."),(0,i.yg)("p",null,"\ud83d\udc4e"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: scaleway/scaleway-cli@v2.12.0\n  - name: scaleway/scaleway-cli@v2.12.0\n")),(0,i.yg)("h2",{id:"trouble-shooting"},"Trouble shooting"),(0,i.yg)("h3",{id:"cmdx-new-fails-to-push-a-commit-to-the-origin"},(0,i.yg)("inlineCode",{parentName:"h3"},"cmdx new")," fails to push a commit to the origin"),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"cmdx new")," can't push a commit to a remote branch, please confirm if ",(0,i.yg)("inlineCode",{parentName:"p"},"origin")," is not the upstream ",(0,i.yg)("inlineCode",{parentName:"p"},"aquaproj/aqua-registry")," but your fork.\nIf ",(0,i.yg)("inlineCode",{parentName:"p"},"origin")," is not your fork, please change it to your fork."),(0,i.yg)("p",null,"e.g. Fail to push a commit"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ cmdx new pre-commit/pre-commit\n# ...\n+ git push origin feat/pre-commit/pre-commit\nremote: Permission to aquaproj/aqua-registry.git denied to ***.\nfatal: unable to access 'https://github.com/aquaproj/aqua-registry/': The requested URL returned error: 403\n")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/fork"},"If you haven't forked aquaproj/aqua-registry, please fork it"),"."),(0,i.yg)("li",{parentName:"ol"},"Check remote repositories.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"git remote -v\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Please fix ",(0,i.yg)("inlineCode",{parentName:"li"},"origin"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"git remote set-url origin https://github.com/<your fork>\n")),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Please set ",(0,i.yg)("inlineCode",{parentName:"li"},"upstream")," if necessary.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://github.com/aquaproj/aqua-registry\n")))}c.isMDXComponent=!0}}]);