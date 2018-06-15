/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import BounceLoader from './BounceLoader';

let props;

beforeEach(() => {
  props = {};
});

const render = () => shallow(<BounceLoader {...props} />);

it('matches snapshot', () => {
  expect(render()).toMatchSnapshot();
});
