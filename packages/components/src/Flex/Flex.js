import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  width,
  height,
  minHeight,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flexBasis,
  flex,
} from 'styled-system';

const Flex = styled(tag)`
  display: flex;

  ${space}
  ${width}
  ${height}
  ${color}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection};
`;

Flex.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...minHeight.propTypes,
  ...color.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...flexBasis.propTypes,
  ...flex.propTypes,
};

export default Flex;
