import tag from 'clean-tag';
import { Text } from '..';

const Paragraph = Text.withComponent(tag.p);

Paragraph.defaultProps = {
  textStyle: 'text',
  m: 0,
  mb: 2,
};

export default Text;
