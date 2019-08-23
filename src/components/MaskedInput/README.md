# Masked input

<!-- STORY -->

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import { MaskedInput } from 'roo-ui/components';

export default (
  <Fragment>
    <MaskedInput placeholder="Enter postcode" mask={[/\d/, /\d/, /\d/, /\d/]} />
    <MaskedInput.time />
  </Fragment>
);
```

## Properties

Refer to [React Input Mask](https://github.com/text-mask/text-mask/tree/master/react#readme).

## Customization

This component can be customized with props supported by [`<Input />`](../Input/README.md).
