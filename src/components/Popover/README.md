# Popover

<!-- STORY -->

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import Popover from 'roo-ui/components';

export default (
  <Popover>
    <Popover.control>
      {({ openPopover, closePopover, isOpen }) => (
        <button onClick={openPopover}>Open popover</button>
      )}
    </Popover.control>

    <p>Popover contents</p>
  </Popover>
);
```

## Properties

| Name       | Description                           | Type     | Default | Required? |
| ---------- | ------------------------------------- | -------- | ------- | --------- |
| `children` | Content and Popover.control to render | `node`   | -       | ✔︎        |
| `zIndex`   | Content zIndex                        | `number` | 1       | -         |
