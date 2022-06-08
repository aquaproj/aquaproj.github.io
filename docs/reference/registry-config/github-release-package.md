---
sidebar_position: 800
---

# `github_release` Package

* `repo_owner`: The repository owner name
* `repo_name`: The repository name
* `asset`: The template string of GitHub Release's asset name
  * e.g. `'lima-{{trimV .Version}}-{{title .OS}}-{{.Arch}}.tar.gz'`
