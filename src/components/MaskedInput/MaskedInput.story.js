import React from 'react';
import { withDocs } from 'storybook-readme';

import MaskedInput from './';
import README from './README.md';

export default {
  title: 'Components/MaskedInput',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <MaskedInput placeholder="Enter postcode" mask={[/\d/, /\d/, /\d/, /\d/]} />
);

Default.story = {
  name: 'default',
};

export const Time = () => <MaskedInput.time />;

Time.story = {
  name: 'time',
};
