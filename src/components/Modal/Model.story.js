import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Toggle } from 'react-powerplug';

import { Button } from 'components';

import README from './README.md';
import Modal from './Modal';

const ModalWrapper = ({ initial = true, variant }) => (
  <Toggle initial={initial}>
    {({ on, toggle }) => (
      <div>
        <Button variant="primary" onClick={toggle}>
          Open
        </Button>
        <Modal
          isOpen={on}
          onRequestClose={toggle}
          ariaHideApp={false}
          shouldCloseOnOverlayClick
        >
          <Modal.header
            variant={variant}
            style={{ textTransform: 'capitalize' }}
          >
            {variant || 'Default'}
          </Modal.header>
          <Modal.body>
            Lorem ipsum dolor sit amet
            <br />
            Lorem ipsum dolor sit amet
            <br />
            Lorem ipsum dolor sit amet
            <br />
          </Modal.body>
          <Modal.footer>
            <Button variant="primary" onClick={toggle}>
              Close
            </Button>
          </Modal.footer>
        </Modal>
      </div>
    )}
  </Toggle>
);

storiesOf('Components/Modal', module)
  .addDecorator(withDocs(README))
  .add('<Modal />', () => <ModalWrapper initial={false} />)
  .add('<Modal.header variant="info" />', () => <ModalWrapper variant="info" />)
  .add('<Modal.header variant="success" />', () => (
    <ModalWrapper variant="success" />
  ))
  .add('<Modal.header variant="error" />', () => (
    <ModalWrapper variant="error" />
  ));
