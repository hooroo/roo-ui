import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tag from 'clean-tag';
import { color, hover, fontWeight, themeGet, space } from 'styled-system';

const Link = styled(tag.a)`
  cursor: pointer;
  text-decoration: none;
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

  ${props => props.inline && css`
    &, &:hover {
      text-decoration: underline;
      color: inherit;
    }
  `}
`;

Link.propTypes = {
  ...color.propTypes,
  ...hover.propTypes,
  ...fontWeight.propTypes,
  ...space.propTypes,
  inline: PropTypes.bool,
};

Link.defaultProps = {
  blacklist: Object.keys(Link.propTypes),
  inline: false,
};

export default Link;
