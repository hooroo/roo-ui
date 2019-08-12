# Link

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Link } from '@roo-ui/components';

export default (
  <Link>Hello world</Link>
);
```

### With [React Router](https://reacttraining.com/react-router/)

```js
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@roo-ui/components';

export default (
  <Link is={RouterLink}>Hello world</Link>
);
```

## Properties

| Name     | Description        | Type   | Default | Required? |
|:---------|:-------------------|:-------|:--------|:----------|
| `hidden` | visually hidden    | `bool` | false   | -         |
| `inline` | inherit font color | `bool` | false   | -         |

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for [color](http://jxnblk.com/styled-system/table#core), [space](http://jxnblk.com/styled-system/table#core), hover, or [font weight](http://jxnblk.com/styled-system/table#typography).
