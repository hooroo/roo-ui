import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, number } from '@storybook/addon-knobs/react';
import { Box, List, ListItem } from '..';
import README from './README.md';

storiesOf('Components|List', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box textAlign="left">
      <List
        ordered={boolean('Ordered', false)}
        columns={number('Columns', 1)}
      >
        <ListItem>Russo-European Laika</ListItem>
        <ListItem>St. John&apos;s water dog</ListItem>
        <ListItem>Georgian Shepherd Dog</ListItem>
        <ListItem>Miniature Schnauzer</ListItem>
        <ListItem>Transylvanian Hound</ListItem>
        <ListItem>Leonberger</ListItem>
        <ListItem>Majorca Shepherd Dog</ListItem>
        <ListItem>Nova Scotia Duck Tolling Retriever</ListItem>
        <ListItem>German Roughhaired Pointer</ListItem>
        <ListItem>Poodle</ListItem>
      </List>
    </Box>
  ))
  .add('nested', () => (
    <Box textAlign="left">
      <List>
        <ListItem>Coffee</ListItem>
        <ListItem>Tea
          <List>
            <ListItem>Black tea</ListItem>
            <ListItem>Green tea</ListItem>
          </List>
        </ListItem>
        <ListItem>Milk</ListItem>
      </List>
    </Box>
  ));
