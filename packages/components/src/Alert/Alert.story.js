import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs/react';

import Alert from './Alert';
import README from './README.md';

storiesOf('Components|Alert', module)
  .addDecorator(withDocs(README))
  .add('<Alert />', () => (
    <Alert contained={boolean('Contained', false)} icon={{ name: 'hotel' }}>
      <strong>Hello world</strong><br />
      Lorem ipsum dolor sit amet
    </Alert>
  ))
  .add('<Alert.info />', () => (
    <Alert.info onClose={() => {}}>
      <strong>Info</strong><br />
      Lorem ipsum dolor sit amet
    </Alert.info>
  ))
  .add('<Alert.success />', () => (
    <Alert.success onClose={() => {}}>
      <strong>Success</strong><br />
      Lorem ipsum dolor sit amet
    </Alert.success>
  ))
  .add('<Alert.error />', () => (
    <Alert.error onClose={() => {}}>
      <strong>Error</strong><br />
      Lorem ipsum dolor sit amet
    </Alert.error>
  ))
  .add('<Alert variant="info" />', () => (
    <Alert variant="info" onClose={() => {}}>
      <strong>Info</strong><br />
      Lorem ipsum dolor sit amet
    </Alert>
  ))
  .add('<Alert variant="success" />', () => (
    <Alert variant="success" onClose={() => {}}>
      <strong>Success</strong><br />
      Lorem ipsum dolor sit amet
    </Alert>
  ))
  .add('<Alert variant="error" />', () => (
    <Alert variant="error" onClose={() => {}}>
      <strong>Error</strong><br />
      Lorem ipsum dolor sit amet
    </Alert>
  ));

