import styled, { css } from 'styled-components';
import tag from 'clean-tag';
import { themeGet, space, color, boxShadow, buttonStyle } from 'styled-system';

const Button = styled(tag.button)`
  display: inline-block;
  margin: 0;
  padding: ${themeGet('space.3')} ${themeGet('space.5')};
  font-family: ${themeGet('fontFamily')};
  font-size: ${themeGet('fontSizes.sm')};
  font-weight: ${themeGet('fontWeights.bold')};
  letter-spacing: ${themeGet('letterSpacings.wide')};
  line-height: ${themeGet('lineHeights.wide')};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: ${themeGet('borders.2')};
  border-color: transparent;
  border-radius: ${themeGet('radii.default')};
  outline: 0;
  transition: ${themeGet('transitions.default')};
  cursor: pointer;
  appearance: none;

  ${space}
  ${color}
  ${boxShadow}
  ${buttonStyle}

  &:focus {
    box-shadow: ${themeGet('shadows.focus')};
  }

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${props => props.rounded && css`
    border-radius: ${themeGet('radii.rounded')};
  `}
`;

Button.defaultProps = {
  buttonStyle: 'default',
};

export default Button;
