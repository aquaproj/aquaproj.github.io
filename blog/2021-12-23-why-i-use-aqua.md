---
title: "Why I use clivm"
date: 2021-12-23T09:32:46+09:00
authors:
- suzuki-shunsuke
---

<head>
  <link rel="canonical" href="https://dev.to/suzukishunsuke/why-i-use-clivm-230" />
</head>

Original Post: https://dev.to/suzukishunsuke/why-i-use-clivm-230

In this post, I describe why I use clivm.

## Why I use clivm

* Align tool versions in team and CI
  * Solve the problem due to the difference of tool versions
* Manage tools and their versions for projects as code declaratively, and provide an unified way to install tools
  * clivm supports changing tool versions per project
* Stop developing shell scripts and GitHub Actions to install tools per tool and per project
* Update tools with Renovate easily
* Install tools hosted in private repositories

## Why not asdf?

asdf is used for the similar purpose, but I use clivm. Why?

* Some tools don't have asdf plugins for them
* Good Experience
  * You don't have to install plugins
  * Tools are installed automatically
  * Search tools by `clivm g` is useful
* clivm doesn't force to use clivm in other projects and globally
* Easy to support new tools
  * It is easier to contribute to clivm-registry than to develop asdf plugin
* Easy to introduce clivm to teams and projects because clivm is easy and doesn't force to use clivm in other projects and globally
* Easy to update tools with Renovate
* clivm supports splitting configuration files, so it is easy to filter builds in CI by changed file paths

About the difference between clivm and asf, please see [Comparison - asdf](/docs/comparison/asdf) too.
