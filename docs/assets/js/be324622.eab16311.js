"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8250],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return p}});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(a),p=i,f=g["".concat(c,".").concat(p)]||g[p]||d[p]||r;return a?t.createElement(f,o(o({ref:n},u),{},{components:a})):t.createElement(f,o({ref:n},u))}));function p(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6490:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var t=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={sidebar_position:400},c="Usage",s={unversionedId:"reference/usage",id:"reference/usage",title:"Usage",description:"aqua install",source:"@site/docs/reference/usage.md",sourceDirName:"reference",slug:"/reference/usage",permalink:"/docs/reference/usage",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/usage.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Registry Configuration",permalink:"/docs/reference/registry-config"},next:{title:"Declarative vs Imperative",permalink:"/docs/reference/declarative-imperative"}},u={},d=[{value:"aqua install",id:"aqua-install",level:2},{value:"aqua generate",id:"aqua-generate",level:2},{value:"aqua init",id:"aqua-init",level:2},{value:"aqua which",id:"aqua-which",level:2},{value:"aqua list",id:"aqua-list",level:2},{value:"aqua exec",id:"aqua-exec",level:2}],g={toc:d};function p(e){var n=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help\nNAME:\n   aqua - Version Manager of CLI. https://github.com/aquaproj/aqua\n\nUSAGE:\n   aqua [global options] command [command options] [arguments...]\n\nVERSION:\n   1.2.0 (ae6ea617989d0b131ba7717138bcf527160f3adc)\n\nCOMMANDS:\n   install, i   Install tools\n   exec         Execute tool\n   init         Create a configuration file if it doesn't exist\n   list         List packages in Registries\n   which        Output the absolute file path of the given command\n   generate, g  Search packages in registries and output the configuration interactively\n   version      Show version\n   help, h      Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --log-level value         log level [$AQUA_LOG_LEVEL]\n   --config value, -c value  configuration file path [$AQUA_CONFIG]\n   --help, -h                show help (default: false)\n   --version, -v             print the version (default: false)\n")),(0,r.kt)("h2",{id:"aqua-install"},"aqua install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help install\nNAME:\n   aqua install - Install tools\n\nUSAGE:\n   aqua install [command options] [arguments...]\n\nDESCRIPTION:\n   Install tools according to the configuration files.\n   \n   e.g.\n   $ aqua i\n   \n   If you want to create only symbolic links and want to skip downloading package, please set "-l" option.\n   \n   $ aqua i -l\n   \n   By default aqua doesn\'t install packages in the global configuration.\n   If you want to install packages in the global configuration too,\n   please set "-a" option.\n   \n   $ aqua i -a\n\nOPTIONS:\n   --only-link, -l  create links but skip downloading packages (default: false)\n   --test           test file.src after installing the package (default: false)\n   --all, -a        install all aqua configuration packages (default: false)\n   \n')),(0,r.kt)("h2",{id:"aqua-generate"},"aqua generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help generate\nNAME:\n   aqua generate - Search packages in registries and output the configuration interactively\n\nUSAGE:\n   aqua generate [command options] [<registry name>,<package name> ...]\n\nDESCRIPTION:\n   Search packages in registries and output the configuration interactively.\n   \n   If no argument is passed, interactive fuzzy finder is launched.\n   \n   $ aqua g\n   \n     influxdata/influx-cli (standard) (influx)                     \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \n     newrelic/newrelic-cli (standard) (newrelic)                   \u2502  cli/cli\n     pivotal-cf/pivnet-cli (standard) (pivnet)                     \u2502\n     scaleway/scaleway-cli (standard) (scw)                        \u2502  https://cli.github.com/\n     tfmigrator/cli (standard) (tfmigrator)                        \u2502  GitHub\u2019cs official command line tool\n     aws/copilot-cli (standard) (copilot)                          \u2502\n     codeclimate/test-reporter (standard)                          \u2502\n     create-go-app/cli (standard) (cgapp)                          \u2502\n     harness/drone-cli (standard) (drone)                          \u2502\n     sigstore/rekor (standard) (rekor-cli)                         \u2502\n     getsentry/sentry-cli (standard)                               \u2502\n     knative/client (standard) (kn)                                \u2502\n     rancher/cli (standard) (rancher)                              \u2502\n     tektoncd/cli (standard) (tkn)                                 \u2502\n     civo/cli (standard) (civo)                                    \u2502\n     dapr/cli (standard) (dapr)                                    \u2502\n     mongodb/mongocli (standard)                                   \u2502\n     openfaas/faas-cli (standard)                                  \u2502\n   > cli/cli (standard) (gh)                                       \u2502\n     48/380                                                        \u2502\n   > cli                                                           \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \n   \n   Please select the package you want to install, then the package configuration is outptted.\n   You can select multiple packages by tab key.\n   Please copy and paste the outputted configuration in the aqua configuration file.\n   \n   $ aqua g # tfmigrator/cli is selected\n   - name: tfmigrator/cli@v0.2.1\n   \n   You can update the configuration file directly with "-i" option.\n   \n   $ aqua g -i\n   \n   You can pass packages with positional arguments.\n   \n   $ aqua g [<registry name>,<package name> ...]\n   \n   $ aqua g standard,cli/cli standard,junegunn/fzf\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   \n   You can omit the registry name if it is "standard".\n   \n   $ aqua g cli/cli\n   - name: cli/cli@v2.2.0\n   \n   With "-f" option, you can pass packages.\n   \n   $ aqua g -f packages.txt # list of <registry name>,<package name>\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   - name: tfmigrator/cli@v0.2.1\n   \n   $ cat packages.txt | aqua g -f -\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   - name: tfmigrator/cli@v0.2.1\n   \n   $ aqua list | aqua g -f - # Generate configuration to install all packages\n   \n   You can omit the registry name if it is "standard".\n   \n   echo "cli/cli" | aqua g -f -\n   - name: cli/cli@v2.2.0\n\nOPTIONS:\n   -f value  the file path of packages list. When the value is "-", the list is passed from the standard input\n   -i        Insert packages to configuration file (default: false)\n   \n')),(0,r.kt)("h2",{id:"aqua-init"},"aqua init"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help init\nNAME:\n   aqua init - Create a configuration file if it doesn\'t exist\n\nUSAGE:\n   aqua init [<created file path. The default value is "aqua.yaml">]\n\nDESCRIPTION:\n   Create a configuration file if it doesn\'t exist\n   e.g.\n   $ aqua init # create "aqua.yaml"\n   $ aqua init foo.yaml # create foo.yaml\n')),(0,r.kt)("h2",{id:"aqua-which"},"aqua which"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help which\nNAME:\n   aqua which - Output the absolute file path of the given command\n\nUSAGE:\n   aqua which <command name>\n\nDESCRIPTION:\n   Output the absolute file path of the given command\n   e.g.\n   $ aqua which gh\n   /home/foo/.aqua/pkgs/github_release/github.com/cli/cli/v2.4.0/gh_2.4.0_macOS_amd64.tar.gz/gh_2.4.0_macOS_amd64/bin/gh\n   \n   If the command isn't found in the configuration files, aqua searches the command in the environment variable PATH\n   \n   $ aqua which ls\n   /bin/ls\n   \n   If the command isn't found, exits with non zero exit code.\n   \n   $ aqua which foo\n   FATA[0000] aqua failed                                   aqua_version=0.8.6 error=\"command is not found\" exe_name=foo program=aqua\n")),(0,r.kt)("h2",{id:"aqua-list"},"aqua list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help list\nNAME:\n   aqua list - List packages in Registries\n\nUSAGE:\n   aqua list [arguments...]\n\nDESCRIPTION:\n   Output the list of packages in registries.\n   The output format is <registry name>,<package name>\n   \n   e.g.\n   $ aqua list\n   standard,99designs/aws-vault\n   standard,abiosoft/colima\n   standard,abs-lang/abs\n   ...\n")),(0,r.kt)("h2",{id:"aqua-exec"},"aqua exec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help exec\nNAME:\n   aqua exec - Execute tool\n\nUSAGE:\n   aqua exec <executed command> [<arg> ...]\n\nDESCRIPTION:\n   Basically you don\'t have to use this command, because this is used by aqua internally. aqua-proxy invokes this command.\n   When you execute the command installed by aqua, "aqua exec" is executed internally.\n   \n   e.g.\n   $ aqua exec -- gh version\n   gh version 2.4.0 (2021-12-21)\n   https://github.com/cli/cli/releases/tag/v2.4.0\n')))}p.isMDXComponent=!0}}]);