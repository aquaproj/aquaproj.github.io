"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6157],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return c}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(t),c=i,d=k["".concat(p,".").concat(c)]||k[c]||u[c]||r;return t?n.createElement(d,l(l({ref:a},m),{},{components:t})):n.createElement(d,l({ref:a},m))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=k;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5722:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={sidebar_position:300},p="Registry Configuration",s={unversionedId:"reference/registry-config",id:"reference/registry-config",title:"Registry Configuration",description:"e.g. registry.yaml",source:"@site/docs/reference/registry-config.md",sourceDirName:"reference",slug:"/reference/registry-config",permalink:"/docs/reference/registry-config",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/reference/config"},next:{title:"Usage",permalink:"/docs/reference/usage"}},m={},u=[{value:"JSON Schema",id:"json-schema",level:2},{value:"Package types",id:"package-types",level:2},{value:"Package&#39;s Common attributes",id:"packages-common-attributes",level:2},{value:"<code>aliases</code>",id:"aliases",level:3},{value:"<code>files</code>",id:"files",level:3},{value:"<code>github_release</code> Package",id:"github_release-package",level:2},{value:"<code>http</code> Package",id:"http-package",level:2},{value:"<code>github_content</code> Package",id:"github_content-package",level:2},{value:"<code>github_archive</code> Package",id:"github_archive-package",level:2},{value:"<code>go</code> Package",id:"go-package",level:2},{value:"File parameter",id:"file-parameter",level:3},{value:"<code>go_install</code> Package",id:"go_install-package",level:2},{value:"<code>replacements</code>, <code>format_overrides</code>",id:"replacements-format_overrides",level:2},{value:"<code>overrides</code>",id:"overrides",level:2},{value:"Default values if <code>repo_owner</code> and <code>repo_name</code> are set",id:"default-values-if-repo_owner-and-repo_name-are-set",level:2},{value:"Template String",id:"template-string",level:2},{value:"Common Template Functions",id:"common-template-functions",level:3},{value:"Template Variables",id:"template-variables",level:3},{value:"<code>version_constraint</code>, <code>version_overrides</code>",id:"version_constraint-version_overrides",level:2},{value:"version_overrides",id:"version_overrides",level:3},{value:"<code>supported_if</code>",id:"supported_if",level:2},{value:"<code>rosetta2</code>",id:"rosetta2",level:2},{value:"<code>version_filter</code>",id:"version_filter",level:2},{value:"<code>version_source</code>",id:"version_source",level:2}],k={toc:u};function c(e){var a=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"registry-configuration"},"Registry Configuration"),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml"},"registry.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n# init: a\n- type: github_release\n  repo_owner: accurics\n  repo_name: terrascan\n  asset: 'terrascan_{{trimV .Version}}_{{title .OS}}_{{.Arch}}.tar.gz'\n  link: https://docs.accurics.com/projects/accurics-terrascan/en/latest/\n  description: Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure\n  replacements:\n    amd64: x86_64\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packages"),": The list of packages")),(0,r.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/tree/main/json-schema"},"https://github.com/aquaproj/aqua/tree/main/json-schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/blob/main/json-schema/registry.json"},"https://github.com/aquaproj/aqua/blob/main/json-schema/registry.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/registry.json"},"https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/registry.json"))),(0,r.kt)("h2",{id:"package-types"},"Package types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github_release-package"},"github_release"),": The package is downloaded from GitHub Releases"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-package"},"http"),": The package is donwloaded from the specified URL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github_content-package"},"github_content"),": The package is downloaded from GitHub Content"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github_archive-package"},"github_archive"),": The package is downloaded from GitHub Archive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#go-package"},"go"),": The package is downloaded from GitHub Archive and is built by ",(0,r.kt)("inlineCode",{parentName:"li"},"go build")," command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#go_install-package"},"go_install"),": The package is installed by ",(0,r.kt)("inlineCode",{parentName:"li"},"go install")," command")),(0,r.kt)("h2",{id:"packages-common-attributes"},"Package's Common attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": (string, required) the package type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": (string) the package name. This is used to specify the package in ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua.yaml"),". name must be unique in the same registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aliases"},"aliases"),": Aliases of the package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#files"},"files"),": The list of executable files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format"),": The asset format (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"zip"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tar.gz"),"). This is used to unarchive or decompress the asset. If this isn't specified, aqua tries to specify the format from the file extenstion. If the file isn't archived and isn't compressed, please specify ",(0,r.kt)("inlineCode",{parentName:"li"},"raw")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"link"),": URL about the package. This is used for ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description"),": The description about the package. This is used for ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replacements-format_overrides"},"replacements"),": A map which is used to replace some Template Variables like ",(0,r.kt)("inlineCode",{parentName:"li"},"OS")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Arch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replacements-format_overrides"},"format_overrides"),": A list of the pair OS and the asset format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overrides"},"overrides")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#version_constraint-version_overrides"},"version_constraint"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression. The evaluation result must be a boolean"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#version_constraint-version_overrides"},"version_overrides")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#supported_if"},"supported_if")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rosetta2"},"rosetta2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#version_filter"},"version_filter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#version_source"},"version_source"))),(0,r.kt)("h3",{id:"aliases"},(0,r.kt)("inlineCode",{parentName:"h3"},"aliases")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/674"},"#674")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/675"},"#675")," aqua >= v1.5.0 is required"),(0,r.kt)("p",null,"Aliases of packages."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: ahmetb/kubectx/kubens\n  aliases:\n  - name: ahmetb/kubens\n")),(0,r.kt)("p",null,"You can use the alias as the package name in ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", and alias can be used in ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua g")," command."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"aliases")," is used to keep the compatibility when the package name is changed.\nSometimes the package name is changed because the repository is renamed or transfered."),(0,r.kt)("h3",{id:"files"},(0,r.kt)("inlineCode",{parentName:"h3"},"files")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": the file name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src"),": (default: the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", type: ",(0,r.kt)("inlineCode",{parentName:"li"},"template string"),") the path to the file from the archive file's root."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dir"),": This is used only for go type package")),(0,r.kt)("h2",{id:"github_release-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"github_release")," Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"asset"),": The template string of GitHub Release's asset name",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"'lima-{{trimV .Version}}-{{title .OS}}-{{.Arch}}.tar.gz'"))))),(0,r.kt)("h2",{id:"http-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"http")," Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),": The template string of URL where the package is downloaded",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"'https://storage.googleapis.com/kubernetes-release/release/{{.Version}}/bin/{{.OS}}/{{.Arch}}/kubectl'"))))),(0,r.kt)("h2",{id:"github_content-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"github_content")," Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": The template string of GitHub Content's file path",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"'foo-{{title .OS}}.sh'"))))),(0,r.kt)("h2",{id:"github_archive-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"github_archive")," Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name")),(0,r.kt)("h2",{id:"go-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"go")," Package"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/798"},"#798")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/799"},"#799")),(0,r.kt)("p",null,"aqua >= ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.7.0"},"v1.7.0")," is required."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name")),(0,r.kt)("p",null,"The repository archive is downloaded from GitHub and the package is built by command ",(0,r.kt)("inlineCode",{parentName:"p"},"go build")," when it is installed.\nSo the command ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," is required.\naqua is a CLI Version Manager, you have to specify the version. Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"go install")," command, you can't specify the head of the default branch."),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/wire"},"https://github.com/google/wire")),(0,r.kt)("p",null,"registry.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'packages:\n  - type: go\n    repo_owner: google\n    repo_name: wire\n    description: Compile-time Dependency Injection for Go\n    files:\n      - name: wire\n        src: ./cmd/wire\n        dir: "wire-{{trimV .Version}}"\n')),(0,r.kt)("p",null,"aqua.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - name: local\n    type: local\n    path: registry.yaml\npackages:\n  - name: google/wire@v0.5.0\n    registry: local\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua which wire\n/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/bin/wire\n\n$ aqua install\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/home/foo/.local/share/aquaproj-aqua/bin/wire new=aqua-proxy package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\nINFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\nINFO[0001] building Go tool                              aqua_version= env=darwin/arm64 exe_path=/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/bin/wire file_name=wire go_build_dir=/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/src/wire-0.5.0 go_src=./cmd/wire package_name=google/wire package_version=v0.5.0 program=aqua registry=standard\n")),(0,r.kt)("p",null,"From aqua ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.9.0"},"v1.9.0"),", if there is no GitHub Repository tag or the latest tag is old, you can specify Git revision instead of tag."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: google/wire\n    registry: local\n    version: 79660af94317b9c466adc39f27f469f1079c779b\n")),(0,r.kt)("h3",{id:"file-parameter"},"File parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    files:\n      - name: wire\n        src: ./cmd/wire\n        dir: "wire-{{trimV .Version}}"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: command name"),(0,r.kt)("li",{parentName:"ul"},"dir: Directory path where ",(0,r.kt)("inlineCode",{parentName:"li"},"go build")," is run"),(0,r.kt)("li",{parentName:"ul"},"src: go build's target path")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"${AQUA_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/\n  bin/wire\n  src/ # GitHub Repository Archive\n    wire-0.5.0/ # `go build` is run on this directory\n      cmd/wire # build target\n")),(0,r.kt)("p",null,"The following command is run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ go build -o "${AQUA_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/bin/wire" "./cmd/wire"\n')),(0,r.kt)("h2",{id:"go_install-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"go_install")," Package"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/823"},"#823")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/826"},"#826"),", aqua >= ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.10.0"},"v1.10.0")," is required."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": Go package path. If ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," is not set but ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_name")," are set, the package path is ",(0,r.kt)("inlineCode",{parentName:"li"},"github.com/<repo_owner>/<repo_name>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": The package name. If ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is not set but ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_name")," are set, the package name is ",(0,r.kt)("inlineCode",{parentName:"li"},"<repo_owner>/<repo_name>"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"repo_name")," aren't set, ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," is used as the package name")),(0,r.kt)("p",null,"The package is installed by ",(0,r.kt)("inlineCode",{parentName:"p"},"go install")," command.\nSo the command ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," is required.\nWhen aqua runs ",(0,r.kt)("inlineCode",{parentName:"p"},"go install"),", aqua sets the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"GOBIN"),"."),(0,r.kt)("p",null,"aqua is a CLI Version Manager, you have to specify the version. You can't specify ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),"."),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat"},"golang.org/x/perf/cmd/benchstat")),(0,r.kt)("p",null,"registry.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: go_install\n    path: golang.org/x/perf/cmd/benchstat\n    description: Benchstat computes and compares statistics about benchmarks\n")),(0,r.kt)("p",null,"aqua.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - name: local\n    type: local\n    path: registry.yaml\npackages:\n  - name: golang.org/x/perf/cmd/benchstat\n    registry: local\n    version: 84e58bfe0a7e5416369e236afa007d5d9c58a0fa\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i\nINFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/bin/benchstat new=aqua-proxy package_name=golang.org/x/perf/cmd/benchstat package_version=84e58bfe0a7e5416369e236afa007d5d9c58a0fa program=aqua registry=local\nINFO[0000] Installing a Go tool                          aqua_version= env=darwin/arm64 go_package_path=golang.org/x/perf/cmd/benchstat@84e58bfe0a7e5416369e236afa007d5d9c58a0fa gobin=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go_install/golang.org/x/perf/cmd/benchstat/84e58bfe0a7e5416369e236afa007d5d9c58a0fa/bin package_name=golang.org/x/perf/cmd/benchstat package_version=84e58bfe0a7e5416369e236afa007d5d9c58a0fa program=aqua registry=local\ngo: downloading golang.org/x/perf v0.0.0-20220411212318-84e58bfe0a7e\n\n$ aqua which benchstat\n/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go_install/golang.org/x/perf/cmd/benchstat/84e58bfe0a7e5416369e236afa007d5d9c58a0fa/bin/github-compare\n")),(0,r.kt)("h2",{id:"replacements-format_overrides"},(0,r.kt)("inlineCode",{parentName:"h2"},"replacements"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"format_overrides")),(0,r.kt)("p",null,"These attributes are inspired to ",(0,r.kt)("a",{parentName:"p",href:"https://goreleaser.com/customization/archive/"},"goreleaser's Archive"),".\nIf the package is released with ",(0,r.kt)("a",{parentName:"p",href:"https://goreleaser.com/"},"goreleaser"),",\nyou may copy and paste ",(0,r.kt)("inlineCode",{parentName:"p"},"replacements")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"format_overrides")," from ",(0,r.kt)("inlineCode",{parentName:"p"},".goreleaser.yaml"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"replacements",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquasecurity/trivy/blob/v0.19.2/goreleaser.yml#L62-L73"},"goreleaser.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/blob/v0.8.0/registry.yaml#L44-L55"},"registry.yaml")))),(0,r.kt)("li",{parentName:"ul"},"format_overrides",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iawia002/annie/blob/v0.11.0/.goreleaser.yml#L51-L54"},".goreleaser.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/blob/v0.8.0/registry.yaml#L361-L364"},"registry.yaml"))))),(0,r.kt)("h2",{id:"overrides"},(0,r.kt)("inlineCode",{parentName:"h2"},"overrides")),(0,r.kt)("p",null,"aqua >= v1.3.0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/607"},"#607")),(0,r.kt)("p",null,"You can override the following attributes on the specific ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GOARCH"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"replacements"),(0,r.kt)("li",{parentName:"ul"},"format"),(0,r.kt)("li",{parentName:"ul"},"asset"),(0,r.kt)("li",{parentName:"ul"},"url"),(0,r.kt)("li",{parentName:"ul"},"files")),(0,r.kt)("p",null,"e.g. On Linux ARM64, ",(0,r.kt)("inlineCode",{parentName:"p"},"Arch")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"aarch64"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  overrides:\n  - goos: linux\n    replacements:\n      arm64: aarch64\n")),(0,r.kt)("p",null,"In case of ",(0,r.kt)("inlineCode",{parentName:"p"},"replacements"),", maps are merged."),(0,r.kt)("p",null,"Either ",(0,r.kt)("inlineCode",{parentName:"p"},"goos")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"goarch")," is required."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  asset: arkade\n  overrides:\n  - goos: linux\n    goarch: arm64\n    asset: 'arkade-{{.Arch}}'\n  - goos: darwin\n    goarch: amd64\n    asset: 'arkade-darwin'\n  - goos: darwin \n    asset: 'arkade-darwin-{{.Arch}}'\n")),(0,r.kt)("p",null,"Even if multiple elements are matched, only first element is applied.\nFor example, Darwin AMD64 matches with second element but the second element isn't applied beause the first element is matched."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - goos: darwin\n    goarch: amd64\n    asset: 'arkade-darwin'\n  - goos: darwin \n    asset: 'arkade-darwin-{{.Arch}}'\n")),(0,r.kt)("h2",{id:"default-values-if-repo_owner-and-repo_name-are-set"},"Default values if ",(0,r.kt)("inlineCode",{parentName:"h2"},"repo_owner")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"repo_name")," are set"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<repo owner>/<repo name>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"link"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/<repo owner>/<repo name>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"files"),": ",(0,r.kt)("inlineCode",{parentName:"li"},'[{"name":"<repo name>"}]'))),(0,r.kt)("p",null,"For example, in case of ",(0,r.kt)("inlineCode",{parentName:"p"},"weaveworks/eksctl")," the following default values are set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: weaveworks/eksctl\nlink: https://github.com/weaveworks/eksctl\nfiles:\n- name: eksctl\n")),(0,r.kt)("h2",{id:"template-string"},"Template String"),(0,r.kt)("p",null,"Some fields are parsed with ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/text/template"},"Go's text/template")," and ",(0,r.kt)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/"},"sprig"),"."),(0,r.kt)("h3",{id:"common-template-functions"},"Common Template Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trimV"),": This is equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},'trimPrefix "v"'))),(0,r.kt)("h3",{id:"template-variables"},"Template Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OS"),": A string which ",(0,r.kt)("inlineCode",{parentName:"li"},"GOOS")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"replacements"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"replacements")," isn't set, ",(0,r.kt)("inlineCode",{parentName:"li"},"OS")," is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"GOOS"),". Basically you should use ",(0,r.kt)("inlineCode",{parentName:"li"},"OS")," for the consistency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Arch"),": A string which ",(0,r.kt)("inlineCode",{parentName:"li"},"GOARCH")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"replacements"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"replacements")," isn't set, ",(0,r.kt)("inlineCode",{parentName:"li"},"Arch")," is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"GOARCH"),". Basically you should use ",(0,r.kt)("inlineCode",{parentName:"li"},"OS")," for the consistency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GOOS"),": Go's ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GOARCH"),": Go's ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOARCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Version"),": Package ",(0,r.kt)("inlineCode",{parentName:"li"},"version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Format"),": Package ",(0,r.kt)("inlineCode",{parentName:"li"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FileName"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"files[].name"))),(0,r.kt)("h2",{id:"version_constraint-version_overrides"},(0,r.kt)("inlineCode",{parentName:"h2"},"version_constraint"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"version_overrides")),(0,r.kt)("p",null,"Some package attributes like ",(0,r.kt)("inlineCode",{parentName:"p"},"asset")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," may be different by it's version.\nFor example, the asset structure of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang-migrate/migrate"},"golang-migrate")," was changed from v4.15.0.\nIn that case, the attributes ",(0,r.kt)("inlineCode",{parentName:"p"},"version_constraint")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"version_overrides")," are useful."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: github_release\n  repo_owner: golang-migrate\n  repo_name: migrate\n  asset: 'migrate.{{.OS}}-{{.Arch}}.tar.gz'\n  description: Database migrations. CLI and Golang library\n  version_constraint: 'semver(\"> 4.14.1\")'\n  version_overrides:\n  - version_constraint: 'semver(\"<= 4.14.1\")'\n    files:\n    - name: migrate\n      src: 'migrate.{{.OS}}-{{.Arch}}'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"version_constraint")," is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,r.kt)("p",null,"Currently, the following values and functions are accessible in the expression."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Version"),": (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") The package version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"semver"),": (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"func(string) bool"),") Tests if the package version satisfies all the constraints. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/go-version"},"hashicorp/go-version")," is used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"semverWithVersion"),": (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"func(constraint, version string) bool"),") Tests if the package version satisfies all the constraints. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/go-version"},"hashicorp/go-version")," is used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trimPrefix"),": (type ",(0,r.kt)("inlineCode",{parentName:"li"},"func(s, prefix string) string"),") Go's ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/strings#TrimPrefix"},"strings.TrimPrefix"))),(0,r.kt)("h3",{id:"version_overrides"},"version_overrides"),(0,r.kt)("p",null,"The list of version override."),(0,r.kt)("p",null,"The following attributes are supported."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"asset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replacements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format_overrides")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supported_if")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rosetta2"))),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  version_overrides:\n  - version_constraint: 'semver(\"<= 4.14.1\")'\n    files:\n    - name: migrate\n      src: 'migrate.{{.OS}}-{{.Arch}}'\n")),(0,r.kt)("h2",{id:"supported_if"},(0,r.kt)("inlineCode",{parentName:"h2"},"supported_if")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/438"},"#438")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/439"},"#439")),(0,r.kt)("p",null,"Some packages are available on only the specific environment.\nSome packages are available on only Linux, or some packages don't support Linux ARM64."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"supported_if")," is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,r.kt)("p",null,"If the evaluation result is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", aqua skips installing the package and outputs the debug log.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"supported_if")," isn't set, the package is always installed."),(0,r.kt)("p",null,"The following values and functions are accessible in the expression."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GOOS"),": (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GOARCH"),": (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOARCH"))),(0,r.kt)("p",null,"For example, if the following configuration indicates the package doesn't support macOS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'supported_if: GOOS != "darwin"\n')),(0,r.kt)("h2",{id:"rosetta2"},(0,r.kt)("inlineCode",{parentName:"h2"},"rosetta2")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/442"},"#442")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/444"},"#444")),(0,r.kt)("p",null,"If a package isn't built for apple silicon (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOS=darwin, GOARCH=arm64"),"), you have to install the package built for amd64 (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOS=darwin, GOARCH=amd64"),").\nWith the field ",(0,r.kt)("inlineCode",{parentName:"p"},"rosetta2"),", you don't have to write ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," condition to support such a case.\n",(0,r.kt)("inlineCode",{parentName:"p"},"rosetta2")," must be boolean. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"rosetta2")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"rosetta2")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOS")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"darwin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GOARCH")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"arm64"),", the template variable ",(0,r.kt)("inlineCode",{parentName:"p"},"Arch")," is interpreted as ",(0,r.kt)("inlineCode",{parentName:"p"},"GOARCH=amd64"),"."),(0,r.kt)("p",null,"AS IS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"asset: 'argo-{{.OS}}-{{if eq .GOOS \"darwin\"}}amd64{{else}}{{.Arch}}{{end}}.gz'\n")),(0,r.kt)("p",null,"TO BE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"rosetta2: true\nasset: 'argo-{{.OS}}-{{.Arch}}.gz'\n")),(0,r.kt)("h2",{id:"version_filter"},(0,r.kt)("inlineCode",{parentName:"h2"},"version_filter")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v0.8.13"},"v0.8.13")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"aqua g")," gets the latest version of the package.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"version_filter")," is set, the version which matches with ",(0,r.kt)("inlineCode",{parentName:"p"},"version_filter")," is used.\n",(0,r.kt)("inlineCode",{parentName:"p"},"version_filter")," is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,r.kt)("p",null,"This is used in ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes-sigs/kustomize")," to exclude ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize/releases?q=kyaml&expanded=true"},"releases of kyaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: github_release\n  repo_owner: kubernetes-sigs\n  repo_name: kustomize\n  asset: 'kustomize_{{trimPrefix \"kustomize/\" .Version}}_{{.OS}}_{{.Arch}}.tar.gz'\n  version_filter: 'Version startsWith \"kustomize/\"'\n")),(0,r.kt)("h2",{id:"version_source"},(0,r.kt)("inlineCode",{parentName:"h2"},"version_source")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/811"},"#811")," aqua >= ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.8.0"},"v1.8.0")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua g")," gets the latest version from GitHub Releases.\nBy setting ",(0,r.kt)("inlineCode",{parentName:"p"},"version_source: github_tag"),", aqua gets from GitHub Repository Tag instead of GitHub Releases.\nThis is useful for tools without GitHub Releases."))}c.isMDXComponent=!0}}]);