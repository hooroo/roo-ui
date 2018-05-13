# Alert

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Alert } from '@roo-ui/components';

export default (
  <Alert onClose={closeAlert} icon={{ name: 'hotel' }}>
    Hello world
  </Alert>
);
```

## Properties

| Name      | Description                       | Type    | Default | Required? |
|:----------|:----------------------------------|:--------|:--------|:----------|
| `onClose` | called when close icon is clicked | `func`  | -       | -         |
| `icon`    | render an icon                    | `shape` | -       | -         |

Refer to [<Icon />](../Icon) for available `icon` properties.
