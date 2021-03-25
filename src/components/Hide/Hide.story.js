import React from 'react';
import { withDocs } from 'storybook-readme';

import Hide from './';
import README from './README.md';

export default {
  title: 'Components/Hide',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <table>
    <thead>
      <th>is visible</th>
    </thead>
    <tbody>
      <tr>
        <th>xs</th>
        <td>
          <Hide xs>
            <span role="img" aria-label="Is visible?">
              ✅
            </span>
          </Hide>
        </td>
      </tr>
      <tr>
        <th>sm</th>
        <td>
          <Hide sm>
            <span role="img" aria-label="Is visible?">
              ✅
            </span>
          </Hide>
        </td>
      </tr>
      <tr>
        <th>md</th>
        <td>
          <Hide md>
            <span role="img" aria-label="Is visible?">
              ✅
            </span>
          </Hide>
        </td>
      </tr>
      <tr>
        <th>lg</th>
        <td>
          <Hide lg>
            <span role="img" aria-label="Is visible?">
              ✅
            </span>
          </Hide>
        </td>
      </tr>
    </tbody>
  </table>
);

Default.story = {
  name: 'default',
};
