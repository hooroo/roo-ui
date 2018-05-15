import styled from 'styled-components';
import tag from 'clean-tag';
import { maxWidth, space } from 'styled-system';

const Container = styled(tag)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${maxWidth}
  ${space}
`;

Container.propTypes = {
  ...maxWidth.propTypes,
  ...space.propTypes,
};

Container.defaultProps = {
  maxWidth: 'default',
};

export default Container;
