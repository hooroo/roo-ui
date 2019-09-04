import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { themeGet } from '@styled-system/theme-get';
import {
  space,
  color,
  fontSize,
  lineHeight,
  border,
  borderColor,
  textAlign,
} from 'styled-system';

import omitProps from '../omitProps';

const Input = styled('input', omitProps(['color', 'fontSize']))`
  ${space} ${color} ${fontSize} ${lineHeight} ${border} ${borderColor} ${textAlign} display: block;
  width: 100%;
  outline: 0;
  transition: border-color ${themeGet('transitions.default')};
  appearance: none;

  &:focus {
    border-color: ${themeGet('colors.brand.secondary')};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${themeGet('colors.greys.steel')};
    background-color: ${themeGet('colors.greys.porcelain')};
  }

  ::placeholder {
    color: ${themeGet('colors.greys.steel')};
  }

  ::-ms-clear {
    display: none;
  }

  ${props =>
    props.underline &&
    css`
      border: none;
      border-bottom: ${themeGet('borders.2')(props)};
      border-color: ${themeGet('colors.greys.alto')(props)};
    `} ${props =>
  props.error &&
  css`
    border-color: ${themeGet('colors.ui.error')(props)};
  `};
`;

Input.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...border.propTypes,
  ...borderColor.propTypes,
  ...textAlign.propTypes,
  error: PropTypes.bool,
  underline: PropTypes.bool,
};

Input.defaultProps = {
  mb: 3,
  py: 3,
  px: 4,
  bg: 'white',
  color: 'greys.charcoal',
  fontSize: 'base',
  lineHeight: 'normal',
  border: 2,
  borderColor: 'greys.alto',
  textAlign: 'left',
};

export default Input;
