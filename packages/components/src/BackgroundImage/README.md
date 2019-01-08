# Background image

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { BackgroundImage } from '@roo-ui/components';

export default (
  <BackgroundImage src="/example.jpg">
    Hello world
  </BackgroundImage>
);
```

## Properties

| Name  | Description | Type     | Default | Required? |
|:------|:------------|:---------|:--------|:----------|
| `src` | image url   | `string` | -       | ✔︎         |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for [height](http://jxnblk.com/styled-system/table#layout), 
[width](https://jxnblk.com/styled-system#width),
[space](https://jxnblk.com/styled-system#space-theming), or
[background](http://jxnblk.com/styled-system/table#background).
