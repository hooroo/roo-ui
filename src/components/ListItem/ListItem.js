import styled from '@emotion/styled';
import propTypes from '@styled-system/prop-types';
import { space, borders, compose } from 'styled-system';

const styleProps = compose(
  space,
  borders,
);

const ListItem = styled('li')(styleProps);

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  ...propTypes.space,
  ...propTypes.borders,
};

ListItem.defaultProps = {
  mb: 4,
};

export default ListItem;
