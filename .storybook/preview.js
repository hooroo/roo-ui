import { addDecorator } from '@storybook/react';
import withTheme from './withTheme';

import 'normalize.css/normalize.css';
import '../fonts/ciutadella.css';
import './storybook.css';

const customViewports = {
  iPhone5: {
    name: 'iPhone 5',
    styles: {
      width: '320px',
      height: '568px',
    },
    type: 'mobile',
  },
  pixel2XL: {
    name: 'Pixel 2XL',
    styles: {
      width: '411px',
      height: '823px',
    },
    type: 'mobile',
  },
  pixel5: {
    name: 'Pixel 5',
    styles: {
      width: '393px',
      height: '851px',
    },
    type: 'mobile',
  },
  iPad: {
    name: 'iPad',
    styles: {
      width: '1024px',
      height: '768px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '720px',
    },
    type: 'desktop',
  },
};

export const parameters = {
  viewport: { viewports: customViewports },
};

addDecorator(withTheme);
