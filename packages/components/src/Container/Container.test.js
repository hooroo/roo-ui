import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Container from '.';

describe('<Container />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Container>Hello world</Container>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
