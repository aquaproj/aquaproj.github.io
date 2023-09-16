---
sidebar_position: 200
---

# aqua-renovate-config

https://github.com/aquaproj/aqua-renovate-config

[Renovate Config Preset](https://docs.renovatebot.com/config-presets/) to update aqua, aqua-installer, packages, and registries.

[Example](https://github.com/aquaproj/test-aqua-renovate-config)

## Reference about Renovate

* [Renovate documentation](https://docs.renovatebot.com/)
* [Renovate Config Preset](https://docs.renovatebot.com/config-presets/)
  * How to use Preset
  * How to specify preset version and parameter
* [Custom Manager Support using Regex](https://docs.renovatebot.com/modules/manager/regex/)
  * This Preset updates tools with custom regular expression by Renovate Regex Manager

## List of Presets

* [default](https://github.com/aquaproj/aqua-renovate-config/blob/main/default.json)
* [file](https://github.com/aquaproj/aqua-renovate-config/blob/main/file.json)
  * aqua.yaml. `fileMatch` is parameterized
* [installer-script](https://github.com/aquaproj/aqua-renovate-config/blob/main/installer-script.json)
  * the shell script [aquaproj/aqua-installer](https://github.com/aquaproj/aqua-installer). `fileMatch` is parameterized

## How to use

We recommend specifying the Preset version.

* :thumbsup: `"github>aquaproj/aqua-renovate-config#1.5.2"`
* :thumbsdown: `"github>aquaproj/aqua-renovate-config"`

### `default` Preset

```json
{
  "extends": [
    "github>aquaproj/aqua-renovate-config#1.5.2"
  ]
}
```

e.g.

```yaml
registries:
- type: standard
  ref: v3.128.0 # renovate: depName=aquaproj/aqua-registry

packages:
- name: open-policy-agent/conftest@v0.28.3
- name: GoogleCloudPlatform/terraformer/aws@0.8.18
```

The default preset updates GitHub Actions [aquaproj/aqua-installer](https://github.com/aquaproj/aqua-installer)'s `aqua_version` in `.github` too.

```yaml
- uses: aquaproj/aqua-installer@v2.1.2
  with:
    aqua_version: v2.10.1
```

### `file` Preset

You can specify the file path aqua.yaml.
This is especially useful when [you split the list of packages](/docs/guides/split-config).

```json
{
  "extends": [
    "github>aquaproj/aqua-renovate-config:file#1.5.2(aqua/.*\\.ya?ml)"
  ]
}
```

### `installer-script` Preset

The preset `installer-script` updates the shell script aqua-installer and aqua.
You have to pass fileMatch as parameter.

```json
{
  "extends": [
    "github>aquaproj/aqua-renovate-config:installer-script#1.5.2(scripts/.*\\.sh)"
  ]
}
```

```sh
curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.1.2/aqua-installer | bash -s -- -v v2.10.0
```

:warning: To update aqua, please don't add newlines.

:thumbsup:

```sh
curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.1.2/aqua-installer | bash -s -- -v v2.10.0
```

:thumbsdown:

```sh
curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.1.2/aqua-installer |
  bash -s -- -v v2.10.0 # aqua isn't updated
```
