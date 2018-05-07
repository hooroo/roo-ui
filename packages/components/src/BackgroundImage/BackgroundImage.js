import styled from 'styled-components';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import {
  height,
  width,
  space,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} from 'styled-system';

const BackgroundImage = styled(tag.div)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});

  ${height}
  ${width}
  ${space}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
`;

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
  ...height.propTypes,
  ...width.propTypes,
  ...space.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
};

export default BackgroundImage;
