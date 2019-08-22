# Button

<!-- STORY -->

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import { Button } from 'roo-ui/components';

export default <Button>Hello world</Button>;
```

## Example with LoadingIndicator

You may wish to conditionally add loading state to a button in some scenarios (i.e. long running tasks initiated via a button click). This can be achieved via composition.  
For example:

```js
import { Button, LoadingIndicator } from 'roo-ui/components';

export default (
  <Button disabled={isLoading}>
    {isLoading ? <LoadingIndicator color="white" size={21} /> : 'Hello world'}
  </Button>
);
```

## Properties

| Name       | Description                | Type     | Default  | Required? |
| :--------- | :------------------------- | :------- | :------- | :-------- |
| `variant`  | use a theme variant        | `string` | 'default | -         |
| `rounded`  | use a rounded border       | `bool`   | false    | -         |
| `block`    | render a full width button | `bool`   | false    | -         |
| `disabled` | disable the button         | `bool`   | false    | -         |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for [space](https://jxnblk.com/styled-system#space-theming), [color](http://jxnblk.com/styled-system/table#core), or [box shadow](http://jxnblk.com/styled-system/table#misc).
