![](assets/logo.png)

[![Build status](https://badge.buildkite.com/608d10408e58453caadfdf8baace412e530fefb77614355b37.svg?branch=master)](https://buildkite.com/hooroo/roo-ui?branch=master)

Qantas Hotels library of accessible React components and assets.

To see what’s available, check out roo-ui's [storybook](https://hooroo.github.io/roo-ui), or [browse packages](https://github.com/hooroo/roo-ui/tree/master/packages).
If you want to jump and and play around with the project check out [roo ui playground](https://github.com/hooroo/roo-ui-playground), It’s setup so you can start using it straight away.


## Contents

- [About the project](#about-the-project)
- [Installation](#installation)
- [FAQ’s](#faqs)
- [Helpful resources](#helpful-resources)
- [Contributing](#contributing)

---

## About the project
Roo-ui is built with [styled components](https://www.styled-components.com/) which is a CSS in JS library. We use [styled system](https://jxnblk.com/styled-system/) which allows us to pass props which style components. These props reference uses values fron our [global theme file](https://github.com/hooroo/roo-ui/blob/master/packages/themes/src/qantas.js). Alongside these tools we use [Polished](https://github.com/styled-components/polished) for CSS helper functions.

With styled components sometimes unwanted props make there way through to the DOM. React will throw a warning asking if you meant to add this attribute. To get around this we are using [clean tag](https://github.com/jxnblk/styled-system/tree/master/clean-tag). Using clean tag we can define a `blackList` prop on components which prevents props from making there way to the DOM.


**Supported devices**

We support the latest two versions of modern web browsers and IE11+.

**Accessibility**

Being under the Qantas umbrella we are required to meet AA compliance.

## Installation

Each package and component in roo-ui is available as a package on npm, and can be installed with Yarn or npm:

```sh
$ yarn add @roo-ui/<package-name>
```

To see what packages are available, check out [roo-ui's storybook](http://hooroo.github.io/roo-ui/), or browse [packages](./packages).

### Peer dependencies
While we aim to keep the library unopinionated there are a few peer dependencies which are required.

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

### Thememing
To have consistent styles between our apps we should aim to use the default theme styles.

You can override theme values by importing the roo-ui theme and using a tool like Lodash’s [merge](https://lodash.com/docs/4.17.10#merge) to combine it with your own theme object.


### Fonts

Import the appropriate font for your theme:

```js
import '@roo-ui/fonts/ciutadella.css';
```

### CSS reset
We recommend using [Normalize](http://necolas.github.io/normalize.css/).


Install [`normalize.css`](http://necolas.github.io/normalize.css) and import it to normalize default browser styles:

```sh
yarn add normalize.css
```

```js
import 'normalize.css/normalize.css';
```

### Bundler requirements
If your project is setup with Create React App you can skip this step. For Webpack you'll need to setup [file loader](https://github.com/webpack-contrib/file-loader), [style loader](https://github.com/webpack-contrib/style-loader) and [CSS loader](https://github.com/webpack-contrib/css-loader).


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

## FAQ’s

- [How do I do layout in this new world?](#how-do-I-do-layout–in-this-new-world?)
- [How do I do responsive styles?](#how-do-I-do-responsive-styles?)
- [How do I change the font size?](#how-do-I-change-the-font-size?)
- [How do I add spacing to elements?](#how-do-I-add-spacing-to-elements?)
- [What’s a good example?](#whats-a-good-example?)
- [How do I use the theme?](#how-do-I-use-the-theme?)
- [How can I get help?](#how-can-I-get-help?)
- [Can I contribute?](#can-I-contribute)

#### How do I do layout in this new world?
You’ll most likely need to use these three components: `Container`, `Box` and `Flex`.
`Container` will define your widths, use `Box` the same way you would `div` and think of `Flex` as a `div` with `display: flex` on it.

#### How do I do responsive styles?
In your app you can use media queries as you would of in the past.
We also provide a [Hide](https://github.com/hooroo/roo-ui/blob/master/packages/components/src/Hide/Hide.js) component which you can wrap around components you would like to hide. It accepts props to hide its children at different screen sizes.

#### How do I change the font size?
In the theme you’ll see text styles defined. With styled system you can add textStyle prop to with the key as the value to text components such as `Text` and `Paragraph`.

`<Paragraph textStyle=”caps”>Hello world.</Paragraph/>`

#### How do I add spacing to elements?
The theme is setup to use a 4px grid under the `space` key. Where `space.0` is `0px` and `space.1` is `4px`. A easy way to work out the number you need is to take it and divide it by 4.

#### What’s a good usage example?
[Star rating](https://github.com/hooroo/roo-ui/blob/master/packages/components/src/StarRating/StarRating.js),  [Modal](https://github.com/hooroo/roo-ui/tree/master/packages/components/src/Modal) and [DatePicker](https://github.com/hooroo/roo-ui/tree/master/packages/components/src/DatePicker) are good examples of composing components together.

#### How do I use the theme?
Depending on what you are trying to do you can access the theme in three ways.

When you are wanting to tweak a component, you can pass through props that are defined via the Styled System API.

If you writing CSS in JS and want to access theme values you can use styled systems `themeGet`. It allows you to get values out of the theme. The only caveat is that it has to be a value from the styled system API.

If you want to use a custom theme attribute that is outside the Styled System API, you’ll need to import the theme directly into your component.

#### How can I get help?
Theres is a few different ways. Chat to any of the contributors, pop a question in the #roo-ui slack channel or attend a Roo-ui working group.

#### Can I contribute?
Yes, refer to [CONTRIBUTING.md](./CONTRIBUTING.md) for instructions on adding new packages, or improving existing packages. Browse the issues and pick one up or send a pull request for a new package or asset.

## Helpful resources

### General
- [Styled system API table reference](http://jxnblk.com/styled-system/table/)
- [Qantas base theme](https://github.com/hooroo/roo-ui/blob/master/packages/themes/src/qantas.js)


### Accessibility

- [Accessibility audit Chrome extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
- [A11Y project](https://a11yproject.com)
- [MDN accessibility docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Accessible UI components for the web article](https://medium.com/@addyosmani/accessible-ui-components-for-the-web-39e727101a67)

