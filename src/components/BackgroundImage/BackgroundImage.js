import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { layout, space, background, compose } from 'styled-system';

const BackgroundImage = styled.div`
  background-image: url(${props => props.src});

  ${compose(
    layout,
    space,
    background,
  )}
`;

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.background,
};

BackgroundImage.defaultProps = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default BackgroundImage;
