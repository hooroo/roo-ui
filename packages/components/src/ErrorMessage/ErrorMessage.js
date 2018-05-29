import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { rem } from 'polished';

import Text from '../Text';

const ErrorMessage = Text.extend`
  padding: ${themeGet('space.3')};
  position: relative;
  width: 100%;
  display: block;
  text-align: left;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    border: solid transparent;
    border-width: ${rem('10px')};
  }

  ${props => props.arrow === 'top' && css`
    &:after {
      bottom: 100%;
      left: ${themeGet('space.3')};
      border-bottom-color: ${themeGet('colors.ui.errorBackground')};
    }
  `}

  ${props => props.arrow === 'left' && css`
    &:after {
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-right-color: ${themeGet('colors.ui.errorBackground')};
    }
  `}

  ${props => props.arrow === 'right' && css`
    &:after {
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-left-color: ${themeGet('colors.ui.errorBackground')};
    }
  `}

  ${props => props.arrow === 'bottom' && css`
    &:after {
      top: 100%;
      left: ${themeGet('space.3')};
      border-top-color: ${themeGet('colors.ui.errorBackground')};
    }
  `}
`;

ErrorMessage.propTypes = {
  arrow: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

ErrorMessage.defaultProps = {
  bg: 'ui.errorBackground',
  arrow: null,
  blacklist: Object.keys(ErrorMessage.propTypes),
};

export default ErrorMessage;

