import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export default (tree, theme) => mount(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
