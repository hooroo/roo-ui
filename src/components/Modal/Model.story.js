import React from 'react';
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

export default {
  title: 'Components/Modal',
  decorators: [withDocs(README)],
};

export const _Modal = () => <ModalWrapper initial={false} />;

_Modal.story = {
  name: '<Modal />',
};

export const ModalHeaderVariantInfo = () => <ModalWrapper variant="info" />;

ModalHeaderVariantInfo.story = {
  name: '<Modal.header variant="info" />',
};

export const ModalHeaderVariantSuccess = () => (
  <ModalWrapper variant="success" />
);

ModalHeaderVariantSuccess.story = {
  name: '<Modal.header variant="success" />',
};

export const ModalHeaderVariantError = () => <ModalWrapper variant="error" />;

ModalHeaderVariantError.story = {
  name: '<Modal.header variant="error" />',
};
