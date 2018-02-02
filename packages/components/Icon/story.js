import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { withDocs } from 'storybook-readme';
import startCase from 'lodash/startCase';
import map from 'lodash/map';

import { Icon, qantasPaths, jetstarPaths } from './src';
import README from './README.md';

const paths = {
  qantas: qantasPaths,
  jetstar: jetstarPaths,
};

const options = {
  qantas: 'Qantas',
  jetstar: 'Jetstar',
};

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
  .add('default', () => (
    <div style={wrapperStyles}>
      {map(paths[select('Brand', options, 'qantas')], (path, name) => (
        <div style={iconStyles}>
          <Icon key={name} name={name} path={path} size="2.5rem" />
          <p>{ startCase(name) }</p>
        </div>
      ))}
    </div>
  ));
