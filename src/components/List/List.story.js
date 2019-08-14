import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, array } from '@storybook/addon-knobs/react';

import { Box, List, ListItem } from '../';
import README from './README.md';

const flatList = props => (
  <Box textAlign="left">
    <List {...props}>
      <ListItem>Russo-European Laika</ListItem>
      <ListItem>St. John&apos;s Water Dog</ListItem>
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
);

storiesOf('Components|List', module)
  .addDecorator(withDocs(README))
  .add('default', () =>
    flatList({
      ordered: boolean('Ordered', false),
      flush: boolean('Flush', false),
    }),
  )
  .add('columns', () =>
    flatList({
      ordered: boolean('Ordered', false),
      columns: array('Columns', [1, 2, 3]),
    }),
  )
  .add('nested', () => (
    <Box textAlign="left">
      <List>
        <ListItem>Coffee</ListItem>
        <ListItem>
          Tea
          <List>
            <ListItem>Black tea</ListItem>
            <ListItem>Green tea</ListItem>
          </List>
        </ListItem>
        <ListItem>Milk</ListItem>
      </List>
    </Box>
  ));
