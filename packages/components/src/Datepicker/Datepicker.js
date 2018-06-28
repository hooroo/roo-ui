import React, { Fragment } from 'react';
import Dayzed from 'dayzed';
import { getDay, eachDay, format } from 'date-fns';
import { lighten, darken, triangle, rem } from 'polished';
import { Manager, Reference, Popper } from 'react-popper';
import styled, { css } from 'styled-components';
import { themeGet, theme } from 'styled-system';
import onClickOutside from 'react-onclickoutside';

import { Flex, Box, Text, NakedButton, Icon, Input, MaskedInput } from '../';

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
  background: ${themeGet('colors.grey.3')};
  flex-direction: column;
  padding: ${themeGet('space.4')};
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavButton = NakedButton.extend`
  border-radius: 50%;
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.grey.1')};
  box-shadow: ${themeGet('shadows.default')};
`;

const WeekDayNames = Flex.extend`
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

const Day = styled.button`
  color: ${themeGet('colors.grey.0')};
  padding: 0;
  width: 100%;
  border: 2px solid transparent;

  ${props =>
    !props.selectable &&
    css`
      background-color: ${themeGet('colors.white')};
      border-color: ${themeGet('colors.grey.2')};
      color: ${themeGet('colors.grey.2')};
    `};

  ${props => props.selected &&
    css`
      background-color: ${themeGet('colors.ui.infoBackground')};
      border-color: ${themeGet('colors.brand.secondary')};
    `};
`;

const EmptyDay = DayWrapper.withComponent('div').extend`
  background-color: transparent;
  border-color: transparent;
`;

const Popover = Box.extend`
  min-width: ${rem('500px')};
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

   ${props => props.calendarOpen &&
    css`
      border-color: ${themeGet('colors.brand.secondary')};
    `};
`;

DateInput.defaultProps = {
  ...MaskedInput.defaultProps,
  blacklist: [...Object.keys(MaskedInput.propTypes), 'calendarOpen'],
};

const Triangle = Box.extend`
  ${props =>
    triangle({
      pointingDirection: 'right', width: '20px', height: '20px', foregroundColor: themeGet('colors.grey.3')(props),
    })
};

${props => props.placement === 'top' &&
    css`
      transform: rotate(90deg);
  `};

  ${props => props.placement === 'right' &&
    css`
      transform: rotate(270deg);
  `};

  ${props => props.placement === 'bottom' &&
    css`
      transform: rotate(-90deg);
  `};

  ${props => props.placement === 'left' &&
    css`
      transform: rotate(0);
  `};
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
          <Wrapper boxShadow="heavy">
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
                >
                  <Text textStyle="caps" color="grey.1">
                    {monthNamesShort[calendar.month]} {calendar.year}
                  </Text>

                  <WeekDayNames mt={6} mb={2}>
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

class DatepickerWrapper extends React.Component {
  state = {
    calendarVisible: true, selectedDate: null, date: '',
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

  openCalendar = () => {
    this.setState({ calendarVisible: true });
  }

  closeCalendar = () => {
    this.setState({ calendarVisible: false });
  }

  handleKeyDown = (event) => {
    const eventKey = event.key;

    if (eventKey === 'Tab') {
      this.closeCalendar();
    }
  }

  handleClickOutside = (event) => {
    this.closeCalendar();
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
              <DateInputWrapper innerRef={ref}>
                <DateInput
                  calendarOpen={calendarVisible}
                  placeholder="DD/MM/YYYY"
                  mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                  onFocus={this.openCalendar}
                  value={date}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleKeyDown}
                />
                <Icon name="event" onClick={this.openCalendar} />
              </DateInputWrapper>
            )}
          </Reference>
          {calendarVisible && (
          <Popper>
            {({
              ref, style, placement, arrowProps,
              }) => (
                <Popover aria-hidden="true" className="ignore-react-onclickoutside" innerRef={ref} style={style} placement={placement}>
                  <Triangle innerRef={arrowProps.ref} style={arrowProps.style} placement={placement} />

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
