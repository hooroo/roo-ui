import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { themeGet } from '@styled-system/theme-get';
import { style } from 'styled-system';

import ListItem from '../ListItem';

const columns = style({
  prop: 'columns',
  cssProperty: 'flexBasis',
  transformValue: n => `${100 / n}%`,
});

const ListBase = styled('div')`
  margin: ${themeGet('space.4')} 0;
  padding-left: ${themeGet('space.8')};

  ${props =>
    (props.flush || props.columns) &&
    css`
      list-style-position: inside;
      padding-left: 0;
    `} ${props =>
    props.columns &&
    css`
      display: flex;
      flex-wrap: wrap;
      margin-left: -${themeGet('space.2')(props)};
      margin-right: -${themeGet('space.2')(props)};

      ${ListItem} {
        flex: 1 1;
        padding: 0 ${themeGet('space.2')(props)};

        ${columns(props)};
      }
    `};
`;

const List = props => <ListBase {...props} as={props.ordered ? 'ol' : 'ul'} />;

List.displayName = 'List';

List.propTypes = {
  ...columns.propTypes,
  flush: PropTypes.bool,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  ordered: false,
  flush: false,
  columns: null,
};

export default List;
