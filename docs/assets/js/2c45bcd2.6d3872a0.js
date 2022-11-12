"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3593],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9370:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:80},s="Policy as Code",u={unversionedId:"tutorial-extras/policy-as-code",id:"tutorial-extras/policy-as-code",title:"Policy as Code",description:"aqua >= v1.24.0",source:"@site/docs/tutorial-extras/policy-as-code.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/policy-as-code",permalink:"/docs/tutorial-extras/policy-as-code",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/policy-as-code.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Update aqua by `aqua update-aqua` command",permalink:"/docs/tutorial-extras/update-aqua"},next:{title:"Share aqua configuration for teams and organizations",permalink:"/docs/tutorial-extras/team-config"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Benefit",id:"benefit",level:2},{value:"In case of Monorepo",id:"in-case-of-monorepo",level:3}],m={toc:p};function d(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policy-as-code"},"Policy as Code"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"aqua >= v1.24.0")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"(2022-11-11) This feature isn't released yet. This will be released at v1.24.0.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1306"},"#1306")),(0,o.kt)("p",null,"aqua supports defining the policy of package installation and execution for security.\nIf you try to install or execute packages violating the policy, it would fail."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"aqua init\naqua g -i hashicorp/terraform\n")),(0,o.kt)("p",null,"Create a policy file ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua-policy.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"aqua init-policy\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n# aqua Policy\n# https://aquaproj.github.io/docs/tutorial-extras/policy-as-code\nregistries:\n- type: standard\n  ref: semver(">= 3.0.0")\npackages:\n- registry: standard\n')),(0,o.kt)("p",null,"This policy allows only the Standard Registry."),(0,o.kt)("p",null,"Please set the absolute path to the policy file to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_POLICY_CONFIG"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_POLICY_CONFIG")," is policy file paths separated with semicolons ",(0,o.kt)("inlineCode",{parentName:"p"},":"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"export AQUA_POLICY_CONFIG=$PWD/aqua-policy.yaml\n")),(0,o.kt)("p",null,"Let's create a Local Registry."),(0,o.kt)("p",null,"registry.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: github_release\n    repo_owner: suzuki-shunsuke\n    repo_name: github-comment\n    description: CLI to create a GitHub comment\n    asset: github-comment_{{trimV .Version}}_{{.OS}}_{{.Arch}}.tar.gz\n    version_constraint: semver(">= 4.3.0")\n    version_overrides:\n      - version_constraint: "true"\n        rosetta2: true\n        supported_envs:\n          - darwin\n          - amd64\n  - type: github_release\n    repo_owner: suzuki-shunsuke\n    repo_name: tfcmt\n    asset: tfcmt_{{.OS}}_{{.Arch}}.tar.gz\n    version_constraint: semver(">= 3.2.5")\n    version_overrides:\n      - version_constraint: "true"\n        supported_envs:\n          - darwin\n          - linux\n')),(0,o.kt)("p",null,"aqua.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n- name: local\n  type: local\n  path: registry.yaml\npackages:\n- name: hashicorp/terraform@v1.3.4\n")),(0,o.kt)("p",null,"Add packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"aqua g -i local,suzuki-shunsuke/tfcmt local,suzuki-shunsuke/github-comment\n")),(0,o.kt)("p",null,"Let's install."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua i\nERRO[0000] install the package                           aqua_version= env=darwin/arm64 error="this package isn\'t allowed" package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=local\nERRO[0000] install the package                           aqua_version= env=darwin/arm64 error="this package isn\'t allowed" package_name=suzuki-shunsuke/github-comment package_version=v5.0.0 program=aqua registry=local\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=hashicorp/terraform package_version=v1.3.4 program=aqua registry=standard\nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="it failed to install some packages" program=aqua\n')),(0,o.kt)("p",null,"\ud83c\udf89 Violated packages can't be installed expectedly.\nThey can't be executed too."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -v\nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="validate the installed package for security: this package isn\'t allowed" program=aqua\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"local")," Registry and ",(0,o.kt)("inlineCode",{parentName:"p"},"github_content")," Registry are useful, but they can also be abused. Almost users don't need them, so you can reduce the security risk by forbidding them."),(0,o.kt)("p",null,"You can also allow only the specific Registries."),(0,o.kt)("p",null,"aqua-policy.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'registries:\n- type: standard\n  ref: semver(">= 3.0.0")\n- name: local\n  type: local\n  path: registry.yaml\npackages:\n- registry: standard\n- registry: local\n')),(0,o.kt)("p",null,"Then you can install and execute them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt -v            \nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 exe_name=tfcmt exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=local\ntfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)\n\n$ github-comment -v   \ngithub-comment version 5.0.0 (64d3b0b4fd3b8b05bd43e7dde9a7181577b34d70)\n")),(0,o.kt)("p",null,"You can also allow only the specific packages."),(0,o.kt)("p",null,"aqua-policy.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'registries:\n- type: standard\n  ref: semver(">= 3.0.0")\n- name: local\n  type: local\n  path: registry.yaml\npackages:\n- registry: standard\n- name: suzuki-shunsuke/tfcmt\n  registry: local\n')),(0,o.kt)("p",null,"Then you can execute tfcmt but can't execute github-comment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -v\ntfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)\n\n$ github-comment -v\nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="validate the installed package for security: this package isn\'t allowed" program=aqua\n')),(0,o.kt)("p",null,"You can also restrict the package version.\nThe syntax is same as ",(0,o.kt)("a",{parentName:"p",href:"https://aquaproj.github.io/docs/reference/registry-config/version-overrides"},"version_overrides and version_constraint"),".\nThe expression engine ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr")," is used and the version constraint is evaluated with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-version"},"hashicorp/go-version"),"."),(0,o.kt)("p",null,"Let's allow ",(0,o.kt)("inlineCode",{parentName:"p"},"tfcmt >= 4.0.0"),"."),(0,o.kt)("p",null,"aqua-policy.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'registries:\n- type: standard\n  ref: semver(">= 3.0.0")\n- name: local\n  type: local\n  path: registry.yaml\npackages:\n- registry: standard\n- name: suzuki-shunsuke/tfcmt\n  registry: local\n  version: semver(">= 4.0.0")\n')),(0,o.kt)("p",null,"You can execute tfcmt v4.0.0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt -v\ntfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)\n")),(0,o.kt)("p",null,"But you can't execute tfcmt v3.0.0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: suzuki-shunsuke/tfcmt@v3.0.0 # downgrade\n  registry: local\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ tfcmt -v    \nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="validate the installed package for security: this package isn\'t allowed" program=aqua\n')),(0,o.kt)("p",null,"You can allow ",(0,o.kt)("inlineCode",{parentName:"p"},"github_content")," Registry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'registries:\n  - name: aqua-registry\n    type: github_content\n    repo_owner: aquaproj\n    repo_name: aqua-registry\n    ref: semver(">= 3.0.0")\n    path: registry.yaml\n')),(0,o.kt)("p",null,"If you omit a version constraint ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"github_content")," registry or ",(0,o.kt)("inlineCode",{parentName:"p"},"standard")," registry, any versions are allowed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - type: standard\n  - name: aqua-registry\n    type: github_content\n    repo_owner: aquaproj\n    repo_name: aqua-registry\n    path: registry.yaml\n")),(0,o.kt)("h2",{id:"benefit"},"Benefit"),(0,o.kt)("p",null,"Policy as Code reduces the burden of the code review and improves the security."),(0,o.kt)("p",null,"About Policy as Code, please see the document of Sentinel by Hashicorp."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.hashicorp.com/sentinel/concepts/policy-as-code"},"https://docs.hashicorp.com/sentinel/concepts/policy-as-code")),(0,o.kt)("p",null,"Policy works as guardrail and allows you to update ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," freely unless ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," violates Policy.\nEspecially, this is useful to automerge pull requests by Renovate safely."),(0,o.kt)("p",null,"If the code review is required to update ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),",\nthe burden of the code review would increase in proportion to the frequency of pull requests.\nDevelopers get tired of reviewing, reviews become messy, and problems are more likely to be overlooked.\nIf Policy allows you to accept the change of aqua.yaml without review, the burden would be resolved.\nEven if the code review is still required, developers don't have to check points reviewed by Policy."),(0,o.kt)("h3",{id:"in-case-of-monorepo"},"In case of Monorepo"),(0,o.kt)("p",null,"If you manage many ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," in Monorepo,\nyou have to check if all of them have no problem in terms of security.\nA policy file is independent of ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", so you can use the same policy file for multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),".\nA security team can manage a policy file, while product teams can manage ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("a",{parentName:"p",href:"https://suzuki-shunsuke.github.io/tfaction/docs/"},"tfaction"),", which is GitHub Actions Workflows for Terraform Monorepo, assumes that tools such as Terraform, tfsec, and tflint are managed per working directory.\nThis is useful to update tools per working directory gradually, but it is difficult for a team such security team or SRE team to review all ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," in a large Monorepo.\nSo you have to leave the management of ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," to each teams, but you also have to keep the governance and security."),(0,o.kt)("p",null,"Policy file is useful for it."),(0,o.kt)("p",null,"Policy would be useful in rather large team development than individual OSS or dotfiles or small team development."))}d.isMDXComponent=!0}}]);