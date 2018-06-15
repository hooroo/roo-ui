import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { rem } from 'polished';
import tag from 'clean-tag';

const Radio = props => (
  <RadioWrapper>
    <RadioInput type="radio" {...props} />
    <RadioIcon />
  </RadioWrapper>
);

const RadioWrapper = styled(tag.div)`
  display: inline-block;
  position: relative;
`;

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;

  &:focus {
    box-shadow: none;
  }
`;

const RadioIcon = styled(tag.div)`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin-bottom: ${rem('2px')};
  margin-right: ${themeGet('space.2')};
  height: ${rem('20px')};
  width: ${rem('20px')};
  background-color: ${themeGet('colors.white')};
  border: ${themeGet('borders.2')};
  border-color: ${themeGet('colors.grey.2')};
  border-radius: 50%;
  z-index: 1;

  input:checked + &,
  input:focus + &,
  input:hover + & {
    border-color: ${themeGet('colors.brand.secondary')};
    transition: ${themeGet('transitions.default')}
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
      background-color: black;
    }
  }

  input:disabled + & {
    background-color: ${themeGet('colors.grey.2')};
    border-color: ${themeGet('colors.grey.2')};
  }
`;

export default Radio;
