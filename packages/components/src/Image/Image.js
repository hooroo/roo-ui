import styled from 'styled-components';
import tag from 'clean-tag';
import { space } from 'styled-system';

const Image = styled(tag.img)`
  display: block;
  max-width: 100%;
  height: auto;

  ${space}
`;

Image.propTypes = {
  ...space.propTypes,
};

export default Image;
