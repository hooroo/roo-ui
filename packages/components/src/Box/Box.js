import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  color,
  textAlign,
  boxShadow,
  borderRadius,
  borders,
  borderColor,
  flexBasis,
  flex,
} from 'styled-system';

const Box = styled(tag)`
  ${space}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${color}
  ${textAlign}
  ${boxShadow}
  ${borderRadius}
  ${borders}
  ${borderColor}
  ${flexBasis}
  ${flex}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...height.propTypes,
  ...minHeight.propTypes,
  ...maxHeight.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes,
  ...boxShadow.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...flexBasis.propTypes,
  ...flex.propTypes,
};

export default Box;
