import React from 'react';
import startCase from 'lodash/startCase';
import { string, number, oneOfType } from 'prop-types';

const Icon = ({
  name, path, title, size, fill, width, height, ...props
}) => (
  <svg
    {...props}
    width={width || size}
    height={height || size}
    fill={fill}
    data-id={`icon-${name}`}
    viewBox="0 0 36 36"
  >
    <title>{title || `${startCase(name)} icon`}</title>
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
