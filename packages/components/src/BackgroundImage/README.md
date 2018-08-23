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

This component can be customized with [styled-system](https://github.com/jxnblk/styled-system) by passing props for [height](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#layout), [width](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#width-responsive),
[space](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#space-responsive), or
[background](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#misc).
