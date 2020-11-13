# ButtonGroup

<!-- STORY -->

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import { ButtonGroup } from 'roo-ui/components';

const options = [
  { label: 'One',   value: 'one' },
  { label: 'Two',   value: 'two' },
  { label: 'Three', value: 'three' },
];

const onChange = (value) => {
  ...
};

export default (
  <ButtonGroup name="group" value="two" options={options} size="sm" onChange={onChange} />
);
```

## Properties

| Name       | Description                                                    | Type       | Default | Required? |
| ---------- | -------------------------------------------------------------- | ---------- | ------- | --------- |
| `name`     | name assigned to each underlying option (radio) element        | `string`   | -       | ✔︎        |
| `value`    | default/selected option                                        | `string`   | -       | ✔︎        |
| `options`  | selectable options (each object must have `label` and `value`) | `array`    | -       | ✔︎        |
| `onChange` | fn to execute on change                                        | `function` | -       | ✔︎        |
| `disabled` | component children                                             | `boolean`  | false   |           |
| `size`     | determine font and padding sizes                               | `string`   | base    |           |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props supported by [`<Flex />`](../Box/README.md), and [`<Box />`](../Box/README.md)
