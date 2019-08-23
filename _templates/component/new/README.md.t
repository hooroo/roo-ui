---
to: <%= componentsRoot %>/<%= componentPath %>/README.md
---

# <%= componentName %>

<!-- STORY -->

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import { <%= componentName %> } from 'roo-ui/components';

export default (
  <<%= componentName %>>
    Hello world!
  </<%= componentName %>>
);
```

## Properties

| Name       | Description        | Type   | Default | Required? |
|------------|--------------------|--------|---------|-----------|
| `children` | component children | `node` | -       | ✔︎         |