import styled from 'styled-components';
import PropTypes from 'prop-types';
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

  ${space}
  ${verticalAlign}
`;

NakedButton.propTypes = {
  verticalAlign: PropTypes.string,
  ...space.propTypes,
};

export default NakedButton;
