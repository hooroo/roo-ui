import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { space } from '@styled-system/space';
import { layout } from '@styled-system/layout';
import propTypes from '@styled-system/prop-types';

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  ${space} ${layout} ${props =>
  props.inline &&
  css`
    display: inline-block;
  `};
`;

Image.propTypes = {
  ...propTypes.space,
  ...propTypes.size,
  ...propTypes.height,
  ...propTypes.width,
  inline: PropTypes.bool,
};

Image.defaultProps = {
  inline: false,
  alt: '',
};

export default Image;
