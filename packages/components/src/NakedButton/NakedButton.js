import styled from 'styled-components';
import { space, verticalAlign, themeGet, color } from 'styled-system';

const NakedButton = styled('button').attrs({
  type: 'button',
})`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: ${themeGet('borders.2')} ${themeGet('colors.brand.secondary')};
  }

  ${space}
  ${verticalAlign}
  ${color}
`;

NakedButton.propTypes = {
  ...verticalAlign.propTypes,
  ...space.propTypes,
  ...color.propTypes,
};

NakedButton.defaultProps = {
  as: 'button',
};

export default NakedButton;
