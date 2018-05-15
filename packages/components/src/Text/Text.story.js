import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Text from '.';
import README from './README.md';

storiesOf('Components|Text', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Fragment>
      <Text>
        Generic text.
      </Text>
      <Text.paragraph>
        A paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros
        malesuada, suscipit turpis id, vehicula lorem. Etiam iaculis mi quis risus
        mattis posuere. Cras ultricies metus mauris, a dapibus lacus facilisis
        iaculis.
      </Text.paragraph>
    </Fragment>
  ));
