import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { getValueAndUnit } from 'polished';
import memoize from 'lodash/memoize';

// assuming root font-size is 16px
const ONE_PX_IN_REM = 0.0625;

const minusOnePx = memoize((value) => {
  const [dimension, unit] = getValueAndUnit(value);
  switch (unit) {
    case 'em':
    case 'rem':
      return `${dimension - ONE_PX_IN_REM}${unit}`;
    case 'px':
      return `${dimension - 1}px`;
    default:
      return value;
  }
});

const breakpoints = props => ({
  xs: `@media screen and (max-width: ${minusOnePx(themeGet('breakpoints.0')(props))})`,
  sm: `@media screen and (min-width: ${themeGet('breakpoints.0')(props)})
                     and (max-width: ${minusOnePx(themeGet('breakpoints.1')(props))})`,
  md: `@media screen and (min-width: ${themeGet('breakpoints.1')(props)})
                     and (max-width: ${minusOnePx(themeGet('breakpoints.2')(props))})`,
  lg: `@media screen and (min-width: ${themeGet('breakpoints.2')(props)})`,
});

export const hidden = key => props => props[key] && css`
  ${breakpoints(props)[key]} {
    display: none;
  }
`;

const Hide = styled.div`
  ${hidden('xs')}
  ${hidden('sm')}
  ${hidden('md')}
  ${hidden('lg')}
`;

Hide.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
};

export default Hide;
