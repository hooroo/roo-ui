import React from 'react';
import { string, number, oneOfType } from 'prop-types';

const Icon = ({
  path, title, size, fill, width, height, ...props
}) => (
  <svg
    {...props}
    width={width || size}
    height={height || size}
    fill={fill}
    viewBox="0 0 36 36"
  >
    {title && <title>{title}</title>}
    <path d={path} />
  </svg>
);

Icon.propTypes = {
  fill: string,
  title: string,
  path: string.isRequired,
  size: oneOfType([string, number]),
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

Icon.defaultProps = {
  fill: 'currentColor',
  title: null,
  size: '1em',
  width: null,
  height: null,
};

export default Icon;
