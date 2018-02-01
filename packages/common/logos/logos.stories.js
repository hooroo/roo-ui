import React from 'react';
import { storiesOf } from '@storybook/react';
import { qantas, jetstar } from './assets';

storiesOf('Logos', module)
  .add('Qantas', () => (
    <img src={qantas} height="100" />
  ))
  .add('Jetstar', () => (
    <img src={jetstar} height="100" />
  ));
