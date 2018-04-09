import React from 'react';
import { ThemeProvider } from 'styled-components';
import { select } from '@storybook/addon-knobs/react';

import * as themes from '../packages/common/themes/src';

const selectedTheme = () => select('Theme', {
  qantas: 'Qantas',
}, 'qantas');

export default story => (
  <ThemeProvider theme={themes[selectedTheme()]}>
    {story()}
  </ThemeProvider>
);
