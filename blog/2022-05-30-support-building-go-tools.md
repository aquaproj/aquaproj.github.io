---
title: "Support building tools with Go"
date: 2022-05-30T09:32:46+09:00
authors:
- suzuki-shunsuke
---

In this post, I describe the feature introduced from aqua [v1.7.0](https://github.com/aquaproj/aqua/releases/tag/v1.7.0).
From v1.7.0, aqua supports building tools with Go when they are installed.

For example, [mitchellh/gox](https://github.com/mitchellh/gox) doesn't provide built binaries, so you have to build it yourself.

https://github.com/mitchellh/gox#installation

> To install Gox, please use go get. We tag versions so feel free to checkout that tag and compile.

So it was difficult for aqua to support gox.

But from v1.7.0, aqua has introduced a new package type named `go` to support these tools.
When packages of the type `go` are installed, GitHub Repository archives (tarball) are downloaded and unarchived, and binaries are built by `go build` command.
To run `go build`, **Go is required**. In my understanding, we can run `go build` safely because any external malicious commands aren't run in `go build`.

## Usage

The usage of `go` type packages are exactly the same as other type packages.

e.g.

```yaml
$ aqua init
$ aqua g -i mitchellh/gox
$ cat aqua.yaml
---
# aqua - Declarative CLI Version Manager
# https://aquaproj.github.io/
registries:
- type: standard
  ref: v2.19.0 # renovate: depName=aquaproj/aqua-registry
packages:
- name: mitchellh/gox@v1.0.1

$ aqua i
INFO[0000] create a symbolic link                        aqua_version=1.9.0 env=darwin/arm64 link_file=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/bin/gox new=aqua-proxy package_name=mitchellh/gox package_version=v1.0.1 program=aqua registry=standard registry_ref=v2.19.0
INFO[0000] download and unarchive the package            aqua_version=1.9.0 env=darwin/arm64 package_name=mitchellh/gox package_version=v1.0.1 program=aqua registry=standard registry_ref=v2.19.0
INFO[0000] building Go tool                              aqua_version=1.9.0 env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go/github.com/mitchellh/gox/v1.0.1/bin/gox file_name=gox go_build_dir=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go/github.com/mitchellh/gox/v1.0.1/src/gox-1.0.1 go_src=. package_name=mitchellh/gox package_version=v1.0.1 program=aqua registry=standard registry_ref=v2.19.0
go: downloading github.com/hashicorp/go-version v1.0.0
go: downloading github.com/mitchellh/iochan v1.0.0
```

Please see the log of `aqua i`. You can confirm that gox is built.

## Benefit

* Support installing tools that no binary is provided
* Pin the tool version
* Change the tool version per project
* Update tools by Renovate

## Specify a commit sha instead of a tag

Some tools aren't tagged properly, or there is too much difference between the latest tag and the latest default branch.
In that case, you can also specify a commit sha as a version instead of a tag.

e.g. aqua.yaml

```yaml
registries:
- type: standard
  ref: v2.19.0
packages:
- name: mitchellh/gox
  version: 8c3b2b9e647dc52457d6ee7b5adcf97e2bafe131 # Specify commit sha
```

## Can we specify `latest` like `go install`?

As you know, `go install` supports specifying `latest`.

e.g.

```console
$ go install github.com/google/wire/cmd/wire@latest
```

On the other hand, aqua doesn't support specifying `latest` because aqua is **CLI Version Manager**.
You must specify the version strictly.

## Example tools supported by package type `go`

In the [release of aqua-registry v2.19.0](https://github.com/aquaproj/aqua-registry/releases/tag/v2.19.0), aqua-registry has supported the following go type packages.

* [golang/tools/gopls](https://github.com/golang/tools/tree/master/gopls): Go language server
* [google/wire](https://github.com/google/wire): Compile-time Dependency Injection for Go
* [katbyte/terrafmt](https://github.com/katbyte/terrafmt): Format terraform blocks embedded in files
* [mitchellh/gox](https://github.com/mitchellh/gox): A dead simple, no frills Go cross compile tool
* [anqiansong/github-compare](https://github.com/anqiansong/github-compare): A Command-line statistics tool to compare the GitHub repositories

## Conclusion

In this post, I've described the feature introduced from aqua [v1.7.0](https://github.com/aquaproj/aqua/releases/tag/v1.7.0).
From v1.7.0, aqua supports building tools with Go when they are installed.
This feature is powerful and changes the management of Go tools that don't provide binaries.

## Reference

* https://github.com/aquaproj/aqua/releases/tag/v1.7.0
* https://github.com/aquaproj/aqua-registry/releases/tag/v2.19.0
* https://github.com/aquaproj/aqua-registry/pull/3713
* https://aquaproj.github.io/docs/registry-config#go-package
* https://zenn.dev/shunsuke_suzuki/scraps/7e8ac509fe39bd (Japanese)
