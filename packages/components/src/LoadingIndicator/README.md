# Loading Indicator

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { LoadingIndicator } from '@roo-ui/components';

export default (
  <LoadingIndicator/>
);
```

## Properties

| Name    | Description                                                    | Type                 | Default | Required? |
|:--------|:---------------------------------------------------------------|:---------------------|:--------|:----------|
| `size`  | width & height of individual bouncer                           | `string` or `number` | 18px    | false     |
| `delay` | delay visibility. Number values passed are in ms (500 = 500ms) | `string` or `number` | 0       | false     |
| `color` | colour of individual bouncer                                   | `string`             | grey[1] | false     |
