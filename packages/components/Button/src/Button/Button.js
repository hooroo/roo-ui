import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button.attrs({
  color: props => (props.primary ? '#E40000' : '#323232'),
  hoverColor: props => (props.primary ? '#BA0000' : '#555555'),
})`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  background-color: ${props => props.color};
  border: 2px solid ${props => props.color};
  border-radius: 4px;
  outline: 0;
  transition: 200ms ease-in;
  cursor: pointer;

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:focus:not([disabled]),
  &:hover:not([disabled]) {
    background-color: ${props => props.hoverColor};
    border-color: ${props => props.hoverColor};

    ${props => props.outlined && css`
      color: ${props.hoverColor};
    `}
  }

  ${props => props.outlined && css`
    color: ${props.color};
    background-color: transparent;

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: transparent;
    }
  `}

  ${props => props.rounded && css`
    border-radius: 1000px;
  `}
`;

Button.defaultProps = {
  primary: false,
  outlined: false,
  rounded: false,
};

Button.propTypes = {
  primary: PropTypes.bool,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Button;
