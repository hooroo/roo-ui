import styled from '@emotion/styled';
import { ThemeProvider, withTheme } from 'emotion-theming';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import { qantas } from '@roo-ui/themes';
import * as allIcons from '@roo-ui/icons';

import { Box, Paragraph } from '..';
import Icon from '.';
import README from './README.md';

const themeWithAllIcons = { ...qantas, icons: allIcons };

const groupedPaths = groupBy(
  map(allIcons, ({ category }, name) => ({ category, name })),
  'category',
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7.5rem, 1fr));
`;

const Caption = styled(Paragraph)`
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IconsInTheme = withTheme(({ theme }) => (
  <Grid>
    {map(theme.icons, (_, name) => (
      <Box p={4} key={name}>
        <Icon color="greys.steel" size={48} name={name} />
        <Caption title={name} fontSize="xs" color="greys.steel">{name}</Caption>
      </Box>
    ))}
  </Grid>
));

const renderIconsInCategory = group => () => (
  <Grid>
    <ThemeProvider theme={themeWithAllIcons}>
      {groupedPaths[group].map(({ name }) => (
        <Box p={4} key={name}>
          <Icon color="greys.steel" size={48} name={name} />
          <Caption title={name} fontSize="xs" color="greys.steel">{name}</Caption>
        </Box>
      ))}
    </ThemeProvider>
  </Grid>
);

storiesOf('Components|Icon', module)
  .addDecorator(withDocs(README))
  .add('default icons', () => <IconsInTheme />)
  .add('alert', renderIconsInCategory('alert'))
  .add('av', renderIconsInCategory('av'))
  .add('communication', renderIconsInCategory('communication'))
  .add('content', renderIconsInCategory('content'))
  .add('device', renderIconsInCategory('device'))
  .add('editor', renderIconsInCategory('editor'))
  .add('file', renderIconsInCategory('file'))
  .add('hardware', renderIconsInCategory('hardware'))
  .add('image', renderIconsInCategory('image'))
  .add('maps', renderIconsInCategory('maps'))
  .add('navigation', renderIconsInCategory('navigation'))
  .add('notification', renderIconsInCategory('notification'))
  .add('places', renderIconsInCategory('places'))
  .add('rating', renderIconsInCategory('rating'))
  .add('social', renderIconsInCategory('social'))
  .add('toggle', renderIconsInCategory('toggle'))
  .add('qantas', renderIconsInCategory('qantas'));
