import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Popover from './';
import README from './README.md';

import { Button } from '../';

storiesOf('Components/Popover', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Popover zIndex={20}>
      <Popover.control>
        {({ openPopover, closePopover }) => (
          <Button
            variant="primary"
            onClick={openPopover}
            onKeyDown={closePopover}
          >
            Open popover
          </Button>
        )}
      </Popover.control>

      <p>Popover contents</p>
    </Popover>
  ));
