import addDays from 'date-fns/add_days';
import handleDateSelection from './handleDateSelection';

describe('handDateSelection', () => {
  const selectedDate = addDays(new Date(), 3);

  describe('when start date is null', () => {
    const results = handleDateSelection({
      startDate: null,
      endDate: null,
      isSetStartDate: false,
      isSetEndDate: false,
      selectedDate,
    });

    it('sets startDate', () => {
      expect(results.startDate).toEqual(selectedDate);
    });

    it('resets endDate', () => {
      expect(results.endDate).toBeNull();
    });

    it('sets isSetStartDate to false', () => {
      expect(results.isSetStartDate).toEqual(false);
    });

    it('sets isSetEndDate to true', () => {
      expect(results.isSetEndDate).toEqual(true);
    });
  });

  describe('when startDate exists and isSetStartDate is true', () => {
    describe('when endDate is null', () => {
      const startDate = new Date();

      const results = handleDateSelection({
        startDate,
        endDate: null,
        isSetStartDate: true,
        isSetEndDate: false,
        selectedDate,
      });

      it('sets startDate', () => {
        expect(results.startDate).toEqual(selectedDate);
      });

      it('resets endDate', () => {
        expect(results.endDate).toBeNull();
      });

      it('sets isSetStartDate to false', () => {
        expect(results.isSetStartDate).toEqual(false);
      });

      it('sets isSetEndDate to true', () => {
        expect(results.isSetEndDate).toEqual(true);
      });
    });

    describe('when endDate > selectedDate', () => {
      const startDate = new Date();
      const endDate = addDays(new Date(), 5);

      const results = handleDateSelection({
        startDate,
        endDate,
        isSetStartDate: true,
        isSetEndDate: false,
        selectedDate,
      });

      it('sets startDate', () => {
        expect(results.startDate).toEqual(selectedDate);
      });

      it('does not change endDate', () => {
        expect(results.endDate).toEqual(endDate);
      });

      it('sets isSetStartDate to false', () => {
        expect(results.isSetStartDate).toEqual(false);
      });

      it('sets isSetEndDate to false', () => {
        expect(results.isSetEndDate).toEqual(false);
      });
    });

    describe('when endDate < selectedDate', () => {
      const startDate = new Date();
      const endDate = addDays(new Date(), 2);

      const results = handleDateSelection({
        startDate,
        endDate,
        isSetStartDate: true,
        isSetEndDate: false,
        selectedDate,
      });

      it('sets startDate', () => {
        expect(results.startDate).toEqual(selectedDate);
      });

      it('resets endDate', () => {
        expect(results.endDate).toBeNull();
      });

      it('sets isSetStartDate to false', () => {
        expect(results.isSetStartDate).toEqual(false);
      });

      it('sets isSetEndDate to false', () => {
        expect(results.isSetEndDate).toEqual(true);
      });
    });
  });

  describe('when startDate & endDate exist, isSetStartDate & isSetStartDate are false', () => {
    const results = handleDateSelection({
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      isSetStartDate: false,
      isSetEndDate: false,
      selectedDate,
    });

    it('sets startDate', () => {
      expect(results.startDate).toEqual(selectedDate);
    });

    it('resets endDate', () => {
      expect(results.endDate).toBeNull();
    });

    it('sets isSetStartDate to false', () => {
      expect(results.isSetStartDate).toEqual(false);
    });

    it('sets isSetEndDate to true', () => {
      expect(results.isSetEndDate).toEqual(true);
    });
  });

  describe('when endDate is null, isSetStartDate is false, isSetEndDate is true', () => {
    describe('when startDate < selectedDate', () => {
      const startDate = new Date();

      const results = handleDateSelection({
        startDate,
        endDate: null,
        isSetStartDate: false,
        isSetEndDate: true,
        selectedDate,
      });

      it('does not change startDate', () => {
        expect(results.startDate).toEqual(startDate);
      });

      it('sets endDate', () => {
        expect(results.endDate).toEqual(selectedDate);
      });

      it('sets isSetStartDate to false', () => {
        expect(results.isSetStartDate).toEqual(false);
      });

      it('sets isSetEndDate to false', () => {
        expect(results.isSetEndDate).toEqual(false);
      });
    });

    describe('when startDate > selectedDate', () => {
      const startDate = addDays(new Date(), 5);

      const results = handleDateSelection({
        startDate,
        endDate: null,
        isSetStartDate: false,
        isSetEndDate: true,
        selectedDate,
      });

      it('sets startDate', () => {
        expect(results.startDate).toEqual(selectedDate);
      });

      it('sets endDate', () => {
        expect(results.endDate).toBeNull();
      });

      it('sets isSetStartDate to false', () => {
        expect(results.isSetStartDate).toEqual(false);
      });

      it('sets isSetEndDate to true', () => {
        expect(results.isSetEndDate).toEqual(true);
      });
    });
  });

  describe('when endDate is set, isSetStartDate is false, isSetEndDate is true', () => {
    describe('when startDate < selectedDate', () => {
      const startDate = new Date();

      const results = handleDateSelection({
        startDate,
        endDate: addDays(new Date(), 2),
        isSetStartDate: false,
        isSetEndDate: true,
        selectedDate,
      });

      it('does not change startDate', () => {
        expect(results.startDate).toEqual(startDate);
      });

      it('sets endDate', () => {
        expect(results.endDate).toEqual(selectedDate);
      });

      it('sets isSetStartDate to false', () => {
        expect(results.isSetStartDate).toEqual(false);
      });

      it('sets isSetEndDate to false', () => {
        expect(results.isSetEndDate).toEqual(false);
      });
    });

    describe('when startDate > selectedDate', () => {
      const startDate = addDays(new Date(), 5);

      const results = handleDateSelection({
        startDate,
        endDate: addDays(new Date(), 2),
        isSetStartDate: false,
        isSetEndDate: true,
        selectedDate,
      });

      it('sets startDate', () => {
        expect(results.startDate).toEqual(selectedDate);
      });

      it('sets endDate', () => {
        expect(results.endDate).toBeNull();
      });

      it('sets isSetStartDate to false', () => {
        expect(results.isSetStartDate).toEqual(false);
      });

      it('sets isSetEndDate to true', () => {
        expect(results.isSetEndDate).toEqual(true);
      });
    });
  });
});
