import { isWithinRange } from 'date-fns';

const isDateInRange = ({
  startDate, endDate, isSettingStartDate, hoveredDate, date,
}) => {
  if (!startDate || (!endDate && !hoveredDate)) return false;

  // range is already selected
  if (endDate) {
    return isWithinRange(date, startDate, endDate);
  }

  // end date is not selected, hoverd date is selected,
  // not focusing on start date input
  if (hoveredDate && hoveredDate > startDate && !isSettingStartDate) {
    return isWithinRange(date, startDate, hoveredDate);
  }

  return false;
};

export default isDateInRange;
