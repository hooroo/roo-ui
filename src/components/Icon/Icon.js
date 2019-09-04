import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { space, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

const IS_TEST = process.env.NODE_ENV === 'test';

const getSvgPathFromTheme = (theme, name) => {
  if (!theme || !theme.icons) {
    // eslint-disable-next-line no-console
    if (!IS_TEST) console.error('Icon must be rendered under ThemeProvider');
    return null;
  }

  const icon = theme.icons[name];

  if (!icon) {
    // eslint-disable-next-line no-console
    console.error(`Icon "${name}" not found in theme`);
    return null;
  }

  return icon.path;
};

const StyledSvg = styled.svg``;

const Base = withTheme(({ name, title, size, theme, ...props }) => (
  <StyledSvg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    title={title || name}
    fill="currentcolor"
  >
    <path d={getSvgPathFromTheme(theme, name)} />
  </StyledSvg>
));

Base.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

Base.defaultProps = {
  name: 'hotel',
  title: null,
  size: 24,
};

const Icon = styled(Base)`
  vertical-align: middle;
  flex: none;
  ${space} ${color};
`;

Icon.propTypes = {
  ...Base.propTypes,
  ...propTypes.color,
  ...propTypes.space,
};

export default Icon;
