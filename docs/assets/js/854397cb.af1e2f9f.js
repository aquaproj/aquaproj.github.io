"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[278],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,i(i({ref:a},s),{},{components:t})):n.createElement(m,i({ref:a},s))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6464:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:100},u="Quick Start",c={unversionedId:"tutorial-basics/quick-start",id:"tutorial-basics/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"aqua is a CLI tool to install CLI tools with declarative YAML configuration.",source:"@site/docs/tutorial-basics/quick-start.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/quick-start",permalink:"/docs/tutorial-basics/quick-start",editUrl:"https://github.com/aquaproj/aquaproj.github.io/docs/tutorial-basics/quick-start.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",next:{title:"Search packages",permalink:"/docs/tutorial-basics/search-packages"}},s=[{value:"Install aqua",id:"install-aqua",children:[],level:2},{value:"Install tools with aqua",id:"install-tools-with-aqua",children:[],level:2}],p={toc:s};function d(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"aqua is a CLI tool to install CLI tools with declarative YAML configuration.\nIn this quick start, let's install aqua and install tools with aqua."),(0,o.kt)("h2",{id:"install-aqua"},"Install aqua"),(0,o.kt)("p",null,"Mac OSX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ brew install aquaproj/aqua/aqua\n")),(0,o.kt)("p",null,"Linux (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ curl -sSfL \\\n  https://raw.githubusercontent.com/aquaproj/aqua-installer/v0.2.0/aqua-installer |\n  bash\n# You can change the install path.\n# bash -s -- -i ~/bin/aqua\n")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aqua/bin")," to the environmenet variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ export PATH=$HOME/.aqua/bin:$PATH\n")),(0,o.kt)("p",null,"Confirm if aqua installed correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua -v\n")),(0,o.kt)("h2",{id:"install-tools-with-aqua"},"Install tools with aqua"),(0,o.kt)("p",null,"Let's install ",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub Official CLI")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf"},"fzf")," with aqua."),(0,o.kt)("p",null,"Write a YAML configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.10.8 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n")),(0,o.kt)("p",null,"Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua i"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i \nINFO[0000] download and unarchive the package            aqua_version=0.7.16 package_name=aqua-proxy package_version=v0.1.2 program=aqua registry=inline\nINFO[0001] download and unarchive the package            aqua_version=0.7.16 package_name=junegunn/fzf package_version=0.28.0 program=aqua registry=standard\nINFO[0001] download and unarchive the package            aqua_version=0.7.16 package_name=cli/cli package_version=v2.2.0 program=aqua registry=standard\n")),(0,o.kt)("p",null,"Congratulation! Tools are installed correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ command -v gh\n/home/foo/.aqua/bin/gh\n\n$ gh version\ngh version 2.2.0 (2021-10-25)\nhttps://github.com/cli/cli/releases/tag/v2.2.0\n\n$ command -v fzf\n/home/foo/.aqua/bin/fzf\n\n$ fzf --version\n0.28.0 (e4c3ecc)\n")),(0,o.kt)("p",null,"aqua installs tools in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aqua")," by default."))}d.isMDXComponent=!0}}]);