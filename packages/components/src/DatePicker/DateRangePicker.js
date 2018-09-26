import React from 'react';
import PropTypes from 'prop-types';
import Dayzed from 'dayzed';
import { subDays, differenceInCalendarMonths, startOfDay, endOfDay, isSameDay } from 'date-fns';
import throttle from 'lodash/fp/throttle';

import { Flex, Box } from '../';

import isDateInRange from './lib/isDateInRange';
import CalendarNav from './components/CalendarNav';
import CalendarMonth from './components/CalendarMonth';

const NOOP = () => false;
const throttled = throttle(10);

const calcuateMonthOffsetFromToday = (focusDate) => {
  const today = new Date();
  return differenceInCalendarMonths(focusDate, today);
};

class DateRangePicker extends React.Component {
  constructor(props) {
    super(props);

    const { initialStartDate, initialEndDate } = this.props;
    const startDate = initialStartDate ? startOfDay(initialStartDate) : null;
    const endDate = initialEndDate ? endOfDay(initialEndDate) : null;
    const focusDate = startDate || endDate || new Date();

    this.state = {
      hoveredDate: null,
      offset: calcuateMonthOffsetFromToday(focusDate),
      isSettingStartDate: props.isSettingStartDate,
      isSettingEndDate: props.isSettingEndDate,
      startDate,
      endDate,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { startDate, endDate } = this.state;
    const { startDate: prevStartDate, endDate: prevEndDate } = prevState;
    const startDateDidUpdate = !isSameDay(startDate, prevStartDate);
    const endDateDidUpdate = !isSameDay(endDate, prevEndDate);

    if (startDateDidUpdate || endDateDidUpdate) {
      this.props.onChangeDates({ startDate, endDate });
    }
  }

  onOffsetChanged = offset => this.setState({ offset });

  onMouseLeaveOfCalendar = () => this.setState({ hoveredDate: null });

  onMouseEnterOfDay = throttled((hoveredDate) => {
    if (this.state.startDate && !this.state.endDate) {
      this.setState({ hoveredDate: hoveredDate.date });
    }
  })

  onDateSelected = ({ selectable, date }) => {
    if (!selectable) return;

    const {
      startDate, endDate, isSettingStartDate, isSettingEndDate,
    } = this.state;

    if (!startDate || isSettingStartDate) {
      this.selectStartDate(date);
    } else if (!endDate || isSettingEndDate) {
      this.selectEndDate(date);
    } else {
      this.resetWithStartDate(date);
    }

    this.notifyRangeSelection();
  };

  notifyRangeSelection = () => {
    const { startDate, endDate } = this.state;
    const { onRangeSelected } = this.props;

    if (startDate && endDate && onRangeSelected) {
      onRangeSelected({ startDate, endDate });
    }
  }

  selectStartDate = (startDate) => {
    const endDate = startDate <= this.state.endDate ? this.state.endDate : null;
    const endDateRequiresSelection = endDate === null;

    this.setState({
      startDate,
      endDate,
      isSettingStartDate: false,
      isSettingEndDate: endDateRequiresSelection,
      hoveredDate: null,
    });
  };

  selectEndDate = (date) => {
    if (date <= this.state.startDate) {
      this.resetWithStartDate(date);
    } else {
      this.setState({
        endDate: date,
        isSettingEndDate: false,
        hoveredDate: null,
      });
    }
  };

  resetWithStartDate = (startDate) => {
    this.setState({
      startDate,
      endDate: null,
      isSettingStartDate: false,
      isSettingEndDate: true,
      hoveredDate: null,
    });
  };

  isInRange = (date) => {
    const {
      startDate, endDate, isSettingStartDate, hoveredDate,
    } = this.state;
    return isDateInRange({
      startDate, endDate, isSettingStartDate, hoveredDate, date,
    });
  }

  render() {
    const {
      monthNames,
      weekdayNames,
      monthsToDisplay,
      stacked,
      disabledDates,
      interactiveDisabledDates,
      ...rest
    } = this.props;
    const { startDate, endDate, offset } = this.state;
    const selectedDates = [startDate, endDate];

    return (
      <Dayzed
        {...rest}
        selected={selectedDates}
        date={new Date()}
        offset={offset}
        monthsToDisplay={monthsToDisplay}
        onDateSelected={this.onDateSelected}
        onOffsetChanged={this.onOffsetChanged}
        render={({
            calendars,
            getBackProps,
            getForwardProps,
            getDateProps,
          }) => {
            if (!calendars.length) return null;

            return (
              <Box onMouseLeave={this.onMouseLeaveOfCalendar} position="relative">
                <CalendarNav
                  prevProps={getBackProps({ calendars })}
                  nextProps={getForwardProps({ calendars })}
                />

                <Flex flexWrap="wrap">
                  {calendars.map(calendar => (
                    <CalendarMonth
                      key={`${calendar.month}${calendar.year}`}
                      monthsToDisplay={monthsToDisplay}
                      monthName={monthNames[calendar.month]}
                      month={calendar.month}
                      year={calendar.year}
                      stacked={stacked}
                      weekdayNames={weekdayNames}
                      weeks={calendar.weeks}
                      getDateProps={getDateProps}
                      disabledDates={disabledDates}
                      interactiveDisabledDates={interactiveDisabledDates}
                      onMouseEnterOfDay={this.onMouseEnterOfDay}
                      isInRange={this.isInRange}
                    />
                  ))}
                </Flex>
              </Box>
            );
          }}
      />
    );
  }
}

DateRangePicker.defaultProps = {
  monthsToDisplay: 1,
  firstDayOfWeek: 1,
  stacked: false,
  minDate: subDays(new Date(), 1),
  disabledDates: [],
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  interactiveDisabledDates: false,
  initialStartDate: null,
  initialEndDate: null,
  onChangeStartDate: null,
  onChangeEndDate: null,
  isSettingStartDate: false,
  isSettingEndDate: false,
  onRangeSelected: NOOP,
  onChangeDates: NOOP,
};

DateRangePicker.propTypes = {
  monthsToDisplay: PropTypes.number,
  firstDayOfWeek: PropTypes.number,
  stacked: PropTypes.bool,
  minDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  interactiveDisabledDates: PropTypes.bool,
  monthNames: PropTypes.arrayOf(PropTypes.string),
  weekdayNames: PropTypes.arrayOf(PropTypes.string),
  initialStartDate: PropTypes.instanceOf(Date),
  initialEndDate: PropTypes.instanceOf(Date),
  isSettingStartDate: PropTypes.bool,
  isSettingEndDate: PropTypes.bool,
  onRangeSelected: PropTypes.func,
  onChangeDates: PropTypes.func,
};

export default DateRangePicker;
