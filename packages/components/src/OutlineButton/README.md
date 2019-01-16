# OutlineButton

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { OutlineButton } from '@roo-ui/components';

export default (
  <OutlineButton>Hello world</OutlineButton>
);
```

## Properties

| Name       | Description                | Type     | Default  | Required? |
|:-----------|:---------------------------|:-------  |:-------- |:----------|
| `variant`  | use a theme variant        | `string` | 'default | -         |
| `rounded`  | use a rounded border       | `bool`   | false    | -         |
| `disabled` | disable the button         | `bool`   | false    | -         |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for [space](https://jxnblk.com/styled-system#space-theming), [color](http://jxnblk.com/styled-system/table#core), or [box shadow](http://jxnblk.com/styled-system/table#misc).
