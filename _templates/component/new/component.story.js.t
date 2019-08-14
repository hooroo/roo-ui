---
to: <%= componentsRoot %>/<%= componentPath %>/<%= componentName %>.story.js
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text } from '@storybook/addon-knobs/react';
import <%= componentName %> from './';
import README from './README.md';

storiesOf('Components|<%= componentName %>', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <<%= componentName %>>
      {text('Children', 'I\'m a <%= componentName %>')}
    </<%= componentName %>>
  ));
