---
sidebar_position: 450
---

# Declarative vs Imperative

clivm is easy to use. You only have to run `clivm i`.
But why is clivm easy? What's the difference between clivm and other tools?
We believe a declarative tool management is a key concept of clivm.
clivm manages tools declaratively, while some other tools manage imperatively.

For example, the following command is imperative.

```console
$ brew install direnv 
$ brew uninstall direnv 
```

Tools such as Homebrew provide various sub commands to manage tools.
So users have to be able to use them well.

On the other hand, in case of clivm you manage tools with declarative YAML configuration files.
