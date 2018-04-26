# OutlineButton

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```jsx
import { OutlineButton } from '@roo-ui/components';

export default (
  <OutlineButton>Hello world</OutlineButton>
);
```

## Properties

| Name       | Description           | Type   | Default | Required? |
|:-----------|:----------------------|:-------|:--------|:----------|
| `children` | button content        | `node` | -       | ✔︎         |
| `primary`  | use the primary color | `bool` | false   | -         |
| `rounded`  | use a rounded border  | `bool` | false   | -         |
| `disabled` | disable the button    | `bool` | false   | -         |

## Customization

This component can be customized with [styled-system](https://github.com/jxnblk/styled-system) by passing props for [space](https://github.com/jxnblk/styled-system#space-responsive), [color](https://github.com/jxnblk/styled-system#color-responsive), or [box shadow](https://github.com/jxnblk/styled-system#misc).
