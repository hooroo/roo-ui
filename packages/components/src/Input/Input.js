import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  space,
  color,
  fontSize,
  lineHeight,
  border,
  borderColor,
  themeGet,
  variant,
} from 'styled-system';
import tag from 'clean-tag';

const readonlyVariant = variant({
  prop: 'readonlyVariant',
  key: 'readonlyStyles',
});

const Input = styled(tag)`
  ${space}
  ${color}
  ${fontSize}
  ${lineHeight}
  ${border}
  ${borderColor}
  display: block;
  width: 100%;
  outline: 0;
  transition: border-color ${themeGet('transitions.default')};
  appearance: none;

  &:focus {
    border-color: ${themeGet('colors.brand.secondary')};
  }

  &:disabled {
    opacity: ${themeGet('opacity.disabled')};
    cursor: not-allowed;
  }

  &[readonly] {
    ${readonlyVariant}
  }

  ::placeholder {
    color: ${themeGet('colors.greys.steel')};
  }

  ::-ms-clear {
    display: none;
  }

  ${props => props.underline && css`
    border: none;
    border-bottom: ${themeGet('borders.2')};
    border-color: ${themeGet('colors.greys.alto')};
  `}

  ${props => props.error && css`
    border-color: ${themeGet('colors.ui.error')};
  `}
`;

Input.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...border.propTypes,
  ...borderColor.propTypes,
  error: PropTypes.bool,
  underline: PropTypes.bool,
  readonlyVariant: PropTypes.string,
};

Input.defaultProps = {
  is: 'input',
  mb: 3,
  py: 3,
  px: 4,
  bg: 'white',
  color: 'greys.charcoal',
  fontSize: 'base',
  lineHeight: 'normal',
  border: 2,
  borderColor: 'greys.alto',
  readonlyVariant: 'naked',
  blacklist: Object.keys(Input.propTypes),
};

export default Input;
