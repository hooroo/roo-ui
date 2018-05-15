import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Paragraph from '.';

describe('<Paragraph />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Paragraph>Hello world</Paragraph>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
