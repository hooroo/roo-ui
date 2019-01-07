import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet, style } from 'styled-system';
import tag from 'clean-tag';

import { ListItem } from '..';

const columns = style({
  prop: 'columns',
  cssProperty: 'flexBasis',
  getter: n => `${100 / n}%`,
});

const List = styled(tag).attrs({
  is: props => (props.ordered ? 'ol' : 'ul'),
})`
  margin: ${themeGet('space.4')} 0;
  padding-left: ${themeGet('space.8')};

  ${props => (props.flush || props.columns) && css`
    list-style-position: inside;
    padding-left: 0;
  `}

  ${props => props.columns && css`
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
  flush: PropTypes.bool,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  blacklist: Object.keys(List.propTypes),
  ordered: false,
  flush: false,
  columns: null,
};

export default List;
