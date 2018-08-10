# Modal

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Modal } from '@roo-ui/components';

export default (
  <Modal isOpen={isOpen}>
    <Modal.header>Default</Modal.header>
    <Modal.body>
      Lorem ipsum dolor sit amet<br />
      Lorem ipsum dolor sit amet<br />
      Lorem ipsum dolor sit amet<br />
    </Modal.body>
    <Modal.footer>
      <Button primary onClick={toggleIsOpen}>Close</Button>
    </Modal.footer>
  </Modal>
);
```

## Properties

### Modal

This component support same props as [react-modal](https://github.com/reactjs/react-modal/blob/v3.5.1/docs/README.md#general-usage-usage).

### Modal.header

| Name        | Description                                                             | Type     | Default   | Required? |
|-------------|-------------------------------------------------------------------------|----------|-----------|-----------|
| `icon`      | render an icon                                                          | `shape`  | -         | -         |
| `variant`   | `alertStyle` from theme. One of `default`, `info`, `success` or `error` | `string` | 'default' | -         |

This component support same props as [Box](https://github.com/hooroo/roo-ui/tree/master/packages/components/src/Box/README.md).

### Modal.body
This component support same props as [Box](https://github.com/hooroo/roo-ui/tree/master/packages/components/src/Box/README.md).

### Modal.footer
This component support same props as [Flex](https://github.com/hooroo/roo-ui/tree/master/packages/components/src/Flex/README.md).
