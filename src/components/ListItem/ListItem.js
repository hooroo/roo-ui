import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { space } from '@styled-system/space';
import { border } from '@styled-system/border';
import propTypes from '@styled-system/prop-types';

const ListItem = styled.li`
  margin: 0 0 ${themeGet('space.4')};
  ${space} ${border};
`;

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  ...propTypes.space,
  ...propTypes.borders,
  ...propTypes.borderColor,
};

export default ListItem;
