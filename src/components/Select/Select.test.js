import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import { axe } from 'jest-axe';
import { renderIntoDocument, isDOMComponent } from 'react-dom/test-utils';

import Select from './';

describe('<Select />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(<Select>Options</Select>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = shallowWithTheme(
      <label htmlFor="input">
        Label
        <Select />
      </label>,
      theme,
    );
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can handle a ref and pass it into a DOM component', () => {
    const ref = React.createRef();

    renderIntoDocument(<Select ref={ref} />);
    expect(isDOMComponent(ref.current)).toEqual(true);
  });

  describe('disabled', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Select disabled>Options</Select>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('readOnly', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Select readOnly>Options</Select>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('underline', () => {
    beforeEach(() => {
      wrapper = shallowWithTheme(<Select underline>Options</Select>, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
