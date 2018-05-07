![](assets/logo.png)

[![Build status](https://badge.buildkite.com/608d10408e58453caadfdf8baace412e530fefb77614355b37.svg)](https://buildkite.com/hooroo/roo-ui?branch=master)

Hooroo's library of React components and front-end packages

## Installation

Each package and component in roo-ui is available as a package on npm, and can be installed with Yarn or npm:

```sh
$ yarn add @roo-ui/<package-name>
```

To see what packages are available, check out [roo-ui's storybook](http://hooroo.github.io/roo-ui/), or browse [packages](./packages).

### Peer dependencies

Most of roo-ui's components require `react`, `react-dom`, `prop-types`, `styled-components`, `styled-system`, and `polished`.

Install peer dependencies with Yarn or npm:

```sh
$ yarn add react react-dom prop-types styled-components styled-system polished
```

## Setup

### Theme provider

In the root of your app, render a `<ThemeProvider />`, and pass it a theme:

```js
import { ThemeProvider, qantas } from '@roo-ui/themes';

export default (
  <ThemeProvider theme={qantas}>
    <App />
  </ThemeProvider>
);
```

### Fonts

Import the appropriate font for your theme:

```js
import '@roo-ui/fonts/ciutadella.css';
```

### `normalize.css`

Install [`normalize.css`](http://necolas.github.io/normalize.css) and import it to normalize default browser styles:

```sh
yarn add normalize.css
```

```js
import 'normalize.css/normalize.css';
```

### Webpack

Some of roo-ui's components and packages require Webpack loaders to be configured.

#### File loader

Configure [file-loader](https://github.com/webpack-contrib/file-loader) to load images, fonts, etc.:

```js
{
  test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
  use: ['file-loader'],
}
```

Also consider configuring [url-loader](https://github.com/webpack-contrib/url-loader) to inline smaller assets.

#### CSS loader

Configure [style-loader](https://github.com/webpack-contrib/style-loader) and [css-loader](https://github.com/webpack-contrib/css-loader) to load CSS:

```js
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}
```

Also consider configuring [postcss-loader](https://github.com/postcss/postcss-loader) with [autoprefixer](https://github.com/postcss/autoprefixer) if you need vendor prefixes.

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md) for instructions on adding new packages, or improving existing packages.
