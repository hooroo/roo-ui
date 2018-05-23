import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import tag from 'clean-tag';
import { ListItem } from '..';

const listColumns = ({ columns }) => {
  const responsiveColumns = Array.isArray(columns) ? columns : [columns];

  // Allow for collapsing margins with single column nested lists
  if (responsiveColumns.length === 1 && responsiveColumns[0] === 1) {
    return undefined;
  }

  return [
    css`
      display: flex;
      flex-wrap: wrap;
      
      ${ListItem} {
        flex: 1 1 ${100 / responsiveColumns.shift()}%;
      }
    `,
    ...responsiveColumns.map((numColumns, index) => css`
      @media (min-width: ${themeGet(`breakpoints.${index}`)}) {
        ${ListItem} {
          flex: 1 1 ${100 / numColumns}%;
        }
      }
    `),
  ];
};

const List = styled(({
  ordered, columns, ...listProps
}) => {
  const ListComponent = ordered ? tag.ol : tag.ul;
  return (
    <ListComponent {...listProps} />
  );
})`
    margin: ${themeGet('space.4')} 0;
    padding: 0 0 0 ${themeGet('space.4')};
    
    ${listColumns}
`;

List.displayName = 'List';

List.propTypes = {
  ordered: PropTypes.bool,
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};

List.defaultProps = {
  ordered: false,
  columns: 1,
};

export default List;
