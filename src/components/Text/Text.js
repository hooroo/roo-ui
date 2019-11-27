import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { hideVisually } from 'polished';
import { system } from 'styled-system';
import { textStyle } from '@styled-system/variant';
import { color } from '@styled-system/color';
import { space } from '@styled-system/space';
import { typography } from '@styled-system/typography';
import { layout } from '@styled-system/layout';
import propTypes from '@styled-system/prop-types';
import omitProps from '../omitProps';

const Text = styled('span', omitProps())`
  ${textStyle} ${color} ${typography} ${space} ${layout};
  ${system({ textDecoration: true })};
  ${props =>
    props.hidden &&
    css`
      ${hideVisually()};
    `};
`;

Text.propTypes = {
  ...propTypes.textStyle,
  ...propTypes.color,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.letterSpacing,
  ...propTypes.lineHeight,
  ...propTypes.space,
  ...propTypes.textAlign,
  ...propTypes.textDecoration,
  ...propTypes.display,
  hidden: PropTypes.bool,
};

Text.defaultProps = {
  hidden: false,
  textStyle: 'text',
};

Text.displayName = 'Text';

export default Text;
