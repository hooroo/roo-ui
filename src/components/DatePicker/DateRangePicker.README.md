# DateRangePicker

<!-- STORY -->

## Installation

```shell
$ yarn add roo-ui
```

## Example

```js
import { DateRangePicker } from 'roo-ui/components';

export default <DateRangePicker onRangeSelected={console.log} />;
```

## Notes

This component holds internal state for the `startDate`, `endDate`, `isSettingStartDate` and `isSettingEndDate`. You will only
be able to set this state via props on the initial render. If you want to update these values from a parent component, you
should pass a new `key` to this component to force a new component to be created with the new prop values. For more information
see: [Fully uncontrolled component with a key](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)

## Properties

| Name                       | Description                                    | Type       | Default   | Required? |
| -------------------------- | ---------------------------------------------- | ---------- | --------- | --------- |
| `monthsToDisplay`          | Number of months to display                    | `number`   | 1         | -         |
| `firstDayOfWeek`           | First day of the week, Defaults to 0 (Monday)  | `number`   | 1         | -         |
| `stacked`                  | Stack the calendar months vertically           | `boolean`  | false     | -         |
| `minDate`                  | Used to calculate the minimum month to render. | `date`     | yesterday | -         |
| `monthNames`               | Month names                                    | `array`    | -         | -         |
| `weekdayNames`             | Weekday names                                  | `array`    | -         | -         |
| `disabledDates`            | Dates which will be disabled                   | `array`    | []        | -         |
| `interactiveDisabledDates` | Disabled dates will be clickable               | `boolean`  | false     | -         |
| `initialStartDate`         | Start date of the range on first render        | `date`     | -         | -         |
| `initialEndDate`           | End date of the range initialEndDate           | `date`     | -         | -         |
| `isSettingStartDate`       | Change the start date of the range             | `boolean`  | false     | -         |
| `isSettingEndDate`         | Change the end date of the range               | `boolean`  | false     | -         |
| `onRangeSelected`          | Callback function when the range is selected   | `function` | -         | -         |
| `onChangeDates`            | Callback function when a date is changed       | `function` | -         | -         |

## Customization

This component can be passed additional props defined in the [dayzed](https://github.com/deseretdigital/dayzed) documentation.
