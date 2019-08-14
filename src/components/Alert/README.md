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

| Name        | Description                                                          | Type     | Default   | Required? |
|-------------|----------------------------------------------------------------------|----------|-----------|-----------|
| `onClose`   | called when close icon is clicked                                    | `func`   | -         | -         |
| `contained` | wrap the contents of the <Alert /> in a <Container />                | `bool`   | false     | -         |
| `icon`      | render an icon                                                       | `shape`  | -         | -         |
| `variant`      | `alertStyle` from theme. One of `default`, `info`, `success` or `error` | `string` | 'default' | -         |

Refer to [<Icon />](../Icon) for available `icon` properties.
