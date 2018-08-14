# DatePicker

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { DatePicker } from '@roo-ui/components';

export default (
  <DatePicker
    onDateSelected={console.log}
  />
);
```

## Properties

| Name                       | Description                          | Type      | Default | Required? |
|----------------------------|--------------------------------------|-----------|---------|-----------|
| `monthsToDisplay`          | Number of months to display          | `number`  | 1       | -         |
| `stacked`                  | Stack the calendar months vertically | `boolean` | false   | -         |
| `monthNames`               | Month names                          | `array`   | -       | -         |
| `weekdayNames`             | Weekday names                        | `array`   | -       | -         |
| `disabledDates`            | Dates which will be disabled         | `array`   | []      | -         |
| `interactiveDisabledDates` | Disabled dates will be clickable     | `boolean` | false   | -         |


## Customization

This component can be passed additional props defined in the [dayzed](https://github.com/deseretdigital/dayzed) documentation.
