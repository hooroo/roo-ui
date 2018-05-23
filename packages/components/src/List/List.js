import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import tag from 'clean-tag';
import { ListItem } from '..';

const List = styled(({
  ordered, columns, stackColumnsBreakpoint, ...listProps
}) => {
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

      ${props.stackColumnsBreakpoint >= 0 && css`
        @media (max-width: ${themeGet(`breakpoints.${props.stackColumnsBreakpoint}`)}) {
          ${ListItem} {
            flex-basis: 100%;
          }
        }
      `}
    `}
`;

List.displayName = 'List';

List.propTypes = {
  ordered: PropTypes.bool,
  columns: PropTypes.number,
  stackColumnsBreakpoint: PropTypes.number,
};

List.defaultProps = {
  ordered: false,
  columns: 1,
  stackColumnsBreakpoint: undefined,
};

export default List;
