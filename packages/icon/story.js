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
  padding: '2.4rem',
  width: '16rem',
  justifyContent: 'flex-start',
  fontSize: '2rem',
};

const labelStyles = {
  fontFamily: 'QantasCiutadella',
};

storiesOf('Icons', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <div style={wrapperStyles}>
      {map(paths[select('Brand', options, 'qantas')], (path, name) => (
        <div style={iconStyles}>
          <Icon key={name} path={path} size="4rem" />
          <p style={labelStyles}>{startCase(name)}</p>
        </div>
      ))}
    </div>
  ));
