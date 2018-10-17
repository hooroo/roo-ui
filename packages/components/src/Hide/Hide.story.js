import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Hide from '.';
import README from './README.md';

storiesOf('Components|Hide', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <table>
      <thead>
        <th /><th>is visible</th>
      </thead>
      <tbody>
        <tr><th>xs</th><td><Hide xs><span role="img" aria-label="Is visible?">✅</span></Hide></td></tr>
        <tr><th>sm</th><td><Hide sm><span role="img" aria-label="Is visible?">✅</span></Hide></td></tr>
        <tr><th>md</th><td><Hide md><span role="img" aria-label="Is visible?">✅</span></Hide></td></tr>
        <tr><th>lg</th><td><Hide lg><span role="img" aria-label="Is visible?">✅</span></Hide></td></tr>
      </tbody>
    </table>
  ));
