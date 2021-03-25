import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean, select } from '@storybook/addon-knobs';

import Button from './';
import README from './README.md';
import LoadingIndicator from '../LoadingIndicator';

export default {
  title: 'Components/Button',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Button
    variant={select('Variant', ['default', 'primary'], 'default')}
    rounded={boolean('Rounded', false)}
    block={boolean('Block', false)}
    disabled={boolean('Disabled', false)}
  >
    Hello world
  </Button>
);

Default.story = {
  name: 'default',
};

export const WithLoadingIndicator = () => {
  const isLoading = boolean('isLoading?', true);
  return (
    <Button
      variant={select('Variant', ['default', 'primary'], 'default')}
      rounded={boolean('Rounded', false)}
      block={boolean('Block', false)}
      disabled={isLoading}
    >
      {isLoading ? <LoadingIndicator color="white" size={21} /> : 'Hello world'}
    </Button>
  );
};

WithLoadingIndicator.story = {
  name: 'with loading indicator',
};
