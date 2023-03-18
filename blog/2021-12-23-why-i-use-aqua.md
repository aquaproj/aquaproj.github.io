---
title: "Why I use aqua"
date: 2021-12-23T09:32:46+09:00
authors:
- suzuki-shunsuke
---

<head>
  <link rel="canonical" href="https://dev.to/suzukishunsuke/why-i-use-aqua-230" />
</head>

Original Post: https://dev.to/suzukishunsuke/why-i-use-aqua-230

In this post, I describe why I use aqua.

## Why I use aqua

* Align tool versions in team and CI
  * Solve the problem due to the difference of tool versions
* Manage tools and their versions for projects as code declaratively, and provide an unified way to install tools
  * aqua supports changing tool versions per project
* Stop developing shell scripts and GitHub Actions to install tools per tool and per project
* Update tools with Renovate easily
* Install tools hosted in private repositories

## Why not asdf?

asdf is used for the similar purpose, but I use aqua. Why?

* Some tools don't have asdf plugins for them
* Good Experience
  * You don't have to install plugins
  * Tools are installed automatically
  * Search tools by `aqua g` is useful
* aqua doesn't force to use aqua in other projects and globally
* Easy to support new tools
  * It is easier to contribute to aqua-registry than to develop asdf plugin
* Easy to introduce aqua to teams and projects because aqua is easy and doesn't force to use aqua in other projects and globally
* Easy to update tools with Renovate
* aqua supports splitting configuration files, so it is easy to filter builds in CI by changed file paths

About the difference between aqua and asf, please see [Compared with asdf](/docs/#compared-with-asdf) too.
