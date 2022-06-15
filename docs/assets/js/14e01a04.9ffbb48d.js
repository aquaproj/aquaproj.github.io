"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7446],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6119:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:890},c="Shell Completion",p={unversionedId:"reference/shell-completion",id:"reference/shell-completion",title:"Shell Completion",description:"aqua >= v1.11.0 #856 #859",source:"@site/docs/reference/shell-completion.md",sourceDirName:"reference",slug:"/reference/shell-completion",permalink:"/docs/reference/shell-completion",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/shell-completion.md",tags:[],version:"current",sidebarPosition:890,frontMatter:{sidebar_position:890},sidebar:"tutorialSidebar",previous:{title:"Windows Support",permalink:"/docs/reference/windows-support"},next:{title:"Experimental Feature",permalink:"/docs/reference/experimental-feature"}},s={},u=[{value:"Bash Completion",id:"bash-completion",level:2},{value:"Zsh Completion",id:"zsh-completion",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shell-completion"},"Shell Completion"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"aqua >= v1.11.0")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/856"},"#856")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/859"},"#859")),(0,a.kt)("p",null,"The commands ",(0,a.kt)("inlineCode",{parentName:"p"},"aqua completion <SHELL>")," outputs shell completion code.\nBy sourcing the output of ",(0,a.kt)("inlineCode",{parentName:"p"},"aqua completion <SHELL>")," in .bashrc or .zshrc,\naqua supports the shell completion."),(0,a.kt)("p",null,".bashrc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"if command -v aqua &> /dev/null; then source <(aqua completion bash); fi\n")),(0,a.kt)("p",null,".zshrc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"if command -v aqua &> /dev/null; then source <(aqua completion zsh); fi\n")),(0,a.kt)("h2",{id:"bash-completion"},"Bash Completion"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua # Enter <Tab> Key\ncompletion  exec        g           generate    h           help        i           init        install     list        version     which\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i  # Enter <Tab> Key\ni        init     install\n")),(0,a.kt)("h2",{id:"zsh-completion"},"Zsh Completion"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua # Enter <Tab> Key\ncompletion     -- Output shell completion script for bash or zsh\nexec           -- Execute tool\ngenerate    g  -- Search packages in registries and output the configuration interactively\nhelp        h  -- Shows a list of commands or help for one command\ninit           -- Create a configuration file if it doesn't exist\ninstall     i  -- Install tools\nlist           -- List packages in Registries\nversion        -- Show version\nwhich          -- Output the absolute file path of the given command\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i # Enter <Tab> Key\ninit        -- Create a configuration file if it doesn't exist\ninstall  i  -- Install tools\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i - # Enter <Tab> Key\n--all        --help       --only-link  --test       -a           -h           -l\n")))}f.isMDXComponent=!0}}]);