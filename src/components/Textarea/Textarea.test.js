import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import Textarea from '.';

describe('<Textarea />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Textarea>Hello World</Textarea>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = shallowWithTheme(<label htmlFor="input">Label<Textarea /></label>, theme);
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
