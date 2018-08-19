import styled from 'styled-components';
import tag from 'clean-tag';
import { space, verticalAlign } from 'styled-system';

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

  ${space} ${verticalAlign};
`;

NakedButton.propTypes = {
  ...verticalAlign.propTypes,
  ...space.propTypes,
};

NakedButton.defaultProps = {
  blacklist: Object.keys(NakedButton.propTypes),
};

export default NakedButton;
