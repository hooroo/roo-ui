import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { Nav, NavButton } from '.';

describe('<Nav />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Nav />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<NavButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<NavButton>Next</NavButton>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
