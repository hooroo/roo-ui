# Button

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/button
```

## Example

```jsx
import Button, { OutlineButton } from '@roo-ui/button';

export default (
  <Fragment>
    <Button>Hello world</Button>
    <OutlineButton>Hello world</OutlineButton>
  </Fragment>
);
```

## Properties

| Name       | Description           | Type   | Default | Required? |
|:-----------|:----------------------|:-------|:--------|:----------|
| `children` | button content        | `node` | -       | ✔︎         |
| `primary`  | use the primary color | `bool` | false   | -         |
| `rounded`  | use a rounded border  | `bool` | false   | -         |
| `disabled` | disable the button    | `bool` | false   | -         |
