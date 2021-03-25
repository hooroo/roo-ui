import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs';

import Alert from './Alert';
import README from './README.md';

export default {
  title: 'Components/Alert',
  decorators: [withDocs(README)],
};

export const _Alert = () => (
  <Alert contained={boolean('Contained', false)} icon={{ name: 'hotel' }}>
    <strong>Hello world</strong>
    <br />
    Lorem ipsum dolor sit amet
  </Alert>
);

_Alert.story = {
  name: '<Alert />',
};

export const AlertInfo = () => (
  <Alert.info onClose={() => {}}>
    <strong>Info</strong>
    <br />
    Lorem ipsum dolor sit amet
  </Alert.info>
);

AlertInfo.story = {
  name: '<Alert.info />',
};

export const AlertSuccess = () => (
  <Alert.success onClose={() => {}}>
    <strong>Success</strong>
    <br />
    Lorem ipsum dolor sit amet
  </Alert.success>
);

AlertSuccess.story = {
  name: '<Alert.success />',
};

export const AlertError = () => (
  <Alert.error onClose={() => {}}>
    <strong>Error</strong>
    <br />
    Lorem ipsum dolor sit amet
  </Alert.error>
);

AlertError.story = {
  name: '<Alert.error />',
};

export const AlertVariantInfo = () => (
  <Alert variant="info" onClose={() => {}}>
    <strong>Info</strong>
    <br />
    Lorem ipsum dolor sit amet
  </Alert>
);

AlertVariantInfo.story = {
  name: '<Alert variant="info" />',
};

export const AlertVariantSuccess = () => (
  <Alert variant="success" onClose={() => {}}>
    <strong>Success</strong>
    <br />
    Lorem ipsum dolor sit amet
  </Alert>
);

AlertVariantSuccess.story = {
  name: '<Alert variant="success" />',
};

export const AlertVariantError = () => (
  <Alert variant="error" onClose={() => {}}>
    <strong>Error</strong>
    <br />
    Lorem ipsum dolor sit amet
  </Alert>
);

AlertVariantError.story = {
  name: '<Alert variant="error" />',
};
