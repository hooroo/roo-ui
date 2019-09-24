import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { themeGet } from '@styled-system/theme-get';
import { space, color, typography, border, compose } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import omitProps from '../omitProps';

const Input = styled('input', omitProps(['color', 'fontSize']))`
  outline: 0;
  appearance: none;
  transition: border-color ${themeGet('transitions.default')};

  ${compose(
    space,
    color,
    typography,
    border,
  )}

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
    `}

  ${props =>
    props.error &&
    css`
      border-color: ${themeGet('colors.ui.error')(props)};
    `};
`;

Input.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.border,
  error: PropTypes.bool,
  underline: PropTypes.bool,
};

Input.defaultProps = {
  mb: 3,
  py: 3,
  px: 4,
  bg: 'white',
  display: 'block',
  width: '100%',
  color: 'greys.charcoal',
  fontSize: 'base',
  lineHeight: 'normal',
  border: 2,
  borderColor: 'greys.alto',
  textAlign: 'left',
};

export default Input;
