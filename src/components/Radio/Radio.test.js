import React from 'react';
import theme from 'theme';
import { axe, mountWithTheme } from 'testUtils';
import { renderIntoDocument, isDOMComponent } from 'react-dom/test-utils';

import Radio from './';

describe('<Radio />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(<Radio />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    wrapper = mountWithTheme(
      <label htmlFor="radio">
        Label
        <Radio />
      </label>,
      theme,
    );
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can handle a ref and pass it into a DOM component', () => {
    const ref = React.createRef();

    renderIntoDocument(<Radio ref={ref} />);
    expect(isDOMComponent(ref.current)).toEqual(true);
  });

  describe('when checked', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(<Radio defaultChecked />, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      wrapper = mountWithTheme(<Radio disabled />, theme);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
