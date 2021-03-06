import isDateInRange from './isDateInRange';

describe('isDateInRange', () => {
  describe('when startDate and endDate are selected', () => {
    describe('when date is in the range', () => {
      it('returns true', () => {
        expect(
          isDateInRange({
            startDate: new Date(2018, 1, 11),
            endDate: new Date(2018, 1, 20),
            date: new Date(2018, 1, 15),
          }),
        ).toEqual(true);
      });
    });

    describe('when date is not in the range', () => {
      it('returns false', () => {
        expect(
          isDateInRange({
            startDate: new Date(2018, 1, 11),
            endDate: new Date(2018, 1, 20),
            date: new Date(2018, 1, 25),
          }),
        ).toEqual(false);
      });
    });
  });

  describe('when only startDate is selected', () => {
    describe('with no hoveredDate', () => {
      it('returns false', () => {
        expect(
          isDateInRange({
            startDate: new Date(2018, 1, 11),
            date: new Date(2018, 1, 25),
          }),
        ).toEqual(false);
      });
    });

    describe('with hoveredDate', () => {
      describe('with isSettingStartDate is false', () => {
        describe('when day is between startDate and hoveredDate', () => {
          it('returns true', () => {
            expect(
              isDateInRange({
                startDate: new Date(2018, 1, 11),
                hoveredDate: new Date(2018, 1, 18),
                isSettingStartDate: false,
                date: new Date(2018, 1, 14),
              }),
            ).toEqual(true);
          });
        });

        describe('when day is not between startDate and hoveredDate', () => {
          it('returns false', () => {
            expect(
              isDateInRange({
                startDate: new Date(2018, 1, 11),
                hoveredDate: new Date(2018, 1, 18),
                isSettingStartDate: false,
                date: new Date(2018, 1, 20),
              }),
            ).toEqual(false);
          });
        });
      });

      describe('with isSettingStartDate is true', () => {
        describe('when day is between startDate and hoveredDate', () => {
          it('returns false', () => {
            expect(
              isDateInRange({
                startDate: new Date(2018, 1, 11),
                hoveredDate: new Date(2018, 1, 18),
                isSettingStartDate: true,
                date: new Date(2018, 1, 14),
              }),
            ).toEqual(false);
          });
        });

        describe('when day is not between startDate and hoveredDate', () => {
          it('returns false', () => {
            expect(
              isDateInRange({
                startDate: new Date(2018, 1, 11),
                hoveredDate: new Date(2018, 1, 18),
                isSettingStartDate: true,
                date: new Date(2018, 1, 20),
              }),
            ).toEqual(false);
          });
        });
      });
    });
  });
});
