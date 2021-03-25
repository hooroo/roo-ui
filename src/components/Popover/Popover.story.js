import React from 'react';
import { withDocs } from 'storybook-readme';

import Popover from './';
import README from './README.md';

import { Button } from '../';

export default {
  title: 'Components/Popover',
  decorators: [withDocs(README)],
};

export const Default = () => (
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
);

Default.story = {
  name: 'default',
};
