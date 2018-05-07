import styled from 'styled-components';
import tag from 'clean-tag';
import { color, hover } from 'styled-system';

const Link = styled(tag.a)`
  cursor: pointer;
  text-decoration: none;

  ${color}
  ${hover}
`;

Link.propTypes = {
  ...color.propTypes,
  ...hover.propTypes,
};

Link.defaultProps = {
  color: 'ui.link',
  hover: {
    color: 'ui.linkHover',
  },
};

export default Link;
