import { themeGet } from 'styled-system';
import { css } from 'styled-components';

import { Box } from '../../../';

const CalendarMonth = Box.extend`
  text-align: center;
  padding: 0 ${themeGet('space.4')};
  width: 100%;

  ${props => props.monthsToDisplay === 2 &&
    css`
      width: ${100 / 2}%;
    `};

  ${props => props.monthsToDisplay === 3 &&
    css`
      width: ${100 / 3}%;
    `};
`;

CalendarMonth.defaultProps = {
  ...Box.defaultProps,
  blacklist: [...Object.keys(Box.propTypes), 'monthsToDisplay'],
};

export default CalendarMonth;
