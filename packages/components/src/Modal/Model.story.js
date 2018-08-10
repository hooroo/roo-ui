import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Toggle } from 'react-powerplug';

import { Button } from '../..';

import README from './README.md';
import Modal from './Modal';

const modalBodyDisplay = (
  <Modal.body>
    Lorem ipsum dolor sit amet<br />
    Lorem ipsum dolor sit amet<br />
    Lorem ipsum dolor sit amet<br />
  </Modal.body>
);

const modalFooterDisplay = (
  <Modal.footer>
    <Button primary>Close</Button>
  </Modal.footer>
);

storiesOf('Components|Modal', module)
  .addDecorator(withDocs(README))
  .add('<Modal />', () => (
    <Toggle initial={false}>
      {({ on, toggle }) => (
        <div>
          <Button primary onClick={toggle}>Open</Button>
          <Modal isOpen={on} ariaHideApp={false}>
            <Modal.header>
              Default
            </Modal.header>
            {modalBodyDisplay}
            <Modal.footer>
              <Button primary onClick={toggle}>Close</Button>
            </Modal.footer>
          </Modal>
        </div>
      )}
    </Toggle>
  ))
  .add('<Modal.header variant="info" />', () => (
    <Modal isOpen ariaHideApp={false}>
      <Modal.header variant="info">
        Info
      </Modal.header>
      {modalBodyDisplay}
      {modalFooterDisplay}
    </Modal>
  ))
  .add('<Modal.header variant="success" />', () => (
    <Modal isOpen ariaHideApp={false}>
      <Modal.header variant="success">
        Success
      </Modal.header>
      {modalBodyDisplay}
      {modalFooterDisplay}
    </Modal>
  ))
  .add('<Modal.header variant="error" />', () => (
    <Modal isOpen ariaHideApp={false}>
      <Modal.header variant="error">
        Error
      </Modal.header>
      {modalBodyDisplay}
      {modalFooterDisplay}
    </Modal>
  ));
