import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  width,
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
  ${color}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection};
`;

Flex.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
};

export default Flex;
