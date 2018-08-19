import React from 'react';
import PropTypes from 'prop-types';
import { isSameDay } from 'date-fns';

import { Flex } from '../../../';
import { CalendarDay, CalendarEmptyDay } from '../CalendarDay';

const CalendarDaysWrapper = Flex.extend`
  flex-wrap: wrap;
  margin-bottom: 2px;
  margin-right: 2px;
`;

const getCustomDateProps = (disabledDates, interactiveDisabledDates, day) => {
  const isDisabled = disabledDates
    .filter(disabledDate => isSameDay(disabledDate, day.date))
    .length;
  const props = {
    selected: day.selected,
    selectable: day.selectable,
  };

  if (isDisabled) {
    props.selectable = false;
    props.disabled = !interactiveDisabledDates;
  }

  return props;
};

const CalendarDays = ({
  weeks, month, year, getDateProps, disabledDates, interactiveDisabledDates,
}) => (
  <CalendarDaysWrapper>
    {weeks.map(week =>
        week.map((day, index) => {
          if (!day) {
            return (
              <CalendarEmptyDay key={`${year}${month}${index}`} /> // eslint-disable-line react/no-array-index-key
            );
          }

          return (
            <CalendarDay
              key={`${year}${month}${index}`} // eslint-disable-line react/no-array-index-key
              {...getDateProps({ dateObj: day })}
              {...getCustomDateProps(disabledDates, interactiveDisabledDates, day)}
            >
              {day.date.getDate()}
            </CalendarDay>
          );
        }))}
  </CalendarDaysWrapper>
);

CalendarDays.defaultProps = {
  disabledDates: [],
  interactiveDisabledDates: false,
};

CalendarDays.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  weeks: PropTypes.arrayOf(PropTypes.array).isRequired,
  getDateProps: PropTypes.func.isRequired,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  interactiveDisabledDates: PropTypes.bool,
};

export default CalendarDays;
