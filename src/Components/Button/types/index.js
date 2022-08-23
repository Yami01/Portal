/**
 *
 * @format
 * @flow
 *
 */

import type { Node } from "react"
import type { TextStyleProp, ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

export type IconPropsType = {
  group: string,
  name: string,
  iconColor?: string,
}

export type PropsType = {
  borderRadius?: number,
  children?: Node,
  color?: string,
  compact?: boolean,
  contentStyle?: ViewStyleProp,
  disabled?: boolean,
  halfWidth?: boolean,
  autoWidth?: boolean,
  iconSize?: number,
  leftIcon?: IconPropsType,
  labelStyle?: TextStyleProp,
  loading?: boolean,
  onPress?: () => any,
  rightIcon?: IconPropsType,
  style?: ViewStyleProp,
  uppercase?: boolean,
  underline?: boolean,
  alignment?: 'left' | 'center' | 'right',
  size?: 'small' | 'medium' | 'large',
  variation?: 'text' | 'outlined' | 'contained',
  testID?: string,
  textTestID?: string,
  maxFontScale?: number,
  numberOfLines?: number,
}

export type ButtonStylesType = {
  button: ViewStyleProp,
  smallButton: ViewStyleProp,
  mediumButton: ViewStyleProp,
  largeButton: ViewStyleProp,
  iconContainer: ViewStyleProp,
  compact: ViewStyleProp,
  compactLabel: ViewStyleProp,
  content: ViewStyleProp,
  contentLoading: ViewStyleProp,
  fullWidthContainer: ViewStyleProp,
  halfWidthContainer: ViewStyleProp,
  autoWidthContainer: ViewStyleProp,
  label: TextStyleProp,
  smallLabel: TextStyleProp,
  mediumLabel: TextStyleProp,
  largeLabel: TextStyleProp,
  textStyleLabel: TextStyleProp,
  smallTextStyleLabel: TextStyleProp,
  mediumTextStyleLabel: TextStyleProp,
  largeTextStyleLabel: TextStyleProp,
  spinnerContainer: ViewStyleProp,
  uppercaseLabel: TextStyleProp,
  underlineLabel: TextStyleProp,
}
