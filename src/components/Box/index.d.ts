import { BaseProps, Omit } from '../types'
import * as SS from 'styled-system';
import * as SC from '@emotion/styled/macro';
import * as React from 'react';

interface BoxKnownProps 
  extends BaseProps,
    SS.DisplayProps,
    SS.SpaceProps,
    SS.WidthProps,
    SS.MinWidthProps,
    SS.MaxWidthProps,
    SS.HeightProps,
    SS.MinHeightProps,
    SS.MaxHeightProps,
    SS.ColorProps,
    SS.TextAlignProps,
    SS.BoxShadowProps,
    SS.BorderRadiusProps,
    SS.BordersProps,
    SS.BorderColorProps,
    SS.FlexBasisProps,
    SS.FlexDirectionProps,
    SS.FlexWrapProps,
    SS.FlexProps,
    SS.PositionProps,
    SS.ZIndexProps,
    SS.TopProps,
    SS.RightProps,
    SS.BottomProps,
    SS.LeftProps,
    SS.OverflowProps,
    SS.WidthProps,
    SS.HeightProps, {}

export interface BoxProps
  extends BoxKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}

export const Box: SC.StyledComponent<BoxProps, BoxProps, any>;
