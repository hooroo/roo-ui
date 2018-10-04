import { isWithinRange } from 'date-fns';

const isDateInRange = ({
  startDate, endDate, isSettingStartDate, hoveredDate, date,
}) => {
  if (!startDate || (!endDate && !hoveredDate)) return false;

  const IsRangeSelected = !!endDate;
  if (IsRangeSelected) {
    return isWithinRange(date, startDate, endDate);
  }

  const isHoverdDate = !!hoveredDate;
  const isValidHoverdDate = hoveredDate > startDate;

  if (isHoverdDate && isValidHoverdDate && !isSettingStartDate) {
    return isWithinRange(date, startDate, hoveredDate);
  }

  return false;
};

export default isDateInRange;
