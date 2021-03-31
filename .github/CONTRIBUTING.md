# Contributing to roo-ui

## Contents

- [Setup](#setup)
- [Tools](#tools)
- [Commands](#commands)
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

### Scaffold a new component

New components can be auto generated using the `generate-component` script.

✓ Generate index, component, test, story and README
✓ Add export to components entrypoint
✓ Generate nested components

```
$ yarn run generate-component MyNewComponent
```

## Adding assets

Right now we don't have any automation setup for optimising assets.
Run svgs through a tool like [SVGO](https://jakearchibald.github.io/svgomg/). It will remove attributes and comments from the file which are not needed.

### Icons

Bespoke icons should be added to `src/icons/qantas`.

Icons taken from [Material Design](https://material.io/resources/icons/?style=baseline) should be added to the same category (`src/icons/<category>`) as they appear there.

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

Typically, a roo-ui maintainer should be asked for a review initially. These people include;

- [Angus](https://github.com/angusfretwell) from Team SupX
- [Philip](https://github.com/philipwindeyer) from Team Relationship
- [Eric](https://github.com/eneo5541) from The Bellhops
- [Mike](https://github.com/memcc) from The Bellhops
- [Marcel](https://github.com/Anthropic) from Team Packages
- [Sam](https://github.com/SamuSan) from Team Bookings

If you've requested a review from the maintainers listed above, but haven't received one within **two days**, please extend your review request to other [team members of Qantas Hotels](https://github.com/orgs/hooroo/people).

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
