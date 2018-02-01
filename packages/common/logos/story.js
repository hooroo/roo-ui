import React from 'react';
import { storiesOf } from '@storybook/react';
import { qantas, jetstar } from '.';

storiesOf('Logos', module)
  .add('Qantas', () => (
    <img alt="Qantas" src={qantas} height="100" />
  ))
  .add('Jetstar', () => (
    <img alt="Jetstar" src={jetstar} height="100" />
  ));
