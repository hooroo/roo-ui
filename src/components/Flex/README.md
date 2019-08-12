# Flex

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Flex, Box } from '@roo-ui/components';

export default (
  <Flex>
    <Box>Flex</Box>
    <Box>Box</Box>
  </Flex>
);
```

## Customization

This component can be customized with [styled-system](https://jxnblk.com/styled-system) by passing props for `alignContent`, `alignItems`, `justifyContent`, `flexWrap`, `flexFlow` & `flexDirection` [functions](http://jxnblk.com/styled-system/table)
as well as props supported by [`<Box />`](../Box/README.md)
