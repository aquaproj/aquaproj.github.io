---
title: "Manage CLI tool version with aqua"
date: 2021-12-04T09:32:46+09:00
authors:
- suzuki-shunsuke
---

<head>
  <link rel="canonical" href="https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5" />
</head>

Original Post: https://medium.com/@suzuki.shunsuke.1989/manage-cli-tool-version-with-aqua-cee38b2c4bf5

In this post, I introduce the CLI tool aqua, which manages CLI tool version with YAML.

When I write this post, the latest version of aqua is v0.8.0.

aqua is a single binary written in Go, so you can install it easily. Unlike other package managers such as Homebrew, aqua manages CLI tools with declarative YAML Configuration files.

## Pin Tool Version

aqua forces to pin tool version, which solves the problem due to the difference of tool version.

## Auto update with Renovate

With Renovate Preset Config for aqua, you can update tools continuously with Renovate.

## Lazy Install

When the tool is invoked, aqua installs the tool automatically. This feature ensures the executed tool version is exactly same as the configuration.

## Change tool version easily

By editing the tool version in the configuration file, you can easily change the tool version. You can try a new version or downgrade the tool easily.

## Change tool version per configuration

You can manage tool version per configuration file. You can install multiple versions in the same machine and switch them per project.

## Manage your tools as dotfiles

By managing your aqua configuration file in Git repository such as your dotfiles, you can manage your tools as code. You can set up your new laptop and use the same tool version in your multiple laptops easily.

## Manage tools for your team and organization

aqua supports not only personal use but also team and organization use. By managing aqua configuration for your team and organization in Git Repository, you can manage tools for your team and organization as code. New joiners can set up their laptops quickly and you can distribute tools easily.

## Manage tools for a repository

By adding aqua configuration file to a repository, you can manage tools for the repository with aqua. aqua manages tool versions declaratively, so you always only have to execute the same command. So new contributors can set up quickly and you can update tools easily. You don’t have to maintain the document about required tools and you don’t have to investigate how to install them.

## Install tools managed in the private GitHub Repositories

aqua supports installing tools from the private GitHub Repositories. It’s useful to distribute your organization’s private tools.

## Use aqua in CI

There are GitHub Actions and CircleCI Orb for aqua, so you can install tools with aqua easily in CI too. You can use the same version in both local development and CI.

By the way, many GitHub Actions install the tool automatically before executing it. It’s very easy to use, but there are some problems.

* Some GitHub Actions don’t force to pin tool versions, which may cause the problem due to the difference of tool version
* When you specify tool version in inputs, you have to update it continuously but it’s not easy
* You can’t install tools in your laptop for local development with GitHub Actions. You have to install tools by the other way
* It’s difficult to unify tool versions in local development and CI

aqua solves the above problems.

* aqua forces to pin tool versions
* With Renovate Preset Config for aqua, you can update tools easily with Renovate
* aqua supports both local development and CI
* You can use the same configuration in both local development and CI, so you can unify tool versions easily

## Registry

Registry is aqua’s mechanism to manage the list of installable tools and how to install them. Registry is a simple YAML. You can write Registry in aqua configuration, or you can read it from other local files and GitHub Repositories. You can manage private Registry in private GitHub Repository.

We maintain the Standard Registry and you can install tools in the Registry easily without writing Registry by your self.

## Conclusion

In this post, I introduced the CLI tool aqua, which manages CLI tool version with YAML. Let’s try Quick Start.
