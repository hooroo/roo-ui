import React from 'react';
import { shallow } from 'enzyme';
import { axe } from 'jest-axe';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {};
    wrapper = shallow(<LoadingIndicator {...props} />).dive();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });
});
