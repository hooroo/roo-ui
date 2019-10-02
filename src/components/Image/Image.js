import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { space, layout, compose } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  ${compose(
    space,
    layout,
  )}

  ${props =>
    props.inline &&
    css`
      display: inline-block;
    `};
`;

Image.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
  inline: PropTypes.bool,
};

Image.defaultProps = {
  inline: false,
  alt: '',
};

export default Image;
