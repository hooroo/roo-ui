import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<LoadingIndicator />, theme).dive();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
