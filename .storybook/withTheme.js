import React from 'react';

import theme from 'theme';
import ThemeProvider from 'ThemeProvider';

export default story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>;
