import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import TextArea from '.';

describe('<TextArea />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<TextArea>Hello World</TextArea>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = shallowWithTheme(<label htmlFor="input">Label<TextArea /></label>, theme);
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
