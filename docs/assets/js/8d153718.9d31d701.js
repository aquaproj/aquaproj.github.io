"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[157],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=i,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||r;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5722:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={sidebar_position:300},p="Configuration (registry.yaml)",s={unversionedId:"reference/registry-config",id:"reference/registry-config",isDocsHomePage:!1,title:"Configuration (registry.yaml)",description:"e.g. registry.yaml",source:"@site/docs/reference/registry-config.md",sourceDirName:"reference",slug:"/reference/registry-config",permalink:"/docs/reference/registry-config",editUrl:"https://github.com/aquaproj/aquaproj.github.io/docs/reference/registry-config.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Configuration (aqua.yaml)",permalink:"/docs/reference/config"},next:{title:"Usage",permalink:"/docs/reference/usage"}},m=[{value:"Package types",id:"package-types",children:[],level:2},{value:"Package&#39;s Common attributes",id:"packages-common-attributes",children:[{value:"<code>files</code>",id:"files",children:[],level:3}],level:2},{value:"<code>github_release</code> Package",id:"github_release-package",children:[],level:2},{value:"<code>http</code> Package",id:"http-package",children:[],level:2},{value:"<code>github_content</code> Package",id:"github_content-package",children:[],level:2},{value:"<code>github_content</code> Package",id:"github_content-package-1",children:[],level:2},{value:"<code>replacements</code>, <code>format_overrides</code>",id:"replacements-format_overrides",children:[],level:2},{value:"Default values of <code>github_release</code>, <code>github_content</code>, and <code>github_archive</code> package",id:"default-values-of-github_release-github_content-and-github_archive-package",children:[],level:2},{value:"Template String",id:"template-string",children:[{value:"Common Template Functions",id:"common-template-functions",children:[],level:3},{value:"Template Variables",id:"template-variables",children:[],level:3}],level:2},{value:"<code>version_constraint</code>, <code>version_overrides</code>",id:"version_constraint-version_overrides",children:[{value:"version_overrides",id:"version_overrides",children:[],level:3}],level:2}],u={toc:m};function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-registryyaml"},"Configuration (registry.yaml)"),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml"},"registry.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n# init: a\n- type: github_release\n  repo_owner: accurics\n  repo_name: terrascan\n  asset: 'terrascan_{{trimV .Version}}_{{title .OS}}_{{.Arch}}.tar.gz'\n  link: https://docs.accurics.com/projects/accurics-terrascan/en/latest/\n  description: Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure\n  replacements:\n    amd64: x86_64\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packages"),": The list of packages")),(0,r.kt)("h2",{id:"package-types"},"Package types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github_release-package"},"github_release"),": The package is downloaded from GitHub Releases"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-package"},"http"),": The package is donwloaded from the specified URL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github_content-package"},"github_content"),": The package is downloaded from GitHub Content"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github_archive-package"},"github_archive"),": The package is downloaded from GitHub Archive")),(0,r.kt)("h2",{id:"packages-common-attributes"},"Package's Common attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": (string, required) the package type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"github_release")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": (string) the package name. This is used to specify the package in ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua.yaml"),". name must be unique in the same registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#files"},"files"),": The list of executable files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format"),": The asset format (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"zip"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tar.gz"),"). This is used to unarchive or decompress the asset. If this isn't specified, aqua tries to specify the format from the file extenstion. If the file isn't archived and isn't compressed, please specify ",(0,r.kt)("inlineCode",{parentName:"li"},"raw")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"link"),": URL about the package. This is used for ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description"),": The description about the package. This is used for ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replacements-format_overrides"},"replacements"),": A map which is used to replace some Template Variables like ",(0,r.kt)("inlineCode",{parentName:"li"},"OS")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Arch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replacements-format_overrides"},"format_overrides"),": A list of the pair OS and the asset format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#version_constraint-version_overrides"},"version_constraint"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression. The evaluation result must be a boolean"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#version_constraint-version_overrides"},"version_overrides"))),(0,r.kt)("h3",{id:"files"},(0,r.kt)("inlineCode",{parentName:"h3"},"files")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": the file name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src"),": (default: the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", type: ",(0,r.kt)("inlineCode",{parentName:"li"},"template string"),") the path to the file from the archive file's root.")),(0,r.kt)("h2",{id:"github_release-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"github_release")," Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"asset"),": The template string of GitHub Release's asset name",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"'lima-{{trimV .Version}}-{{title .OS}}-{{.Arch}}.tar.gz'"))))),(0,r.kt)("h2",{id:"http-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"http")," Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),": The template string of URL where the package is downloaded",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"'https://storage.googleapis.com/kubernetes-release/release/{{.Version}}/bin/{{.OS}}/{{.Arch}}/kubectl'"))))),(0,r.kt)("h2",{id:"github_content-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"github_content")," Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": The template string of GitHub Content's file path",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"'foo-{{title .OS}}.sh'"))))),(0,r.kt)("h2",{id:"github_content-package-1"},(0,r.kt)("inlineCode",{parentName:"h2"},"github_content")," Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name")),(0,r.kt)("h2",{id:"replacements-format_overrides"},(0,r.kt)("inlineCode",{parentName:"h2"},"replacements"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"format_overrides")),(0,r.kt)("p",null,"These attributes are inspired to ",(0,r.kt)("a",{parentName:"p",href:"https://goreleaser.com/customization/archive/"},"goreleaser's Archive"),".\nIf the package is released with ",(0,r.kt)("a",{parentName:"p",href:"https://goreleaser.com/"},"goreleaser"),",\nyou may copy and paste ",(0,r.kt)("inlineCode",{parentName:"p"},"replacements")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"format_overrides")," from ",(0,r.kt)("inlineCode",{parentName:"p"},".goreleaser.yaml"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"replacements",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquasecurity/trivy/blob/v0.19.2/goreleaser.yml#L62-L73"},"goreleaser.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/blob/v0.8.0/registry.yaml#L44-L55"},"registry.yaml")))),(0,r.kt)("li",{parentName:"ul"},"format_overrides",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iawia002/annie/blob/v0.11.0/.goreleaser.yml#L51-L54"},".goreleaser.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/blob/v0.8.0/registry.yaml#L361-L364"},"registry.yaml"))))),(0,r.kt)("h2",{id:"default-values-of-github_release-github_content-and-github_archive-package"},"Default values of ",(0,r.kt)("inlineCode",{parentName:"h2"},"github_release"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"github_content"),", and ",(0,r.kt)("inlineCode",{parentName:"h2"},"github_archive")," package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<repo owner>/<repo name>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"link"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/<repo owner>/<repo name>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"files"),": ",(0,r.kt)("inlineCode",{parentName:"li"},'[{"name":"<repo name>"}]'))),(0,r.kt)("p",null,"For example, in case of ",(0,r.kt)("inlineCode",{parentName:"p"},"weaveworks/eksctl")," the following default values are set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: weaveworks/eksctl\nlink: https://github.com/weaveworks/eksctl\nfiles:\n- name: eksctl\n")),(0,r.kt)("h2",{id:"template-string"},"Template String"),(0,r.kt)("p",null,"Some fields are parsed with ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/text/template"},"Go's text/template")," and ",(0,r.kt)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/"},"sprig"),"."),(0,r.kt)("h3",{id:"common-template-functions"},"Common Template Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trimV"),": This is equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},'trimPrefix "v"'))),(0,r.kt)("h3",{id:"template-variables"},"Template Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OS"),": A string which ",(0,r.kt)("inlineCode",{parentName:"li"},"GOOS")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"replacements"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"replacements")," isn't set, ",(0,r.kt)("inlineCode",{parentName:"li"},"OS")," is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"GOOS"),". Basically you should use ",(0,r.kt)("inlineCode",{parentName:"li"},"OS")," for the consistency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Arch"),": A string which ",(0,r.kt)("inlineCode",{parentName:"li"},"GOARCH")," is replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"replacements"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"replacements")," isn't set, ",(0,r.kt)("inlineCode",{parentName:"li"},"Arch")," is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"GOARCH"),". Basically you should use ",(0,r.kt)("inlineCode",{parentName:"li"},"OS")," for the consistency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GOOS"),": Go's ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GOARCH"),": Go's ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOARCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Version"),": Package ",(0,r.kt)("inlineCode",{parentName:"li"},"version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Format"),": Package ",(0,r.kt)("inlineCode",{parentName:"li"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FileName"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"files[].name"))),(0,r.kt)("h2",{id:"version_constraint-version_overrides"},(0,r.kt)("inlineCode",{parentName:"h2"},"version_constraint"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"version_overrides")),(0,r.kt)("p",null,"Some package attributes like ",(0,r.kt)("inlineCode",{parentName:"p"},"asset")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," may be different by it's version.\nFor example, the asset structure of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang-migrate/migrate"},"golang-migrate")," was changed from v4.15.0.\nIn that case, the attributes ",(0,r.kt)("inlineCode",{parentName:"p"},"version_constraint")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"version_overrides")," are useful."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: github_release\n  repo_owner: golang-migrate\n  repo_name: migrate\n  asset: 'migrate.{{.OS}}-{{.Arch}}.tar.gz'\n  description: Database migrations. CLI and Golang library\n  version_constraint: 'semver(\"> 4.14.1\")'\n  version_overrides:\n  - version_constraint: 'semver(\"<= 4.14.1\")'\n    files:\n    - name: migrate\n      src: 'migrate.{{.OS}}-{{.Arch}}'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"version_constraint")," is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,r.kt)("p",null,"Currently, the following values and functions are accessible in the expression."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version"),": (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") The package version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"semver"),": (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"func(string) bool"),") Tests if the package version satisfies all the constraints. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/go-version"},"hashicorp/go-version")," is used")),(0,r.kt)("h3",{id:"version_overrides"},"version_overrides"),(0,r.kt)("p",null,"The list of version override."),(0,r.kt)("p",null,"The following attributes are supported."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_owner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo_name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"asset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replacements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format_overrides"))),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  version_overrides:\n  - version_constraint: 'semver(\"<= 4.14.1\")'\n    files:\n    - name: migrate\n      src: 'migrate.{{.OS}}-{{.Arch}}'\n")))}c.isMDXComponent=!0}}]);