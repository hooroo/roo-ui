import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import NakedButton from '.';

describe('<NakedButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<NakedButton>Hello world</NakedButton>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
