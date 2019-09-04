import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { space, borders, borderColor } from 'styled-system';

const ListItem = styled.li`
  margin: 0 0 ${themeGet('space.4')};
  ${space} ${borders} ${borderColor};
`;

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  ...space.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
};

export default ListItem;
