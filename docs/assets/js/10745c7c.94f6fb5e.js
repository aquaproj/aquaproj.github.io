"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1050],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),f=r,h=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1665:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:500},u="Use aqua combined with other version manager such as asdf",l={unversionedId:"tutorial-extras/use-aqua-with-other-tools",id:"tutorial-extras/use-aqua-with-other-tools",title:"Use aqua combined with other version manager such as asdf",description:"If you use aqua combined with other version manager such as asdf,",source:"@site/docs/tutorial-extras/use-aqua-with-other-tools.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/use-aqua-with-other-tools",permalink:"/docs/tutorial-extras/use-aqua-with-other-tools",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/use-aqua-with-other-tools.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Install private packages",permalink:"/docs/tutorial-extras/private-package"},next:{title:"Install",permalink:"/docs/reference/install"}},p={},c=[],d={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-aqua-combined-with-other-version-manager-such-as-asdf"},"Use aqua combined with other version manager such as asdf"),(0,o.kt)("p",null,"If you use aqua combined with other version manager such as asdf,\nyou should add ",(0,o.kt)("inlineCode",{parentName:"p"},"${AQUA_ROOT_DIR}/bin")," to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," after other version manager."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("p",null,"\ud83d\udc4d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},". $HOME/.asdf/asdf.sh\n\nexport PATH=${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH\n")),(0,o.kt)("p",null,"\ud83d\udc4e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH\n\n. $HOME/.asdf/asdf.sh\n")),(0,o.kt)("p",null,"This isn't a problem of aqua.\naqua is designed to allow to use aqua combined with other version managers, but many other version manager aren't."),(0,o.kt)("p",null,"Please assume the following usecase.\nYou develop the project A and B.\nIn the project A ",(0,o.kt)("a",{parentName:"p",href:"https://www.waypointproject.io/"},"Waypoint")," is managed with asdf, and in the project B Waypoint is managed with aqua."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"project-a/\n  .tool-versions # Manage Waypoint with asdf\nproject-b/\n  aqua.yaml # Manage Waypoint with aqua\n")),(0,o.kt)("p",null,"project-a/.tool-versions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"waypoint v0.6.3\n")),(0,o.kt)("p",null,"project-b/aqua.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v2.22.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: hashicorp/waypoint@v0.6.2\n")),(0,o.kt)("p",null,"If you configure .bash_profile as the following,\nyou can manage Waypoint with asdf in the project A, but you can't manage Waypoint with aqua in the project B."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH\n\n. $HOME/.asdf/asdf.sh\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ cd project-b\n$ waypoint --version\nNo version is set for command waypoint\nConsider adding one of the following versions in your config file at \nwaypoint 0.6.3\n")),(0,o.kt)("p",null,"This is because asdf is used in the project-b too."),(0,o.kt)("p",null,"On the other hand, if you configure .bash_profile as the following,\nyou can manage Waypoint with asdf in the project A, and manage Waypoint with aqua in the project B."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},". $HOME/.asdf/asdf.sh\n\nexport PATH=${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ cd project-a\n$ waypoint --version\nCLI: v0.6.3 (bd303e12)\n\n$ cd ../project-b\n$ waypoint --version\nCLI: v0.6.2 (99350730)\n")),(0,o.kt)("p",null,"This is because if aqua can't find the command in the configuration files aqua finds the command from the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."))}f.isMDXComponent=!0}}]);