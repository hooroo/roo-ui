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

  export interface NestedKeyValue<Value> {
    [key: string]: Value | NestedKeyValue<Value>;
  }

  export const ThemeProvider: SC.ThemeProviderComponent<any>;

  export const theme: Theme;

  export interface Theme {
    borders: string[];
    breakpoints: string[];
    fontFamily: string;
    fontSizes: KeyValue<string>;
    fontWeights: KeyValue<number>;
    gutters: KeyValue<number>;
    letterSpacings: KeyValue<string>;
    lineHeights: KeyValue<number>;
    maxWidths: KeyValue<string>;
    mediaQueries: string[];
    opacity: KeyValue<number>;
    radii: KeyValue<string>;
    shadows: KeyValue<string>;
    space: string[];
    transitions: KeyValue<string>;
    icons: KeyValue<{ category: string; path: string }>;
    alertStyles: KeyValue<{
      bg: string;
      icon?: {
        name: string;
        color: string;
      };
    }>;
    buttons: KeyValue<{
      color: string;
      backgroundColor: string;
    }>;
    colors: KeyValue<string> & {
      greys: KeyValue<string>;
      ui: KeyValue<string>;
    };
    textStyles: NestedKeyValue<string>;
  }
}
