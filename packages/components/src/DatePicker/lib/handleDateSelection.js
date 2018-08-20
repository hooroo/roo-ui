const eligibleToSetStartDate = (startDate, isSetStartDate) => {
  if (!startDate) return true;

  return isSetStartDate;
};

const eligibleToSetEndDate = (endDate, isSetEndDate) => {
  if (!endDate) return true;

  return isSetEndDate;
};

const eligibleToResetDates = ({
  startDate, endDate, isSetStartDate, isSetEndDate,
}) => startDate && endDate && !isSetStartDate && !isSetEndDate;

const validStartDate = (startDate, selectedDate) => startDate < selectedDate;

const validEndDate = (endDate, selectedDate) => endDate > selectedDate;

const handleDateSelection = ({
  startDate,
  endDate,
  isSetStartDate,
  isSetEndDate,
  selectedDate,
}) => {
  // set Start Date
  if (eligibleToSetStartDate(startDate, isSetStartDate)) {
    // if invalid endDate, then reset it
    const newEndDate = validEndDate(endDate, selectedDate) ? endDate : null;

    return ({
      startDate: selectedDate,
      endDate: newEndDate,
      isSetStartDate: false,
      isSetEndDate: !newEndDate,
    });
  }

  if (eligibleToResetDates({
    startDate, endDate, isSetStartDate, isSetEndDate,
  })) {
    // reset selection
    return ({
      startDate: selectedDate,
      endDate: null,
      isSetStartDate: false,
      isSetEndDate: true,
    });
  }

  if (eligibleToSetEndDate(endDate, isSetEndDate)) {
    if (!validStartDate(startDate, selectedDate)) {
      // Change the start Date
      return ({
        startDate: selectedDate,
        endDate: null,
        isSetStartDate: false,
        isSetEndDate: true,
      });
    }
  }

  return ({
    startDate,
    endDate: selectedDate,
    isSetStartDate: false,
    isSetEndDate: false,
  });
};

export default handleDateSelection;
