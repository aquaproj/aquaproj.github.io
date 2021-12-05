---
sidebar_position: 450
---

# Declarative vs Imperative

aqua is easy to use. You only have to run `aqua i`.
But why is aqua easy? What's the difference between aqua and other tools?
We believe a declarative tool management is a key concept of aqua.
aqua manages tools declaratively, while some other tools manage imperatively.

For example, the following command is imperative.

```console
$ brew install direnv 
$ brew uninstall direnv 
```

Tools such as Homebrew provide various sub commands to manage tools.
So users have to be able to use them well.

On the other hand, in case of aqua you manage tools with declarative YAML configuration files.
