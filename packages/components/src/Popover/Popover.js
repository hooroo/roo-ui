import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { rem } from 'polished';
import { Manager, Reference, Popper } from 'react-popper';
import onClickOutside from 'react-onclickoutside';
import { css } from 'styled-components';
import partition from 'lodash/partition';

import { Box } from '../';

const ContentWrapper = Box.extend`
  margin: ${rem('12px')};
  background: ${themeGet('colors.greys.porcelain')};
  border: ${themeGet('borders.2')} ${themeGet('colors.greys.alto')};
`;

const Triangle = Box.extend`
  height: 0;
  width: 0;
  border: solid transparent;
  border-width: ${rem('12px')};
  position: absolute;

  ${props => props.placement === 'top' && css`
    border-top-color: ${themeGet('colors.greys.porcelain')};
    top: 100%;
  `};

  ${props => props.placement === 'right' && css`
    border-right-color: ${themeGet('colors.greys.porcelain')};
    right: 100%;
  `};

  ${props => props.placement === 'bottom' && css`
    border-bottom-color: ${themeGet('colors.greys.porcelain')};
    bottom: 100%;
  `};

   ${props => props.placement === 'left' && css`
    border-left-color: ${themeGet('colors.greys.porcelain')};
    left: 100%;
  `};
`;

const TriangleBorder = Triangle.extend`
 ${props => props.placement === 'top' && css`
    border-top-color: ${themeGet('colors.greys.alto')};
    margin-top: ${rem('2px')};
  `};

  ${props => props.placement === 'right' && css`
    border-right-color: ${themeGet('colors.greys.alto')};
    margin-right: ${rem('2px')};
  `};

  ${props => props.placement === 'bottom' && css`
    border-bottom-color: ${themeGet('colors.greys.alto')};
    margin-bottom: ${rem('2px')};
  `};

   ${props => props.placement === 'left' && css`
    border-left-color: ${themeGet('colors.greys.alto')};
    margin-left: ${rem('2px')};
  `};
`;

class Base extends Component {
  state = {
    isOpen: false,
  }

  handleClickOutside = () => {
    this.closePopover();
  }

  openPopover = () => {
    this.setState({ isOpen: true });
  }

  closePopover = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { children, zIndex } = this.props;
    const childrenArray = React.Children.toArray(children);
    const [control, content] = partition(childrenArray, child => child.type.displayName === 'Popover.control');

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <Box innerRef={ref}>
              {control[0].props.children({
                openPopover: this.openPopover,
                closePopover: this.closePopover,
                isOpen: this.state.isOpen,
              })}
            </Box>
          )}
        </Reference>

        {this.state.isOpen && (
          <Popper>
            {({
              ref, style, placement, arrowProps,
            }) => (
              <ContentWrapper
                aria-hidden="true"
                innerRef={ref}
                style={style}
                placement={placement}
                className="ignore-react-onclickoutside"
                zIndex={zIndex}
              >
                {content}

                <TriangleBorder
                  innerRef={arrowProps.ref}
                  style={arrowProps.style}
                  placement={placement}
                />
                <Triangle
                  innerRef={arrowProps.ref}
                  style={arrowProps.style}
                  placement={placement}
                />
              </ContentWrapper>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
}

Base.defaultProps = {
  zIndex: 1,
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
  zIndex: PropTypes.number,
};

const Popover = onClickOutside(Base);
Popover.control = Box.extend``;
Popover.control.displayName = 'Popover.control';

export default Popover;
