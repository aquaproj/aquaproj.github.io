"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6170],{5680:(a,e,t)=>{t.d(e,{xA:()=>p,yg:()=>d});var n=t(6540);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function u(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var s=n.createContext({}),o=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},p=function(a){var e=o(a.components);return n.createElement(s.Provider,{value:e},a.children)},g="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,r=a.originalType,s=a.parentName,p=u(a,["components","mdxType","originalType","parentName"]),g=o(t),y=l,d=g["".concat(s,".").concat(y)]||g[y]||c[y]||r;return t?n.createElement(d,i(i({ref:e},p),{},{components:t})):n.createElement(d,i({ref:e},p))}));function d(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var r=t.length,i=new Array(r);i[0]=y;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=a,u[g]="string"==typeof a?a:l,i[1]=u;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7977:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=t(8168),l=(t(6540),t(5680));const r={sidebar_position:10},i="aqua-installer",u={unversionedId:"products/aqua-installer/index",id:"products/aqua-installer/index",title:"aqua-installer",description:"A shell script and GitHub Actions to install aqua",source:"@site/docs/products/aqua-installer/index.md",sourceDirName:"products/aqua-installer",slug:"/products/aqua-installer/",permalink:"/docs/products/aqua-installer/",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/products/aqua-installer/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/docs/products/aqua-registry/changelog"},next:{title:"Bootstrap",permalink:"/docs/products/aqua-installer/bootstrap"}},s={},o=[{value:"Shell Script",id:"shell-script",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Required Inputs",id:"required-inputs",level:4},{value:"Optional Inputs",id:"optional-inputs",level:4},{value:"Outputs",id:"outputs",level:3},{value:"\ud83d\udca1 Caching",id:"-caching",level:3}],p={toc:o},g="wrapper";function c(a){let{components:e,...t}=a;return(0,l.yg)(g,(0,n.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"aqua-installer"},"aqua-installer"),(0,l.yg)("p",null,"A shell script and GitHub Actions to install aqua"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer"},"https://github.com/aquaproj/aqua-installer")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#shell-script"},"Shell Script")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#github-actions"},"GitHub Actions"))),(0,l.yg)("h2",{id:"shell-script"},"Shell Script"),(0,l.yg)("p",null,"You can install aqua by the following one liner."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.1.1/aqua-installer | bash\n")),(0,l.yg)("p",null,"But the one liner is a bit dangerous because aqua-installer may be tampered.\nWe recommend verifying aqua-installer's checksum before running it."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.1.1/aqua-installer\necho "e9d4c99577c6b2ce0b62edf61f089e9b9891af1708e88c6592907d2de66e3714  aqua-installer" | sha256sum -c -\nchmod +x aqua-installer\n./aqua-installer\n')),(0,l.yg)("p",null,"aqua-installer installs aqua to the following path."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"linux, macOS: ",(0,l.yg)("inlineCode",{parentName:"li"},"${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin/aqua")),(0,l.yg)("li",{parentName:"ul"},"windows: ",(0,l.yg)("inlineCode",{parentName:"li"},"${AQUA_ROOT_DIR:-$HOME/AppData/Local/aquaproj-aqua}/bin/aqua"))),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"From aqua-installer v2, aqua-installer doesn't support specifying the install path.")),(0,l.yg)("p",null,"You can pass the following parameters."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-v [aqua version]"),": aqua version")),(0,l.yg)("p",null,"e.g."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.1.1/aqua-installer | bash -s -- -v v2.28.0\n")),(0,l.yg)("p",null,"If the version isn't specified, the latest version would be installed."),(0,l.yg)("h2",{id:"github-actions"},"GitHub Actions"),(0,l.yg)("p",null,"e.g."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"- uses: aquaproj/aqua-installer@v3.1.1\n  with:\n    aqua_version: v2.28.0\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'- uses: aquaproj/aqua-installer@v3.1.1\n  with:\n    aqua_version: v2.28.0\n    working_directory: foo\n    aqua_opts: ""\n  env:\n    AQUA_CONFIG: aqua-config.yaml\n    AQUA_LOG_LEVEL: debug\n')),(0,l.yg)("h3",{id:"inputs"},"Inputs"),(0,l.yg)("p",null,"Please see ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer/blob/main/action.yaml"},"action.yaml")," too."),(0,l.yg)("h4",{id:"required-inputs"},"Required Inputs"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"aqua_version"),(0,l.yg)("td",{parentName:"tr",align:null},"Installed aqua version")))),(0,l.yg)("h4",{id:"optional-inputs"},"Optional Inputs"),(0,l.yg)("p",null,"\u26a0\ufe0f From aqua-installer v2, aqua-installer doesn't support specifying the install path."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"default"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"skip_install_aqua"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},'"false"')),(0,l.yg)("td",{parentName:"tr",align:null},"If this true and aqua is already installed, installing aqua is skipped. aqua-installer >= ",(0,l.yg)("a",{parentName:"td",href:"https://github.com/aquaproj/aqua-installer/releases/tag/v3.1.0"},"v3.1.0"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_aqua_install"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},'"true"')),(0,l.yg)("td",{parentName:"tr",align:null},"if this is ",(0,l.yg)("inlineCode",{parentName:"td"},'"false"'),", ",(0,l.yg)("inlineCode",{parentName:"td"},"aqua i")," is skipped")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"aqua_opts"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"-l")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"aqua i"),"'s option. If you want to specify global options, please use environment variables")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"working_directory"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},'""')),(0,l.yg)("td",{parentName:"tr",align:null},"working directory")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"policy_allow"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},'""')),(0,l.yg)("td",{parentName:"tr",align:null},"aqua >= ",(0,l.yg)("inlineCode",{parentName:"td"},"v2.3.0"),". If this is ",(0,l.yg)("inlineCode",{parentName:"td"},'"true"'),", ",(0,l.yg)("inlineCode",{parentName:"td"},"aqua policy allow")," command is run. If a Policy file path is set, ",(0,l.yg)("inlineCode",{parentName:"td"},'aqua policy allow "${{inputs.policy_allow}}"')," is run")))),(0,l.yg)("h3",{id:"outputs"},"Outputs"),(0,l.yg)("p",null,"Please see ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer/blob/main/action.yaml"},"action.yaml")," too."),(0,l.yg)("p",null,"Nothing."),(0,l.yg)("h3",{id:"-caching"},"\ud83d\udca1 Caching"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer/issues/428"},"#428")),(0,l.yg)("p",null,"aqua-installer doesn't support caching, but you can cache packages and registries using ",(0,l.yg)("inlineCode",{parentName:"p"},"actions/cache"),"."),(0,l.yg)("p",null,"e.g."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"- uses: actions/cache@v3.3.1\n  with:\n    path: ~/.local/share/aquaproj-aqua\n    key: v1-aqua-installer-${{runner.os}}-${{runner.arch}}-${{hashFiles('aqua.yaml')}}\n    restore-keys: |\n      v1-aqua-installer-${{runner.os}}-${{runner.arch}}-\n- uses: aquaproj/aqua-installer@v3.1.1\n  with:\n    aqua_version: v2.28.0\n")),(0,l.yg)("p",null,"Please fix ",(0,l.yg)("inlineCode",{parentName:"p"},"actions/cache"),"'s parameters properly.\nIf you ",(0,l.yg)("a",{parentName:"p",href:"/docs/guides/split-config"},"split ",(0,l.yg)("inlineCode",{parentName:"a"},"aqua.yaml")," using import")," or use local Registries, you may have to add hashes of them to key and restore-keys."),(0,l.yg)("p",null,"e.g."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"- uses: actions/cache@v3.3.1\n  with:\n    path: ~/.local/share/aquaproj-aqua\n    key: v1-aqua-installer-${{runner.os}}-${{runner.arch}}-${{hashFiles('.aqua/*.yaml')}} # Change key\n    restore-keys: |\n      v1-aqua-installer-${{runner.os}}-${{runner.arch}}-\n")),(0,l.yg)("p",null,"aqua-installer runs aqua with ",(0,l.yg)("a",{parentName:"p",href:"https://aquaproj.github.io/docs/tutorial/install-only-link"},"-l")," option by default, so packages that aren't run in the workflow aren't cached.\nIf you want to cache all packages, please set ",(0,l.yg)("inlineCode",{parentName:"p"},"aqua_opts")," to unset ",(0,l.yg)("inlineCode",{parentName:"p"},"-l")," option."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'- uses: aquaproj/aqua-installer@v3.1.1\n  with:\n    aqua_version: v2.28.0\n    aqua_opts: "" # Unset `-l` option\n')),(0,l.yg)("p",null,"But if ",(0,l.yg)("inlineCode",{parentName:"p"},"-l")," is unset, aqua installs packages that aren't run in the workflow uselessly."),(0,l.yg)("p",null,"So it is up to you that whether and how you cache packages."))}c.isMDXComponent=!0}}]);