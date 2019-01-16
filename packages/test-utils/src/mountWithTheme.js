import React from 'react';
import { mount } from 'enzyme';

export default (tree, theme) => {
  const themedTree = React.cloneElement(tree, { theme });
  return mount(themedTree);
};
