"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1769],{5680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>d});var a=n(6540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),s=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=t,d=u["".concat(l,".").concat(g)]||u[g]||f[g]||i;return n?a.createElement(d,o(o({ref:r},c),{},{components:n})):a.createElement(d,o({ref:r},c))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:t,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5171:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(8168),t=(n(6540),n(5680));const i={sidebar_position:900},o="version_expr, version_expr_prefix",p={unversionedId:"reference/config/version-expr",id:"reference/config/version-expr",title:"version_expr, version_expr_prefix",description:"aqua >= v2.40.0 #3363",source:"@site/docs/reference/config/version-expr.md",sourceDirName:"reference/config",slug:"/reference/config/version-expr",permalink:"/docs/reference/config/version-expr",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/config/version-expr.md",tags:[],version:"current",sidebarPosition:900,frontMatter:{sidebar_position:900},sidebar:"tutorialSidebar",previous:{title:"Experimental Feature",permalink:"/docs/reference/config/experimental-feature"},next:{title:"Registry Configuration",permalink:"/docs/reference/registry-config/"}},l={},s=[],c={toc:s},u="wrapper";function f(e){let{components:r,...n}=e;return(0,t.yg)(u,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"version_expr-version_expr_prefix"},(0,t.yg)("inlineCode",{parentName:"h1"},"version_expr"),", ",(0,t.yg)("inlineCode",{parentName:"h1"},"version_expr_prefix")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"aqua >= v2.40.0")," ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/3363"},"#3363")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"version_expr")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"version_expr_prefix")," are fields to read a package version from external files.\nFor example, you can get a version of Terraform from ",(0,t.yg)("inlineCode",{parentName:"p"},".terraform-version"),"."),(0,t.yg)("p",null,".terraform-version:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"1.10.2\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'packages:\n- name: hashicorp/terraform\n  # The version is `v1.10.2`.\n  version_expr: readFile(".terraform-version")\n  version_expr_prefix: v\n')),(0,t.yg)("p",null,"You can also read JSON and YAML files:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'packages:\n- name: hashicorp/terraform\n  version_expr: readJSON("version.json").version\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'packages:\n- name: hashicorp/terraform\n  version_expr: readYAML("version.yaml").version\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"version_expr")," is evaluated by ",(0,t.yg)("a",{parentName:"p",href:"https://expr-lang.org/docs/language-definition"},"expr"),".\nThe package version is ",(0,t.yg)("inlineCode",{parentName:"p"},"version_expr_prefix")," + ",(0,t.yg)("inlineCode",{parentName:"p"},"The evaluation result of version_expr"),"."),(0,t.yg)("p",null,"The following custom functions are available:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'readFile("file path")'),": read a file and returns a content"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'readJSON("file path")'),": read a JSON file and returns a content "),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'readYAML("file path")'),": read a YAML file and returns a content ")),(0,t.yg)("p",null,"To prevent secrects from being leaked by reading secret files via read{File,JSON,YAML} functions, the evaluation result of ",(0,t.yg)("inlineCode",{parentName:"p"},"version_expr")," must match with the regular expression ",(0,t.yg)("inlineCode",{parentName:"p"},"^v?\\d+\\.\\d+(\\.\\d+)*[.-]?((alpha|beta|dev|rc)[.-]?)?\\d*"),"."),(0,t.yg)("p",null,"If the version has a prefix such as ",(0,t.yg)("inlineCode",{parentName:"p"},"cli-"),", the version doesn't match with the regular expression.\nIn that case, you can set the prefix with ",(0,t.yg)("inlineCode",{parentName:"p"},"version_expr_prefix"),"."))}f.isMDXComponent=!0}}]);