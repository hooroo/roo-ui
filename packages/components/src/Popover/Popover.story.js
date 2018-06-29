import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Popover from '.';
import README from './README.md';

import { Button } from '..';

storiesOf('Components|Popover', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Popover>
      <Popover.control>
        {({ openPopover, closePopover }) => (
          <Button primary onClick={openPopover} onKeyDown={closePopover}>Open popover</Button>
        )}
      </Popover.control>

      <p>Popover contents</p>
    </Popover>
  ));
