import React from 'react';
import { shallow } from 'enzyme';

export default (tree, theme) => {
  const themedTree = React.cloneElement(tree, { theme });
  return shallow(themedTree);
};
