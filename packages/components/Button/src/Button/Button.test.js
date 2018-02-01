import React from 'react';
import { shallow } from 'enzyme';

import Button from '.';

describe('<Button />', () => {
  it('renders exactly', () => {
    expect(shallow(<Button>Hello world</Button>)).toMatchSnapshot();
  });
});
