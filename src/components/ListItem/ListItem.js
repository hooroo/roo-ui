import styled from '@emotion/styled';
import { space, borders, borderColor } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

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
