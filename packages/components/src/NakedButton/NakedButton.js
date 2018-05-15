import styled from 'styled-components';
import tag from 'clean-tag';
import { space } from 'styled-system';

const NakedButton = styled(tag.button).attrs({
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

  ${space}
`;

NakedButton.propTypes = {
  ...space.propTypes,
};

export default NakedButton;
