import * as SC from '@emotion/styled/macro';
import * as CSS from 'csstype';
import * as Dayzed from 'dayzed';
import * as H from 'history';
import * as PopperJS from 'popper.js';
import * as React from 'react';
import * as ReactModal from 'react-modal';
import * as SS from 'styled-system';

declare module 'roo-ui/components' {
  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

  export interface BaseProps extends React.Props<any> {
    as?: React.ReactType;
    ref?: React.Ref<any>;
  }

  interface ColumnsProps {
    columns?: SS.ResponsiveValue<number>;
  }

  interface FlexFlowProps {
    flexFlow?: string;
  }

  interface GutterProps {
    gutter?: SS.ResponsiveValue<string | number>;
  }

  interface TextDecorationProps {
    textDecoration?: string;
  }

  interface AlertKnownProps extends BoxProps {
    children: React.ReactNode;
    icon?: IconProps;
    contained?: boolean;
    onClose?: React.MouseEventHandler;
    variant?: SS.ResponsiveValue<string>;
  }
  export interface AlertProps
    extends AlertKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof AlertKnownProps> {}
  export const Alert: SC.StyledComponent<AlertProps, AlertProps, any>;

  interface BackgroundImageKnownProps
    extends BaseProps,
      SS.HeightProps,
      SS.WidthProps,
      SS.SpaceProps,
      SS.BackgroundSizeProps,
      SS.BackgroundPositionProps,
      SS.BackgroundRepeatProps {
    src: string;
  }
  export interface BackgroundImageProps
    extends BackgroundImageKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof BackgroundImageKnownProps> {}
  export const BackgroundImage: SC.StyledComponent<
    BackgroundImageProps,
    BackgroundImageProps,
    any
  >;

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
      SS.BorderColorProps,
      SS.BorderRadiusProps,
      SS.BorderProps,
      SS.BordersProps,
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
      SS.HeightProps,
      SS.FontSizeProps,
      SS.FontWeightProps {}
  export interface BoxProps
    extends BoxKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}
  export const Box: SC.StyledComponent<BoxProps, BoxProps, any>;

  interface CardKnownProps extends BoxProps {}
  export interface CardProps
    extends CardKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof CardKnownProps> {}
  export const Card: SC.StyledComponent<CardProps, CardProps, any>;

  interface CharacterCountKnownProps extends TextProps {
    limit: number;
    value: number | string;
  }
  export interface CharacterCountProps
    extends CharacterCountKnownProps,
      Omit<React.HTMLProps<HTMLSpanElement>, keyof CharacterCountKnownProps> {}
  export const CharacterCount: SC.StyledComponent<
    CharacterCountProps,
    CharacterCountProps,
    any
  >;

  export interface DatePickerProps extends Dayzed.Props {
    stacked?: boolean;
    disabledDates?: Date[];
    interactiveDisabledDates?: boolean;
    monthNames?: string[];
    weekdayNames?: string[];
    monthsToDisplay?: number;
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    minDate?: Date;
  }
  export const DatePicker: React.FunctionComponent<
    Omit<DatePickerProps, 'children'>
  >;

  export interface StarRatingProps extends SS.SizeProps {
    rating: number | string;
    ratingType: 'AAA' | 'SELF_RATED';
  }
  export const StarRating: React.FunctionComponent<
    Omit<StarRatingProps, 'children'>
  >;

  export interface LoadingIndicatorProps extends SS.SizeProps {
    color: SS.ResponsiveValue<CSS.ColorProperty>;
    delay?: number;
  }
  export const LoadingIndicator: React.FunctionComponent<
    Omit<LoadingIndicatorProps, 'children'>
  >;

  interface FlexKnownProps
    extends BoxProps,
      FlexFlowProps,
      SS.AlignItemsProps,
      SS.AlignContentProps,
      SS.JustifyContentProps,
      SS.FlexDirectionProps,
      SS.FlexWrapProps {}
  export interface FlexProps
    extends FlexKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof FlexKnownProps> {}
  export const Flex: SC.StyledComponent<FlexProps, FlexProps, any>;

  interface ContainerKnownProps
    extends BaseProps,
      GutterProps,
      SS.DisplayProps,
      SS.MaxWidthProps,
      SS.SpaceProps {}
  export interface ContainerProps
    extends ContainerKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof ContainerKnownProps> {}
  export const Container: SC.StyledComponent<
    ContainerProps,
    ContainerProps,
    any
  >;

  interface IconKnownProps extends BaseProps, SS.ColorProps, SS.SpaceProps {
    name: string;
    title?: string;
    size?: number;
  }
  export interface IconProps
    extends IconKnownProps,
      Omit<React.HTMLProps<SVGElement>, keyof IconKnownProps> {}
  export const Icon: SC.StyledComponent<IconProps, IconProps, any>;

  interface ImageKnownProps
    extends BaseProps,
      SS.HeightProps,
      SS.SizeProps,
      SS.SpaceProps,
      SS.WidthProps,
      SS.VerticalAlignProps {
    inline?: boolean;
  }
  export interface ImageProps
    extends ImageKnownProps,
      Omit<React.HTMLProps<HTMLImageElement>, keyof ImageKnownProps> {}
  export const Image: SC.StyledComponent<ImageProps, ImageProps, any>;

  interface InputKnownProps extends BaseProps, SS.SpaceProps {
    error?: boolean;
    underline?: boolean;
  }
  export interface InputProps
    extends InputKnownProps,
      Omit<React.HTMLProps<HTMLInputElement>, keyof InputKnownProps> {}
  export const Input: SC.StyledComponent<InputProps, InputProps, any>;

  interface TruncateKnownProps extends InputProps {}
  export interface TruncateProps
    extends TruncateKnownProps,
      Omit<React.HTMLProps<HTMLInputElement>, keyof TruncateKnownProps> {}
  export const Truncate: SC.StyledComponent<TruncateProps, TruncateProps, any>;

  interface TextareaKnownProps extends BaseProps, SS.SpaceProps {
    error?: boolean;
    underline?: boolean;
  }
  export interface TextareaProps
    extends TextareaKnownProps,
      Omit<React.HTMLProps<HTMLTextAreaElement>, keyof TextareaKnownProps> {}
  export const Textarea: SC.StyledComponent<TextareaProps, TextareaProps, any>;

  interface PasswordInputKnownProps extends InputProps {}
  export interface PasswordInputProps
    extends PasswordInputKnownProps,
      Omit<React.HTMLProps<HTMLInputElement>, keyof PasswordInputKnownProps> {}
  export const PasswordInput: SC.StyledComponent<
    PasswordInputProps,
    PasswordInputProps,
    any
  >;

  interface LabelKnownProps
    extends BaseProps,
      SS.SpaceProps,
      SS.TextStyleProps {
    hidden?: boolean;
  }
  export interface LabelProps
    extends LabelKnownProps,
      Omit<React.HTMLProps<HTMLLabelElement>, keyof LabelKnownProps> {}
  export const Label: SC.StyledComponent<LabelProps, LabelProps, any>;

  interface ListKnownProps extends BaseProps, ColumnsProps {
    flush?: boolean;
    ordered?: boolean;
  }
  export interface ListProps
    extends ListKnownProps,
      Omit<React.HTMLProps<HTMLUListElement>, keyof ListKnownProps> {}
  export const List: SC.StyledComponent<ListProps, ListProps, any>;

  interface ListItemKnownProps
    extends BaseProps,
      SS.SpaceProps,
      SS.BorderProps {}
  export interface ListItemProps
    extends ListItemKnownProps,
      Omit<React.HTMLProps<HTMLLIElement>, keyof ListItemKnownProps> {}
  export const ListItem: SC.StyledComponent<ListItemProps, ListItemProps, any>;

  type MaskArray = Array<string | RegExp>;
  interface MaskedInputKnownProps extends InputProps {
    keepCharPositions?: boolean;
    mask?: MaskArray | ((value: string) => MaskArray);
    placeholder?: string;
    placeholderChar?: string;
  }
  export interface MaskedInputProps
    extends MaskedInputKnownProps,
      Omit<React.HTMLProps<HTMLInputElement>, keyof MaskedInputKnownProps> {}
  type MaskedInputType = SC.StyledComponent<
    MaskedInputProps,
    MaskedInputProps,
    any
  >;
  export const MaskedInput: MaskedInputType & {
    time: MaskedInputType;
  };

  export interface ModalProps extends ReactModal.Props {
    width?: number | string;
  }
  interface ModalHeaderProps extends BoxProps {
    icon?: IconProps;
    variant?: SS.ResponsiveValue<string>;
  }
  export const Modal: SC.StyledComponent<ModalProps, ModalProps, any> & {
    body: React.FunctionComponent<BoxProps>;
    footer: React.FunctionComponent<FlexProps>;
    header: React.FunctionComponent<ModalHeaderProps>;
  };

  interface TextKnownProps
    extends BaseProps,
      TextDecorationProps,
      SS.ColorProps,
      SS.DisplayProps,
      SS.FontSizeProps,
      SS.FontWeightProps,
      SS.LetterSpacingProps,
      SS.LineHeightProps,
      SS.SpaceProps,
      SS.TextAlignProps,
      SS.TextStyleProps,
      SS.VerticalAlignProps {
    hidden?: boolean;
  }
  export interface TextProps
    extends TextKnownProps,
      Omit<React.HTMLProps<HTMLSpanElement>, keyof TextKnownProps> {}
  export const Text: SC.StyledComponent<TextProps, TextProps, any>;

  interface HeadingKnownProps extends TextProps {}
  export interface HeadingProps
    extends HeadingKnownProps,
      Omit<React.HTMLProps<HTMLHeadingElement>, keyof HeadingKnownProps> {}
  type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  type HeadingType = SC.StyledComponent<HeadingProps, HeadingProps, any>;
  export const Heading: HeadingType & { [H in HeadingLevels]: HeadingType };

  interface ParagraphKnownProps extends TextProps {}
  export interface ParagraphProps
    extends ParagraphKnownProps,
      Omit<React.HTMLProps<HTMLParagraphElement>, keyof ParagraphKnownProps> {}
  export const Paragraph: SC.StyledComponent<
    ParagraphProps,
    ParagraphProps,
    any
  >;

  interface HideKnownProps extends BaseProps {
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
  }
  export interface HideProps
    extends HideKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof HideKnownProps> {}
  export const Hide: SC.StyledComponent<HideProps, HideProps, any>;

  interface LinkKnownProps
    extends BaseProps,
      SS.ColorProps,
      SS.FontWeightProps,
      SS.SpaceProps {
    hidden?: boolean;
    underline?: boolean;
    smooth?: boolean;
    exact?: boolean;
    href?: H.LocationDescriptor;
    to?: H.LocationDescriptor;
  }
  export interface LinkProps
    extends LinkKnownProps,
      Omit<React.HTMLProps<HTMLAnchorElement>, keyof LinkKnownProps> {}
  export const Link: SC.StyledComponent<LinkProps, LinkProps, any>;

  interface ExternalLinkKnownProps extends LinkProps {}
  export interface ExternalLinkProps
    extends ExternalLinkKnownProps,
      Omit<React.HTMLProps<HTMLAnchorElement>, keyof ExternalLinkKnownProps> {}
  export const ExternalLink: SC.StyledComponent<
    ExternalLinkProps,
    ExternalLinkProps,
    any
  >;

  interface BlockLinkKnownProps extends LinkProps {}
  export interface BlockLinkProps
    extends BlockLinkKnownProps,
      Omit<React.HTMLProps<HTMLAnchorElement>, keyof BlockLinkKnownProps> {}
  export const BlockLink: SC.StyledComponent<
    BlockLinkProps,
    BlockLinkProps,
    any
  >;

  interface ButtonKnownProps
    extends BaseProps,
      SS.SpaceProps,
      SS.ColorProps,
      SS.BoxShadowProps {
    block?: boolean;
    rounded?: boolean;
    to?: H.LocationDescriptor;
    variant?: SS.ResponsiveValue<string>;
  }
  export interface ButtonProps
    extends ButtonKnownProps,
      Omit<React.HTMLProps<HTMLButtonElement>, keyof ButtonKnownProps> {}
  export const Button: SC.StyledComponent<ButtonProps, ButtonProps, any>;

  interface OutlineButtonKnownProps extends ButtonProps {}
  export interface OutlineButtonProps
    extends OutlineButtonKnownProps,
      Omit<React.HTMLProps<HTMLButtonElement>, keyof OutlineButtonKnownProps> {}
  export const OutlineButton: SC.StyledComponent<
    OutlineButtonProps,
    OutlineButtonProps,
    any
  >;

  interface NakedButtonKnownProps
    extends BaseProps,
      SS.SpaceProps,
      SS.VerticalAlignProps,
      SS.ColorProps {
    to?: H.LocationDescriptor;
  }
  export interface NakedButtonProps
    extends NakedButtonKnownProps,
      Omit<React.HTMLProps<HTMLButtonElement>, keyof NakedButtonKnownProps> {}
  export const NakedButton: SC.StyledComponent<
    NakedButtonProps,
    NakedButtonProps,
    any
  >;

  interface CheckboxKnownProps extends BaseProps {}
  export interface CheckboxProps
    extends CheckboxKnownProps,
      Omit<React.HTMLProps<HTMLInputElement>, keyof CheckboxKnownProps> {}
  export const Checkbox: SC.StyledComponent<CheckboxProps, CheckboxProps, any>;

  interface RadioKnownProps extends BaseProps {}
  export interface RadioProps
    extends RadioKnownProps,
      Omit<React.HTMLProps<HTMLInputElement>, keyof RadioKnownProps> {}
  export const Radio: SC.StyledComponent<RadioProps, RadioProps, any>;

  interface ErrorMessageKnownProps extends TextProps {
    arrow?: 'top' | 'right' | 'bottom' | 'left';
  }
  export interface ErrorMessageProps
    extends ErrorMessageKnownProps,
      Omit<React.HTMLProps<HTMLSpanElement>, keyof ErrorMessageKnownProps> {}
  export const ErrorMessage: SC.StyledComponent<
    ErrorMessageProps,
    ErrorMessageProps,
    any
  >;

  export interface PopoverProps {
    children: React.ReactNode;
    zIndex?: number;
    modifiers?: PopperJS.Modifiers;
  }
  export interface PopoverControlRenderProps {
    isOpen: boolean;
    openPopover: () => void;
    closePopover: () => void;
  }
  interface PopoverControlKnownProps extends BaseProps {
    children: (args: PopoverControlRenderProps) => React.ReactNode;
  }
  export interface PopoverControlProps
    extends PopoverControlKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof PopoverControlKnownProps> {}
  export const Popover: React.FunctionComponent<PopoverProps> & {
    control: SC.StyledComponent<PopoverControlProps, PopoverControlProps, any>;
  };

  interface SelectKnownProps extends InputProps {}
  export interface SelectProps
    extends SelectKnownProps,
      Omit<React.HTMLProps<HTMLSelectElement>, keyof SelectKnownProps> {}
  export const Select: SC.StyledComponent<SelectProps, SelectProps, any>;

  export const ModalGlobalStyle: SC.StyledComponent<any, any, any>;

  interface WrapperKnownProps extends BaseProps {
    children: React.ReactNode;
  }
  export interface WrapperProps
    extends WrapperKnownProps,
      Omit<React.HTMLProps<HTMLDivElement>, keyof WrapperKnownProps> {}
  export const Wrapper: SC.StyledComponent<WrapperProps, WrapperProps, any>;

  interface OmitPropsOptions {
    omitStyledSystemProps?: boolean;
  }
  export const omitProps: (
    customPropsList?: string[],
    options?: OmitPropsOptions,
  ) => SC.StyledOptions;
}
