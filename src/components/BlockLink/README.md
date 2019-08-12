# Block link

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { BlockLink } from '@roo-ui/components';

export default (
  <BlockLink>Hello world</BlockLink>
);
```

### With [React Router](https://reacttraining.com/react-router/)

```js
import { Link } from 'react-router-dom';
import { BlockLink as StyledBlockLink } from '@roo-ui/components';

const BlockLink = StyledBlockLink.withComponent(Link);

export default (
  <BlockLink>Hello world</BlockLink>
);
```
