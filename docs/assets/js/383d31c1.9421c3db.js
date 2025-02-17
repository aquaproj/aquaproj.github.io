"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7395],{1029:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(8168),r=(n(6540),n(5680));const l={sidebar_position:100},o="Quick Start",i={unversionedId:"tutorial/index",id:"tutorial/index",title:"Quick Start",description:"aqua is a CLI tool to install CLI tools with declarative YAML configuration.",source:"@site/docs/tutorial/index.md",sourceDirName:"tutorial",slug:"/tutorial/",permalink:"/docs/tutorial/",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial/index.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/install"},next:{title:"Search packages",permalink:"/docs/tutorial/search-packages"}},u={},s=[{value:"Demo",id:"demo",level:2},{value:"Install aqua",id:"install-aqua",level:2},{value:"Docker",id:"docker",level:2},{value:"Create a configuration file",id:"create-a-configuration-file",level:2},{value:"Install tools with aqua",id:"install-tools-with-aqua",level:2}],c={toc:s},p="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(p,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"quick-start"},"Quick Start"),(0,r.yg)("p",null,"aqua is a CLI tool to install CLI tools with declarative YAML configuration.\nIn this quick start, let's install aqua and install tools with aqua."),(0,r.yg)("h2",{id:"demo"},"Demo"),(0,r.yg)("p",null,"Please see ",(0,r.yg)("a",{parentName:"p",href:"https://asciinema.org/a/498262?autoplay=1"},"Demo"),"."),(0,r.yg)("h2",{id:"install-aqua"},"Install aqua"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/install"},"Install")),(0,r.yg)("p",null,"Please confirm if aqua is installed correctly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"aqua -v\n")),(0,r.yg)("h2",{id:"docker"},"Docker"),(0,r.yg)("p",null,"If you want to try this tutorial in the clean environment, container is useful."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -ti debian:bookworm-20231009 bash\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'apt update\napt install -y curl vim\n\nmkdir ~/workspace\ncd ~/workspace\nexport PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"\ncurl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.1.1/aqua-installer\necho "e9d4c99577c6b2ce0b62edf61f089e9b9891af1708e88c6592907d2de66e3714  aqua-installer" | sha256sum -c -\n\nchmod +x aqua-installer\n./aqua-installer\n')),(0,r.yg)("h2",{id:"create-a-configuration-file"},"Create a configuration file"),(0,r.yg)("p",null,"Create a configuration file by ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua init")," command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"aqua init # aqua.yaml is created\n")),(0,r.yg)("p",null,"aqua.yaml is created."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"---\n# aqua - Declarative CLI Version Manager\n# https://aquaproj.github.io/\n# checksum:\n#   enabled: true\n#   require_checksum: true\n#   supported_envs:\n#   - all\nregistries:\n- type: standard\n  ref: v4.155.1 # renovate: depName=aquaproj/aqua-registry\npackages:\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"packages")," is still empty, so let's add packages to install them."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"See also ",(0,r.yg)("a",{parentName:"p",href:"/docs/guides/split-config"},"Split config")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# -d: Create aqua/aqua.yaml\n# -u: Import packages from imports/.*\\.ya?ml\naqua init [-d] [-u]\n"))),(0,r.yg)("h2",{id:"install-tools-with-aqua"},"Install tools with aqua"),(0,r.yg)("p",null,"Let's install ",(0,r.yg)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub Official CLI")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/junegunn/fzf"},"fzf")," with aqua."),(0,r.yg)("p",null,"Add packages to ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"aqua g -i cli/cli junegunn/fzf\n")),(0,r.yg)("p",null,"Packages are added to the field ",(0,r.yg)("inlineCode",{parentName:"p"},"packages"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: cli/cli@v2.38.0\n- name: junegunn/fzf@0.43.0\n")),(0,r.yg)("p",null,"Then run ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua i"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"aqua i\n")),(0,r.yg)("p",null,"Congratulation! Tools are installed correctly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"$ command -v gh\n/home/foo/.local/share/aquaproj-aqua/bin/gh\n\n$ gh version\ngh version 2.38.0 (2023-11-01)\nhttps://github.com/cli/cli/releases/tag/v2.38.0\n\n$ command -v fzf\n/home/foo/.local/share/aquaproj-aqua/bin/fzf\n\n$ fzf --version\n0.43.0 (d3311d9)\n")),(0,r.yg)("p",null,"aqua installs tools in ",(0,r.yg)("inlineCode",{parentName:"p"},"${AQUA_ROOT_DIR}"),"."))}g.isMDXComponent=!0},5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),s=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(u.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(u,".").concat(d)]||p[d]||g[d]||l;return n?t.createElement(m,o(o({ref:a},c),{},{components:n})):t.createElement(m,o({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);