import React from 'react';
import PropTypes from 'prop-types';
import Dayzed from 'dayzed';
import { themeGet } from 'styled-system';
import { subDays, isEqual, isWithinRange } from 'date-fns';

import { Flex, Box, Input } from '../';

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

    this.state = {
      hoveredDate: null,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      isSettingStartDate: this.props.setStartDate,
      isSettingEndDate: this.props.setEndDate,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { startDate, endDate } = this.state;
    const { startDate: prevStartDate, endDate: prevEndDate } = prevState;
    const { onChangeStartDate, onChangeEndDate } = this.props;

    if (!isEqual(startDate, prevStartDate) && onChangeStartDate) {
      onChangeStartDate(startDate);
    }

    if (!isEqual(endDate, prevEndDate) && onChangeEndDate) {
      onChangeEndDate(endDate);
    }
  }

  onMouseLeaveOfCalendar = () => this.setState({ hoveredDate: null });

  onMouseEnterOfDay = (hoveredDate) => {
    if (this.state.startDate && !this.state.endDate) {
      this.setState({ hoveredDate: hoveredDate.date });
    }
  }

  onDateSelected = ({ selectable, date }) => {
    if (!selectable) return;

    const { isSettingStartDate, isSettingEndDate } = this.state;

    if (isSettingStartDate) {
      this.selectStartDate(date);
    } else if (isSettingEndDate) {
      this.selectEndDate(date);
    } else if (!isSettingStartDate && !isSettingEndDate) {
      this.resetWithStartDate(date);
    }

    this.setState({
      hoveredDate: null,
    }, () => {
      const { startDate, endDate } = this.state;

      if (startDate && endDate) {
        this.props.onRangeSelected({ startDate, endDate });
      }
    });
  };

  selectStartDate = (startDate) => {
    const endDate = startDate <= this.state.endDate ? this.state.endDate : null;
    const endDateRequiresSelection = endDate === null;

    this.setState({
      startDate,
      endDate,
      isSettingStartDate: false,
      isSettingEndDate: endDateRequiresSelection,
    });
  };

  selectEndDate = (endDate) => {
    if (endDate <= this.state.startDate) return;

    this.setState({
      endDate,
      isSettingEndDate: false,
    });
  };

  resetWithStartDate = (startDate) => {
    this.setState({
      startDate,
      endDate: null,
      isSettingStartDate: false,
      isSettingEndDate: true,
    });
  };

  isInRange = (date) => {
    const {
      startDate, endDate, hoveredDate,
    } = this.state;

    if (!startDate || !endDate) return false;

    return isWithinRange(date, startDate, endDate || hoveredDate);
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
  onChangeStartDate: null,
  onChangeEndDate: null,
  setStartDate: false,
  setEndDate: false,
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
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  onChangeStartDate: PropTypes.func,
  onChangeEndDate: PropTypes.func,
  onRangeSelected: PropTypes.func.isRequired,
  setStartDate: PropTypes.bool,
  setEndDate: PropTypes.bool,
};

export default DateRangePicker;
