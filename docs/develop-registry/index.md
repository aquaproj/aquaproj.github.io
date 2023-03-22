# Develop Registry

You can install tools registered in the [Standard Registry](/docs/products/aqua-registry) easily.

You can search packages from Registries by `aqua g`.
Please see [Search Packages](/docs/tutorial/search-packages).

If tools aren't found, please [send a pull request to Standard Registry](/docs/products/aqua-registry/contributing). It is okay only to [create an Issue](https://github.com/aquaproj/aqua-registry/issues) if it is difficult to send a pull request. If tools are hosted in private repositories, please [create custom Registries](create-private-registry.md).

If tools are not private Repositories, we recommend sending a pull request to Standard Registry rather than maintaining them in your custom Registries, because

- You can get the support from maintainers
- You don't have to maintain Registry yourself
- [From aqua v2, you have to allow non Standard Registry explicitly for security](/docs/reference/upgrade-guide/v2/only-standard-registry-is-allowed-by-default/), but this is a bit bothersome
