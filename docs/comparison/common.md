---
sidebar_position: 50
---

# Common Pros and Cons

## Pros

* aqua supports changing tool versions per project
* aqua forces to pin tool version, which solves the problem due to the different of version
* It is easy to use aqua
  * [aqua manages tools declaratively](/docs/reference/declarative-imperative)
    * aqua's command is always `aqua i [-l]`. You don't have to specify tool names. It's user friendly
* aqua provides Renovate Preset Config
* aqua provides GitHub Actions and CircleCI Orb
* aqua supports Lazy Install
* aqua supports installing tools from the private repositories
* aqua supports Windows, macOS, and Linux
* aqua supports [Checksum Verification](/docs/reference/checksum)

:::info
From aqua v1.12.0, aqua supports Windows.
Please see [Windows Support](/docs/reference/windows-support) too.
:::

## Cons

* [aqua doesn't support running any external commands to install tools](#aqua-doesnt-support-running-any-external-commands-to-install-tools)
* [aqua doesn't support some Language Runtime such as Python, Ruby, Node.js, and so on](#aqua-doesnt-support-some-language-runtime-such-as-python-ruby-nodejs-and-so-on)
* [aqua doesn't install dependencies](#aqua-doesnt-install-dependencies)

### aqua doesn't support running any external commands to install tools

aqua's install process is very simple.

1. Download tool
1. Unarchive tool in $AQUA_ROOT_DIR

aqua doesn't support running commands after unarchiving.
So aqua doesn't support installing tools which some commands are required.

This is not necessarily a draw back.

https://github.com/aquaproj/aqua-registry/issues/987#issuecomment-1104422712

> You may think it's inconvenient, but we think this design is important to keep aqua simple, secure, less dependency, and maintainable.
> 
> aqua doesn't need any dependency.
> aqua doesn't run external commands.
> aqua doesn't change files outside install directory.
> 
> So the trouble shooting is relatively easy.
> Otherwise, user support would be very hard.

:::info
aqua supports building Go tools.
Please see [`go` Package](/docs/reference/registry-config/go-package), [`go_install` Package](http://localhost:3000/docs/reference/registry-config/go-install-package), and [blog post](/blog/2022/05/30/support-building-go-tools).
:::

### aqua doesn't support some language runtime such as Python, Ruby, Node.js, and so on

Due to the above restriction, aqua doesn't support some language runtime such as Python, Ruby, Node.js, and so on.
So if you want to install them, please use other tools such as pyenv, rbenv, nvm, asdf, and so on.

You can use aqua and these tools together.

### aqua doesn't install dependencies

Some package managers such as Homebrew installs dependencies automatically.
On the other hand, aqua doesn't manage dependencies.

This is not necessarily a draw back.
You can install dependent tools freely.
Sometimes this behavior is desirable.
