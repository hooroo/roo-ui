import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export default (tree, theme) => {
  // const context = shallow(<ThemeProvider theme={theme} />)
  //   .instance()
  //   .getChildContext();

  const themedTree = React.cloneElement(tree, { theme });

  return shallow(themedTree);
};

// export default (tree, theme) => {
//   const context = shallow(<ThemeProvider theme={theme} />)
//     .instance()
//     .getChildContext();

//   return shallow(tree, { context });
// };

// export default (children, theme) => shallow(children, { theme });
