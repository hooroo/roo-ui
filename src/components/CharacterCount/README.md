# Character count

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { CharacterCount } from '@roo-ui/components';

export default (
  <CharacterCount value="Hello world" limit={64} />
);
```

## Properties

| Name    | Description        | Type                 | Default | Required? |
|:--------|:-------------------|:---------------------|:--------|:----------|
| `value` | value to be tested | `string` or `number` | -       | ✔︎         |
| `limit` | maximum length     | `string`             | -       | ✔︎         |

## Customization

This component can be customized with props supported by [`<Text />`](../Text/README.md).
