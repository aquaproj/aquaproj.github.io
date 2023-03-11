"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:100},i="Overview",l={unversionedId:"overview",id:"overview",title:"Overview",description:"aqua is a declarative CLI Version Manager written in Go.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/overview.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",next:{title:"Install",permalink:"/docs/install"}},s={},u=[{value:"Usecase",id:"usecase",level:2},{value:"Why aqua?",id:"why-aqua",level:2},{value:"Strict Version Control",id:"strict-version-control",level:3},{value:"Installing <code>latest</code> version in CI is danger",id:"installing-latest-version-in-ci-is-danger",level:4},{value:"Easy to install tools for your projects",id:"easy-to-install-tools-for-your-projects",level:3},{value:"\ud83d\udc4b Good bye shell script",id:"-good-bye-shell-script",level:3},{value:"Continuous update by Renovate",id:"continuous-update-by-renovate",level:3},{value:"\ud83d\udee1\ufe0f Security",id:"\ufe0f-security",level:3},{value:"Easy to use",id:"easy-to-use",level:3},{value:"Easy to support new tools",id:"easy-to-support-new-tools",level:3},{value:"Comparison",id:"comparison",level:2},{value:"Compared with Homebrew",id:"compared-with-homebrew",level:3},{value:"Compared with asdf",id:"compared-with-asdf",level:3},{value:"aqua doesn&#39;t force to manage a tool by aqua in a project even if aqua is used to manage the tool in the other project",id:"aqua-doesnt-force-to-manage-a-tool-by-aqua-in-a-project-even-if-aqua-is-used-to-manage-the-tool-in-the-other-project",level:4},{value:"Use aqua along with asdf",id:"use-aqua-along-with-asdf",level:4},{value:"Compared with GitHub Actions",id:"compared-with-github-actions",level:3},{value:"Restriction",id:"restriction",level:2},{value:"Community",id:"community",level:2},{value:"Twitter",id:"twitter",level:3},{value:"GitHub Sponsor",id:"github-sponsor",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"aqua is a declarative CLI Version Manager written in Go.\nYou can manage tool versions with YAML."),(0,n.kt)("p",null,"e.g. aqua.yaml"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n")),(0,n.kt)("p",null,"The short demo would be useful to understand aqua."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://asciinema.org/a/498262?autoplay=1"},(0,n.kt)("img",{parentName:"a",src:"https://asciinema.org/a/498262.svg",alt:"asciicast"}))),(0,n.kt)("p",null,"You can install tools simply by ",(0,n.kt)("inlineCode",{parentName:"p"},"aqua i")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i\n")),(0,n.kt)("p",null,"aqua supports various tools officially.\nYou can search tools interactively by ",(0,n.kt)("inlineCode",{parentName:"p"},"aqua g")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"  newrelic/newrelic-cli (standard) (newrelic)                   \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n  pivotal-cf/pivnet-cli (standard) (pivnet)                     \u2502  cli/cli\n  scaleway/scaleway-cli (standard) (scw)                        \u2502\n  tfmigrator/cli (standard) (tfmigrator)                        \u2502  https://cli.github.com/\n  aws/copilot-cli (standard) (copilot)                          \u2502  GitHub\u2019cs official command line tool\n  codeclimate/test-reporter (standard)                          \u2502\n  create-go-app/cli (standard) (cgapp)                          \u2502\n  harness/drone-cli (standard) (drone)                          \u2502\n  sigstore/rekor (standard) (rekor-cli)                         \u2502\n  getsentry/sentry-cli (standard)                               \u2502\n  grafana/loki/logcli (standard)                                \u2502\n  knative/client (standard) (kn)                                \u2502\n  rancher/cli (standard) (rancher)                              \u2502\n  tektoncd/cli (standard) (tkn)                                 \u2502\n  civo/cli (standard) (civo)                                    \u2502\n  dapr/cli (standard) (dapr)                                    \u2502\n  mongodb/mongocli (standard)                                   \u2502\n  openfaas/faas-cli (standard)                                  \u2502\n> cli/cli (standard) (gh)                                       \u2502\n  50/399                                                        \u2502\n> cli                                                           \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n")),(0,n.kt)("p",null,"To add supported tools, please see ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop-registry/add-registry"},"here"),"."),(0,n.kt)("h2",{id:"usecase"},"Usecase"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/tutorial/global-config"},"Install tools in your laptop globally"),". You can also manage tools in your ",(0,n.kt)("inlineCode",{parentName:"li"},"dotfiles")," repository"),(0,n.kt)("li",{parentName:"ol"},"Manage tools for projects"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/team-config"},"Manage tools for your organization and team")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/private-package"},"Distribute private tools in your organization"))),(0,n.kt)("h2",{id:"why-aqua"},"Why aqua?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Change tool versions per project",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Unlike Package Manager such as Homebrew, aqua supports changing tool version per project"))),(0,n.kt)("li",{parentName:"ul"},"Unify tool versions to prevent problems due to version difference",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"aqua makes you specify tool versions strictly"),(0,n.kt)("li",{parentName:"ul"},"aqua supports cross platforms and provides the unified way to manage tools both in local development and CI"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#easy-to-use"},"Easy to use"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is so important for introducing a tool to a project and having developers use it"))),(0,n.kt)("li",{parentName:"ul"},"Painless",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"aqua installs tools automatically when they are triggered. You don't have to run ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua i")," everytime tools are updated"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/renovate"},"Continuous update by Renovate")),(0,n.kt)("li",{parentName:"ul"},"Easy to support new tools. You don't have to maintain plugins or something yourself. You only have to send a pull request to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry"},"the Standard Registry"),", which is very easy"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4b ",(0,n.kt)("a",{parentName:"li",href:"#-good-bye-shell-script"},"Good bye shell script"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You don't have to write similar shell scripts to install tools many times. You only have to manage tools declaratively with YAML and run ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua i")))))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udee1\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"/docs/security/"},"Security"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"aqua supports security features such as ",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/checksum"},"Checksum Verification"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/security/policy-as-code"},"Policy as Code"),", and ",(0,n.kt)("a",{parentName:"li",href:"/docs/security/cosign-slsa"},"Cosign and SLSA Provenance Support")))),(0,n.kt)("li",{parentName:"ul"},"Lower overhead than container",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You don't have to suffer from container specific issues"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/private-package"},"Support private packages"))),(0,n.kt)("h3",{id:"strict-version-control"},"Strict Version Control"),(0,n.kt)("p",null,"The difference of tool version often causes troubles.\nIn the team development, if developers use different tool versions each others, you would suffer from troubles due to the version difference.\nAnd if the tool version in your laptop is different from the tool version in CI, you would suffer from the same trouble."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/221387356-95d9d9fd-6c19-4015-830c-63d86a4a38e0.png",alt:"image"})),(0,n.kt)("p",null,"And if multiple projects require the different tool versions, you have to switch the tool version per project somehow."),(0,n.kt)("p",null,"Package managers such as Homebrew and apt don't support switching tool versions."),(0,n.kt)("p",null,"aqua forces to pin tool versions and supports switching tool versions per project.\nYou can upgrade a tool temporaroly and rollback the upgrade easily only by editing ",(0,n.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,n.kt)("p",null,"Of course, aqua supports Monorepo which uses different tool versions per service as well."),(0,n.kt)("h4",{id:"installing-latest-version-in-ci-is-danger"},"Installing ",(0,n.kt)("inlineCode",{parentName:"h4"},"latest")," version in CI is danger"),(0,n.kt)("p",null,"If you install a tool in CI, the tool should be version controlled to avoid troubles.\nInstalling ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," version is useful but danger because the ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," version is changed suddenly and unexpected trouble may occur.\nYour CI would be broken suddenly though you don't change any code.\nMany GitHub Actions install ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," version by default."),(0,n.kt)("p",null,"aqua forces to pin tool versions and doesn't allow to install ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," version."),(0,n.kt)("h3",{id:"easy-to-install-tools-for-your-projects"},"Easy to install tools for your projects"),(0,n.kt)("p",null,"You can list up tools and their versions for your project in ",(0,n.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),".\nDevelopers can install tools easily only by running ",(0,n.kt)("inlineCode",{parentName:"p"},"aqua i [-l]"),".\nYou don't have to write the document about which tools are required and how to install them."),(0,n.kt)("h3",{id:"-good-bye-shell-script"},"\ud83d\udc4b Good bye shell script"),(0,n.kt)("p",null,"You may install tools by shell scripts."),(0,n.kt)("p",null,"e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'#!/usr/bin/env bash\n\nset -eu\n\ntempdir=$(mktemp -d)\ncd "$tempdir"\ncurl -Lq -O https://github.com/suzuki-shunsuke/tfcmt/releases/download/v4.2.0/tfcmt_darwin_amd64.tar.gz\ntar xvzf tfcmt_darwin_amd64.tar.gz\nchmod a+x tfcmt\nsudo mv tfcmt /usr/local/bin\nrm -R "$tempdir"\n')),(0,n.kt)("p",null,"Shell scripts have some issues."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have to maintain scripts per tool"),(0,n.kt)("li",{parentName:"ul"},"You have to update the tool version somehow",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In many cases, the tool isn't updated and the old version is used for a long time"))),(0,n.kt)("li",{parentName:"ul"},"The script isn't portable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The above script supports only darwin/amd64"))),(0,n.kt)("li",{parentName:"ul"},"The script doesn't verify the checksum",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you verify the checksum in shell script, you have to update the checksum along with the version. It's bothersome")))),(0,n.kt)("p",null,"Using aqua, you don't have to maintain shell scripts anymore.\naqua supports updating tools by Renovate and checksum verification. aqua works on cross platform.\naqua supports updating not only versions but also checksums automatically."),(0,n.kt)("h3",{id:"continuous-update-by-renovate"},"Continuous update by Renovate"),(0,n.kt)("p",null,"If tools are version controlled, they should be updated continuously.\nOtherwise, they would become old soon, which causes several issues."),(0,n.kt)("p",null,"aqua provides ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-renovate-config"},"Renovate Config Preset")," for continous update by Renovate.\nUsing this preset, you can easily update tools by Renovate."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/guides/renovate"},"ref. Update packages by Renovate")),(0,n.kt)("h3",{id:"\ufe0f-security"},"\ud83d\udee1\ufe0f Security"),(0,n.kt)("p",null,"You should verify the checksum of the tool before installing the tool.\nOtherwise, the tool may be tampered and the malicious code may be executed."),(0,n.kt)("p",null,"Unfortunately, many shell scripts, asdf plugins, and GitHub Actions don't verify the checksum."),(0,n.kt)("p",null,"On the other hand, aqua supports the checksum verification."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/security/"},"ref. Security")),(0,n.kt)("h3",{id:"easy-to-use"},"Easy to use"),(0,n.kt)("p",null,"If you use tools by yourself, you can use any tools you like freely even if the tool is difficult and the learning cost is high.\nBut when you introduce a tool to your team and organization, it is important that the tool is easy to use."),(0,n.kt)("p",null,"Even if you have a high motivation to learn them, other members don't necessarily  have the motivation.\nThey have to focus on their own tasks and don't have a time to learn new tools.\nThen you wouldn't be able to introduce the tool to your team well and even if you introduce it some of other members wouldn't use it."),(0,n.kt)("p",null,"Compared with alternatives such as ",(0,n.kt)("inlineCode",{parentName:"p"},"asdf")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"tea"),", aqua is much easy to use.\nOther members have to do only the following things."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/install"},"Install aqua in their laptops once")),(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua i -l"))),(0,n.kt)("p",null,"aqua provides various features, but other members can use aqua without learning them."),(0,n.kt)("h3",{id:"easy-to-support-new-tools"},"Easy to support new tools"),(0,n.kt)("p",null,"aqua has ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"a central Registry (Standard Registry)")," and you can add new tools to the Registry.\nYou don't have to maintain plugins or something by yourself. You only have to create an issue or pull request.\nTo send a pull request you have to write Registry Configuration, but aqua provides ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/registry-tool"},"a tool")," to scaffold Registry Configuration and create a pull request, so you can send a pull request easily.\nRegistry Configuration is a declarative YAML files, so you don't have to write shell scripts or something.\nDeclarative YAML files are much easier to maintain than scripts."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/graphs/contributors"},"Many contributors has already contributed to Standard Registry"),".\nYour contribution is welcome!"),(0,n.kt)("h2",{id:"comparison"},"Comparison"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"We are not necessarily familiar with compared tools.\nSo maybe the description about them is wrong.\nYour contribution is welcome.")),(0,n.kt)("h3",{id:"compared-with-homebrew"},"Compared with Homebrew"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"#strict-version-control"},"Strict Version Control")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/windows-support/"},"Windows Support"))),(0,n.kt)("p",null,"You can use Homebrew to install tools aqua can't install."),(0,n.kt)("h3",{id:"compared-with-asdf"},"Compared with asdf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"#easy-to-use"},"Easy to use")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"https://aquaproj.github.io/docs/tutorial/lazy-install/"},"Lazy Install")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d You don't have to install plugins in advance"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"#continuous-update-by-renovate"},"Continuous update by Renovate")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"/docs/security/"},"Security")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/checksum/"},"Checksum Verification"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"#aqua-doesnt-force-to-manage-a-tool-by-aqua-in-a-project-even-if-aqua-is-used-to-manage-the-tool-in-the-other-project"},"aqua doesn't force to manage a tool by aqua in a project even if aqua is used to manage the tool in the other project")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d aqua Registry is much easier to maintain than asdf plugins"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d Small things",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/team-config"},"Share aqua configuration for teams and organizations with AQUA_GLOBAL_CONFIG"))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/split-config"},"Split the list of packages"))))),(0,n.kt)("h4",{id:"aqua-doesnt-force-to-manage-a-tool-by-aqua-in-a-project-even-if-aqua-is-used-to-manage-the-tool-in-the-other-project"},"aqua doesn't force to manage a tool by aqua in a project even if aqua is used to manage the tool in the other project"),(0,n.kt)("p",null,"For example, you can't use both asdf and nvm to manage Node.js in the same laptop.\nIf you develop a project A using asdf to manage Node.js in your laptop, you can't develop a project B using nvm in the same laptop."),(0,n.kt)("p",null,"On the other hand, aqua can be used along with alternatives in the same laptop."),(0,n.kt)("p",null,"Please see ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/use-aqua-with-other-tools"},"Use aqua combined with other version manager such as asdf"),"."),(0,n.kt)("h4",{id:"use-aqua-along-with-asdf"},"Use aqua along with asdf"),(0,n.kt)("p",null,"asdf supports language runtimes such as Node.js, Python, Ruby, and so on, though aqua can't support them.\nYou can use asdf for them and can use aqua for other tools."),(0,n.kt)("h3",{id:"compared-with-github-actions"},"Compared with GitHub Actions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"#strict-version-control"},"Strict Version Control")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d Unify how to install tools in both local development and CI"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"#continuous-update-by-renovate"},"Continuous update by Renovate")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,n.kt)("a",{parentName:"li",href:"/docs/security/"},"Security")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/checksum/"},"Checksum Verification"),")")),(0,n.kt)("h2",{id:"restriction"},"Restriction"),(0,n.kt)("p",null,"Please see ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/restriction/"},"Restriction"),"."),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Twitter: ",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/aquaclivm"},"@aquaclivm"),", ",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/hashtag/aquaclivm"},"#aquaclivm")),(0,n.kt)("li",{parentName:"ul"},"Slack: ",(0,n.kt)("a",{parentName:"li",href:"https://gophers.slack.com/archives/C04RALTG29K"},"English"),", ",(0,n.kt)("a",{parentName:"li",href:"https://gophers.slack.com/archives/C04RDHZQ9K5"},"Japanese"))),(0,n.kt)("h3",{id:"twitter"},"Twitter"),(0,n.kt)("p",null,"We share news about aqua using a Twitter Account ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/aquaclivm"},"@aquaclivm"),'.\nWe check tweets about aqua, but it is difficult to search tweets about aqua with the keyword "aqua" because aqua is a very common word.\nSo when you tweet about aqua, please mention @aquaclivm or use the hash tag ',(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/hashtag/aquaclivm"},"#aquaclivm"),"."),(0,n.kt)("h2",{id:"github-sponsor"},"GitHub Sponsor"),(0,n.kt)("p",null,"We'll really appreciate if you become a sponsor of this project!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/aquaproj"},"https://github.com/sponsors/aquaproj")))}d.isMDXComponent=!0}}]);