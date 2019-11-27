import { space } from '@styled-system/space';
import { color } from '@styled-system/color';
import { layout } from '@styled-system/layout';
import { flexbox } from '@styled-system/flexbox';
import { border } from '@styled-system/border';
import { position } from '@styled-system/position';
import { typography } from '@styled-system/typography';
import { shadow } from '@styled-system/shadow';
import propTypes from '@styled-system/prop-types';
import styled from '@emotion/styled';
import omitProps from '../omitProps';

const Box = styled('div', omitProps())`
  ${layout} ${space} ${color} ${typography} ${shadow} ${border} ${flexbox} ${position};
`;

Box.propTypes = {
  ...propTypes.display,
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.minWidth,
  ...propTypes.maxWidth,
  ...propTypes.height,
  ...propTypes.minHeight,
  ...propTypes.maxHeight,
  ...propTypes.color,
  ...propTypes.textAlign,
  ...propTypes.boxShadow,
  ...propTypes.borderRadius,
  ...propTypes.borders,
  ...propTypes.borderColor,
  ...propTypes.flexBasis,
  ...propTypes.flexDirection,
  ...propTypes.flexWrap,
  ...propTypes.flex,
  ...propTypes.position,
  ...propTypes.zIndex,
  ...propTypes.top,
  ...propTypes.right,
  ...propTypes.bottom,
  ...propTypes.left,
};

export default Box;
