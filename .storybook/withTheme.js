import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import * as themes from '@roo-ui/themes';

const selectedTheme = () => select('Theme', {
  qantas: 'Qantas',
  jetstar: 'Jetstar'
}, 'qantas')

export default story => (
  <ThemeProvider theme={themes[selectedTheme()]}>
    {story()}
  </ThemeProvider>
);
