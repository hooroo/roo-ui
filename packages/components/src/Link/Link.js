import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';
import tag from 'clean-tag';
import { color, hover, fontWeight, themeGet, space, style } from 'styled-system';

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
});

const Link = styled(tag.a)`
  cursor: pointer;
  display: inline-block;
  color: ${themeGet('colors.ui.link')};

  &:hover {
    color: ${themeGet('colors.ui.linkHover')};
  }

  &:focus {
    outline: ${themeGet('borders.2')} ${themeGet('colors.brand.secondary')};
  }

  ${color}
  ${hover}
  ${fontWeight}
  ${space}
  ${textDecoration}

  ${props => props.inline && css`
    &, &:hover {
      text-decoration: underline;
      color: inherit;
    }
  `}

  ${props => props.hidden && css`
    ${hideVisually()}
  `}
`;

Link.propTypes = {
  ...color.propTypes,
  ...hover.propTypes,
  ...fontWeight.propTypes,
  ...space.propTypes,
  ...textDecoration.propTypes,
  hidden: PropTypes.bool,
  inline: PropTypes.bool,
};

Link.defaultProps = {
  blacklist: Object.keys(Link.propTypes),
  inline: false,
  hidden: false,
};

export default Link;
