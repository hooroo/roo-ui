import React from 'react';
import { mount, shallow } from 'enzyme';

export const mountWithTheme = (tree, theme) => {
  const themedTree = React.cloneElement(tree, { theme });
  return mount(themedTree);
};

export const shallowWithTheme = (tree, theme) => {
  const themedTree = React.cloneElement(tree, { theme });
  return shallow(themedTree);
};
