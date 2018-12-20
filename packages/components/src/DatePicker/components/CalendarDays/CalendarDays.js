import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

import { Flex } from '../../../';
import { CalendarDay, CalendarEmptyDay } from '../CalendarDay';

const CalendarDaysWrapper = styled(Flex)`
  flex-wrap: wrap;
  margin-bottom: 2px;
  margin-right: 2px;
`;

const getCustomDateProps = (disabledDates, interactiveDisabledDates, isInRange, day) => {
  const isDisabled = disabledDates
    .some(disabledDate => isEqual(String(disabledDate), String(day.date)));

  const props = {
    selected: day.selected || (interactiveDisabledDates && day.selectable),
    highlighted: isInRange(day.date),
    selectable: day.selectable,
  };

  if (isDisabled) {
    props.selectable = false;
    props.highlighted = false;
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
                onMouseEnter: () => onMouseEnterOfDay(day),
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
  isInRange: () => {},
  onMouseEnterOfDay: () => {},
};

CalendarDays.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  weeks: PropTypes.arrayOf(PropTypes.array).isRequired,
  getDateProps: PropTypes.func.isRequired,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  interactiveDisabledDates: PropTypes.bool,
  onMouseEnterOfDay: PropTypes.func,
  isInRange: PropTypes.func,
};

export default CalendarDays;
