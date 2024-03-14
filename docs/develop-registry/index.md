# Develop Registry

You can install tools registered in the [Standard Registry](/docs/products/aqua-registry) easily.
You can search packages from Registries by `aqua g`.
Please see [Search Packages](/docs/tutorial/search-packages).

If tools aren't found, please [send a pull request to Standard Registry](/docs/products/aqua-registry/contributing).
It is okay only to [create an Issue](https://github.com/aquaproj/aqua-registry/issues) if it is difficult to send a pull request.

If tools are not private Repositories, we recommend sending a pull request to Standard Registry rather than maintaining them in your custom Registries, because

- You can get the support from maintainers
- You don't have to maintain Registry yourself
- [From aqua v2, you have to allow non Standard Registry explicitly for security](/docs/reference/upgrade-guide/v2/only-standard-registry-is-allowed-by-default/), but this is a bit bothersome

If you want to install tools hosted in private repositories with aqua, you have to develop a private registry.
A registry is just a YAML file, so it is easy to develop and distribute it.
About how to write a registry file, please see [here](/docs/reference/registry).

You can use a private registry as a local registry or a github_content registry.

1. [Create a local registry](local-registry.md)
2. Create a github_content registry

## Which registry type should we use, local or github_content registry?

:::note
About registry files, please see [here](/docs/reference/registry).
:::

1. If tools are used only a specific repository, the option 1 may be enough.
You only have to add a registry file to the repository and refer it from aqua.yaml as a local registry.
2. If you want to tools only in your laptop and you don't think sharing your registry with others and using it in CI, the option 1 is enough.
You only have to create a registry file on your laptop and refer it from aqua.yaml.
3. If you want to refer the registry from multiple repositories or distribute tools to others in your organization widely, please create a github_content registry. You only have to add a registry file to your repository and refer it from aqua.yaml as a github_content registry.

## 2. Create a github_content registry



please [create custom Registries](create-private-registry.md).

## Allow private registries by Policy

By default, aqua forbid private registries for a security reason.
This protect you from malicious registries.
So to use private registries, you have to allow them.

About Policy, please see [here](/docs/reference/security/policy-as-code).
