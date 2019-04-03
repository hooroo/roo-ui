import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { hideVisually } from 'polished';
import { color, fontWeight, themeGet, space } from 'styled-system';
import { styledOmitProps } from '../styledOmitProps';

const Link = styledOmitProps('a', { omit: ['hidden'] })`
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
  ${fontWeight}
  ${space}

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

Link.propTypes = {
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...space.propTypes,
  hidden: PropTypes.bool,
  underline: PropTypes.bool,
};

Link.defaultProps = {
  underline: false,
  hidden: false,
};

Link.displayName = 'Link';

export default Link;
