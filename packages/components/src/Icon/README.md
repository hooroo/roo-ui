# Icon

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Icon } from '@roo-ui/components';

export default (
  <Icon name="hotel" />
);
```

## Properties

| Name       | Description         | Type                 | Default | Required? |
|:-----------|:--------------------|:---------------------|:--------|:----------|
| `name`     | the icon to render  | `string`             | 'hotel' | ✔︎         |
| `title`    | accessibility title | `string`             | name    | -         |
| `disabled` | disable the button  | `bool`               | false   | -         |
| `size`     | size of the icon    | `string` or `number` | 24      | - ︎        |

## Customization

This component can be customized with [styled-system](https://github.com/jxnblk/styled-system) by passing props for [space](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#space-responsive), or [color](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#color-responsive).
