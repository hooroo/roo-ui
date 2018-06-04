import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, responsiveStyle } from 'styled-system';
import tag from 'clean-tag';

import { ListItem } from '..';

const columns = responsiveStyle({
  prop: 'columns',
  cssProperty: 'flexBasis',
  getter: n => `${100 / n}%`,
});

const List = styled(tag).attrs({
  is: props => (props.ordered ? 'ol' : 'ul'),
})`
  margin: ${themeGet('space.4')} 0;
  padding-left: 0;
  list-style-position: inside;

  ${props =>
    props.columns &&
    css`
      display: flex;
      flex-wrap: wrap;
      margin-left: -${themeGet('space.2')};
      margin-right: -${themeGet('space.2')};

      ${ListItem} {
        flex: 1 1;
        padding: 0 ${themeGet('space.2')};

        ${columns};
      }
    `};
`;

List.displayName = 'List';

List.propTypes = {
  ...columns.propTypes,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  ordered: false,
  columns: null,
};

export default List;
