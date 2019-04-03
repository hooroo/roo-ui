import React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { pickBy, omit } from 'lodash';
import styled from 'styled-components';

const styledOmitProps = (component, options) => {
  if (options === undefined || options.omit === undefined || options.omit.constructor !== Array) {
    return styled(component);
  }

  const omittedPropsComponent = React.forwardRef((props, ref) => {
    const validProps = pickBy(props, (_, prop) => isPropValid(prop));
    const filteredProps = omit(validProps, options.omit);
    return React.createElement(component, { ...filteredProps, ref });
  });

  omittedPropsComponent.displayName = component.displayName || 'StyledComponent';
  return styled(omittedPropsComponent);
};

Object.keys(styled).forEach((key) => { styledOmitProps[key] = styled[key]; });

export default styledOmitProps;
