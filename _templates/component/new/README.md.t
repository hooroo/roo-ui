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
    ✨ You may refer to me as <%= componentName %> ✨
  </<%= componentName %>>
);
```

## Properties

| Name       | Description        | Type             | Default | Required? |
|------------|--------------------|------------------|---------|-----------|
| `children` | Component Children | `PropTypes.node` | -       | ✔︎         |