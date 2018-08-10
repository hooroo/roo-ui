import React from 'react';
import ReactModal from 'react-modal';
import styled, { injectGlobal } from 'styled-components';
import { themeGet } from 'styled-system';
import { rgba } from 'polished';

import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';

injectGlobal`
  .ReactModal__Body--open { overflow: hidden; }
`;

const Modal = styled(({ className, ...props }) => (
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
    width: calc(100% - 20px);

    @media (min-width: ${themeGet('breakpoints.0')}) {
      flex: 0 1 660px;
    }
  }
`;

Modal.propTypes = {
  ...ReactModal.propTypes,
};

Modal.header = ModalHeader;
Modal.body = ModalBody;
Modal.footer = ModalFooter;

export default Modal;
