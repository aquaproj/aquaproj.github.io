"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2356],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>d});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return r?t.createElement(d,o(o({ref:n},c),{},{components:r})):t.createElement(d,o({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7636:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=r(8168),a=(r(6540),r(5680));const i={sidebar_position:700},o="files",l={unversionedId:"reference/registry-config/files",id:"reference/registry-config/files",title:"files",description:"- name: the file name",source:"@site/docs/reference/registry-config/files.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/files",permalink:"/docs/reference/registry-config/files",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/files.md",tags:[],version:"current",sidebarPosition:700,frontMatter:{sidebar_position:700},sidebar:"tutorialSidebar",previous:{title:"search_words",permalink:"/docs/reference/registry-config/search-words"},next:{title:"github_release Package",permalink:"/docs/reference/registry-config/github-release-package"}},s={},p=[{value:"<code>link</code>",id:"link",level:2}],c={toc:p},g="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"files"},(0,a.yg)("inlineCode",{parentName:"h1"},"files")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name"),": the file name"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"src"),": (default: the value of ",(0,a.yg)("inlineCode",{parentName:"li"},"name"),", type: ",(0,a.yg)("inlineCode",{parentName:"li"},"template string"),") the path to the file from the archive file's root."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dir"),": This is used only for go type package"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"link"),": This is rarely used. aqua >= ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v2.36.0"},"v2.36.0"))),(0,a.yg)("h2",{id:"link"},(0,a.yg)("inlineCode",{parentName:"h2"},"link")),(0,a.yg)("p",null,"aqua >= ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.36.0"},"v2.36.0")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"link")," is used to change ",(0,a.yg)("inlineCode",{parentName:"p"},"$0")," by symlink (hardlink on Windows).\nSome tools change their behavior by ",(0,a.yg)("inlineCode",{parentName:"p"},"$0"),".\nFor instance, ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/common-fate/granted"},"granted")," changes the behavior based on ",(0,a.yg)("inlineCode",{parentName:"p"},"args[0]"),"."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/common-fate/granted/blob/e8de3ec7d62d543062d8be802b27abb3d8fac429/cmd/granted/main.go#L37-L44"},"https://github.com/common-fate/granted/blob/e8de3ec7d62d543062d8be802b27abb3d8fac429/cmd/granted/main.go#L37-L44")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'    // Use a single binary to keep keychain ACLs simple, swapping behavior via argv[0]\n    var app *cli.App\n    switch filepath.Base(os.Args[0]) {\n    case "assumego", "assumego.exe", "dassumego", "dassumego.exe":\n        app = assume.GetCliApp()\n    default:\n        app = granted.GetCliApp()\n    }\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"link")," allows you to change ",(0,a.yg)("inlineCode",{parentName:"p"},"$0")," by symlink."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"files:\n  - name: granted\n  - name: assumego\n    src: granted\n    link: assumego # link is the relative path from src to the symlink\n")))}u.isMDXComponent=!0}}]);