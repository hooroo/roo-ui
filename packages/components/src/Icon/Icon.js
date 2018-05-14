import React from 'react';
import styled from 'styled-components';
import { space, color, propTypes } from 'styled-system';
import cleanElement from 'clean-element';
import PropTypes from 'prop-types';
import paths from '@roo-ui/icons';

const CleanSvg = cleanElement('svg');

CleanSvg.propTypes = {
  ...propTypes.space,
};

const Base = ({
  name, title, size, ...props
}) => (
  <CleanSvg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    title={title || name}
    fill="currentcolor"
  >
    <path d={paths[name].path} />
  </CleanSvg>
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
