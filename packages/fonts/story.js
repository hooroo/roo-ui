import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { select } from '@storybook/addon-knobs/react';

import './ciutadella.css';
import './happy.css';
import README from './README.md';

const styles = {
  margin: 0,
  textAlign: 'left',
};

const fonts = {
  Ciutadella: 'Ciutadella',
  Happy: 'Happy',
};

storiesOf('Foundations|Fonts', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <div style={{ ...styles, fontFamily: select('Font', fonts, Object.keys(fonts)[0]) }}>
      <h1>Hello world!</h1>
      <p>The term shrimp is used to refer to some decapod crustaceans, although
        the exact animals covered can vary. Used broadly, it may cover any of
        the groups with elongated bodies and a primarily swimming mode of
        locomotion – most commonly Caridea and Dendrobranchiata. In some fields,
        however, the term is used more narrowly, and may be restricted to
        Caridea, to smaller species of either group, or to only the marine
        species.
      </p>

      <p>Under the broader definition, shrimp may be synonymous with prawn,
        covering stalk-eyed swimming crustaceans with long narrow muscular tails
        (abdomens), long whiskers (antennae), and slender legs.
      </p>
    </div>
  ));
