import React from 'react';
import { mount, shallow } from 'enzyme';
import { configureAxe } from 'jest-axe';

export const mountWithTheme = (tree, theme) => {
  const themedTree = React.cloneElement(tree, { theme });
  return mount(themedTree);
};

export const shallowWithTheme = (tree, theme) => {
  const themedTree = React.cloneElement(tree, { theme });
  return shallow(themedTree);
};

export const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});
