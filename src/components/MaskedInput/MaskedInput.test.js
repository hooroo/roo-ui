import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';

import MaskedInput from '.';

describe('<MaskedInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <label htmlFor="postcode">
        Enter postcode
        <MaskedInput
          id="postcode"
          placeholder="Enter postcode"
          mask={[/\d/, /\d/, /\d/, /\d/]}
        />
      </label>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper.find('MaskedInput').dive()).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('<MaskedInput.time />', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<MaskedInput.time />, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
