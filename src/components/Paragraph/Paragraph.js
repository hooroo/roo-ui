import { Text } from '../';

const Paragraph = Text.withComponent('p');

Paragraph.defaultProps = {
  ...Text.defaultProps,
  m: 0,
  mb: 2,
};

export default Paragraph;
