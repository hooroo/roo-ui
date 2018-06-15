import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';
import lowerCase from 'lodash/lowerCase';
import omit from 'lodash/omit';

import { Box } from '..';

const Root = Box.extend`
  position: relative;
`;

const Menu = Box.extend`
  position: absolute;
  width: 100%;
  margin-top: -${themeGet('space.3')};
  border-left: ${themeGet('borders.1')} ${themeGet('colors.grey.2')};
  border-right: ${themeGet('borders.1')} ${themeGet('colors.grey.2')};
`;
Menu.displayName = 'Menu';

const MenuItem = Box.extend`
  background-color: ${themeGet('colors.grey.3')};
  border-bottom: ${themeGet('borders.1')} ${themeGet('colors.grey.2')};
  border-left: ${themeGet('borders.1')} transparent;
  padding: ${themeGet('space.3')} ${themeGet('space.4')};

  ${props =>
    props.highlighted &&
    css`
      background-color: white;
      margin-left: -1px;
      border-left: ${themeGet('borders.2')}
                   ${themeGet('colors.brand.secondary')};
    `};
`;
MenuItem.displayName = 'MenuItem';
MenuItem.defaultProps = {
  blacklist: ['highlighted'],
};

export default class Autocomplete extends React.Component {
  static propTypes = {
    items: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
    filterItems: PropTypes.bool,
    restrictValue: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    render: PropTypes.func,
  }

  static defaultProps = {
    filterItems: true,
    restrictValue: true,
    children: null,
    render: null,
  }

  state = {
    inputValue: '',
  }

  getItems = (inputValue) => {
    if (!this.props.filterItems) {
      return this.props.items;
    }

    return this.props.items.filter(item =>
      !inputValue || lowerCase(item).includes(lowerCase(inputValue)));
  }

  handleStateChange = ({ inputValue }) => {
    if (!this.props.restrictValue) {
      this.setState({ inputValue });
    }
  }

  renderCallback = (downshiftProps) => {
    const { render, children } = this.props;

    if (render) {
      return render(downshiftProps);
    } else if (typeof children === 'function') {
      return children(downshiftProps);
    }

    return children;
  }

  renderMenu = downshiftProps => (
    <Menu>
      {this.getItems(downshiftProps.inputValue).map((item, index) => (
        <MenuItem
          {...downshiftProps.getItemProps({
            index,
            item,
            key: item,
            highlighted: downshiftProps.highlightedIndex === index,
          })}
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  render() {
    return (
      <Downshift
        {...omit(this.props, Object.keys(Autocomplete.propTypes))}
        onStateChange={this.handleStateChange}
        selectedItem={this.state && this.state.inputValue}
      >
        {downshiftProps => (
          <Root
            {...downshiftProps.getRootProps({ refKey: 'innerRef' })}
          >
            {this.renderCallback(downshiftProps)}
            {downshiftProps.isOpen && this.renderMenu(downshiftProps)}
          </Root>
        )}
      </Downshift>
    );
  }
}
