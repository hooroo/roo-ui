import tag from 'clean-tag';
import { Text } from '..';

const Paragraph = Text.withComponent(tag.p);

Paragraph.defaultProps = {
  ...Text.defaultProps,
  m: 0,
  mb: 2,
};

export default Paragraph;
