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

This component can be customized with [styled-system](https://github.com/jxnblk/styled-system) by passing props for [space](https://github.com/jxnblk/styled-system#space-responsive), [width](https://github.com/jxnblk/styled-system#width-responsive),
[height](https://github.com/jxnblk/styled-system#layout), or [size](https://github.com/jxnblk/styled-system#layout).
