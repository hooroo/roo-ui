import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Popover from './Popover';
import README from './README.md';

import { Button } from '..';

storiesOf('Components|Popover', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Popover>
      <Popover.control>
        {({ onClick }) => (
          <Button onClick={onClick}>Open popover</Button>
        )}
      </Popover.control>

      Contents
    </Popover>
  ));
