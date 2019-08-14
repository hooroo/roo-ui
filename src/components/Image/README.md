# Image

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Image } from '@roo-ui/components';

export default (
  <Image src="/example.jpg" />
);
```

## Properties

| Name     | Description    | Type     | Default | Required? |
|:---------|:---------------|:---------|:--------|:----------|
| `src`    | image url      | `string` | -       | ✔︎         |
| `inline` | display inline | `bool`   | false   | -         |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for [space](https://jxnblk.com/styled-system#space-theming), [width](https://jxnblk.com/styled-system#width),
[height](http://jxnblk.com/styled-system/table#layout), or [size](http://jxnblk.com/styled-system/table#layout).
