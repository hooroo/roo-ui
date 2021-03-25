import React from 'react';
import { withDocs } from 'storybook-readme';

import Wrapper from './';
import README from './README.md';

export default {
  title: 'Components/Wrapper',
  decorators: [withDocs(README)],
};

export const WithProps = () => (
  <Wrapper p={3} bg="greys.porcelain">
    When you add props to the wrapper it acts like a Box
  </Wrapper>
);

WithProps.story = {
  name: 'with props',
};

export const WithoutProps = () => (
  <Wrapper>Without props the wrapper it acts like a Fragment</Wrapper>
);

WithoutProps.story = {
  name: 'without props',
};
