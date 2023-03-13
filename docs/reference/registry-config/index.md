---
sidebar_position: 100
---

# Registry Configuration

e.g. [registry.yaml](https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml)

```yaml
packages:
# init: a
- type: github_release
  repo_owner: accurics
  repo_name: terrascan
  asset: 'terrascan_{{trimV .Version}}_{{title .OS}}_{{.Arch}}.tar.gz'
  link: https://docs.accurics.com/projects/accurics-terrascan/en/latest/
  description: Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure
  replacements:
    amd64: x86_64
```

* `packages`: The list of packages

## JSON Schema

* https://github.com/aquaproj/aqua/tree/main/json-schema
* https://github.com/aquaproj/aqua/blob/main/json-schema/registry.json
* https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/registry.json

## Package types

* [github_archive](github-archive-package.md): The package is downloaded from GitHub Archive
* [github_content](github-content-package.md): The package is downloaded from GitHub Content
* [github_release](github-release-package.md): The package is downloaded from GitHub Releases
* [go](go-package.md): The package is downloaded from GitHub Archive and is built by `go build` command
* [go_install](go-install-package.md): The package is installed by `go install` command
* [http](http-package.md): The package is downloaded from the specified URL

## Common attributes

* `type`: (string, required) the package type
* `name`: (string) the package name. This is used to specify the package in `aqua.yaml`. name must be unique in the same registry
* [search_words](search-words.md)
* [aliases](aliases.md): Aliases of the package
* [files](files.md): The list of executable files
* `format`: The asset format (e.g. `zip`, `tar.gz`). This is used to unarchive or decompress the asset. If this isn't specified, aqua tries to specify the format from the file extension. If the file isn't archived and isn't compressed, please specify `raw`
* `link`: URL about the package. This is used for `aqua g`
* `description`: The description about the package. This is used for `aqua g`
* [replacements](replacements.md): A map which is used to replace some Template Variables like `OS` and `Arch`
* [format_overrides](format-overrides.md): A list of the pair OS and the asset format
* [overrides](overrides.md)
* [version_constraint](version-overrides.md): [expr](https://github.com/antonmedv/expr)'s expression. The evaluation result must be a boolean
* [version_overrides](version-overrides.md)
* [supported_if](supported-if.md)
* [supported_envs](supported-envs.md)
* [rosetta2](rosetta2.md)
* [version_filter](version-filter.md)
* [version_source](version-source.md)
* [complete_windows_ext](complete-windows-ext.md)
* [checksum](/docs/reference/security/checksum)
* [cosign](cosign.md)
* [slsa_provenance](slsa-provenance.md)
* [private](private.md)
* [no_asset](no_asset.md)
* [error_message](error_message.md)

## Default values if `repo_owner` and `repo_name` are set

* `name`: `<repo owner>/<repo name>`
* `link`: `https://github.com/<repo owner>/<repo name>`
* `files`: `[{"name":"<repo name>"}]`

For example, in case of `weaveworks/eksctl` the following default values are set.

```yaml
name: weaveworks/eksctl
link: https://github.com/weaveworks/eksctl
files:
- name: eksctl
```
