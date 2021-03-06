import styled from '@emotion/styled';
import Text from '../Text';

const Truncate = styled(Text)`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default Truncate;
