import styled from 'styled-components';
import tag from 'clean-tag';
import { space, width, color } from 'styled-system';

const Box = styled(tag)`
  ${space}
  ${width}
  ${color}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
};

export default Box;
