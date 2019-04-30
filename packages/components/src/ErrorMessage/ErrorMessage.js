import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { rem } from 'polished';
import Text from '../Text';

const ErrorMessage = styled(Text)`
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
      left: ${themeGet('space.3')(props)};
      border-bottom-color: ${themeGet('colors.ui.errorBackground')(props)};
    }
  `}

  ${props => props.arrow === 'left' && css`
    &:after {
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-right-color: ${themeGet('colors.ui.errorBackground')(props)};
    }
  `}

  ${props => props.arrow === 'right' && css`
    &:after {
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-left-color: ${themeGet('colors.ui.errorBackground')(props)};
    }
  `}

  ${props => props.arrow === 'bottom' && css`
    &:after {
      top: 100%;
      left: ${themeGet('space.3')};
      border-top-color: ${themeGet('colors.ui.errorBackground')(props)};
    }
  `}
`;

ErrorMessage.propTypes = {
  arrow: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

ErrorMessage.defaultProps = {
  bg: 'ui.errorBackground',
  arrow: null,
};

export default ErrorMessage;

