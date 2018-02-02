import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import startCase from 'lodash/startCase';

import { Icon, qantasPaths, jetstarPaths } from './src';
import README from './README.md';

const wrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

const iconStyles = {
  textAlign: 'center',
  padding: '1.5rem',
  width: '10rem',
  justifyContent: 'flex-start',
  fontSize: '1.25rem',
};

storiesOf('Icons', module)
  .addDecorator(withDocs(README))
  .add('Jetstar kitchen sink', () => (
    <div style={wrapperStyles}>
      {Object.keys(jetstarPaths).map(name => (
        <div key={name} style={iconStyles}>
          <Icon name={name} path={jetstarPaths[name]} key={name} size="5rem" />
          <p>{startCase(name)}</p>
        </div>
      ))}
    </div>
  ))
  .add('Qantas kitchen sink', () => (
    <div style={wrapperStyles}>
      {Object.keys(qantasPaths).map(name => (
        <div key={name} style={iconStyles}>
          <Icon name={name} path={qantasPaths[name]} key={name} size="5rem" />
          <p>{startCase(name)}</p>
        </div>
      ))}
    </div>
  ));
