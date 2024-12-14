"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5960],{5680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>d});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=t,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||o;return a?r.createElement(d,i(i({ref:n},u),{},{components:a})):r.createElement(d,i({ref:n},u))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9227:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(8168),t=(a(6540),a(5680));const o={sidebar_position:450},i="Node.js Support",l={unversionedId:"reference/nodejs-support",id:"reference/nodejs-support",title:"Node.js Support",description:"You can manage Node.js using aqua.",source:"@site/docs/reference/nodejs-support.md",sourceDirName:"reference",slug:"/reference/nodejs-support",permalink:"/docs/reference/nodejs-support",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/nodejs-support.md",tags:[],version:"current",sidebarPosition:450,frontMatter:{sidebar_position:450},sidebar:"tutorialSidebar",previous:{title:"Windows Support",permalink:"/docs/reference/windows-support"},next:{title:"Use aqua combined with other version manager such as asdf",permalink:"/docs/reference/use-aqua-with-other-tools"}},p={},s=[{value:"Set up",id:"set-up",level:2},{value:"1. Configure npm&#39;s <code>prefix</code> config and the environment variable <code>$PATH</code>",id:"1-configure-npms-prefix-config-and-the-environment-variable-path",level:3},{value:"2. Update aqua-registry to v4.216.0 or later",id:"2-update-aqua-registry-to-v42160-or-later",level:3},{value:"3. Install the package <code>nodejs/node</code>",id:"3-install-the-package-nodejsnode",level:3},{value:"Example",id:"example",level:2},{value:"Reference",id:"reference",level:2}],u={toc:s},c="wrapper";function g(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,r.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"nodejs-support"},"Node.js Support"),(0,t.yg)("p",null,"You can manage Node.js using aqua."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"aqua-registry >= v4.216.0")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/2996"},"#2996")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/pull/26002"},"aqua-registry#26002"))),(0,t.yg)("h2",{id:"set-up"},"Set up"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Configure npm's ",(0,t.yg)("inlineCode",{parentName:"li"},"prefix")," config and the environment variable ",(0,t.yg)("inlineCode",{parentName:"li"},"$PATH")),(0,t.yg)("li",{parentName:"ol"},"Update aqua-registry to v4.216.0 or later"),(0,t.yg)("li",{parentName:"ol"},"Install the package ",(0,t.yg)("inlineCode",{parentName:"li"},"nodejs/node"))),(0,t.yg)("h3",{id:"1-configure-npms-prefix-config-and-the-environment-variable-path"},"1. Configure npm's ",(0,t.yg)("inlineCode",{parentName:"h3"},"prefix")," config and the environment variable ",(0,t.yg)("inlineCode",{parentName:"h3"},"$PATH")),(0,t.yg)("p",null,"You need to configure npm's ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," config and the environment variable ",(0,t.yg)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,t.yg)("p",null,"About npm's ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," config, please see the following links."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v10/commands/npm-install#global"},"https://docs.npmjs.com/cli/v10/commands/npm-install#global")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v10/configuring-npm/folders#prefix-configuration"},"https://docs.npmjs.com/cli/v10/configuring-npm/folders#prefix-configuration")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v10/using-npm/config#prefix"},"https://docs.npmjs.com/cli/v10/using-npm/config#prefix")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v10/using-npm/config#npmrc-files"},"https://docs.npmjs.com/cli/v10/using-npm/config#npmrc-files")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v10/using-npm/config#environment-variables"},"https://docs.npmjs.com/cli/v10/using-npm/config#environment-variables"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},'export NPM_CONFIG_PREFIX="${XDG_DATA_HOME:-$HOME/.local/share}/npm-global" # You can change the path freely\nexport PATH=$NPM_CONFIG_PREFIX/bin:$PATH\n')),(0,t.yg)("p",null,"In case of Windows, ",(0,t.yg)("inlineCode",{parentName:"p"},"bin")," directory is missing."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"export PATH=$NPM_CONFIG_PREFIX:$PATH\n")),(0,t.yg)("h3",{id:"2-update-aqua-registry-to-v42160-or-later"},"2. Update aqua-registry to v4.216.0 or later"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"aqua up -r\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - type: standard\n    ref: v4.216.0 # renovate: depName=aquaproj/aqua-registry\n")),(0,t.yg)("h3",{id:"3-install-the-package-nodejsnode"},"3. Install the package ",(0,t.yg)("inlineCode",{parentName:"h3"},"nodejs/node")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"aqua g -i nodejs/node\naqua i -l\n")),(0,t.yg)("h2",{id:"example"},"Example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"node -v\nnpm -v\n")),(0,t.yg)("p",null,"Install tools such as typescript and ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/google/zx"},"zx")," by ",(0,t.yg)("inlineCode",{parentName:"p"},"npm i -g"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"npm i -g zx\nzx -v\n")),(0,t.yg)("p",null,"npm's ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," config was configured, so tools installed by ",(0,t.yg)("inlineCode",{parentName:"p"},"npm i -g")," are shared between multiple Node.js version.\nThis has both pros and cons."),(0,t.yg)("p",null,"Pros."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"You don't have to reinstall tools when you change Node.js versions")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"aqua up node@v20.16.0 # Change Node.js version\nzx -v # zx is still available\n")),(0,t.yg)("p",null,"Cons."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Sharing tools between multiple Node.js versions may cause some trouble. Tools may not work with other Node.js versions. In this case, you would have to change npm's ",(0,t.yg)("inlineCode",{parentName:"li"},"prefix")," config by Node.js version somehow or reinstall tools")),(0,t.yg)("p",null,"We decided to accept cons for now.\nIf you face any trouble about this, please let us know."),(0,t.yg)("h2",{id:"reference"},"Reference"),(0,t.yg)("p",null,"If you're interested in the discussion about Node.js support, please check ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/2996"},"#2996"),"."))}g.isMDXComponent=!0}}]);