# External link

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { ExternalLink } from '@roo-ui/components';

export default (
  <ExternalLink>Hello world</ExternalLink>
);
```

### With [React Router](https://reacttraining.com/react-router/)

```js
import { Link } from 'react-router-dom';
import { ExternalLink as StyledExternalLink } from '@roo-ui/components';

const ExternalLink = StyledExternalLink.withComponent(Link);

export default (
  <ExternalLink>Hello world</ExternalLink>
);
```
