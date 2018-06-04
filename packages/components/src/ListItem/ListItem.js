import styled from 'styled-components';
import { themeGet } from 'styled-system';
import tag from 'clean-tag';

import { List } from '..';

const ListItem = styled(tag.li)`
  margin: 0 0 ${themeGet('space.4')};

  ${List} {
    padding-left: ${themeGet('space.4')};
  }
`;

ListItem.displayName = 'ListItem';

export default ListItem;
