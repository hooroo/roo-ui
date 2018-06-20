# Dropdown

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import Dropdown from '@roo-ui/components';

export default (
  <Dropdown>
    Options
    <Dropdown.item>Edit</Dropdown.item>
    <Dropdown.item>Delete</Dropdown.item>
    <Dropdown.item>Unpublish</Dropdown.item>
    <Dropdown.item>Duplicate</Dropdown.item>
  </Dropdown>
);
```

## Properties

| Name            | Description                             | Type     | Default | Required? |
|:----------------|:----------------------------------------|:---------|:--------|:----------|
| `children`      | Toggle and Dropdown items to render     | `func`   | -       | -         |

Refer to [Downshift](https://github.com/paypal/downshift#props) for more props; all props other than the ones listed above will be passed to the `<Downshift />` instance.
