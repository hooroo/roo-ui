import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import ExternalLink from '.';

describe('<ExternalLink />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<ExternalLink>Hello world</ExternalLink>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
