import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { hideVisually } from 'polished';
import { color, fontWeight, themeGet, space, lineHeight } from 'styled-system';
import omitProps from '../omitProps';

const Link = styled('a', omitProps(['hidden', 'underline']))`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: ${themeGet('colors.ui.link')};

  &:hover {
    color: ${themeGet('colors.ui.linkHover')};
  }

  &:focus {
    outline: ${themeGet('borders.2')} ${themeGet('colors.brand.secondary')};
  }

  ${color} ${fontWeight} ${space} ${lineHeight} ${props =>
  props.underline &&
  css`
    &,
    &:hover {
      text-decoration: underline;
      color: inherit;
    }
  `} ${props =>
  props.hidden &&
  css`
    ${hideVisually()};
  `};
`;

Link.propTypes = {
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...space.propTypes,
  hidden: PropTypes.bool,
  underline: PropTypes.bool,
};

Link.defaultProps = {
  underline: false,
  hidden: false,
};

Link.displayName = 'Link';

export default Link;
