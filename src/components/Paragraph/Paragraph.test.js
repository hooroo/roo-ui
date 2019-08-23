import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import Paragraph from './';

describe('<Paragraph />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Paragraph>Hello world</Paragraph>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
