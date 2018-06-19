# Text

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Text } from '@roo-ui/components';

export default (
  <Text>Generic Text</Text>
);
```

## Properties

| Name      | Description             | Type     | Default | Required? |
| :-------- | :---------------------- | :------- | :------ | :-------- |
| `hidden`  | visually hide           | `boolean`| false   | -         |


## Customization

This component can be customized with [styled-system](https://github.com/jxnblk/styled-system) by passing props for
`textStyle`,
`color`,
`fontSize`,
`fontWeight`,
`letterSpacing`,
`lineHeight`,
`space` &
`textAlign` [functions](https://github.com/jxnblk/styled-system#table-of-style-props)