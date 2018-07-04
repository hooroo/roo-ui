import React from 'react';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';

import { Box, MaskedInput, Popover, Icon, Calendar } from '../';

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
          {({ openPopover, closePopover, isOpen }) => (
            <DateInputWrapper>
              <DateInput
                outline={isOpen}
                placeholder="DD/MM/YYYY"
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                onFocus={openPopover}
                value={date}
                onChange={this.handleInputChange}
                onKeyDown={({ key }) => {
                  if (key === 'Tab') {
                    closePopover();
                  }
                }}
              />
              <Icon name="event" onClick={openPopover} />
            </DateInputWrapper>
          )}
        </Popover.control>

        <Calendar
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
