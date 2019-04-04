import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, size, height, width } from 'styled-system';

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  ${space}
  ${size}
  ${height}
  ${width}

  ${props => props.inline && css`
    display: inline-block;
  `}
`;

Image.propTypes = {
  ...space.propTypes,
  ...size.propTypes,
  ...height.propTypes,
  ...width.propTypes,
  inline: PropTypes.bool,
};

Image.defaultProps = {
  inline: false,
  alt: '',
};

export default Image;
