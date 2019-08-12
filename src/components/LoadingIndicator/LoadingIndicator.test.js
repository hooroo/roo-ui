import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
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
