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

| Name              | Description                          | Type            | Default | Required? |
|-------------------|--------------------------------------|-----------------|---------|-----------|
| `monthsToDisplay` | Number of months to display          | `number`        | 1       | -         |
| `stacked`         | Stack the calendar months vertically | `boolean`       | false   | -         |
| `monthNames`      | Month names                          | `array`         | -       | -         |
| `weekdayNames`    | Weekday names                        | `array`         | -       | -         |

## Customization

This component can be passed additional props defined in the [dayzed](https://github.com/deseretdigital/dayzed) documentation.
