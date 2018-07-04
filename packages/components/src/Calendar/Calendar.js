import React from 'react';
import Dayzed from 'dayzed';
import { css } from 'styled-components';
import { themeGet } from 'styled-system';

import { Flex, Box, Text, NakedButton, Icon } from '../';

const Wrapper = Flex.extend`
  position: relative;
  flex-direction: column;
`;

const Nav = Box.extend`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const NavButton = NakedButton.extend`
  border-radius: 50%;
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.grey.1')};
  box-shadow: ${themeGet('shadows.default')};

  &:hover,
  &:focus {
    outline: none;

    > ${Icon} {
      fill: ${themeGet('colors.brand.primary')};
    }
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;

    > ${Icon} {
      fill: ${themeGet('colors.grey.2')};
    }
  }
`;

const WeekDayNames = Flex.extend`
  padding-bottom: ${themeGet('space.2')};
  margin-bottom: ${themeGet('space.3')};
  border-bottom: ${themeGet('borders.1')} ${themeGet('colors.grey.2')};
`;

const Days = Box.extend`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1px;
  margin-right: 1px;
`;

const DayWrapper = Box.extend`
  flex: 1 1 calc(100% / 7);
  display: flex;
  justify-content: center;
  margin: 0 -1px -1px 0;
  border: ${themeGet('borders.1')} ${themeGet('colors.grey.3')};

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Day = NakedButton.extend`
  color: ${themeGet('colors.grey.0')};
  padding: 0;
  width: 100%;
  border: 2px solid transparent;

  &:disabled {
    cursor: not-allowed;
    background-color: ${themeGet('colors.grey.2')};
  }

   ${props => props.selectable &&
    css`
      background-color: ${themeGet('colors.white')};

      &:hover,
      &:focus {
        outline: none;
        border-color: ${themeGet('colors.brand.secondary')};
      }

      &:active {
        background-color: ${themeGet('colors.ui.infoBackground')};
      }
  `};

  ${props => props.selected &&
    css`
      background-color: ${themeGet('colors.ui.infoBackground')};
      border-color: ${themeGet('colors.brand.secondary')};
    `};
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

Day.defaultProps = {
  ...Day.defaultProps,
  blacklist: [...Object.keys(Day.propTypes), 'selectable'],
};

const EmptyDay = DayWrapper.withComponent('div').extend`
  background-color: transparent;
  border-color: transparent;
`;


const Calendar = ({
  onDateSelected, monthsToDisplay, minDate, maxDate, selectedDate, monthNames, weekdayNames,
}) => (
  <Dayzed
    onDateSelected={onDateSelected}
    selected={selectedDate}
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
                        key={`${calendar.month}${
                          calendar.year
                          }${weekday}`}
                      >
                        <Text>{weekday}</Text>
                      </Box>
                    ))}
                  </WeekDayNames>

                  <Days>
                    {calendar.weeks.map(week =>
                      week.map((dateObj, index) => {
                        if (!dateObj) {
                          return (
                            <EmptyDay
                              key={`${calendar.year}${
                                calendar.month
                                }${index}`}
                            />
                          );
                        }

                        const { date, selected, selectable } = dateObj;

                        return (
                          <DayWrapper key={`${calendar.year}${
                            calendar.month
                            }${index}`}
                          >
                            <Day
                              type="button"
                              selected={selected}
                              selectable={selectable}

                              {...getDateProps({ dateObj })}
                            >
                              {date.getDate()}
                            </Day>
                          </DayWrapper>
                        );
                      }))}
                  </Days>
                </CalendarMonth>
              ))}
            </Flex>
          </Wrapper>
        );
      }}
  />
);

Calendar.defaultProps = {
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

export default Calendar;
