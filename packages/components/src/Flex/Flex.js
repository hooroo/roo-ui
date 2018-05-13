import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  width,
  height,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
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
  ...color.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
};

Flex.displayName = 'Flex';

export default Flex;
