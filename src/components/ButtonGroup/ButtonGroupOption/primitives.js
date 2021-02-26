import styled from '@emotion/styled';
import { themeGet } from 'styled-system';
import { hideVisually } from 'polished';

const white = themeGet('colors.white');
const blue = themeGet('colors.blue');
const dusty = themeGet('colors.greys.dusty');
const steel = themeGet('colors.greys.steel');
const charcoal = themeGet('colors.greys.charcoal');
const alto = themeGet('colors.greys.alto');
const porcelain = themeGet('colors.greys.porcelain');
const borderRadius = themeGet('radii.default');
const bold = themeGet('fontWeights.bold');

const compactPadding = props =>
  `${themeGet('space.2')(props)} ${themeGet('space.4')(props)}`;
const basePadding = props =>
  `${themeGet('space.3')(props)} ${themeGet('space.5')(props)}`;

const getFontSize = ({ size = 'base' }) => themeGet(`fontSizes.${size}`);

export const HiddenInput = styled.input`
  ${hideVisually()};
`;

export const ButtonLabel = styled.label`
  position: relative;
  flex: 1 1 auto;
  width: ${props => 100 / props.totalOptions}%;
  white-space: nowrap;
  text-align: center;
  user-select: none;
  padding: ${props => (props.size === 'sm' ? compactPadding : basePadding)};
  background-color: ${porcelain};
  cursor: pointer;
  font-size: ${getFontSize};
  line-height: ${themeGet('lineHeights.normal')};
  color: ${steel};
  font-weight: ${bold};
  transition: font-size 200ms ease-in-out;
  border: 2px solid ${alto};
  margin-left: -2px;
  z-index: 1;

  &:first-of-type {
    margin-left: 0;
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
  }

  &:last-of-type {
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }

  ${HiddenInput}:checked + & {
    color: ${charcoal};
    border-color: ${blue};
    background-color: ${white};
    cursor: unset;
    z-index: 2;
  }

  ${HiddenInput}:focus + & {
    border-color: ${themeGet('colors.ui.focusColor')};
    z-index: 2;
  }

  ${HiddenInput}:disabled + & {
    color: ${dusty};
    font-weight: ${bold};
    background-color: ${porcelain};
    border-color: ${alto};
    cursor: unset;
  }
`;
