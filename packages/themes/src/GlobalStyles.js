import { Component } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, withTheme } from 'styled-components';

class GlobalStyles extends Component {
  constructor(...args) {
    super(...args);
    const { theme } = this.props;
    injectGlobal`
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        
          font-family: ${theme.fontFamily};
          font-size: ${theme.fontSizes.base};
          line-height: ${theme.lineHeights.normal};
          color: ${theme.colors.text};
        }
      
        *, *:before, *:after {
          box-sizing: border-box;
        }
      `;
  }

  render() {
    return this.props.children;
  }
}

GlobalStyles.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default withTheme(GlobalStyles);
