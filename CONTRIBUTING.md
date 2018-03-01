# Contributing to roo-ui

## Setup

1. Install the version of [Node.js](https://nodejs.org/en/) specified in `.nvmrc`.

2. Install [Yarn](https://yarnpkg.com/en/docs/install).

3. After cloning the project, install the dependencies:

    ```sh
    $ yarn
    ```

4. Bootstrap packages, installing their dependencies and linking cross-dependencies:

    ```sh
    $ yarn lerna bootstrap
    ```

## Workflow

Start the development environment ([Storybook](http://storybook.js.org)):

```sh
$ yarn storybook
```

Run tests with [Jest](https://facebook.github.io/jest/):

```sh
$ yarn test
```

Lint code with [ESLint](http://eslint.org):

```sh
$ yarn lint
```

Run a script in each package:

```sh
$ lerna run <script>

# Build all packages
$ lerna run build
```

Run an arbitrary command in each package:

```sh
$ lerna exec -- <command>

# Remove node_modules directories from all packages
$ lerna exec -- rm -rf ./node_modules
```

## Merging

Version bumps and change logs are automatically generated in [Buildkite](https://buildkite.com/hooroo/roo-ui) based on [Conventional Commits](https://conventionalcommits.org). When merging, squash your branch onto `master` and write a commit message while doing so.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

The commit contains the following structural elements:

1. **fix:** a commit of the _type_ `fix` patches a bug in your codebase (this correlates with [`PATCH`](http://semver.org/#summary) in semantic versioning).
2. **feat:** a commit of the _type_ `feat` introduces a new feature to the codebase (this correlates with [`MINOR`](http://semver.org/#summary) in semantic versioning).
3. **BREAKING CHANGE:** a commit that has the text `BREAKING CHANGE:` at the beginning of its optional body or footer section introduces a breaking API change (correlating with [`MAJOR`](http://semver.org/#summary) in semantic versioning). A breaking change can be part of either a `fix:` or `feat:` _type_ commit.

A scope may be provided to a commit's type, to provide additional contextual information and is contained within parenthesis.

For example:

```
feat(logos): add new qantas logo

BREAKING CHANGE: the kangaroo has been replaced with a shrimp
```

Commit _types_ other than `fix:` and `feat:` are allowed:

- **build:** Changes that affect the build system (e.g. Lerna or Babel)
- **ci:** Changes to our CI (Buildkite) configuration files and scripts
- **docs:** Documentation only changes
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **test:** Adding missing tests or correcting existing tests
