"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6448],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:550},l="Filter packages with tags",o={unversionedId:"tutorial-extras/package-tag",id:"tutorial-extras/package-tag",title:"Filter packages with tags",description:"aqua >= v1.23.0",source:"@site/docs/tutorial-extras/package-tag.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/package-tag",permalink:"/docs/tutorial-extras/package-tag",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/package-tag.md",tags:[],version:"current",sidebarPosition:550,frontMatter:{sidebar_position:550},sidebar:"tutorialSidebar",previous:{title:"Use aqua combined with other version manager such as asdf",permalink:"/docs/tutorial-extras/use-aqua-with-other-tools"},next:{title:"Install Standard Registry's all packages very quickly",permalink:"/docs/tutorial-extras/install-all-packages"}},s={},u=[{value:"Specification",id:"specification",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"filter-packages-with-tags"},"Filter packages with tags"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aqua >= v1.23.0")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/441"},"#441")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1336"},"#1336")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aqua cp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua install")," commands support filtering packages with tags."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"The optional field ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," can be specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"'s package.\nThis field is a string list of tags."),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nregistries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\npackages:\n- name: suzuki-shunsuke/tfcmt@v3.2.0\n  tags:\n    - test\n    - foo\n- name: suzuki-shunsuke/github-comment@v4.0.0\n- name: cli/cli@v2.0.0\n  tags:\n    - bar\n    - foo\n")),(0,i.kt)("p",null,"And ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua install")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua cp")," command have the following command line options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--tags (-t)")," (string): When this option is set, only packages that have specifed tags are installed. You can specify multiple tags joining with ",(0,i.kt)("inlineCode",{parentName:"li"},",")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"-t ci,test"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--exclude-tags")," (string): When this option is set, packages that have specifed tags aren't installed. You can specify multiple tags joining with ",(0,i.kt)("inlineCode",{parentName:"li"},",")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"-exclude-tags ci,test"),")")),(0,i.kt)("p",null,"In case of the above ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", you can filter packages as the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i # Install suzuki-shunsuke/tfcmt@v3.2.0 and suzuki-shunsuke/github-comment@v4.0.0 and cli/cli@v2.0.0\n$ aqua i -t test # Install suzuki-shunsuke/tfcmt@v3.2.0\n$ aqua i -t foo,bar # Install suzuki-shunsuke/tfcmt@v3.2.0 and cli/cli@v2.0.0\n$ aqua i --exclude-tags test # Install suzuki-shunsuke/github-comment@v4.0.0 and cli/cli@v2.0.0\n$ aqua i --exclude-tags test -t foo # Install cli/cli@v2.0.0\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua install")," creates symbolic links of all packages regardless tags, so that you can execute all tools by Lazy Install and assure that tools are managed by aqua.")))}m.isMDXComponent=!0}}]);