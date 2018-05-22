import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import tag from 'clean-tag';
import { ListItem } from '..';

const List = styled(({ ordered, ...listProps }) => {
  const ListComponent = ordered ? tag.ol : tag.ul;
  return (
    <ListComponent {...listProps} />
  );
})`
    margin: ${themeGet('space.4')} 0;
    padding: 0 0 0 ${themeGet('space.4')};
    
    ${props => props.columns > 1 && css`
      display: flex;
      flex-wrap: wrap;
      ${ListItem} {
        flex: 1 1 ${100 / props.columns}%;
      }
    `}
`;

List.displayName = 'List';

List.propTypes = {
  ordered: PropTypes.bool,
  columns: PropTypes.number.isRequired,
};

List.defaultProps = {
  ordered: false,
  columns: 1,
};

export default List;
