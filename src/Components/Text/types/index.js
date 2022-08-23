/**
 *
 * @format
 * @flow
 *
 */
import type { Node } from "react"
import type { TextProps } from "react-native/Libraries/Text/TextProps"
import type { TextStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

export type PropsType = {
  ...TextProps,
  fontWeight?: 'light' | 'regular' | 'semiBold' | 'bold',
  fontSize?: number,
  color?: string,
  style?: TextStyleProp,
  testID?: string,
  children?: Node,
  allowFontScaling?: boolean,
}

export type TextStylesType = {}
