import dayInRange from './dayInRange';

describe('dayInRange', () => {
  describe('when startDate and endDate are selected', () => {
    describe('when date is in the range', () => {
      it('returns true', () => {
        expect(dayInRange({
          startDate: new Date(2018, 1, 11),
          endDate: new Date(2018, 1, 20),
          day: new Date(2018, 1, 15),
        })).toEqual(true);
      });
    });

    describe('when date is not in the range', () => {
      it('returns false', () => {
        expect(dayInRange({
          startDate: new Date(2018, 1, 11),
          endDate: new Date(2018, 1, 20),
          day: new Date(2018, 1, 25),
        })).toEqual(false);
      });
    });
  });

  describe('when only startDate is selected', () => {
    describe('with no hoveredDate', () => {
      it('returns false', () => {
        expect(dayInRange({
          startDate: new Date(2018, 1, 11),
          day: new Date(2018, 1, 25),
        })).toEqual(false);
      });
    });

    describe('with hoveredDate', () => {
      describe('with isFocusOnStartDate is false', () => {
        describe('when day is between startDate and hoveredDate', () => {
          it('returns true', () => {
            expect(dayInRange({
              startDate: new Date(2018, 1, 11),
              hoveredDate: new Date(2018, 1, 18),
              isFocusOnStartDate: false,
              day: new Date(2018, 1, 14),
            })).toEqual(true);
          });
        });

        describe('when day is not between startDate and hoveredDate', () => {
          it('returns false', () => {
            expect(dayInRange({
              startDate: new Date(2018, 1, 11),
              hoveredDate: new Date(2018, 1, 18),
              isFocusOnStartDate: false,
              day: new Date(2018, 1, 20),
            })).toEqual(false);
          });
        });
      });

      describe('with isFocusOnStartDate is true', () => {
        describe('when day is between startDate and hoveredDate', () => {
          it('returns false', () => {
            expect(dayInRange({
              startDate: new Date(2018, 1, 11),
              hoveredDate: new Date(2018, 1, 18),
              isFocusOnStartDate: true,
              day: new Date(2018, 1, 14),
            })).toEqual(false);
          });
        });

        describe('when day is not between startDate and hoveredDate', () => {
          it('returns false', () => {
            expect(dayInRange({
              startDate: new Date(2018, 1, 11),
              hoveredDate: new Date(2018, 1, 18),
              isFocusOnStartDate: true,
              day: new Date(2018, 1, 20),
            })).toEqual(false);
          });
        });
      });
    });
  });
});
