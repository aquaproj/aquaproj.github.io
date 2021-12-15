---
sidebar_position: 500
---

# Use aqua combined with other version manager such as asdf

If you use aqua combined with other version manager such as asdf,
you should add `~/.aqua/bin` to the environment variable `PATH` after other version manager.

e.g.

:thumbsup:

```bash
. $HOME/.asdf/asdf.sh

export PATH=$HOME/.aqua/bin:$PATH
```

:thumbsdown:

```bash
export PATH=$HOME/.aqua/bin:$PATH

. $HOME/.asdf/asdf.sh
```

This isn't a problem of aqua.
aqua is designed to allow to use aqua combined with other version managers, but many other version manager aren't.

Please assume the following usecase.
You develop the project A and B.
In the project A Node.js is managed with asdf, and in the project B Node.js is managed with aqua.

```
project-a/
  .tool-versions # Manage Node.js with asdf
project-b/
  aqua.yaml # Manage Node.js with aqua
```

project-a/.tool-versions

```
nodejs 17.2.0
```

project-b/aqua.yaml

```yaml
registries:
- type: standard
  ref: v0.11.4 # renovate: depName=aquaproj/aqua-registry

packages:
- name: nodejs/node@v17.1.0
```

If you configure .bash_profile as the following,
you can manage Node.js with asdf in the project A, but you can't manage Node.js with aqua in the project B.

```bash
export PATH=$HOME/.aqua/bin:$PATH

. $HOME/.asdf/asdf.sh
```

```console
$ cd project-b
$ node --version
No version is set for command node
Consider adding one of the following versions in your config file at 
nodejs 17.2.0
```

This is because asdf is used in the project-b too.

On the other hand, if you configure .bash_profile as the following,
you can manage Node.js with asdf in the project A, and manage Node.js with aqua in the project B.

```bash
. $HOME/.asdf/asdf.sh

export PATH=$HOME/.aqua/bin:$PATH
```

```console
$ cd project-a
$ node --version
v17.2.0

$ cd ../project-b
$ node --version
v17.1.0
```

This is because if aqua can't find the command in the configuration files aqua finds the command from the environment variable `PATH`.
