import isWithinInterval from 'date-fns/isWithinInterval';

const isDateInRange = ({
  startDate,
  endDate,
  isSettingStartDate,
  hoveredDate,
  date,
}) => {
  if (!startDate || (!endDate && !hoveredDate)) return false;

  const IsRangeSelected = !!endDate;
  if (IsRangeSelected) {
    return isWithinInterval(date, { start: startDate, end: endDate });
  }

  const isHoverdDate = !!hoveredDate;
  const isValidHoverdDate = hoveredDate > startDate;

  if (isHoverdDate && isValidHoverdDate && !isSettingStartDate) {
    return isWithinInterval(date, { start: startDate, end: hoveredDate });
  }

  return false;
};

export default isDateInRange;
