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

```bash
curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.0.1/aqua-installer | bash
```

But the one liner is a bit dangerous because aqua-installer may be tampered.
We recommend verifying aqua-installer's checksum before running it.

```bash
curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.0.1/aqua-installer
echo "fb4b3b7d026e5aba1fc478c268e8fbd653e01404c8a8c6284fdba88ae62eda6a  aqua-installer" | sha256sum -c
chmod +x aqua-installer
./aqua-installer
```

aqua-installer installs aqua to the following path.

* linux, macOS: `${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin/aqua`
* windows: `${AQUA_ROOT_DIR:-$HOME/AppData/Local/aquaproj-aqua}/bin/aqua`

:::caution
From aqua-installer v2, aqua-installer doesn't support specifying the install path.
:::

You can pass the following parameters.

* `-v [aqua version]`: aqua version

e.g.

```bash
curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.0.1/aqua-installer | bash -s -- -v v2.28.0
```

If the version isn't specified, the latest version would be installed.

## GitHub Actions

e.g.

```yaml
- uses: aquaproj/aqua-installer@v3.0.1
  with:
    aqua_version: v2.28.0
```

```yaml
- uses: aquaproj/aqua-installer@v3.0.1
  with:
    aqua_version: v2.28.0
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

### :bulb: Caching

[#428](https://github.com/aquaproj/aqua-installer/issues/428)

aqua-installer doesn't support caching, but you can cache packages and registries using `actions/cache`.

e.g.

```yaml
- uses: actions/cache@v3.3.1
  with:
    path: ~/.local/share/aquaproj-aqua
    key: v1-aqua-installer-${{runner.os}}-${{runner.arch}}-${{hashFiles('aqua.yaml')}}
    restore-keys: |
      v1-aqua-installer-${{runner.os}}-${{runner.arch}}-
- uses: aquaproj/aqua-installer@v3.0.1
  with:
    aqua_version: v2.28.0
```

Please fix `actions/cache`'s parameters properly.
If you [split `aqua.yaml` using import](/docs/guides/split-config) or use local Registries, you may have to add hashes of them to key and restore-keys.

e.g.

```yaml
- uses: actions/cache@v3.3.1
  with:
    path: ~/.local/share/aquaproj-aqua
    key: v1-aqua-installer-${{runner.os}}-${{runner.arch}}-${{hashFiles('.aqua/*.yaml')}} # Change key
    restore-keys: |
      v1-aqua-installer-${{runner.os}}-${{runner.arch}}-
```

aqua-installer runs aqua with [-l](https://aquaproj.github.io/docs/tutorial/install-only-link) option by default, so packages that aren't run in the workflow aren't cached.
If you want to cache all packages, please set `aqua_opts` to unset `-l` option.

```yaml
- uses: aquaproj/aqua-installer@v3.0.1
  with:
    aqua_version: v2.28.0
    aqua_opts: "" # Unset `-l` option
```

But if `-l` is unset, aqua installs packages that aren't run in the workflow uselessly.

So it is up to you that whether and how you cache packages.
