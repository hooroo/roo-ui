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

| Name              | Description                         | Type            | Default | Required? |
|-------------------|-------------------------------------|-----------------|---------|-----------|
| `onDateSelected`  | Function called when date selected  | `node`          | -       | ✔︎         |
| `date`            | Initial month calendar is opened on | `date`          | Today   | -         |
| `monthsToDisplay` | Number of months to display         | `number`        | 1       | -         |
| `minDate`         | Minimum calendar month to render    | `date`          | -       | -         |
| `maxDate`         | Maximum calendar month to render    | `date`          | -       | -         |
| `selected`        | Dates to highlight                  | `date` or array | -       | -         |
| `monthNames`      | Month names                         | `array`         | -       | -         |
| `weekdayNames`    | Weekday names                       | `array`         | -       | -         |

## Customization

This component can be passed additional props defined in the [dayzed](https://github.com/deseretdigital/dayzed) documentation.
