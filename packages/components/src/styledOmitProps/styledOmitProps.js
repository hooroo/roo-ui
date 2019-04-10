import React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { pickBy, omit } from 'lodash';
import styled from '@emotion/styled';
import { VALID_STYLED_SYSTEM_PROPS } from './constants';

const styledOmitProps = (component, {
  omit: customPropsToOmit = [],
  omitStyledSystemProps = true,
} = {}) => {
  const propsToOmit = omitStyledSystemProps
    ? [...customPropsToOmit, ...VALID_STYLED_SYSTEM_PROPS]
    : customPropsToOmit;

  if (propsToOmit.length === 0) {
    return styled(component);
  }

  const omittedPropsComponent = React.forwardRef((props, ref) => {
    const validProps = pickBy(props, (_, prop) => isPropValid(prop));
    const filteredProps = omit(validProps, propsToOmit);
    return React.createElement(component, { ...filteredProps, ref });
  });

  omittedPropsComponent.displayName = component.displayName || 'StyledComponent';
  return styled(omittedPropsComponent);
};

Object.keys(styled).forEach((key) => { styledOmitProps[key] = styled[key]; });

export default styledOmitProps;
