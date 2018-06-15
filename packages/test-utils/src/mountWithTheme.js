import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export default (tree, theme) => {
  const context = mount(<ThemeProvider theme={theme} />).instance().getChildContext();
  return mount(tree, { context });
};
