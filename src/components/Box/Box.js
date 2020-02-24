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
  flexDirection,
  flexWrap,
  flex,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  overflow,
  fontWeight,
  fontSize,
} from 'styled-system';
import styled from '@emotion/styled';
import omitProps from '../omitProps';

const Box = styled('div', omitProps())`
  ${display} ${space} ${width} ${minWidth} ${maxWidth} ${height} ${minHeight} ${maxHeight} ${color} ${textAlign} ${boxShadow} ${borderRadius} ${borders} ${borderColor} ${flexBasis} ${flexDirection} ${flexWrap} ${flex} ${position} ${zIndex} ${top} ${right} ${bottom} ${left} ${overflow} ${fontWeight} ${fontSize};
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
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...flex.propTypes,
  ...position.propTypes,
  ...zIndex.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  ...fontWeight.propTypes,
  ...fontSize.propTypes,
};

export default Box;
