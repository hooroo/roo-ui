import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export default (tree, theme) => {
  // const context = mount(<ThemeProvider theme={theme} />)
  //   .instance()
  //   .getChildContext();

  const themedTree = React.cloneElement(tree, { theme });

  return mount(themedTree);
};

// export default (tree, theme) => {
//   const context = shallow(<ThemeProvider theme={theme} />)
//     .instance()
//     .getChildContext();

//   return mount(tree, {
//     context,
//     childContextTypes: ThemeProvider.childContextTypes,
//   });
// };

// export default (children, theme) => mount(children, { theme });
