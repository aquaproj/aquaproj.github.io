"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4335],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6952:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={sidebar_position:850},s="Change `GOOS` and `GOARCH` for testing Registry",p={unversionedId:"reference/change-os-arch-for-test",id:"reference/change-os-arch-for-test",title:"Change `GOOS` and `GOARCH` for testing Registry",description:"#643 #644",source:"@site/docs/reference/change-os-arch-for-test.md",sourceDirName:"reference",slug:"/reference/change-os-arch-for-test",permalink:"/docs/reference/change-os-arch-for-test",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/change-os-arch-for-test.md",tags:[],version:"current",sidebarPosition:850,frontMatter:{sidebar_position:850},sidebar:"tutorialSidebar",previous:{title:"aqua doesn't support installing aqua",permalink:"/docs/reference/aqua-cant-manage-aqua"},next:{title:"Tracing and CPU Profiling",permalink:"/docs/reference/trace-profile"}},c={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"change-goos-and-goarch-for-testing-registry"},"Change ",(0,o.kt)("inlineCode",{parentName:"h1"},"GOOS")," and ",(0,o.kt)("inlineCode",{parentName:"h1"},"GOARCH")," for testing Registry"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/643"},"#643")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/644"},"#644")),(0,o.kt)("p",null,"aqua >= v1.4.0 is required."),(0,o.kt)("p",null,"When you develop aqua Registry such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"Standard Registry"),", you have to consider mainly the following platforms."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"darwin / amd64"),(0,o.kt)("li",{parentName:"ul"},"darwin / arm64"),(0,o.kt)("li",{parentName:"ul"},"linux / amd64"),(0,o.kt)("li",{parentName:"ul"},"linux / arm64")),(0,o.kt)("p",null,"But if you don't have laptops for the above platforms, it is difficult to test the Registry on the platforms."),(0,o.kt)("p",null,"Furthermore, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"Standard Registry")," is tested with GitHub Actions but GitHub Actions doesn't support arm64, so we can't test the Registry on arm64."),(0,o.kt)("p",null,"To solve the problem, aqua supports changing ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GOARCH")," for testing the Registry."),(0,o.kt)("p",null,"By default, aqua gets ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GOARCH")," from Go's ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS and runtime.GOARCH"),", but you can override them with the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GOOS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GOARCH"),"."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ AQUA_GOOS=darwin AQUA_GOARCH=arm64 aqua i --test\n$ AQUA_GOOS=darwin AQUA_GOARCH=arm64 aqua which gh\n")),(0,o.kt)("p",null,"Of course, even if you change ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GOARCH")," you wouldn't be able to execute the tools.\nBut by running ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua i --test"),", you can test if tools can be installed properly."))}d.isMDXComponent=!0}}]);