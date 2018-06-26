import React, { Fragment } from 'react';
import Dayzed from 'dayzed';
import { getDay, eachDay, format } from 'date-fns';
import { lighten, darken } from 'polished';
import { Manager, Reference, Popper } from 'react-popper';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import onClickOutside from 'react-onclickoutside';

import { Flex, Box, Text, NakedButton, Icon, MaskedInput } from '../';

const monthNamesShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const Wrapper = Flex.extend`
  position: relative;
  flex-direction: column;
`;

const Nav = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
`;

const NavButton = NakedButton.extend`
  border-radius: 50%;
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.grey.1')};
  box-shadow: ${themeGet('shadows.default')};
`;

const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1px;
  margin-right: 1px;
`;

const Day = styled.button`
  color: ${themeGet('colors.grey.0')};
  position: relative;
  margin: 0 -1px -1px 0;
  padding: 0;
  flex: 1 1 calc(100% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${themeGet('borders.1')} ${themeGet('colors.grey.2')};
  z-index: 1;

   &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  ${props =>
    !props.selectable &&
    css`
      background-color: ${themeGet('colors.white')};
      border-color: ${themeGet('colors.grey.2')};
      color: ${themeGet('colors.grey.2')};
      z-index: 0;
    `};

  ${props => props.selected &&
    css`
      color: ${themeGet('colors.grey.1')};
      background-color: ${props =>
    lighten(0.05, themeGet('colors.grey.2')(props))};
      border-color: ${props => darken(0.05, themeGet('colors.grey.2')(props))};
    `};
`;

const EmptyDay = Day.withComponent('div').extend`
  background-color: transparent;
  border-color: transparent;
`;

const Popover = Box.extend`
  border: 1px solid ${themeGet('colors.grey.2')};
`;


const Datepicker = ({ selected, onDateSelected }) => (
  <Dayzed
    onDateSelected={onDateSelected}
    selected={selected}
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
                >
                  <Text textStyle="caps" color="grey.1">
                    {monthNamesShort[calendar.month]} {calendar.year}
                  </Text>

                  <Flex mt={6} mb={2}>
                    {weekdayNamesShort.map(weekday => (
                      <Box
                        width={1 / 7}
                        key={`${calendar.month}${
                        calendar.year
                        }${weekday}`}
                      >
                        <Text
                          color="grey.1"
                          fontSize="sm"
                        >
                          {weekday}
                        </Text>
                      </Box>
                  ))}
                  </Flex>

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
                        <Day
                          type="button"
                          selected={selected}
                          selectable={selectable}
                          key={`${calendar.year}${
                            calendar.month
                            }${index}`}
                          {...getDateProps({ dateObj })}
                        >
                          <span>{date.getDate()}</span>
                        </Day>
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

class DatepickerWrapper extends React.Component {
  state = {
    calendarVisible: false, selectedDate: null, date: '',
  };

  handleDateChange = ({ selected, selectable, date }) => {
    this.setState(state => ({
      selectedDate: date,
      calendarVisible: false,
      date: date.toLocaleDateString(),
    }));
  };

  handleInputChange = (event) => {
    this.setState({
      selectedDate: null,
      date: event.target.value,
    });
  }

  toggleCalendar = () => {
    this.setState({ calendarVisible: !this.state.calendarVisible });
  }

  handleKeyDown = (event) => {
    const eventKey = event.key;

    if (eventKey === 'Tab') {
      this.setState({
        calendarVisible: false,
      });
    }
  }

  handleClickOutside = (event) => {
    console.log(event);
    this.setState({
      calendarVisible: false,
    });
  }

  render() {
    const {
      calendarVisible, selectedDate, date,
    } = this.state;

    return (
      <Fragment>
        <Manager>
          <Reference>
            {({ ref }) => (
              <Box innerRef={ref}>
                <MaskedInput
                  focus="true"
                  placeholder="DD/MM/YYYY"
                  mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                  onFocus={this.toggleCalendar}
                  value={date}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleKeyDown}
                />
              </Box>
            )}
          </Reference>
          {calendarVisible && (
          <Popper placement="bottom">
            {({
              ref, style, placement, arrowProps,
              }) => (
                <Popover className="ignore-react-onclickoutside" innerRef={ref} style={style} data-placement={placement}>
                  <div aria-hidden="true" ref={arrowProps.ref} style={arrowProps.style} />

                  <Datepicker
                    selected={this.state.selectedDate}
                    onDateSelected={this.handleDateChange}
                  />
                </Popover>
            )}
          </Popper>
          )}
        </Manager>
      </Fragment>
    );
  }
}

export default onClickOutside(DatepickerWrapper);
