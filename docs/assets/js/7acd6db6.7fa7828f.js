"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8262],{5788:(e,a,t)=>{t.d(a,{Iu:()=>c,yg:()=>m});var n=t(1504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,m=p["".concat(o,".").concat(d)]||p[d]||g[d]||r;return t?n.createElement(m,l(l({ref:a},c),{},{components:t})):n.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7152:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=t(5072),i=(t(1504),t(5788));const r={sidebar_position:550},l="Filter packages with tags",s={unversionedId:"guides/package-tag",id:"guides/package-tag",title:"Filter packages with tags",description:"aqua >= v1.23.0",source:"@site/docs/guides/package-tag.md",sourceDirName:"guides",slug:"/guides/package-tag",permalink:"/docs/guides/package-tag",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/package-tag.md",tags:[],version:"current",sidebarPosition:550,frontMatter:{sidebar_position:550},sidebar:"tutorialSidebar",previous:{title:"Uninstall Packages",permalink:"/docs/guides/uninstall-packages"},next:{title:"Install Standard Registry's all packages very quickly",permalink:"/docs/guides/install-all-packages"}},o={},u=[{value:"Specification",id:"specification",level:2}],c={toc:u},p="wrapper";function g(e){let{components:a,...t}=e;return(0,i.yg)(p,(0,n.c)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"filter-packages-with-tags"},"Filter packages with tags"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"aqua >= v1.23.0")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/441"},"#441")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1336"},"#1336")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"aqua cp")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua install")," commands support filtering packages with tags."),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("p",null,"The optional field ",(0,i.yg)("inlineCode",{parentName:"p"},"tags")," can be specified in ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua.yaml"),"'s package.\nThis field is a string list of tags."),(0,i.yg)("p",null,"e.g."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"---\nregistries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\npackages:\n- name: suzuki-shunsuke/tfcmt@v3.2.0\n  tags:\n    - test\n    - foo\n- name: suzuki-shunsuke/github-comment@v4.0.0\n- name: cli/cli@v2.0.0\n  tags:\n    - bar\n    - foo\n")),(0,i.yg)("p",null,"And ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua install")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua cp")," command have the following command line options."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"--tags (-t)")," (string): When this option is set, only packages that have specified tags are installed. You can specify multiple tags joining with ",(0,i.yg)("inlineCode",{parentName:"li"},",")," (e.g. ",(0,i.yg)("inlineCode",{parentName:"li"},"-t ci,test"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"--exclude-tags")," (string): When this option is set, packages that have specified tags aren't installed. You can specify multiple tags joining with ",(0,i.yg)("inlineCode",{parentName:"li"},",")," (e.g. ",(0,i.yg)("inlineCode",{parentName:"li"},"-exclude-tags ci,test"),")")),(0,i.yg)("p",null,"In case of the above ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua.yaml"),", you can filter packages as the following."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ aqua i # Install suzuki-shunsuke/tfcmt@v3.2.0 and suzuki-shunsuke/github-comment@v4.0.0 and cli/cli@v2.0.0\n$ aqua i -t test # Install suzuki-shunsuke/tfcmt@v3.2.0\n$ aqua i -t foo,bar # Install suzuki-shunsuke/tfcmt@v3.2.0 and cli/cli@v2.0.0\n$ aqua i --exclude-tags test # Install suzuki-shunsuke/github-comment@v4.0.0 and cli/cli@v2.0.0\n$ aqua i --exclude-tags test -t foo # Install cli/cli@v2.0.0\n")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Note that ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua install")," creates symbolic links of all packages regardless tags, so that you can execute all tools by Lazy Install and assure that tools are managed by aqua.")))}g.isMDXComponent=!0}}]);