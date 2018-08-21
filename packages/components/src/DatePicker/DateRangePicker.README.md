# DateRangePicker

<!-- STORY -->

## Installation

```shell
$ yarn add @roo-ui/components
```

## Example

```js
import { DateRangePicker } from '@roo-ui/components';

export default (
  <DateRangePicker
    onRangeSelected={console.log}
  />
);
```

## Properties

| Name                       | Description                                      | Type      | Default | Required? |
|----------------------------|--------------------------------------------------|-----------|---------|-----------|
| `monthsToDisplay`          | Number of months to display                      | `number`  | 1       | -         |
| `stacked`                  | Stack the calendar months vertically             | `boolean` | false   | -         |
| `monthNames`               | Month names                                      | `array`   | -       | -         |
| `weekdayNames`             | Weekday names                                    | `array`   | -       | -         |
| `disabledDates`            | Dates which will be disabled                     | `array`   | []      | -         |
| `interactiveDisabledDates` | Disabled dates will be clickable                 | `boolean` | false   | -         |
| `startDate`                | Start date of the range                          | `date`    | -       | -         |
| `endDate`                  | End date of the range                            | `date`    | -       | -         |
| `setStartDate`             | Change the start date of the range               | `boolean` | false   | -         |
| `setEndDate`               | Change the end date of the range                 | `boolean` | false   | -         |
| `onRangeSelected`          | Callback function when the range is selected     | `boolean` | -       | true      |
| `onChangeStartDate`        | Callback function when the start date is chnaged | `boolean` | -       | true      |
| `onChangeEndDate`          | Callback function when the end date is chnaged   | `boolean` | -       | true      |

## Customization

This component can be passed additional props defined in the [dayzed](https://github.com/deseretdigital/dayzed) documentation.