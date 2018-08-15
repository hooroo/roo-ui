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

const getCustomDateProps = (disabledDates, interactiveDisabledDates, isInRange, day) => {
  const isDisabled = disabledDates
    .filter(disabledDate => isSameDay(disabledDate, day.date))
    .length;
  const props = {
    selected: day.selected,
    isHighlightedDay: isInRange && isInRange(day.date),
    selectable: day.selectable,
  };

  if (isDisabled) {
    props.selectable = false;
    props.isHighlightedDay = false;
    props.disabled = !interactiveDisabledDates;
  }

  return props;
};

const CalendarDays = ({
  weeks, month, year, getDateProps, disabledDates, interactiveDisabledDates,
  onMouseEnterOfDay, isInRange,
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
              {...getDateProps({
                dateObj: day,
                onMouseEnter: () => {
                  if (onMouseEnterOfDay) onMouseEnterOfDay(day);
                },
              })}
              {...getCustomDateProps(disabledDates, interactiveDisabledDates, isInRange, day)}
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
  isInRange: null,
  onMouseEnterOfDay: null,
};

CalendarDays.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  weeks: PropTypes.arrayOf(PropTypes.array).isRequired,
  getDateProps: PropTypes.func.isRequired,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  interactiveDisabledDates: PropTypes.bool,
  onMouseEnterOfDay: PropTypes.func,
  isInRange: PropTypes.func || null,
};

export default CalendarDays;
