import {
  display,
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
  position,
  zIndex,
} from 'styled-system';
import styled from '../styledOmitProps';

const Box = styled('div')`
  ${display}
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
  ${position}
  ${zIndex}
`;

Box.propTypes = {
  ...display.propTypes,
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
  ...position.propTypes,
  ...zIndex.propTypes,
};

export default Box;
