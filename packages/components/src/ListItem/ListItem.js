import styled from 'styled-components';
import { themeGet, space, borders, borderColor } from 'styled-system';

import tag from 'clean-tag';

const ListItem = styled(tag.li)`
  margin: 0 0 ${themeGet('space.4')};
  ${space}
  ${borders}
  ${borderColor}
`;

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  ...space.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
};

export default ListItem;
