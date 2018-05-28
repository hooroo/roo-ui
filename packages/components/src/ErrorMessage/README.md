# Error message

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { ErrorMessage } from '@roo-ui/components';

export default (
  <ErrorMessage>An error occurred</ErrorMessage>
);
```

## Properties

| Name          | Description                | Type   | Default | Required? |
|:--------------|:---------------------------|:-------|:--------|:----------|
| `arrowTop`    | arrow is placed on top     | `bool` | false   | -         |
| `arrowRight`  | arrow is placed on right   | `bool` | false   | -         |
| `arrowBottom` | arrow is placed on bottom  | `bool` | false   | -         |
| `arrowLeft`   | arrow is placed on left    | `bool` | false   | -         |

## Customization

This component can be customized with [styled-system](https://github.com/jxnblk/styled-system) by passing props for [color](https://github.com/jxnblk/styled-system#color-responsive), [font size](https://github.com/jxnblk/styled-system#fontsize-responsive), [space](https://github.com/jxnblk/styled-system#space-responsive), or [typography](https://github.com/jxnblk/styled-system#typography).
