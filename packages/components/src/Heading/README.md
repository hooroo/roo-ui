# Heading

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Heading } from '@roo-ui/components';

export default (
  <Fragment>
    <Heading>Generic heading</Heading>
    <Heading.h1>Heading 1</Heading.h1>
    <Heading.h2>Heading 2</Heading.h2>
    <Heading.h3>Heading 3</Heading.h3>
    <Heading.h4>Heading 4</Heading.h4>
    <Heading.h5>Heading 5</Heading.h5>
    <Heading.h6>Heading 6</Heading.h6>
  </Fragment>
);
```

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system/) by passing props for [color](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#color-responsive), [font size](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#fontsize-responsive), [space](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#space-responsive), or [typography](https://github.com/jxnblk/styled-system/blob/v2.2.5/README.md#typography).
