import React from 'react';
import { shallow } from 'enzyme';

import { qantas } from '@roo-ui/themes';
import Button from '.';

describe('<Button />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      theme: qantas,
    };
    wrapper = shallow(<Button {...props}>Hello world</Button>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
