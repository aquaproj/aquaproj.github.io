"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2565],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),y=r,g=l["".concat(s,".").concat(y)]||l[y]||m[y]||o;return n?t.createElement(g,i(i({ref:a},c),{},{components:n})):t.createElement(g,i({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var u={};for(var s in a)hasOwnProperty.call(a,s)&&(u[s]=a[s]);u.originalType=e,u[l]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2417:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var t=n(8168),r=(n(6540),n(5680));const o={sidebar_position:240},i="AQUA_X_SYS_EXEC",u={unversionedId:"reference/execve-2",id:"reference/execve-2",title:"AQUA_X_SYS_EXEC",description:"aqua >= v2.5.0",source:"@site/docs/reference/execve-2.md",sourceDirName:"reference",slug:"/reference/execve-2",permalink:"/docs/reference/execve-2",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/execve-2.md",tags:[],version:"current",sidebarPosition:240,frontMatter:{sidebar_position:240},sidebar:"tutorialSidebar",previous:{title:"GitHub Artifact Attestations",permalink:"/docs/reference/security/github-artifact-attestations"},next:{title:"Registry",permalink:"/docs/reference/registry"}},s={},p=[],c={toc:p},l="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(l,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"aqua_x_sys_exec"},"AQUA_X_SYS_EXEC"),(0,r.yg)("p",null,"aqua >= v2.5.0"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/710"},"#710")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/729"},"#729")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1597"},"#1597")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1925"},"#1925")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"This feature doesn't work on Windows because Windows doesn't support ",(0,r.yg)("inlineCode",{parentName:"p"},"execve(2)"),".")),(0,r.yg)("p",null,"When a command ",(0,r.yg)("inlineCode",{parentName:"p"},"x")," is executed via aqua, the command is executed as the following."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"$AQUA_ROOT_DIR/bin/x: symbolic link to aqua-proxy"),(0,r.yg)("li",{parentName:"ol"},"aqua-proxy executes the command ",(0,r.yg)("inlineCode",{parentName:"li"},"aqua exec -- x")),(0,r.yg)("li",{parentName:"ol"},"aqua executes ",(0,r.yg)("inlineCode",{parentName:"li"},"x"))),(0,r.yg)("p",null,"So the command ",(0,r.yg)("inlineCode",{parentName:"p"},"x")," is executed via ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-proxy")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua"),".\nUntil aqua v2.5.0, ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-proxy")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua")," executed commands as subprocess. You can confirm it by checking the process tree by ",(0,r.yg)("inlineCode",{parentName:"p"},"pstree")," command."),(0,r.yg)("p",null,"e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"$ nvim # nvim is managed by aqua\n$ pstree -s nvim\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"     \\-+= 00719 shunsukesuzuki -zsh\n       \\-+= 09955 shunsukesuzuki nvim # aqua-proxy\n         \\-+- 09956 shunsukesuzuki aqua exec -- nvim\n           \\--- 09957 shunsukesuzuki /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/neovim/neovim/v0.7.0/nvim-macos.tar.gz/nvim-osx64/bin/nvim\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"aqua-proxy -> aqua -> x\n")),(0,r.yg)("p",null,"Sometimes this behaviour caused trouble. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/710"},"#710")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1597"},"#1597")),(0,r.yg)("p",null,"From aqua v2.5.0, ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua-proxy")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"aqua")," execute commands by ",(0,r.yg)("a",{parentName:"p",href:"https://pkg.go.dev/golang.org/x/sys/unix#Exec"},"execve(2)")," in Linux and macOS by default."),(0,r.yg)("p",null,"So extra subprocess isn't raised."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"     \\-+= 82315 shunsukesuzuki -zsh\n       \\-+= 82630 shunsukesuzuki nvim\n")),(0,r.yg)("p",null,"If you feel aqua becomes unstable due to this feature, you can disable this feature by the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_X_SYS_EXEC"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"export AQUA_X_SYS_EXEC=false\n")))}m.isMDXComponent=!0}}]);