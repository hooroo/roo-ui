import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import BackgroundImage from '.';

describe('<BackgroundImage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <BackgroundImage src="/example.jpg">Hello world</BackgroundImage>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
