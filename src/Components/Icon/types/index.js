/**
 *
 * @format
 * @flow
 *
 */

import type { ImageStyleProp, ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

export type PropsType = {
  group: string,
  name: string,
  height?: number,
  width?: number,
  fillColor?: string,
  isCenter?: boolean,
  extraStyle?: ImageStyleProp,
  withBorder?: boolean,
  accessibilityLabel?: string,
  accessibilityHint?: string,
  testID?: string,
}

export type IconStyleType = {
  center: ViewStyleProp,
  iconBorder: ViewStyleProp,
}
