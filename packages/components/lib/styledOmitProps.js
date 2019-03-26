import React from 'react';
import styled from 'styled-components';
import omit from 'lodash/omit';

const styledOmitProps = (component, options) => {
  if (options === undefined) return styled(component);

  const omittedProps = options.omit || [];

  const omittedPropsComponent = React.forwardRef((props, ref) => {
    const filteredProps = omit(props, omittedProps);
    return React.createElement(component, { ...filteredProps, ref });
  });

  omittedPropsComponent.displayName = component.displayName || 'StyledComponent';

  return styled(omittedPropsComponent);
};

Object.keys(styled).forEach(key => (styledOmitProps[key] = styled[key]));

export default styledOmitProps;
