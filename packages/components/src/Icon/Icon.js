import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { space, color } from 'styled-system';
import PropTypes from 'prop-types';

const getSvgPath = (theme, name) => {
  const icon = theme.icons[name];

  if (icon) {
    return icon.path;
  }

  console.error(`Icon "${name}" not found in theme`); // eslint-disable-line no-console

  return null;
};

const StyledSvg = styled.svg``;

const Base = withTheme(({
  name, title, size, theme, ...props
}) => (
  <StyledSvg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    title={title || name}
    fill="currentcolor"
  >
    <path d={getSvgPath(theme, name)} />
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
  ${space}
  ${color};
`;

Icon.propTypes = {
  ...Base.propTypes,
  ...color.propTypes,
  ...space.propTypes,
};

export default Icon;
