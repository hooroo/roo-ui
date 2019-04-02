import React from 'react';
import styled from 'styled-components';
import { omit, concat } from 'lodash';
import { styles } from 'styled-system';

const styledSystemProps = Object.keys(styles)
  .filter(key => typeof styles[key] === 'function')
  .reduce((a, key) => concat(a, Object.keys(styles[key].propTypes)), []);

const styledOmitProps = (component, options) => {
  if (options === undefined) return styled(component);

  const omittedProps = concat((options.omit || []), styledSystemProps);

  const omittedPropsComponent = React.forwardRef((props, ref) => {
    const filteredProps = omit(props, omittedProps);
    return React.createElement(component, { ...filteredProps, ref });
  });

  omittedPropsComponent.displayName = component.displayName || 'StyledComponent';

  return styled(omittedPropsComponent);
};

Object.keys(styled).forEach((key) => { styledOmitProps[key] = styled[key]; });

export default styledOmitProps;
