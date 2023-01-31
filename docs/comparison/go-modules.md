---
sidebar_position: 750
---

# Go Modules

- https://github.com/golang/go/wiki/Modules#how-can-i-track-tool-dependencies-for-a-module
- https://github.com/go-modules-by-example/index/blob/master/010_tools/README.md
- https://github.com/golang/go/issues/25922

In Go community, managing tools as Go Modules is a widely used approach.
For detail, please see above links.

## Pros

* aqua supports changing tool versions per project
* aqua supports not only Go but also various tools
* aqua provides the interactive search UI
* aqua assures tool versions
* aqua supports Lazy Install

## Cons

* aqua can't install a tool if the tool isn't supported by Registries
