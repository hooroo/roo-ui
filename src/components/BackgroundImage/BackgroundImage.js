import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { space } from '@styled-system/space';
import { layout } from '@styled-system/layout';
import { background } from '@styled-system/background';
import propTypes from '@styled-system/prop-types';

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});

  ${layout} ${space} ${background};
`;

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
  ...propTypes.height,
  ...propTypes.width,
  ...propTypes.space,
  ...propTypes.backgroundSize,
  ...propTypes.backgroundPosition,
  ...propTypes.backgroundRepeat,
};

export default BackgroundImage;
