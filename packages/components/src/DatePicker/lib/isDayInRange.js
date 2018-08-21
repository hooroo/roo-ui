import { isWithinRange } from 'date-fns';

const isDayInRange = ({
  startDate, endDate, isSettingStartDate, hoveredDate, day,
}) => {
  if (!startDate || (!endDate && !hoveredDate)) return false;

  // range is already selected
  if (endDate) {
    return isWithinRange(day, startDate, endDate);
  }

  // end day is not selected, hoverd date is selected,
  // not focusing on start day input
  if (hoveredDate && hoveredDate > startDate && !isSettingStartDate) {
    return isWithinRange(day, startDate, hoveredDate);
  }

  return false;
};

export default isDayInRange;
