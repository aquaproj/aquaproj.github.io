---
sidebar_position: 700
---

# Build Container (Docker) Image

When building a container (Docker) image, you may want to download and install tools from GitHub Releases or other sources.
In particular, if you run CI with CircleCI or Google Cloud Build, you may want to install tools for CI on the image.

Traditionally, you would use curl, tar, unzip, etc. to install these tools, but with aqua, you can declaratively manage them.
You don't have to look up download URLs, formats, etc. yourself.
You can also use Renovate to automate updates.

aqua.yaml

```yaml
---
# aqua - Declarative CLI Version Manager
# https://aquaproj.github.io/
registries:
- type: standard
  ref: v3.19.0 # renovate: depName=aquaproj/aqua-registry
packages:
- name: rhysd/actionlint@v1.6.15
- name: golangci/golangci-lint@v1.47.2
- name: reviewdog/reviewdog@v0.14.1
```

Dockerfile

```dockerfile
FROM alpine:3.16
RUN apk add curl
RUN curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v1.1.0/aqua-installer | sh -s -- -i /usr/local/bin/aqua -v v1.18.0
COPY aqua.yaml /aqua.yaml
RUN aqua -c /aqua.yaml i
ENV AQUA_GLOBAL_CONFIG=/aqua.yaml
ENV PATH=/root/.local/share/aquaproj-aqua/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

## Remove aqua from Image

aqua >= [v1.18.0](https://github.com/aquaproj/aqua/releases/tag/v1.18.0)

In the above Docker image, aqua is installed and used internally to execute tools.
However, if you do not want to install anything extra in the Docker image, if you want to keep the image minimal, or if you do not want to switch tool versions with aqua,
you can also remove aqua using the Multistage Build and `aqua cp` command.

Dockerfile

```dockerfile
FROM alpine:3.16 AS aqua
RUN apk add curl
RUN curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v1.1.0/aqua-installer | sh -s -- -i /usr/local/bin/aqua -v v1.18.0
COPY aqua.yaml /aqua.yaml
RUN aqua -c /aqua.yaml cp -o /dist actionlint reviewdog

FROM alpine:3.16.1
RUN apk --no-cache add ca-certificates
COPY --from=aqua /dist/* /usr/local/bin/
```

`aqua cp` installs specified tools and copies executable files to the specified directory.
In the above example, actionlint and reviewdog are installed and copied under /dist.
Only executable files are installed in the final image.

## Notes of `aqua cp`

There is a caveat to `aqua cp`.
`aqua cp` copies only executable files from packages.
Therefore, tools that do not work with a single file will not work properly even if they are copied by `aqua cp`.
If the tool is a single binary written in Go, there is basically no problem, but if it is a shell script depending on another files in the same repository, it will not work properly.

For example, tfenv will not work correctly even if you copy it by `aqua cp`.
You need to install those tools in a different way.
