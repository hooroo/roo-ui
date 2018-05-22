import styled from 'styled-components';
import { themeGet } from 'styled-system';
import tag from 'clean-tag';

const ListItem = styled(tag.li)`
  margin: 0 0 ${themeGet('space.4')};
`;

ListItem.displayName = 'ListItem';

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
