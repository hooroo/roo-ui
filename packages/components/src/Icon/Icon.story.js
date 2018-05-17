import styled from 'styled-components';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import paths from '@roo-ui/icons';

import { Box, Paragraph } from '..';
import Icon from '.';
import README from './README.md';

const groupedPaths = groupBy(
  map(paths, ({ category }, name) => ({ category, name })),
  'category',
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7.5rem, 1fr));
`;

const Caption = Paragraph.extend`
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const renderIcons = group => () => (
  <Grid>
    {groupedPaths[group].map(({ name }) => (
      <Box p={4}>
        <Icon color="grey.1" size={48} name={name} />
        <Caption title={name} fontSize="xs" color="grey.1">{name}</Caption>
      </Box>
    ))}
  </Grid>
);

storiesOf('Components|Icon', module)
  .addDecorator(withDocs(README))
  .add('action', renderIcons('action'))
  .add('alert', renderIcons('alert'))
  .add('av', renderIcons('av'))
  .add('communication', renderIcons('communication'))
  .add('content', renderIcons('content'))
  .add('device', renderIcons('device'))
  .add('editor', renderIcons('editor'))
  .add('file', renderIcons('file'))
  .add('hardware', renderIcons('hardware'))
  .add('image', renderIcons('image'))
  .add('maps', renderIcons('maps'))
  .add('navigation', renderIcons('navigation'))
  .add('notification', renderIcons('notification'))
  .add('places', renderIcons('places'))
  .add('social', renderIcons('social'))
  .add('toggle', renderIcons('toggle'));
