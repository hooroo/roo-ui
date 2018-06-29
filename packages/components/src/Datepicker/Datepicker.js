import React from 'react';
import Dayzed from 'dayzed';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';

import { Popover, Flex, Box, Text, NakedButton, Icon, MaskedInput } from '../';

const Wrapper = Flex.extend`
  position: relative;
  flex-direction: column;
`;

const Nav = styled.div`
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

const Days = styled.div`
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

Day.defaultProps = {
  ...Day.defaultProps,
  blacklist: [...Object.keys(Day.propTypes), 'selectable'],
};

const EmptyDay = DayWrapper.withComponent('div').extend`
  background-color: transparent;
  border-color: transparent;
`;


const DateInputWrapper = Box.extend`
  position: relative;

  > ${Icon} {
    position: absolute;
    top: ${themeGet('space.3')};
    right: ${themeGet('space.4')};
  }
`;

const DateInput = MaskedInput.extend`
  padding-right: ${themeGet('space.12')};

   ${props => props.outline &&
    css`
      border-color: ${themeGet('colors.brand.secondary')};
    `};
`;

DateInput.defaultProps = {
  ...MaskedInput.defaultProps,
  blacklist: [...Object.keys(MaskedInput.propTypes), 'outline'],
};


const Datepicker = ({
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

            <Flex>
              {calendars.map(calendar => (
                <Box
                  key={`${calendar.month}${calendar.year}`}
                  textAlign="center"
                  width="100%"
                  px={4}
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
                </Box>
            ))}
            </Flex>
          </Wrapper>
        );
      }}
  />
);

Datepicker.defaultProps = {
  monthNames: ['Jan', 'Feb', 'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'],
  weekdayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

class DatepickerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: props.selectedDate,
      date: '',
    };
  }

  handleDateChange = ({ selected, selectable, date }) => {
    this.setState(state => ({
      selectedDate: date,
      date: date.toLocaleDateString(),
    }));

    this.props.onDateSelected(date);
  };

  handleInputChange = (event) => {
    this.setState({
      selectedDate: null,
      date: event.target.value,
    });
  }

  render() {
    const {
      date,
    } = this.state;
    const {
      monthsToDisplay, minDate, maxDate, onDateSelected, selectedDate,
    } = this.props;

    return (
      <Popover>
        <Popover.control>
          {({ onClick, onKeyDown, isOpen }) => (
            <DateInputWrapper>
              <DateInput
                outline={isOpen}
                placeholder="DD/MM/YYYY"
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                onFocus={onClick}
                value={date}
                onChange={this.handleInputChange}
                onKeyDown={onKeyDown}
              />
              <Icon name="event" onClick={onClick} />
            </DateInputWrapper>
          )}
        </Popover.control>

        <Datepicker
          onDateSelected={this.handleDateChange}
          monthsToDisplay={monthsToDisplay}
          minDate={minDate}
          maxDate={maxDate}
          selectedDate={this.state.selectedDate}
        />
      </Popover>
    );
  }
}

DatepickerWrapper.defaultProps = {
  selectedDate: '',
};

export default DatepickerWrapper;
