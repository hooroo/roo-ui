import * as React from 'react';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps extends React.Props<any> {
  as?: React.ReactType;
}
