import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { Day, EmptyDay, Days } from '.';

describe('<Days />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <Days>
        <EmptyDay />
        <Day>21</Day>
      </Days>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
