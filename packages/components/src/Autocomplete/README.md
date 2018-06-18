# Autocomplete

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Autocomplete, Label, Input } from '@roo-ui/components';

export default (
  <Autocomplete items={['Greyhound', 'Whippet', 'Borzoi']}>
    {({ getLabelProps, getInputProps }) => (
      <Fragment>
        <Label {...getLabelProps()}>Favourite dog</Label>
        <Input {...getInputProps()} />
      </Fragment>
    )}
  </Autocomplete>
);
```

## Properties

| Name                | Description                             | Type    | Default | Required? |
|:--------------------|:----------------------------------------|:--------|:--------|:----------|
| `items`             | array of strings to be autocompleted    | `array` | -       | ✔︎         |
| `filterItems`       | filter items based on input             | `bool`  | true    | -         |
| `restrictInput`     | restrict input to the values in `items` | `bool`  | true    | -         |
| `children`          | function to render label and input      | `func`  | -       | -         |

Refer to [Downshift](https://github.com/paypal/downshift#props) for more props; all props other than the ones listed above will be passed to the `<Downshift />` instance.
