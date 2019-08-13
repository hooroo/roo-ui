import styled from '@emotion/styled';
import { ThemeProvider, withTheme } from 'emotion-theming';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import theme from 'theme';
import * as allIcons from 'icons'; // eslint-disable-line import/no-unresolved

import { Box, Paragraph } from '..';
import Icon from '.';
import README from './README.md';

const themeWithAllIcons = { ...theme, icons: allIcons };

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
        <Caption title={name} fontSize="xs" color="greys.steel">
          {name}
        </Caption>
      </Box>
    ))}
  </Grid>
));

const IconCategory = ({ category }) => (
  <Grid>
    <ThemeProvider theme={themeWithAllIcons}>
      {groupedPaths[category].map(({ name }) => (
        <Box p={4} key={name}>
          <Icon color="greys.steel" size={48} name={name} />
          <Caption title={name} fontSize="xs" color="greys.steel">
            {name}
          </Caption>
        </Box>
      ))}
    </ThemeProvider>
  </Grid>
);

storiesOf('Components|Icon', module)
  .addDecorator(withDocs(README))
  .add('default icons', () => <IconsInTheme />)
  .add('alert', () => <IconCategory category="alert" />)
  .add('av', () => <IconCategory category="av" />)
  .add('communication', () => <IconCategory category="communication" />)
  .add('content', () => <IconCategory category="content" />)
  .add('device', () => <IconCategory category="device" />)
  .add('editor', () => <IconCategory category="editor" />)
  .add('file', () => <IconCategory category="file" />)
  .add('hardware', () => <IconCategory category="hardware" />)
  .add('image', () => <IconCategory category="image" />)
  .add('maps', () => <IconCategory category="maps" />)
  .add('navigation', () => <IconCategory category="navigation" />)
  .add('notification', () => <IconCategory category="notification" />)
  .add('places', () => <IconCategory category="places" />)
  .add('rating', () => <IconCategory category="rating" />)
  .add('social', () => <IconCategory category="social" />)
  .add('toggle', () => <IconCategory category="toggle" />)
  .add('qantas', () => <IconCategory category="qantas" />);
