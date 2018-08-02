# Checkbox

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Box, Label, Checkbox } from '@roo-ui/components';

export default (
  <Box textAlign="left" is="form">
    <Label textStyle="text">
      <Checkbox name="example" /> Uno
    </Label>

    <Label textStyle="text">
      <Checkbox name="example" /> Dos
    </Label>

    <Label textStyle="text">
      <Checkbox name="example" /> Tres
    </Label>

    <Label textStyle="text">
      <Checkbox disabled name="example" /> Quattro
    </Label>
  </Box>
);
```

## Properties

| Name       | Description           | Type   | Default | Required? |
|:-----------|:----------------------|:-------|:--------|:----------|
| `checked`  | sets checked state    | `bool` | false   | -         |
| `disabled` | disables checkbox     | `bool` | false   | -         |

Standard [checkbox attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox) will be passed down to the `<input />`.
