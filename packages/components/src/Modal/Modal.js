import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { themeGet } from 'styled-system';
import { rem, rgba } from 'polished';

import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';

export const ModalGlobalStyle = () => <Global styles={css` .ReactModal__Body--open { overflow: hidden; } `} />;

const Modal = styled(({ className, width, ...props }) => (
  <ReactModal
    {...props}
    className="ModalContent"
    overlayClassName="ModalOverlay"
    portalClassName={className}
  />
))`
  .ModalOverlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: ${({ theme }) => rgba(theme.colors.greys.mineShaft, 0.8)};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ModalContent {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    border: none;
    background: ${themeGet('colors.white')};
    overflow: auto;
    border-radius: ${themeGet('radii.default')};
    outline: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    width: calc(100% - ${themeGet('space.5')});

    @media (min-width: ${themeGet('breakpoints.0')}) {
      flex: 0 1 ${({ width }) => width};
    }
  }
`;

Modal.propTypes = {
  ...ReactModal.propTypes,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Modal.defaultProps = {
  width: rem(660),
  role: 'dialog',
  ariaHideApp: true,
};

Modal.header = ModalHeader;
Modal.body = ModalBody;
Modal.footer = ModalFooter;

export default Modal;
