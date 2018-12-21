# Button

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Button } from '@roo-ui/components';

export default (
  <Button>Hello world</Button>
);
```

## Properties

| Name       | Description                | Type   | Default | Required? |
|:-----------|:---------------------------|:-------|:--------|:----------|
| `primary`  | use the primary color      | `bool` | false   | -         |
| `rounded`  | use a rounded border       | `bool` | false   | -         |
| `block`    | render a full width button | `bool` | false   | -         |
| `disabled` | disable the button         | `bool` | false   | -         |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for [space](https://jxnblk.com/styled-system#space-theming), [color](http://jxnblk.com/styled-system/table#core), or [box shadow](http://jxnblk.com/styled-system/table#misc).
