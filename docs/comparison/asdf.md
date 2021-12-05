---
sidebar_position: 500
---

# asdf

https://asdf-vm.com/

## Pros

* aqua is a single binary written in Go. aqua doesn't depend on the specific shell
* aqua provides Renovate Preset Config
* aqua provides CircleCI Orb
* The learning cost of aqua is lower than asdf
  * asdf has various sub commands
  * These commands are imperative. On the other hand, aqua is declarative
* When the specified version isn't installed yet, aqua automatically installs it. On the other hand, asdf fails
* Adding packages to aqua's Registry is simpler than creating asdf's plugins
* aqua supports additional features
  * [Share aqua configuration for teams and organizations](/docs/tutorial-extras/team-config)
  * [Split the list of packages](/docs/tutorial-extras/split-config)

## Cons

* asdf has a support for existing config files .nvmrc, .node-versions, .ruby-version for smooth migration

## Others

aqua's existing Registries and asdf's existing plugins support different tools each other.
For example, aqua doesn't support Ruby so if you want to manage Ruby you should use asdf or something.
