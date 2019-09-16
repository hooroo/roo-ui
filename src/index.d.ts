// tslint:disable no-empty-interface interface-name max-union-size
import * as SC from '@emotion/styled/macro';
import * as CSS from 'csstype';
import * as Dayzed from 'dayzed';
import * as H from 'history';
import * as PopperJS from 'popper.js';
import * as React from 'react';
import * as ReactModal from 'react-modal';
import * as SS from 'styled-system';

declare module 'roo-ui' {
  export interface KeyValue<Value> {
    [key: string]: Value;
  }

  export const ThemeProvider: SC.ThemeProviderComponent<any>;

  export const theme: Theme;

  export interface Theme {
    gutters: KeyValue<number>;
    colors: KeyValue<string> & {
      greys: KeyValue<string>;
      ui: KeyValue<string>;
    };
    breakpoints: string[];
    mediaQueries: string[];
    space: string[];
    maxWidths: KeyValue<string>;
    borders: string[];
    radii: KeyValue<string>;
    shadows: KeyValue<string>;
    transitions: KeyValue<string>;
    fontFamily: string;
    fontSizes: KeyValue<string>;
    lineHeights: KeyValue<number>;
    fontWeights: KeyValue<number>;
    letterSpacings: KeyValue<string>;
    buttons: KeyValue<{
      color: string;
      backgroundColor: string;
    }>;
    alertStyles: KeyValue<{
      bg: string;
      icon?: {
        name: string;
        color: string;
      };
    }>;
    opacity: KeyValue<number>;
  }
}
