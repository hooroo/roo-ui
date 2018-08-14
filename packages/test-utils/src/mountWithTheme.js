import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export default (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
};
