# Icon

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/icons
```

## Example

```jsx
import { Icon, jetstarPaths, qantasPaths } from '@roo-ui/icons';

export default <Icon name={name} path={jetstarPaths} size="5rem" />;
```

## Properties

| Name     | Description | Type     | Default | Required? |
|----------|-------------|----------|---------|-----------|
| `path`   | path        | `string` |         | ✔︎         |
| `fill`   | color       | `string` |         |           |
| `title`  | A11Y title  | `string` |         |           |
| `size`   | size        | `string` |         | ︎          |
| `width`  | width       | `string` |         |           |
| `height` | height      | `string` |         | ︎          |



## Adding icon's

Export an icon from a artboard that is 36x36px and add the path to the brands paths file.
