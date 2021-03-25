import React from 'react';
import { withDocs } from 'storybook-readme';
import { Box, List, ListItem } from '../';
import README from './README.md';

export default {
  title: 'Components/ListItem',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Box textAlign="left">
    <List>
      <ListItem>Emotion</ListItem>
      <ListItem>Styled System</ListItem>
    </List>
  </Box>
);

Default.story = {
  name: 'default',
};
