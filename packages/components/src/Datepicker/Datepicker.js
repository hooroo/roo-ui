import React from 'react';
import Dayzed from 'dayzed';
import { getDay, eachDay, format } from 'date-fns';
import { Manager, Reference, Popper } from 'react-popper';

import { Input } from '..';

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


class Datepicker extends React.Component {
  render() {
    return (
      <Dayzed
        onDateSelected={this.props.onDateSelected}
        selected={this.props.selected}
        render={({
          calendars,
          getBackProps,
          getForwardProps,
          getDateProps,
        }) => {
          if (calendars.length) {
            return (
              <div
                style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}
              >
                <div>
                  <button {...getBackProps({ calendars })}>Back</button>
                  <button {...getForwardProps({ calendars })}>Next</button>
                </div>
                {calendars.map(calendar => (
                  <div
                    key={`${calendar.month}${calendar.year}`}
                    style={{
                      display: 'inline-block',
                      width: '50%',
                      padding: '0 10px 30px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div>
                      {monthNamesShort[calendar.month]} {calendar.year}
                    </div>
                    {weekdayNamesShort.map(weekday => (
                      <div
                        key={`${calendar.month}${calendar.year}${weekday}`}
                        style={{
                          display: 'inline-block',
                          width: 'calc(100% / 7)',
                          border: 'none',
                          background: 'transparent',
                        }}
                      >
                        {weekday}
                      </div>
                    ))}
                    {calendar.weeks.map(week =>
                      week.map((dateObj, index) => {
                        if (!dateObj) {
                          return (
                            <div
                              key={`${calendar.year}${calendar.month}${index}`}
                              style={{
                                display: 'inline-block',
                                width: 'calc(100% / 7)',
                                border: 'none',
                                background: 'transparent',
                              }}
                            />
                          );
                        }
                        const {
 date, selected, selectable, today,
} = dateObj;
                        let background = today ? 'cornflowerblue' : '';
                        background = selected ? 'purple' : background;
                        background = !selectable ? 'teal' : background;
                        return (
                          <button
                            style={{
                              display: 'inline-block',
                              width: 'calc(100% / 7)',
                              border: 'none',
                              background,
                            }}
                            key={`${calendar.year}${calendar.month}${index}`}
                            {...getDateProps({ dateObj })}
                          >
                            {selectable ? date.getDate() : 'X'}
                          </button>
                        );
                      }))}
                  </div>
                ))}
              </div>
            );
          }
          return null;
        }}
      />
    );
  }
}

class Single extends React.Component {
  state = { selectedDate: null };

  _handleOnDateSelected = ({ selected, selectable, date }) => {
    this.setState(state => ({ selectedDate: date }));
  };

  render() {
    const { selectedDate } = this.state;
    return (
      <div>
        <Manager>
          <Reference>
            {({ ref }) => (
              <button type="button" ref={ref}>
                Reference element
              </button>
            )}
          </Reference>
          <Popper placement="right">
            {({
 ref, style, placement, arrowProps,
}) => (
  <div ref={ref} style={style} data-placement={placement}>
                Popper element
    <div ref={arrowProps.ref} style={arrowProps.style} />
  </div>
            )}
          </Popper>
        </Manager>

        <Input />

        <Datepicker
          selected={this.state.selectedDate}
          onDateSelected={this._handleOnDateSelected}
        />
        {this.state.selectedDate && (
          <div style={{ paddingTop: 20, textAlign: 'center' }}>
            <p>Selected:</p>
            <p>{`${selectedDate.toLocaleDateString()}`}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Single;
