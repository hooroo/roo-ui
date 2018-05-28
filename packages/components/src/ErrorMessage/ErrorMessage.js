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

  ${props => props.arrowTop && css`
    &:after {
      bottom: 100%;
      left: ${themeGet('space.3')};
      border-color: transparent;
      border-bottom-color: ${themeGet('colors.ui.errorBackground')};
    }
  `}

  ${props => props.arrowLeft && css`
    &:after {
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-color: transparent;
      border-right-color: ${themeGet('colors.ui.errorBackground')};
    }
  `}

  ${props => props.arrowRight && css`
    &:after {
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-color: transparent;
      border-left-color: ${themeGet('colors.ui.errorBackground')};
    }
  `}

  ${props => props.arrowBottom && css`
    &:after {
      top: 100%;
      left: ${themeGet('space.3')};
      border-color: transparent;
      border-top-color: ${themeGet('colors.ui.errorBackground')};
    }
  `}


`;

ErrorMessage.propTypes = {
  arrowTop: PropTypes.bool,
  arrowRight: PropTypes.bool,
  arrowBottom: PropTypes.bool,
  arrowLeft: PropTypes.bool,
};

ErrorMessage.defaultProps = {
  bg: 'ui.errorBackground',
  arrowTop: false,
  arrowRight: false,
  arrowBottom: false,
  arrowLeft: false,
  blacklist: Object.keys(ErrorMessage.propTypes),
};

export default ErrorMessage;

