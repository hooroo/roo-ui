import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { space, size, height, width, verticalAlign } from 'styled-system';

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  ${space} ${size} ${height} ${width} ${verticalAlign} ${props =>
  props.inline &&
  css`
    display: inline-block;
  `};
`;

Image.propTypes = {
  ...space.propTypes,
  ...size.propTypes,
  ...height.propTypes,
  ...width.propTypes,
  ...verticalAlign.propTypes,
  inline: PropTypes.bool,
};

Image.defaultProps = {
  inline: false,
  alt: '',
};

export default Image;
