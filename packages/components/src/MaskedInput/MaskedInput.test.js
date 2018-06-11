import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import MaskedInput from '.';

describe('<MaskedInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <MaskedInput
        placeholder="Enter postcode"
        mask={[/\d/, /\d/, /\d/, /\d/]}
      />,
      theme,
    ).dive();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('<MaskedInput.time />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(
        <MaskedInput.time />,
        theme,
      ).dive();
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
