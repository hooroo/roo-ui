import styled from 'styled-components';
import { space, themeGet } from 'styled-system';
import tag from 'clean-tag';

const Input = styled(tag.input)`
  display: block;
  width: 100%;
  margin: 0;
  padding: ${themeGet('space.3')} ${themeGet('space.4')};
  font-size: ${themeGet('fontSizes.base')};
  line-height: ${themeGet('lineHeights.normal')};
  color: ${themeGet('colors.grey.0')};
  border: ${themeGet('borders.2')};
  border-color: ${themeGet('colors.grey.2')};
  outline: 0;
  appearance: none;


  &:focus {
    border-color: ${themeGet('colors.brand.secondary')};
  }

  ::placeholder {
    color: ${themeGet('colors.grey.1')};
  }

  ::-ms-clear {
    display: none;
  }

  ${space};
`;

Input.propTypes = {
  ...space.propTypes,
};

export default Input;
