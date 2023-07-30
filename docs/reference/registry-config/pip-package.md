---
sidebar_position: 1320
---

# `pip` Package

[#2128](https://github.com/aquaproj/aqua/issues/2128) [#2142](https://github.com/aquaproj/aqua/issues/2142) `aqua >= v2.11.0`

The package is installed by [pip install](https://pip.pypa.io/en/stable/cli/pip_install/) command.

## Requirements

Please install these tools in advance.

- Python https://www.python.org/
- pip: https://pip.pypa.io/en/stable/installation/

This feature depends on versions of Python and pip.
We verified this feature with the following versions.

- Python 3.10.5
- pip 22.2

```console
$ python --version
$ pip --version
```

## Get Started

Let's install [pre-commit](https://pre-commit.com/) by aqua.

```sh
aqua init
```

```sh
aqua g -i pypi.org/pre-commit
```

You can also select the version by `-s` option.

```sh
aqua g -i -s pypi.org/pre-commit
```

```sh
aqua i -l
aqua which pre-commit
pre-commit --version
```

## aqua-renovate-config

From 1.8.0, [aqua-renovate-config](/docs/products/aqua-renovate-config) supports `pip` packages.

:::caution
Package names must be `pypi.org/<pypi package name>`.

e.g. `pypi.org/pre-commit`.
:::


## Add new pip packages to Standard Registry

Please send a pull request to https://github.com/aquaproj/aqua-registry .
Package names must be `pypi.org/<pypi package name>`.

e.g. `pypi.org/pre-commit`.

## How does it work?

:::caution
This includes details of the internal implementation, which may be changed without notice.
:::

`pip` packages are installed in `<AQUA_ROOT_DIR>/pkgs/pip/pypi.org/<pypi package name>/<version>`,
and executable files are installed in `<AQUA_ROOT_DIR>/pkgs/pip/pypi.org/<pypi package name>/<version>/bin/<command>`.

aqua internally runs `pip install` commands.

```sh
pip install --target "<AQUA_ROOT_DIR>/pkgs/pip/pypi.org/<pypi package name>/<version>" "<pypi package>"
```

`aqua g -s` gets the list of pypi package versions from the endpoint `https://pypi.org/pypi/<pypi package name>/json`.

## Registry

e.g.

```yaml
packages:
  - type: pip
    pip_name: pre-commit
```

`type` must be `pip`. `pip_name` is required. Other fields are optional.
The above setting is equivalent to the following setting.

```yaml
packages:
  - name: pypi.org/pre-commit
    type: pip
    pip_name: pre-commit
    files:
      - name: pre-commit
```

`pip` packages don't support the following fields.

- format, format_overrides
- checksum
- slsa_provenance
- cosign

## Limitation

Private packages aren't supported
