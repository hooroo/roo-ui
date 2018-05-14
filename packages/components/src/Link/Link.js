import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';
import tag from 'clean-tag';
import { color, hover, fontWeight, themeGet } from 'styled-system';

const Link = styled(tag.a)`
  cursor: pointer;
  text-decoration: none;
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
  hidden: PropTypes.bool,
  inline: PropTypes.bool,
};

Link.defaultProps = {
  blacklist: Object.keys(Link.propTypes),
  inline: false,
  hidden: false,
};

export default Link;
