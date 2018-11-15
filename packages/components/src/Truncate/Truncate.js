import Text from '../Text';

const Truncate = Text.extend`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default Truncate;
