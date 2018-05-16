import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Icon from '.';

describe('<Icon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Icon name="hotel" />, theme).dive();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
