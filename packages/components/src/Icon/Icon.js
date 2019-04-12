import React from 'react';
import styled from '@emotion/styled';
import { space, color } from 'styled-system';
import PropTypes from 'prop-types';
import paths from '@roo-ui/icons';

const StyledSvg = styled.svg``;


const Base = ({
  name, title, size, ...props
}) => (
  <StyledSvg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    title={title || name}
    fill="currentcolor"
  >
    <path d={paths[name].path} />
  </StyledSvg>
);

Base.propTypes = {
  name: PropTypes.oneOf(Object.keys(paths)),
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
