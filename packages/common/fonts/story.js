import React from 'react';
import { storiesOf } from '@storybook/react';

import './ciutadella.css';
import './happy.css';

const styles = {
  margin: 0,
  fontSize: 24,
};

storiesOf('Fonts', module)
  .add('Ciutadella', () => (
    <p style={{ ...styles, fontFamily: 'QantasCiutadella' }}>
      Hello world!
    </p>
  ))
  .add('Happy', () => (
    <p style={{ ...styles, fontFamily: 'JetstarHappy' }}>
      Hello world!
    </p>
  ));
