/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Box, Icon, Link } from '..';

import Dropdown from './Dropdown';
import README from './README.md';

storiesOf('Components|Dropdown', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box width="200px">
      <Dropdown>
        Options
        <Icon name="moreVert" />

        <Dropdown.item onClick={() => console.log('Edit')}>Edit</Dropdown.item>
        <Dropdown.item onClick={() => console.log('Unpublish')}>Unpublish</Dropdown.item>
        <Dropdown.item onClick={() => console.log('Duplicate')}>Duplicate</Dropdown.item>
        <Dropdown.item is={Link} href="http://qantas.com/">Go to Qantas.com</Dropdown.item>
      </Dropdown>
    </Box>
  ));
