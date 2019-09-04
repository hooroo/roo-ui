import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Wrapper from './';
import README from './README.md';

storiesOf('Components|Wrapper', module)
  .addDecorator(withDocs(README))
  .add('with props', () => (
    <Wrapper p={3} bg="greys.porcelain">
      When you add props to the wrapper it acts like a Box
    </Wrapper>
  ))
  .add('without props', () => (
    <Wrapper>Without props the wrapper it acts like a Fragment</Wrapper>
  ));
