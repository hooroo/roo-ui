# List

<!-- STORY -->

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import { List, ListItem } from 'roo-ui/components';

export default (
  <List>
    <ListItem>Emotion</ListItem>
    <ListItem>Styled System</ListItem>
  </List>
);
```

## Properties

| Name      | Description                 | Type                   | Default | Required? |
| :-------- | :-------------------------- | :--------------------- | :------ | :-------- |
| `ordered` | set list type to `<ol>`     | `bool`                 | false   | -         |
| `columns` | number of columns           | `number` or `number[]` | null    | -         |
| `flush`   | render list flush with text | `bool`                 | false   | -         |
