# Icon

<!-- STORY -->

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import { Icon } from 'roo-ui/components';

export default <Icon name="hotel" />;
```

## Properties

| Name       | Description         | Type                 | Default | Required? |
| :--------- | :------------------ | :------------------- | :------ | :-------- |
| `name`     | the icon to render  | `string`             | 'hotel' | ✔︎        |
| `title`    | accessibility title | `string`             | name    | -         |
| `disabled` | disable the button  | `bool`               | false   | -         |
| `size`     | size of the icon    | `string` or `number` | 24      | - ︎       |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for [space](https://jxnblk.com/styled-system#space-theming), or [color](http://jxnblk.com/styled-system/table#core).
