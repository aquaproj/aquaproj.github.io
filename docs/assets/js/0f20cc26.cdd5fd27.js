"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4238],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>m});var n=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=n.createContext({}),c=function(e){var r=n.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),b=t,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return a?n.createElement(m,s(s({ref:r},u),{},{components:a})):n.createElement(m,s({ref:r},u))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},3293:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),t=(a(7294),a(3905));const o={sidebar_position:1400},s="cargo install failed",i={unversionedId:"reference/codes/005",id:"reference/codes/005",title:"cargo install failed",description:"It may fail to install cargo type package due to the failure of cargo install command.",source:"@site/docs/reference/codes/005.md",sourceDirName:"reference/codes",slug:"/reference/codes/005",permalink:"/docs/reference/codes/005",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/codes/005.md",tags:[],version:"current",sidebarPosition:1400,frontMatter:{sidebar_position:1400},sidebar:"tutorialSidebar",previous:{title:"command is not found",permalink:"/docs/reference/codes/004"},next:{title:"the executable file isn't installed yet. Lazy Install is disabled",permalink:"/docs/reference/codes/006"}},l={},c=[{value:"What does this error mean?",id:"what-does-this-error-mean",level:2},{value:"How to solve the error",id:"how-to-solve-the-error",level:2}],u={toc:c},d="wrapper";function p(e){let{components:r,...a}=e;return(0,t.kt)(d,(0,n.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"cargo-install-failed"},(0,t.kt)("inlineCode",{parentName:"h1"},"cargo install")," failed"),(0,t.kt)("p",null,"It may fail to install ",(0,t.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/cargo-package"},"cargo type package")," due to the failure of ",(0,t.kt)("inlineCode",{parentName:"p"},"cargo install")," command."),(0,t.kt)("p",null,"e.g."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-console"},'$ broot -V\nINFO[0000] Installing a crate                            aqua_version= env=darwin/arm64 package_name=crates.io/broot package_version=1.20.0 program=aqua registry=local\n    Updating crates.io index\n  Installing broot v1.20.0\n   Compiling autocfg v1.1.0\n   Compiling libc v0.2.144\n   Compiling proc-macro2 v1.0.58\n   Compiling cfg-if v1.0.0\n   Compiling unicode-ident v1.0.8\n\n   ...\n\n   Compiling onig v6.4.0\n   Compiling syntect-no-panic v4.6.1\n   Compiling git2 v0.14.4\nerror: linking with `cc` failed: exit status: 1\n  |\n  = note: LC_ALL="C" PATH="/Users/shunsukesuzuki/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/bin:/Users/shunsukesuzuki/google-cloud-sdk/bin:/Users/shunsukesuzuki/.local/share/zinit/polaris/bin:/Users/shunsukesuzuki/.pyenv/shims:/Users/shunsukesuzuki/go/bin:/Users/shunsukesuzuki/bin:/Users/shunsukesuzuki/.volta/bin:/Users/shunsukesuzuki/.local/share/aquaproj-aqua/bin:/Users/shunsukesuzuki/.local/bin:/Users/shunsukesuzuki/google-cloud-sdk/bin:/Users/shunsukesuzuki/.krew/bin:/Users/shunsukesuzuki/.rbenv/bin:/Users/shunsukesuzuki/.pyenv/bin:/Users/shunsukesuzuki/.cargo/bin:/Users/shunsukesuzuki/repos/bin:/Users/shunsukesuzuki/.nodebrew/current/bin:/usr/local/go/bin:/usr/local/Cellar/openssl/1.0.2s/bin:/opt/homebrew/opt/gnu-sed/libexec/gnubin:/opt/homebrew/opt/grep/libexec/gnubin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/sbin:/sbin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin" VSLANG="1033" ZERO_AR_DATE="1" "cc" "-arch" "arm64" "/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/rustcPfnkTR/symbols.o" "/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/cargo-install7z2lUH/release/deps/broot-c24b215fd59bc137.broot.539ce56f-cgu.0.rcgu.o" "-L" "/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/cargo-install7z2lUH/release/deps" "-L" "/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/cargo-install7z2lUH/release/build/libgit2-sys-c1c8ec3646f53526/out/build" "-L" "/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/cargo-install7z2lUH/release/build/onig_sys-be106416281466e0/out" "-L" "/Users/shunsukesuzuki/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib" "/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/rustcPfnkTR/libonig_sys-d53e6c5bb1b0706e.rlib" "/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/rustcPfnkTR/liblibgit2_sys-4a56a3cf540dfc80.rlib" "/Users/shunsukesuzuki/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libcompiler_builtins-90099c6af476d811.rlib" "-lxcb" "-lxcb-render" "-lxcb-shape" "-lxcb-xfixes" "-liconv" "-framework" "Security" "-framework" "CoreFoundation" "-lz" "-framework" "CoreFoundation" "-liconv" "-lSystem" "-lc" "-lm" "-L" "/Users/shunsukesuzuki/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib" "-o" "/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/cargo-install7z2lUH/release/deps/broot-c24b215fd59bc137" "-Wl,-dead_strip" "-nodefaultlibs"\n  = note: ld: library not found for -lxcb\n          clang: error: linker command failed with exit code 1 (use -v to see invocation)\n          \n\nerror: could not compile `broot` due to previous error\nerror: failed to compile `broot v1.20.0`, intermediate artifacts can be found at `/var/folders/lk/bw_hsbdd72l9ckd0tz61xz2m0000gn/T/cargo-install7z2lUH`\nINFO[0109] removing the install directory because the installation failed  aqua_version= env=darwin/arm64 install_dir=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/cargo/crates.io/broot/1.20.0 package_name=crates.io/broot package_version=1.20.0 program=aqua registry=local\nERRO[0109] install the package                           aqua_version= env=darwin/arm64 error="cargo install: install a crate: exit status 101" package_name=crates.io/broot package_version=1.20.0 program=aqua registry=local\nFATA[0109] aqua failed                                   aqua_version= env=darwin/arm64 error="it failed to install some packages" program=aqua\n')),(0,t.kt)("h2",{id:"what-does-this-error-mean"},"What does this error mean?"),(0,t.kt)("p",null,"aqua runs ",(0,t.kt)("inlineCode",{parentName:"p"},"cargo install")," command to install ",(0,t.kt)("inlineCode",{parentName:"p"},"cargo")," type packages, but ",(0,t.kt)("inlineCode",{parentName:"p"},"cargo install")," command fails."),(0,t.kt)("h2",{id:"how-to-solve-the-error"},"How to solve the error"),(0,t.kt)("p",null,"Probably this error isn't the issue of aqua."),(0,t.kt)("p",null,"Please run ",(0,t.kt)("inlineCode",{parentName:"p"},"cargo install")," command and check if the issue can be reproduced without aqua."),(0,t.kt)("p",null,"e.g."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-console"},"$ cargo install --features clipboard broot\n")),(0,t.kt)("p",null,"if you need help, please ask not aqua maintainers but Rust community."),(0,t.kt)("p",null,"We aren't familiar with Rust and Cargo, so we can't help you."))}p.isMDXComponent=!0}}]);