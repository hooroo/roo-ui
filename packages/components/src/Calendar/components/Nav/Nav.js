import { themeGet } from 'styled-system';

import { Box, NakedButton } from '../../../';

export const Nav = Box.extend`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

export const NavButton = NakedButton.extend`
  border-radius: ${themeGet('radii.rounded')};
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.grey.1')};
  box-shadow: ${themeGet('shadows.default')};

  &:hover,
  &:focus {
    outline: none;
    color: ${themeGet('colors.brand.primary')};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: ${themeGet('colors.grey.2')};
  }
`;

