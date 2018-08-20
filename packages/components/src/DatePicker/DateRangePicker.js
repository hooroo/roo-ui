import React from 'react';
import PropTypes from 'prop-types';
import Dayzed from 'dayzed';
import { themeGet } from 'styled-system';
import { subDays, format } from 'date-fns';

import { Flex, Box, Input } from '../';

import dayInRange from './lib/dayInRange';
import handleDateSelection from './lib/handleDateSelection';
import CalendarNav from './components/CalendarNav';
import CalendarMonth from './components/CalendarMonth';

const DateInput = Input.extend`
  border: ${themeGet('borders.2')} ${themeGet('colors.greys.porcelain')};
  color: transparent;
  text-shadow: 0 0 0 ${themeGet('colors.greys.charcoal')};
  border-color: ${props => ((props.highlight) ? themeGet('colors.brand.secondary') : themeGet('colors.greys.porcelain'))};
`;

DateInput.defaultProps = {
  ...Input.defaultProps,
  blacklist: [...Object.keys(Input.propTypes), 'highlight'],
};

class DateRangePicker extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnterOfDay = this.onMouseEnterOfDay.bind(this);
    this.onDateSelected = this.onDateSelected.bind(this);
    this.isInRange = this.isInRange.bind(this);
  }

  state = {
    hoveredDate: null,
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    isSetStartDate: false,
    isSetEndDate: false,
  };

  onMouseLeaveOfCalendar = () => this.setState({ hoveredDate: null });

  onMouseEnterOfDay = (hoveredDate) => {
    if (this.state.startDate && !this.state.endDate) {
      this.setState({ hoveredDate: hoveredDate.date });
    }
  }

  onDateSelected = ({ selectable, date }) => {
    if (!selectable) return;

    const newState = handleDateSelection({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      isSetStartDate: this.state.isSetStartDate,
      isSetEndDate: this.state.isSetEndDate,
      selectedDate: date,
    });

    console.log(newState);

    this.setState({
      startDate: newState.startDate,
      endDate: newState.endDate,
      isSetStartDate: newState.isSetStartDate,
      isSetEndDate: newState.isSetEndDate,
      hoveredDate: null,
    }, () => {
      if (this.rangeIsSelected()) {
        this.invokeRangeSelectedCallBack();
      }
    });
  };

  invokeRangeSelectedCallBack = () => {
    this.props.onRangeSelected({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    });
  };

  rangeIsSelected = () => this.state.startDate && this.state.endDate;

  isInRange = (day) => {
    const {
      startDate, endDate, isSetStartDate, hoveredDate,
    } = this.state;

    return dayInRange({
      startDate, endDate, isSetStartDate, hoveredDate, day,
    });
  }

  // All the following methods should be removed when we remove the two text boxes for start/end dates
  onClickStartDate = () => this.setState({ isSetStartDate: true, isSetEndDate: false });

  onClickEndDate = () => {
    if (this.state.startDate) {
      this.setState({ isSetStartDate: false, isSetEndDate: true });
    } else {
      this.onClickStartDate();
    }
  }

  formatDate = (date) => {
    if (!date) return '';

    return format(date, 'ddd D MMM YYYY');
  }

  formatStartDate = () => this.formatDate(this.state.startDate);

  formatEndDate = () => this.formatDate(this.state.endDate);

  isFocusStartDate = () => this.state.isSetStartDate;

  isFocusEndDate = () => this.state.isSetEndDate;

  render() {
    const {
      monthNames,
      weekdayNames,
      monthsToDisplay,
      stacked,
      disabledDates,
      interactiveDisabledDates,
      startDateLabel,
      endDateLabel,
      ...rest
    } = this.props;

    const selectedDates = [this.state.startDate, this.state.endDate];

    return (
      <Dayzed
        {...rest}
        selected={selectedDates}
        monthsToDisplay={monthsToDisplay}
        onDateSelected={this.onDateSelected}
        render={({
            calendars,
            getBackProps,
            getForwardProps,
            getDateProps,
          }) => {
            if (!calendars.length) return null;

            return (
              <Box onMouseLeave={this.onMouseLeaveOfCalendar}>
                <Flex flexWrap="wrap">
                  <Flex>
                    <DateInput
                      placeholder={startDateLabel}
                      value={this.formatStartDate()}
                      highlight={this.isFocusStartDate()}
                      onClick={this.onClickStartDate}
                    />
                  </Flex>
                  <Flex>
                    <DateInput
                      placeholder={endDateLabel}
                      value={this.formatEndDate()}
                      highlight={this.isFocusEndDate()}
                      onClick={this.onClickEndDate}
                    />
                  </Flex>
                </Flex>

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
  startDate: null,
  endDate: null,
  startDateLabel: 'Start Date',
  endDateLabel: 'End Date',
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
  onRangeSelected: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  startDateLabel: PropTypes.string,
  endDateLabel: PropTypes.string,
};

export default DateRangePicker;
