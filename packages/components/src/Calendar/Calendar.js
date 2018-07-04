/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import Dayzed from 'dayzed';
import { css } from 'styled-components';
import { themeGet } from 'styled-system';

import { Flex, Box, Text, NakedButton, Icon } from '../';
import { Day, EmptyDay } from './components/Day';

const Wrapper = Box.extend`
  position: relative;
`;

const Nav = Box.extend`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

const NavButton = NakedButton.extend`
  border-radius: ${themeGet('radii.rounded')};
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.grey.1')};
  box-shadow: ${themeGet('shadows.default')};

  &:hover,
  &:focus {
    outline: none;
    color: ${themeGet('colors.brand.primary')};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: ${themeGet('colors.grey.2')};
  }
`;

const CalendarMonth = Box.extend`
  text-align: center;
  padding: 0 ${themeGet('space.4')};
  width: 100%;

  ${props => props.monthsToDisplay === 2 &&
    css`
      width: 50%;
    `};

  ${props => props.monthsToDisplay === 3 &&
    css`
      width: 33%;
    `};
`;

CalendarMonth.defaultProps = {
  ...Box.defaultProps,
  blacklist: [...Object.keys(Box.propTypes), 'monthsToDisplay'],
};

const WeekDayNames = Flex.extend`
  padding-bottom: ${themeGet('space.2')};
  margin-bottom: ${themeGet('space.3')};
  border-bottom: ${themeGet('borders.1')} ${themeGet('colors.grey.2')};
`;

const Weeks = Flex.extend`
  flex-wrap: wrap;
  margin-bottom: 1px;
  margin-right: 1px;
`;

const Calendar = ({
  initialMonth, onDateSelected, monthsToDisplay, minDate, maxDate, selected, monthNames, weekdayNames,
}) => (
  <Dayzed
    date={initialMonth}
    onDateSelected={onDateSelected}
    selected={selected}
    monthsToDisplay={monthsToDisplay}
    minDate={minDate}
    maxDate={maxDate}
    render={({
        calendars,
        getBackProps,
        getForwardProps,
        getDateProps,
      }) => {
        if (!calendars.length) return null;

        return (
          <Wrapper>
            <Nav>
              <NavButton {...getBackProps({ calendars })}>
                <Icon name="chevronLeft" />
              </NavButton>

              <NavButton {...getForwardProps({ calendars })}>
                <Icon name="chevronRight" />
              </NavButton>
            </Nav>

            <Flex flexWrap="wrap">
              {calendars.map(calendar => (
                <CalendarMonth
                  key={`${calendar.month}${calendar.year}`}
                  monthsToDisplay={monthsToDisplay}
                >
                  <Text textStyle="caps">
                    {monthNames[calendar.month]} {calendar.year}
                  </Text>

                  <WeekDayNames mt={5}>
                    {weekdayNames.map(weekday => (
                      <Box
                        width={1 / 7}
                        key={`${calendar.month}${calendar.year}${weekday}`}
                      >
                        <Text>{weekday}</Text>
                      </Box>
                    ))}
                  </WeekDayNames>

                  <Weeks>
                    {calendar.weeks.map(week =>
                      week.map((dateObj, index) => {
                        if (!dateObj) {
                          return (
                            <EmptyDay key={`${calendar.year}${calendar.month}${index}`} />
                          );
                        }
                        return (
                          <Day
                            key={`${calendar.year}${calendar.month}${index}`}
                            selected={dateObj.selected}
                            selectable={dateObj.selectable}
                            {...getDateProps({ dateObj })}
                          >
                            {dateObj.date.getDate()}
                          </Day>
                        );
                      }))}
                  </Weeks>
                </CalendarMonth>
              ))}
            </Flex>
          </Wrapper>
        );
      }}
  />
);

Calendar.defaultProps = {
  monthsToDisplay: 1,
  initialMonth: null,
  selected: null,
  minDate: null,
  maxDate: null,
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

Calendar.propTypes = {
  monthsToDisplay: PropTypes.number,
  onDateSelected: PropTypes.func.isRequired,
  weekdayNames: PropTypes.arrayOf(PropTypes.string),
  initialMonth: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  selected: PropTypes.instanceOf(Date),
  monthNames: PropTypes.arrayOf(PropTypes.string),
};

export default Calendar;
