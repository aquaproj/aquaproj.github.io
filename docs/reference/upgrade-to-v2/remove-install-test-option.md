---
sidebar_position: 800
---

# install: Remove `--test` option and change the default behaviour same as one with `--test` option

[#1691](https://github.com/aquaproj/aqua/issues/1691) [#1694](https://github.com/aquaproj/aqua/pull/1694) 

Remove `--test` option and change the default behaviour same as one with `--test` option.

## Why is the feature needed?

- Make the code simple
- I think the default behaviour should be same as one with `--test` option. `aqua i` should fail if an executable file isn't found
