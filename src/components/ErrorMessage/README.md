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
  <ErrorMessage arrow="top">An error occurred</ErrorMessage>
);
```

## Properties

| Name          | Description                | Type     | Default | Required? |
|:--------------|:---------------------------|:---------|:--------|:----------|
| `arrow`       | arrow position             | `string` | null    | -         |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for [color](http://jxnblk.com/styled-system/table#core), [font size](http://jxnblk.com/styled-system/table#core), [space](https://jxnblk.com/styled-system#space-theming), or [typography](http://jxnblk.com/styled-system/table#typography).
