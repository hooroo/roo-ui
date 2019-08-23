import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Box, List, ListItem } from '../';
import README from './README.md';

storiesOf('Components|ListItem', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box textAlign="left">
      <List>
        <ListItem>Styled Components</ListItem>
        <ListItem>Styled System</ListItem>
      </List>
    </Box>
  ));
