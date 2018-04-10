import React from 'react';
import { qantas } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import Button from '.';

describe('<Button />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {};
    wrapper = shallowWithTheme(<Button {...props}>Hello world</Button>, qantas);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
