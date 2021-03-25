import styled from '@emotion/styled';
import { ThemeProvider, withTheme } from 'emotion-theming';
import React from 'react';
import { withDocs } from 'storybook-readme';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import theme from 'theme';
import * as allIcons from 'icons'; // eslint-disable-line import/no-unresolved

import { Box, Paragraph } from '../';
import Icon from './';
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

export default {
  title: 'Components/Icon',
  decorators: [withDocs(README)],
};

export const DefaultIcons = () => <IconsInTheme />;

DefaultIcons.story = {
  name: 'default icons',
};

export const Action = () => <IconCategory category="action" />;

Action.story = {
  name: 'action',
};

export const Alert = () => <IconCategory category="alert" />;

Alert.story = {
  name: 'alert',
};

export const Av = () => <IconCategory category="av" />;

Av.story = {
  name: 'av',
};

export const Communication = () => <IconCategory category="communication" />;

Communication.story = {
  name: 'communication',
};

export const Content = () => <IconCategory category="content" />;

Content.story = {
  name: 'content',
};

export const Device = () => <IconCategory category="device" />;

Device.story = {
  name: 'device',
};

export const Editor = () => <IconCategory category="editor" />;

Editor.story = {
  name: 'editor',
};

export const File = () => <IconCategory category="file" />;

File.story = {
  name: 'file',
};

export const Hardware = () => <IconCategory category="hardware" />;

Hardware.story = {
  name: 'hardware',
};

export const Image = () => <IconCategory category="image" />;

Image.story = {
  name: 'image',
};

export const Maps = () => <IconCategory category="maps" />;

Maps.story = {
  name: 'maps',
};

export const Navigation = () => <IconCategory category="navigation" />;

Navigation.story = {
  name: 'navigation',
};

export const Notification = () => <IconCategory category="notification" />;

Notification.story = {
  name: 'notification',
};

export const Places = () => <IconCategory category="places" />;

Places.story = {
  name: 'places',
};

export const Qantas = () => <IconCategory category="qantas" />;

Qantas.story = {
  name: 'qantas',
};

export const Rating = () => <IconCategory category="rating" />;

Rating.story = {
  name: 'rating',
};

export const Social = () => <IconCategory category="social" />;

Social.story = {
  name: 'social',
};

export const Toggle = () => <IconCategory category="toggle" />;

Toggle.story = {
  name: 'toggle',
};
