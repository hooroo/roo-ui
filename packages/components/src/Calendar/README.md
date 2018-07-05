# Calendar

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { Calendar } from '@roo-ui/components';

export default (
  <Calendar
    onDateSelected={console.log}
  />
);
```

The components that make up the `Calendar` can also be imported.

```js
import {
  CalendarDay, CalendarEmptyDay, CalendarDays,
  CalendarWeekday, CalendarWeekdays,
  CalendarNav,
  CalendarMonth
} from '@roo-ui/components';
```


## Properties

| Name              | Description                           | Type     | Default | Required? |
|-------------------|---------------------------------------|----------|---------|-----------|
| `onDateSelected`  | Function to call when date selected   | `node`   | -       | true      |
| `initialMonth`    | Initial month to open the calendar on | `date`   | Today   | false     |
| `monthsToDisplay` | Number of months to display           | `number` | 1       | false     |
| `minDate`         | Minimum calendar month to render      | `date`   | -       | false     |
| `maxDate`         | Maximum calendar month to render      | `date`   | -       | false     |
| `selected`        | A date to highlight                   | `date`   | -       | false     |
| `monthNames`      | Month names                           | `array`  | -       | false     |
| `weekdayNames`    | Weekday names                         | `array`  | -       | false     |
