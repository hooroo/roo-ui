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

## Creating new packages

New packages can be created by adding a subdirectory under `components` or `packages`.

Every package should contain the following:

- **package.json**

  Every package should define at least a `name` (scoped to `@roo-ui`), an initial version number (`0.0.0`), and `publishConfig`:

  ```json
  {
    "name": "@roo-ui/example",
    "version": "0.0.0",
    "publishConfig": {
      "access": "public"
    }
  }
  ```

- **README.md**

  The README should detail installation, usage, and available properties or arguments.

  ```md
  # Example

  <!-- STORY -->

  ## Installation

  \`\`\`
  $ yarn add @roo-ui/example
  \`\`\`

  ## Example

  <Usage example>

  ## [Properties|Arguments]

  [Optional description of component properties or function arguments]
  ```

- **story.js** (optional)

The package will be automatically published, and a `CHANGELOG.md` generated, in [Buildkite](https://buildkite.com/hooroo/roo-ui).

### React component packages

React component packages

#### Styling

TODO

### Utility packages

Utility packages contain utility functions, configuration, etc. They are housed in the `packages` directory, and export one or many constants or functions from a single entry point.

Utility packages should define a script to compile the Javascript source with [Babel](http://babeljs.io), and a `main` property pointing at the compiled entry point:

```json
{
  "main": "dist/index.js",
  "scripts": {
    "build": "babel src -d dist --copy-files"
  }
}
```

### CSS packages

CSS packages contain only CSS and assets consumed by the CSS (fonts, images, etc.). They are housed in the `packages` directory, and expose one or more CSS files in the root of the package.

For packages that expose a single CSS file, define the file as the `main` property in `package.json`:

```json
{
  "name": "@roo-ui/example",
  "main": "index.css"
}
```

The CSS file can be imported with the package name:

```js
import '@roo-ui/example';
```

Omit the `main` property for packages exposing multiple CSS files. The CSS files can be imported with the package name, and path to the file:

```js
import '@roo-ui/example/specificFile.css';
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
