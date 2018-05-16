import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Hide from '.';
import README from './README.md';

storiesOf('Components|Hide', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Fragment>
      <Hide xs>Hidden on xs</Hide>
      <Hide sm>Hidden on sm</Hide>
      <Hide md>Hidden on md</Hide>
      <Hide lg>Hidden on lg</Hide>
    </Fragment>
  ));
