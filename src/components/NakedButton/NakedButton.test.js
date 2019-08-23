import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import NakedButton from './';

describe('<NakedButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<NakedButton>Hello world</NakedButton>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
