import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { VALID_STYLED_SYSTEM_PROPS } from './constants';

const toTrueHash = arrayOfStrings => arrayOfStrings.reduce(
  (acc, key) =>
    ({ ...acc, [key]: true })
  , {},
);

const styledSystemProps = toTrueHash(VALID_STYLED_SYSTEM_PROPS);

const styledOmitProps = (component, {
  omit: customPropsList = [],
  omitStyledSystemProps = true,
} = {}) => {
  const customProps = toTrueHash(customPropsList);

  return styled(component, {
    shouldForwardProp: prop =>
      isPropValid(prop)
      && !customProps[prop]
      && !(omitStyledSystemProps && styledSystemProps[prop]),
  });
};

Object.keys(styled).forEach((key) => { styledOmitProps[key] = styled[key]; });

export default styledOmitProps;
