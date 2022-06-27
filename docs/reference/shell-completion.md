---
sidebar_position: 890
---

# Shell Completion

`clivm >= v1.11.0` [#856](https://github.com/clivm/clivm/issues/856) [#859](https://github.com/clivm/clivm/pull/859)

The commands `clivm completion <SHELL>` outputs shell completion code.
By sourcing the output of `clivm completion <SHELL>` in .bashrc or .zshrc,
clivm supports the shell completion.

.bashrc

```sh
if command -v clivm &> /dev/null; then source <(clivm completion bash); fi
```

.zshrc

```sh
if command -v clivm &> /dev/null; then source <(clivm completion zsh); fi
```

## Bash Completion

```console
$ clivm # Enter <Tab> Key
completion  exec        g           generate    h           help        i           init        install     list        version     which
```

```console
$ clivm i  # Enter <Tab> Key
i        init     install
```

## Zsh Completion

```console
$ clivm # Enter <Tab> Key
completion     -- Output shell completion script for bash or zsh
exec           -- Execute tool
generate    g  -- Search packages in registries and output the configuration interactively
help        h  -- Shows a list of commands or help for one command
init           -- Create a configuration file if it doesn't exist
install     i  -- Install tools
list           -- List packages in Registries
version        -- Show version
which          -- Output the absolute file path of the given command
```

```console
$ clivm i # Enter <Tab> Key
init        -- Create a configuration file if it doesn't exist
install  i  -- Install tools
```

```console
$ clivm i - # Enter <Tab> Key
--all        --help       --only-link  --test       -a           -h           -l
```

