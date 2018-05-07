import styled from 'styled-components';
import tag from 'clean-tag';
import { space, width, color, textAlign } from 'styled-system';

const Box = styled(tag)`
  ${space}
  ${width}
  ${color}
  ${textAlign}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes,
};

export default Box;
