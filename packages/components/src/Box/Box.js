import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  width,
  height,
  color,
  textAlign,
  boxShadow,
  borderRadius,
  borders,
  borderColor,
} from 'styled-system';

const Box = styled(tag)`
  ${space}
  ${width}
  ${height}
  ${color}
  ${textAlign}
  ${boxShadow}
  ${borderRadius}
  ${borders};
  ${borderColor};
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes,
  ...boxShadow.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
};

export default Box;
