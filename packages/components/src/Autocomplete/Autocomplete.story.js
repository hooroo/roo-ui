import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs/react';

import { Label, Input, Box } from '..';
import Autocomplete from '.';
import README from './README.md';

const items = [
  'Russo-European Laika',
  'St. John\'s Water Dog',
  'Georgian Shepherd Dog',
  'Miniature Schnauzer',
  'Transylvanian Hound',
  'Leonberger',
  'Majorca Shepherd Dog',
  'Nova Scotia Duck Tolling Retriever',
  'German Roughhaired Pointer',
  'Poodle',
];

storiesOf('Components|Autocomplete', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box textAlign="left">
      <Autocomplete
        items={items}
        restrictValue={boolean('Restrict value', true)}
        filterItems={boolean('Filter items', true)}
      >
        {({ getLabelProps, getInputProps }) => (
          <Fragment>
            <Label {...getLabelProps()}>Favourite dog</Label>
            <Input {...getInputProps()} />
          </Fragment>
        )}
      </Autocomplete>
    </Box>
  ));
