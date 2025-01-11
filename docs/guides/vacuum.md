---
sidebar_position: 500
---

# Vacumm (Auto clean expired packages)

aqua >= [v2.43.0](https://github.com/aquaproj/aqua/releases/tag/v2.43.0)

Vacuum is a managed mode of aqua which permits the removal of packages not used for a specified time.

## To enable it

Vacuum is disabled by default. To enable it, you need to set the `AQUA_VACUUM_DAYS` environment variable to an integer greater than 0, which represents the number of days a package should not be used to be considered as unused.

:::caution
If you want to use this feature, we recommend setting this variable in a way that you use it with each aqua command. (~/.bashrc, ~/.zshrc, ~/.rc.d, etc.)
:::

## Workflow

When vacuum is enabled, each time a command like `aqua install` or `aqua exec` (or any command executed through aqua) is executed, aqua will add (or update) an entry in a bbolt database with corresponding information and a timestamp of the last usage.

When `aqua vacuum run` is executed, aqua will check all entries in the database and remove packages that have not been used for more than `AQUA_VACUUM_DAYS` days.

Every expired package will be removed from the `pkgs` directory and from the database.

## Commands

```console
$ aqua vacuum show [--expired] # List all packages managed by vacuum [--expired show only expired packages]
```

```console
$ aqua vacuum run # Run the vacuum process
```

## Limitation

:::caution
Every package installed before the activation of vacuum will not be managed by vacuum. So to start with a clean process, we recommend launching aqua rm --all the first time.
:::
