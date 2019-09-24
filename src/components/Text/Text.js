import PropTypes from 'prop-types';
import propTypes, { propType } from '@styled-system/prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { hideVisually } from 'polished';
import {
  textStyle,
  color,
  typography,
  space,
  layout,
  system,
  compose,
} from 'styled-system';
import omitProps from '../omitProps';

const customProps = system({
  textDecoration: true,
});

const styleProps = compose(
  color,
  typography,
  space,
  layout,
  customProps,
);

const Text = styled('span', omitProps())`
  ${styleProps}
  ${textStyle}

  ${props =>
    props.hidden &&
    css`
      ${hideVisually()};
    `};
`;

Text.propTypes = {
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.layout,
  textDecoration: propType,
  hidden: PropTypes.bool,
};

Text.defaultProps = {
  hidden: false,
  textStyle: 'text',
};

Text.displayName = 'Text';

export default Text;
