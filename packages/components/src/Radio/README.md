# Radio

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Box, Label, Radio } from '@roo-ui/components';

export default (
  <Box textAlign="left" is="form">
    <Label textStyle="text">
      <Radio name="example" /> Uno
    </Label>

    <Label textStyle="text">
      <Radio name="example" /> Dos
    </Label>

    <Label textStyle="text">
      <Radio name="example" /> Tres
    </Label>

    <Label textStyle="text">
      <Radio disabled name="example" /> Quattro
    </Label>
  </Box>
);
```

## Properties

| Name       | Description           | Type   | Default | Required? |
|:-----------|:----------------------|:-------|:--------|:----------|
| `checked`  | sets checked state    | `bool` | false   | -         |
| `disabled` | disables radio button | `bool` | false   | -         |

For more radio input properties, click [here](https://www.w3schools.com/jsref/dom_obj_radio.asp).
