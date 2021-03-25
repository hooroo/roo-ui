import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean, text } from '@storybook/addon-knobs';

import Input from './';
import README from './README.md';

export default {
  title: 'Components/Input',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Input
    placeholder="Hello world"
    disabled={boolean('Disabled', false)}
    error={boolean('Error', false)}
    underline={boolean('Underline', false)}
    readOnly={boolean('Read only', false)}
    textAlign={text('Text Align', 'left')}
  />
);

Default.story = {
  name: 'default',
};
