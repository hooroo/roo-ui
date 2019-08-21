import isPropValid from '@emotion/is-prop-valid';
import { VALID_STYLED_SYSTEM_PROPS } from './constants';

const toTrueHash = arrayOfStrings =>
  arrayOfStrings.reduce((acc, key) => ({ ...acc, [key]: true }), {});

const styledSystemProps = toTrueHash(VALID_STYLED_SYSTEM_PROPS);

const omitProps = (
  customPropsList = [],
  { omitStyledSystemProps = true } = {},
) => {
  const customProps = toTrueHash(customPropsList);
  const shouldForwardProp = prop =>
    isPropValid(prop) &&
    !customProps[prop] &&
    !(omitStyledSystemProps && styledSystemProps[prop]);

  return { shouldForwardProp };
};

export default omitProps;
