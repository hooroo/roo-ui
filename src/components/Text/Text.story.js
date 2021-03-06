import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs';

import Text from './';
import README from './README.md';

storiesOf('Components/Text', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Text hidden={boolean('Hidden', false)}>Generic text.</Text>
  ));
