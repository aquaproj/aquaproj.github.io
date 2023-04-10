---
sidebar_position: 150
---

# aqua-installer

A shell script and GitHub Actions to install aqua

https://github.com/aquaproj/aqua-installer

* [Shell Script](#shell-script)
* [GitHub Actions](#github-actions)

## Shell Script

You can install aqua by the following one liner.

```console
$ curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.1.1/aqua-installer | bash
```

But the one liner is a bit dangerous because aqua-installer may be tampered.
We recommend verifying aqua-installer's checksum before running it.

```sh
curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.1.1/aqua-installer
echo "c2af02bdd15da6794f9c98db40332c804224930212f553a805425441f8331665  aqua-installer" | sha256sum -c
chmod +x aqua-installer
./aqua-installer
```

aqua-installer installs aqua to the following path.

* linux, macOS: `${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin/aqua`
* windows: `${AQUA_ROOT_DIR:-$HOME/AppData/Local/aquaproj-aqua}/bin/aqua`

:warning: From aqua-installer v2, aqua-installer doesn't support specifying the install path.

You can pass the following parameters.

* `-v [aqua version]`: aqua version

e.g.

```console
$ curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.1.1/aqua-installer | bash -s -- -v v1.36.0
```

If the version isn't specified, the latest version would be installed.

## GitHub Actions

e.g.

```yaml
- uses: aquaproj/aqua-installer@v2.1.1
  with:
    aqua_version: v2.3.1
```

```yaml
- uses: aquaproj/aqua-installer@v2.1.1
  with:
    aqua_version: v2.3.1
    working_directory: foo
    aqua_opts: ""
  env:
    AQUA_CONFIG: aqua-config.yaml
    AQUA_LOG_LEVEL: debug
```

### Inputs

Please see [action.yaml](https://github.com/aquaproj/aqua-installer/blob/main/action.yaml) too.

#### Required Inputs

name | description
--- | --- 
aqua_version | Installed aqua version

#### Optional Inputs

:warning: From aqua-installer v2, aqua-installer doesn't support specifying the install path.

name | default | description
--- | --- | ---
enable_aqua_install | `"true"` | if this is `"false"`, executing `aqua i` and updating `GITHUB_PATH` are skipped
aqua_opts | `-l` | `aqua i`'s option. If you want to specify global options, please use environment variables
working_directory | `""` | working directory
policy_allow | `""` | aqua >= `v2.3.0`. If this is `"true"`, `aqua policy allow` command is run. If a Policy file path is set, `aqua policy allow "${{inputs.policy_allow}}"` is run

### Outputs

Please see [action.yaml](https://github.com/aquaproj/aqua-installer/blob/main/action.yaml) too.

Nothing.
