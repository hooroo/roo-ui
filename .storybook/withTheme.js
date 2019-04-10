import React from 'react';

import { ThemeProvider, qantas } from '../packages/themes/src';

export default story => (
  <ThemeProvider theme={qantas}>
    {console.log(`rendered with theme`, qantas)}
    {story()}
  </ThemeProvider>
);
