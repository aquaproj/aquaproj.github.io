---
sidebar_position: 1960
---

# complete_windows_exe

aqua >= v1.12.0

Many Windows executable files have the suffix `.exe`, so aqua completes the suffix automatically.

aqua completes the suffix `.exe` to the following attributes.

* asset
* url
* files.src

If the file is compressed or archived, `.exe` isn't completed.
And if the package type is `github_content` or `github_archive`, `.exe` isn't completed.

Using the attribute `complete_windows_exe`, you can specify if `.exe` is completed.

### Example

```yaml
    files:
      - name: gh
        src: bin/gh # bin/gh.exe
```

```yaml
    complete_windows_exe: false # disable completion
    files:
      - name: gh
        src: bin/gh # bin/gh
```

```yaml
    format: raw
    asset: "aws-vault-{{.OS}}-{{.Arch}}" # aws-vault-{{.OS}}-{{.Arch}}.exe
```

```yaml
    url: "https://storage.googleapis.com/container-diff/{{.Version}}/container-diff-{{.OS}}-amd64" # .exe is completed
    files:
      - name: container-diff
        src: "container-diff-{{.OS}}-amd64" # container-diff-{{.OS}}-amd64.exe
```

