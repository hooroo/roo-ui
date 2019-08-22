# Contributing to roo-ui

## Contents

- [Setup](#setup)
- [Tools](#tools)
- [Commands](#commands)
- [Adding packages](#adding-new-packages)
- [Adding components](#adding-components)
- [Adding assets](#adding-new-assets)
- [Deployment process](#deployment-process)
- [FAQs](#faqs)

---

## Setup

1. Install the version of [Node.js](https://nodejs.org/en/) specified in `.node-version`.

2. Install [Yarn](https://yarnpkg.com/en/docs/install).

3. After cloning the project, install the dependencies:

   ```sh
   $ yarn
   ```

4. Bootstrap packages, installing their dependencies and linking cross-dependencies:

   ```sh
   $ yarn lerna bootstrap
   ```

## Tools

- Lerna
- Netlify.

## Commands

### General

**Storybook**
Start the development environment.

```
$ yarn storybook
```

**Tests**
Launch the Jest test suite.

```
$ yarn test
```

**Linting**
Run ESLint.

```
$ yarn lint
```

### Lerna

**Build all packages**

```
$ lerna run build
```

**Remove all node_modules**

```
$ lerna exec -- rm -rf ./node_modules
```

### Scaffold a new component

New components can be auto generated using the `new:component` script.

✓ Generate index, component, test, story and README
✓ Add component index to packages/components/src/index.js
✓ Generate nested components

```
$ yarn run new:component MyNewComponent
```

### Previewing changes in your local app

Before publishing a new version of `roo-ui` you may want to preview it in your application.
Both linking and unlinking need to be run in the root directory of `roo-ui`.

_Note_: `styled-components` only supports having one instance of it. We are using a _hack_ to get around this issue by linking it.

**Linking**

This will setup linking between `roo-ui` and your app. Once linked, your app will look at your local version of `roo-ui`.

```
yarn link-app ~/path-to-your-app
```

**Unlinking**

This will remove the linking between `roo-ui` and your app.

```
yarn unlink-app ~/path-to-your-app
```

**Watch mode**

This will watch for changes in `roo-ui` and rebuild the files.

```
yarn run build:watch
```

## Adding packages

New packages can be created by adding a subdirectory under the `packages` directory. The package will be automatically published and a `CHANGELOG.md` will be generated once your branch is merged.

Every package should contain the following:

- **package.json**

  Every package should define at least a `name` (scoped to `@roo-ui`), an initial version number (`0.0.0`), and `publishConfig`:

  ```json
  {
    "name": "@roo-ui/example",
    "version": "0.0.0",
    "license": "MIT",
    "publishConfig": {
      "access": "public"
    }
  }
  ```

- **README.md**

  The README should detail installation, usage, and available properties or arguments:

  ````md
  # Example

  <!-- STORY -->

  ## Installation

  ```
  $ yarn add roo-ui
  ```

  ## Example

  <Usage example>

  ## [Properties|Arguments]

  [Optional description of component properties or function arguments]
  ````

- **story.js** (optional)

  Where appropiate, a Storybook story should be added to demonstrate the component or package. Use [storybook-knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) to allow props to be manipulated, and ensure the README is displayed alongside with story with [storybook-readme](https://github.com/tuchk4/storybook-readme):

  ```js
  import React from 'react';
  import { storiesOf } from '@storybook/react';
  import { withDocs } from 'storybook-readme';
  import { text, boolean } from '@storybook/addon-knobs/react';

  import Example from './src';
  import README from './README.md';

  storiesOf('Example', module)
    .addDecorator(withDocs(README))
    .add('default', () => (
      <Example large={boolean('Large', false)}>
        {text('Children', 'Hello world')}
      </Example>
    ));
  ```

## Adding components

Component packages export one or more React components from a single entry point.

Component packages should define a script to compile the Javascript source with [Babel](http://babeljs.io), a `main` property pointing at the compiled entry point, and should define `react` and `react-dom` as peer dependencies:

```json
{
  "main": "dist/index.js",
  "scripts": {
    "prepublish": "babel src -d dist"
  },
  "peerDependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
  }
}
```

#### Styling

Component packages that require styling should be styled with [styled-components](http://styled-components.com) and [styled-system](https://jxnblk.com/styled-system) which should be added as a peer dependencies:

```json
{
  "peerDependencies": {
    "styled-components": "^3.1.5",
    "styled-system": "^2.2.1"
  }
}
```

Use styled-system to ensure components make full use of theming; allowing easy customization while remaining true to brand guidelines.

### Utility packages

Utility packages contain utility functions, configuration, etc. They export one or many constants or functions from a single entry point.

Utility packages should define a script to compile the Javascript source with [Babel](http://babeljs.io), and a `main` property pointing at the compiled entry point:

```json
{
  "main": "dist/index.js",
  "scripts": {
    "prepublish": "babel src -d dist --copy-files"
  }
}
```

### CSS packages

CSS packages contain only CSS and assets consumed by the CSS (fonts, images, etc.).They expose one or more CSS files in the root of the package.

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

## Adding assets

Right now we don't have any automation setup for optimising assets.
Run svgs through a tool like [SVGO](https://jakearchibald.github.io/svgomg/). It will remove attributes and comments from the file which are not needed.

## Merging and deployment process

### Commit naming

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

### Pull request reviews

Get someone from another team to review the pull request. This gets other teams across the new changes and helps with knowledge sharing.

## Deploying

Once a pull request is merged into master a Buildkite pipeline is triggered. It will deploy the new version of the package to NPM and deploy the latest storybook.

## FAQs

- [What goes into Roo UI?](#what-goes-into-roo-ui)
- [Can I add a new dependency?](can-I-add-a-new-dependency)

### What goes into Roo UI?

Anything that is Qantas styled that could be used by another team. If you are unsure, chat to one of the designers or contributors.

### Can I add a new dependency?

Ideally Roo UI should be unopinionated. This is so we don’t force consumers to install additional peer dependencies.
Try to abstract away the new dependency, so that it logic lives in your consuming app and only the building blocks are in Roo UI.
