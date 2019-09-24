import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import propTypes from '@styled-system/prop-types';
import {
  space,
  layout,
  typography,
  color,
  textStyle,
  system,
  compose,
} from 'styled-system';

const customProps = system({
  textDecoration: true,
});

const customHoverProps = system({
  hoverColor: {
    property: 'color',
    scale: 'colors',
  },
});

const systemProps = compose(
  space,
  layout,
  typography,
  color,
  textStyle,
  customProps,
);

const NakedButton = styled('button')`
  border: none;
  width: auto;
  overflow: visible;
  font: inherit;
  line-height: normal;
  appearance: none;
  cursor: pointer;

  ${systemProps};

  &:focus {
    outline: ${themeGet('borders.2')} ${themeGet('colors.brand.secondary')};
  }

  &:hover {
    ${customHoverProps};
  }

  &:disabled {
    opacity: ${themeGet('opacity.disabled')};
    cursor: not-allowed;
  }

  &:hover:disabled {
    ${color};
  }
`;

NakedButton.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.color,
};

NakedButton.defaultProps = {
  as: 'button',
  type: 'button',
  bg: 'transparent',
  color: 'inherit',
  p: 0,
  m: 0,
};

export default NakedButton;
