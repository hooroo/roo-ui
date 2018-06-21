import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, themeGet } from 'styled-system';
import tag from 'clean-tag';

const Input = styled(tag)`
  display: block;
  width: 100%;
  margin: 0;
  margin-bottom: ${themeGet('space.3')};
  padding: ${themeGet('space.3')} ${themeGet('space.4')};
  font-size: ${themeGet('fontSizes.base')};
  line-height: ${themeGet('lineHeights.normal')};
  color: ${themeGet('colors.grey.0')};
  background-color: ${themeGet('colors.white')};
  border: ${themeGet('borders.2')};
  border-color: ${themeGet('colors.grey.2')};
  outline: 0;
  transition: border-color ${themeGet('transitions.default')};
  appearance: none;

  &:focus {
    border-color: ${themeGet('colors.brand.secondary')};
  }

  &[readonly] {
    border-color: transparent;
    background: transparent;
    padding-left: 0;
  }

  ::placeholder {
    color: ${themeGet('colors.grey.1')};
  }

  ::-ms-clear {
    display: none;
  }

  ${props => props.underline && css`
    border: none;
    border-bottom: ${themeGet('borders.2')};
    border-color: ${themeGet('colors.grey.2')};
  `}

  ${props => props.error && css`
    border-color: ${themeGet('colors.ui.error')};
  `}

  ${space};
`;

Input.propTypes = {
  ...space.propTypes,
  error: PropTypes.bool,
  underline: PropTypes.bool,
};

Input.defaultProps = {
  is: 'input',
  blacklist: Object.keys(Input.propTypes),
};

export default Input;
