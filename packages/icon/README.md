# Icon

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/icons
```

## Example

```js
import { Icon, jetstarPaths, qantasPaths } from '@roo-ui/icons';

export default <Icon title="Aeroplane" path={jetstarPaths['aeroplane']} size="5rem" />;
```

## Properties

| Name     | Description | Type     | Default | Required? |
|:---------|:------------|:---------|:--------|:----------|
| `path`   | path        | `string` |         | ✔︎         |
| `fill`   | color       | `string` |         |           |
| `title`  | A11Y title  | `string` |         |           |
| `size`   | size        | `string` |         | ︎          |
| `width`  | width       | `string` |         |           |
| `height` | height      | `string` |         | ︎          |


## Adding icons

Export an icon from an artboard that is 36x36px and add the path to the brand's paths file.

When your icon contains multiple paths add it as one path, with a space where a new path starts.
Eg: `<path d="123" /> <path d="abc" />` would become `<path d="123 abc" />`.

## Optimising icons

Running your svg through an optimiser will remove unneeded information and inline the path.
[SVGO](https://github.com/svg/svgo) does a good job of this and there is an online GUI [here](https://jakearchibald.github.io/svgomg).
