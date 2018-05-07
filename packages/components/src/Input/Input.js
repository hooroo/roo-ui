import styled from 'styled-components';
import { space, themeGet } from 'styled-system';
import tag from 'clean-tag';

const Input = styled(tag.input)`
  display: block;
  width: 100%;
  margin: 0;
  padding: ${themeGet('space.3')} ${themeGet('space.4')};
  font-size: ${themeGet('fontSizes.sm')};
  line-height: ${themeGet('lineHeights.normal')};
  color: ${themeGet('colors.grey.1')};
  border: ${themeGet('borders.2')};
  border-color: ${themeGet('colors.grey.5')};
  outline: 0;
  appearance: none;


  &:focus {
    border-color: ${themeGet('colors.brand.secondary')};
  }

  ::placeholder {
    color: ${themeGet('colors.grey.4')};
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
