"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5303],{4965:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>t,toc:()=>s});var o=n(8168),i=(n(6540),n(5680));const l={sidebar_position:20},r="Policy as Code",t={unversionedId:"guides/policy-as-code",id:"guides/policy-as-code",title:"Policy as Code",description:"aqua >= v2.3.0",source:"@site/docs/guides/policy-as-code.md",sourceDirName:"guides",slug:"/guides/policy-as-code",permalink:"/docs/guides/policy-as-code",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/guides/policy-as-code.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Enable Checksum Verification",permalink:"/docs/guides/checksum"},next:{title:"Share aqua configuration for teams and organizations",permalink:"/docs/guides/team-config"}},c={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"aqua-installer&#39;s <code>policy_allow</code> input",id:"aqua-installers-policy_allow-input",level:2},{value:"update-checksum-workflow&#39;s <code>policy_allow</code> input",id:"update-checksum-workflows-policy_allow-input",level:2},{value:"\ud83d\udca1 Best practice: Configure CODEOWENRS to protect Policy files",id:"-best-practice-configure-codeowenrs-to-protect-policy-files",level:2},{value:"See also",id:"see-also",level:2}],u={toc:s},p="wrapper";function y(e){let{components:a,...n}=e;return(0,i.yg)(p,(0,o.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"policy-as-code"},"Policy as Code"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"aqua >= v2.3.0")),(0,i.yg)("p",null,"Policy is a feature to restrict the package installation and execution.\nThe main purpose of Policy is to improve the security by preventing malicious tools from being executed."),(0,i.yg)("p",null,"If you use only Standard Registry, you don't have to care of Policy.\nFrom aqua v2, aqua allows only Standard Registry by default.\nThis means aqua prevents malicious tools from being executed via malicious Registries by default."),(0,i.yg)("p",null,"If you use non Standard Registries, you have to create a Policy file to allow them."),(0,i.yg)("h2",{id:"getting-started"},"Getting Started"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"/docs/tutorial/#docker"},"Set up the environment with Docker")),(0,i.yg)("li",{parentName:"ol"},"Create ",(0,i.yg)("inlineCode",{parentName:"li"},"aqua.yaml")," and a local Registry ",(0,i.yg)("inlineCode",{parentName:"li"},"registry.yaml")),(0,i.yg)("li",{parentName:"ol"},"Try to use a local Registry and confirm the default Policy"),(0,i.yg)("li",{parentName:"ol"},"Create a Git repository and aqua-policy.yaml"),(0,i.yg)("li",{parentName:"ol"},"Confirm the warning"),(0,i.yg)("li",{parentName:"ol"},"Run ",(0,i.yg)("inlineCode",{parentName:"li"},"aqua policy deny")),(0,i.yg)("li",{parentName:"ol"},"Run ",(0,i.yg)("inlineCode",{parentName:"li"},"aqua policy allow"))),(0,i.yg)("p",null,"--"),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Create ",(0,i.yg)("inlineCode",{parentName:"li"},"aqua.yaml")," and a local Registry ",(0,i.yg)("inlineCode",{parentName:"li"},"registry.yaml"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"aqua init\naqua gr suzuki-shunsuke/ci-info > registry.yaml\nvi aqua.yaml\naqua g -i cli/cli local,suzuki-shunsuke/ci-info\n")),(0,i.yg)("p",null,"aqua.yaml"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"---\n# aqua - Declarative CLI Version Manager\n# https://aquaproj.github.io/\n# checksum:\n#   enabled: true\n#   require_checksum: true\n#   supported_envs:\n#   - all\nregistries:\n- type: standard\n  ref: v4.155.1 # renovate: depName=aquaproj/aqua-registry\n- name: local\n  type: local\n  path: registry.yaml\npackages:\n- name: cli/cli@v2.25.1\n- name: suzuki-shunsuke/ci-info@v2.1.2\n  registry: local\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Try to use a local Registry and confirm the default Policy")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'fe179d7889fd:~/workspace$ aqua i\nINFO[0000] download and unarchive the package            aqua_version= env=linux/arm64 package_name=aqua-proxy package_version=v1.1.4 program=aqua registry=\nINFO[0000] create a symbolic link                        aqua_version= command=aqua-proxy env=linux/arm64 package_name=aqua-proxy package_version=v1.1.4 program=aqua registry=\nINFO[0000] create a symbolic link                        aqua_version= command=gh env=linux/arm64 program=aqua\nINFO[0000] create a symbolic link                        aqua_version= command=ci-info env=linux/arm64 program=aqua\nERRO[0000] install the package                           aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/002" env=linux/arm64 error="this package isn\'t allowed" package_name=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua registry=local\nINFO[0000] download and unarchive the package            aqua_version= env=linux/arm64 package_name=cli/cli package_version=v2.27.0 program=aqua registry=standard\nFATA[0002] aqua failed                                   aqua_version= env=linux/arm64 error="it failed to install some packages" program=aqua\n')),(0,i.yg)("p",null,"It fails to install ",(0,i.yg)("inlineCode",{parentName:"p"},"suzuki-shunsuke/ci-info")," because the local Registry isn't allowed by default."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'ERRO[0000] install the package                           aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/002" env=linux/arm64 error="this package isn\'t allowed" package_name=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua registry=local\n')),(0,i.yg)("p",null,"On the other hand, GitHub CLI is installed properly because Standard Registry is allowed by default."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"a82023e65a9e:~/workspace$ gh version\ngh version 2.27.0 (2023-04-07)\nhttps://github.com/cli/cli/releases/tag/v2.27.0\n")),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Create a Git repository and aqua-policy.yaml")),(0,i.yg)("p",null,"Let's create a Policy to allow the local Registry."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},".git")," directory is required so that aqua finds a Policy file."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"git init # Create .git\naqua policy init\nvi aqua-policy.yaml\n")),(0,i.yg)("p",null,"aqua-policy.yaml"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'---\n# aqua Policy\n# https://aquaproj.github.io/\nregistries:\n# Example\n  - name: local\n    type: local\n    path: registry.yaml\n# - name: aqua-registry\n#   type: github_content\n#   repo_owner: aquaproj\n#   repo_name: aqua-registry\n#   ref: semver(">= 3.0.0") # ref is optional\n#   path: registry.yaml\n  - type: standard\n    ref: semver(">= 3.0.0")\npackages:\n# Example\n  - registry: local # allow all packages in the Registry\n# - name: cli/cli # allow only a specific package. The default value of registry is "standard"\n# - name: cli/cli\n#   version: semver(">= 2.0.0") # version is optional\n  - registry: standard\n')),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Confirm the warning")),(0,i.yg)("p",null,"Run ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua i"),", then aqua outputs the warning and it fails to install ",(0,i.yg)("inlineCode",{parentName:"p"},"suzuki-shunsuke/ci-info"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'fe179d7889fd:~/workspace$ aqua i\nWARN[0000] The policy file is ignored unless it is allowed by "aqua policy allow" command.\n\n$ aqua policy allow "/home/foo/workspace/aqua-policy.yaml"\n\nIf you want to keep ignoring the policy file without the warning, please run "aqua policy deny" command.\n\n$ aqua policy deny "/home/foo/workspace/aqua-policy.yaml"\n\n   aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/003" env=linux/arm64 policy_file=/home/foo/workspace/aqua-policy.yaml program=aqua\nERRO[0000] install the package                           aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/002" env=linux/arm64 error="this package isn\'t allowed" package_name=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua registry=local\nFATA[0000] aqua failed                                   aqua_version= env=linux/arm64 error="it failed to install some packages" program=aqua\n')),(0,i.yg)("p",null,"To resolve the warning, you have to check the Policy file and run either ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy deny"),".\nIf the Policy file is reliable, please run ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow"),"."),(0,i.yg)("ol",{start:6},(0,i.yg)("li",{parentName:"ol"},"Run ",(0,i.yg)("inlineCode",{parentName:"li"},"aqua policy deny"))),(0,i.yg)("p",null,"Before running ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow"),", let's try to run ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy deny"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'aqua policy deny "/home/foo/workspace/aqua-policy.yaml"\n')),(0,i.yg)("p",null,"ci-info still failed but the warning is suppressed."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'2f4a758ab4ef:~/workspace$ ci-info --help\nFATA[0000] aqua failed                                   aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/002" env=linux/arm64 error="this package isn\'t allowed" exe_name=ci-info package=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua\n')),(0,i.yg)("ol",{start:7},(0,i.yg)("li",{parentName:"ol"},"Run ",(0,i.yg)("inlineCode",{parentName:"li"},"aqua policy allow"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'aqua policy allow "/home/foo/workspace/aqua-policy.yaml"\n')),(0,i.yg)("p",null,"Then ci-info is available."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"2f4a758ab4ef:~/workspace$ ci-info --version\nINFO[0000] download and unarchive the package            aqua_version= env=linux/arm64 exe_name=ci-info package=suzuki-shunsuke/ci-info package_name=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua registry=local\nci-info version 2.1.2 (4a047e648dd0b9d0de1be356421d5d043c38d080)\n")),(0,i.yg)("p",null,"If you modify the Policy file, you have to allow the change again."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'echo "" >> aqua-policy.yaml\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'2f4a758ab4ef:~/workspace$ ci-info --version\nWARN[0000] The policy file is changed. The policy file is ignored unless it is allowed by "aqua policy allow" command.\n\n$ aqua policy allow "/home/foo/workspace/aqua-policy.yaml"\n\nIf you want to keep ignoring the policy file without the warning, please run "aqua policy deny" command.\n\n$ aqua policy deny "/home/foo/workspace/aqua-policy.yaml"\n\n   aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/003" env=linux/arm64 exe_name=ci-info package=suzuki-shunsuke/ci-info package_version=v2.1.2 policy_file=/home/foo/workspace/aqua-policy.yaml program=aqua\nFATA[0000] aqua failed                                   aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/002" env=linux/arm64 error="this package isn\'t allowed" exe_name=ci-info package=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua\n')),(0,i.yg)("p",null,"Please run ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow")," again, then ci-info is available."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'2f4a758ab4ef:~/workspace$ aqua policy allow "/home/foo/workspace/aqua-policy.yaml"\n2f4a758ab4ef:~/workspace$ ci-info --version\nci-info version 2.1.2 (4a047e648dd0b9d0de1be356421d5d043c38d080)\n')),(0,i.yg)("p",null,"Basically Policy files aren't changed so frequently, so it wouldn't be so bothersome to run ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow"),"."),(0,i.yg)("h2",{id:"aqua-installers-policy_allow-input"},"aqua-installer's ",(0,i.yg)("inlineCode",{parentName:"h2"},"policy_allow")," input"),(0,i.yg)("p",null,"aqua >= ",(0,i.yg)("inlineCode",{parentName:"p"},"v2.3.0"),", aqua-installer >= ",(0,i.yg)("inlineCode",{parentName:"p"},"v2.1.0")),(0,i.yg)("p",null,"If the input ",(0,i.yg)("inlineCode",{parentName:"p"},"policy_allow")," is set, aqua-installer runs ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow")," command."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'- uses: aquaproj/aqua-installer@v3.1.1\n  with:\n    aqua_version: v2.28.0\n    policy_allow: "true"\n')),(0,i.yg)("h2",{id:"update-checksum-workflows-policy_allow-input"},"update-checksum-workflow's ",(0,i.yg)("inlineCode",{parentName:"h2"},"policy_allow")," input"),(0,i.yg)("p",null,"aqua >= ",(0,i.yg)("inlineCode",{parentName:"p"},"v2.3.0"),", ",(0,i.yg)("a",{parentName:"p",href:"/docs/products/update-checksum-workflow"},"update-checksum-workflow")," >= ",(0,i.yg)("inlineCode",{parentName:"p"},"v0.1.5")),(0,i.yg)("p",null,"If the input ",(0,i.yg)("inlineCode",{parentName:"p"},"policy_allow")," is set, ",(0,i.yg)("inlineCode",{parentName:"p"},"aqua policy allow")," is run."),(0,i.yg)("h2",{id:"-best-practice-configure-codeowenrs-to-protect-policy-files"},"\ud83d\udca1 Best practice: Configure CODEOWENRS to protect Policy files"),(0,i.yg)("p",null,"Basically you don't have to change Policy files so frequently and the change of Policy files should be reviewed carefully in terms of security.\nSo it is a good practice to protect Policy files by CODEOWNERS."),(0,i.yg)("h2",{id:"see-also"},"See also"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/reference/security/policy-as-code"},"Reference"))))}y.isMDXComponent=!0},5680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>d});var o=n(6540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function t(e,a){if(null==e)return{};var n,o,i=function(e,a){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var a=o.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},u=function(e){var a=s(e.components);return o.createElement(c.Provider,{value:a},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},g=o.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=t(e,["components","mdxType","originalType","parentName"]),p=s(n),g=i,d=p["".concat(c,".").concat(g)]||p[g]||y[g]||l;return n?o.createElement(d,r(r({ref:a},u),{},{components:n})):o.createElement(d,r({ref:a},u))}));function d(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=g;var t={};for(var c in a)hasOwnProperty.call(a,c)&&(t[c]=a[c]);t.originalType=e,t[p]="string"==typeof e?e:i,r[1]=t;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);