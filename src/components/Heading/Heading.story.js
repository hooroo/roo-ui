import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Heading from './';
import README from './README.md';

storiesOf('Components|Heading', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Fragment>
      <Heading.h1>Heading 1</Heading.h1>
      <Heading.h2>Heading 2</Heading.h2>
      <Heading.h3>Heading 3</Heading.h3>
      <Heading.h4>Heading 4</Heading.h4>
      <Heading.h5>Heading 5</Heading.h5>
      <Heading.h6>Heading 6</Heading.h6>
    </Fragment>
  ));
