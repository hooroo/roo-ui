import styled from 'styled-components';
import tag from 'clean-tag';
import { maxWidth } from 'styled-system';

const Container = styled(tag)`
  margin-left: auto;
  margin-right: auto;

  ${maxWidth}
`;

Container.propTypes = {
  ...maxWidth.propTypes,
};

Container.defaultProps = {
  maxWidth: 'default',
};

export default Container;
