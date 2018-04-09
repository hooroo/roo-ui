import React from 'react';
import { shallow } from 'enzyme';

import Button from '.';

describe('<Button />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {};
    wrapper = shallow(<Button {...props}>Hello world</Button>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
