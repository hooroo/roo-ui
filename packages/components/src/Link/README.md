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
import { Link as StyledLink } from '@roo-ui/components';

const Link = StyledLink.withComponent(RouterLink);

export default (
  <Link>Hello world</Link>
);
```

## Customization

This component can be customized with [styled-system](https://github.com/jxnblk/styled-system) by passing props for [color](https://github.com/jxnblk/styled-system#color-responsive) or [hover](https://github.com/jxnblk/styled-system#hover).