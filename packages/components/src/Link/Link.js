import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';
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

  ${props => props.underline && css`
    &, &:hover {
      text-decoration: underline;
      color: inherit;
    }
  `}

  ${props => props.hidden && css`
    ${hideVisually()}
  `}
`;

console.warn('[Roo-ui deprecration warning] <Link />\'s inline prop has been renamed to underline. Please update where relevant. The inline prop will be removed in the future')

Link.propTypes = {
  ...color.propTypes,
  ...hover.propTypes,
  ...fontWeight.propTypes,
  ...space.propTypes,
  hidden: PropTypes.bool,
  inline: PropTypes.bool,
  underline: PropTypes.bool,
};

Link.defaultProps = {
  blacklist: Object.keys(Link.propTypes),
  inline: false,
  underline: false,
  hidden: false,
};

export default Link;
