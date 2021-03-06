import React from 'react';
import styled from '@emotion/styled';
import { themeGet } from 'styled-system';
import { rem } from 'polished';

const Radio = React.forwardRef((props, ref) => (
  <RadioWrapper>
    <RadioInput type="radio" ref={ref} {...props} />
    <RadioIcon />
  </RadioWrapper>
));

Radio.displayName = 'Radio';

const RadioWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 0;

  &:focus {
    box-shadow: none;
  }
`;

const RadioIcon = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin-bottom: ${rem('2px')};
  margin-right: ${themeGet('space.2')};
  height: ${rem('20px')};
  width: ${rem('20px')};
  background-color: ${themeGet('colors.white')};
  border: ${themeGet('borders.2')};
  border-color: ${themeGet('colors.greys.alto')};
  border-radius: 50%;
  z-index: 1;

  input:checked + &,
  input:focus + &,
  input:hover + & {
    border-color: ${themeGet('colors.brand.secondary')};
    transition: ${themeGet('transitions.default')};
  }

  input:checked + & {
    &:after {
      position: absolute;
      display: block;
      content: '';
      top: ${themeGet('space.1')};
      left: ${themeGet('space.1')};
      height: ${themeGet('space.2')};
      width: ${themeGet('space.2')};
      border-radius: 50%;
      background-color: ${themeGet('colors.greys.charcoal')};
    }
  }

  input:disabled + & {
    background-color: ${themeGet('colors.greys.alto')};
    border-color: ${themeGet('colors.greys.alto')};
  }
`;

export default Radio;
