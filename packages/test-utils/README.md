# test-utils

## Installation

```shell
$ yarn add @roo-ui/test-utils
```

## Usage

### `shallowWithTheme`

Shallow render (with [Enzyme](http://airbnb.io/enzyme/)) a component along with theme context.

```js
import { shallowWithTheme } from '@roo-ui/test-utils';
import { qantas as theme } from '@roo-ui/themes';

import Example from '.';

describe('<Example />', () => {
  it('renders correctly', () => {
    expect(shallowWithTheme(<Example />, theme)).toMatchSnapshot;
  });
});
```
