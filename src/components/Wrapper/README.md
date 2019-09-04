# Wrapper

<!-- STORY -->

---

The `Wrapper` is utility component that allows us wrap more complex components without knowing how they will be used.

Complex components are often wrapped with a `Box` so that they can have properties like background and padding adjusted, but if those adjustments are not required, the DOM gets an extra `div` that is not really required.

On a large page, this can add up to a lot of nested `div`s that don't really do anything. The `Wrapper` component renders as a React `Fragment` if it is not passed any props, so no unnecessary `div`s are created.

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import { Wrapper } from 'roo-ui/components';

export default <Wrapper>Hello world</Wrapper>;
```
