---
sidebar_position: 460
---

# Python Support

You can manage Python using aqua.

`aqua >= v2.31.0`
`aqua-registry >= v4.218.0`

- [#3052](https://github.com/aquaproj/aqua/pull/3052)
- [aqua-registry#1138](https://github.com/aquaproj/aqua-registry/issues/1138)

## Set up

1. Update aqua to v2.31.0 or later
1. Update aqua-registry to v4.218.0 or later
1. Install the package `indygreg/python-build-standalone`
1. Set `vars.python_version` parameter in aqua.yaml

### 2. Update aqua-registry to v4.218.0 or later

```sh
aqua up -r
```

```yaml
registries:
  - type: standard
    ref: v4.218.0 # renovate: depName=aquaproj/aqua-registry
```

### 3. Install the package `indygreg/python-build-standalone`

```sh
aqua g -i indygreg/python-build-standalone
aqua i -l
```

### 4. Set `vars.python_version` parameter in aqua.yaml

```yaml
- name: indygreg/python-build-standalone@20240726
  vars:
    python_version: 3.10.14
```

Then you can execute python and pip.

```sh
python -V
pip -V
```

## How to execute tools installed by `pip install`

If you install command-line tools by `pip install`, you wouldn't be able to execute them.

```console
$ pip install mkdocs
$ which mkdocs
```

This is because tools are installed in the same directory with `pip`, but the directory isn't included in the environment variable `$PATH`.

```console
$ ls "$(dirname "$(aqua which python)")"
```

There are several ways to resolve this issue.

1. Execute tools via `python -m <tool name>`
1. Manage Python packages using tools such as `venv`

### 1. Execute tools via `python -m <tool name>`

e.g.

```sh
python -m mkdocs
```

### 2. Manage Python packages using tools such as `venv`

There are various tools managing Python packages.

- [virtualenv](https://virtualenv.pypa.io/en/latest/)
- [venv](https://docs.python.org/3/library/venv.html)
- [poetry](https://github.com/python-poetry/poetry)
- [pipx](https://github.com/pypa/pipx)
- etc

You can manage Python itself using aqua and manage Python packages using these tools.

e.g. venv

```sh
python -m venv foo # Create a virtual environment
. foo/bin/activate
pip install mkdocs
mkdocs -v
```

## Update Python by Renovate

[aqua-renovate-config#634](https://github.com/aquaproj/aqua-renovate-config/pull/634)

Please update aqua-renovate-config to 2.4.0 or later.

```json
{
  "extends": [
    "github>aquaproj/aqua-renovate-config#2.4.0"
  ]
}
```

Then `python_version` is updated by Renovate.

e.g. https://github.com/suzuki-shunsuke/test-renovate/pull/274
