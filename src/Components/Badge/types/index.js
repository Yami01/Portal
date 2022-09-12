/**
 *
 * @format
 * @flow
 *
 */

import type { Node } from 'react'
import type {
  ViewStyleProp,
  TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet'

export type PropsType = {
  children: Node,
  size?: number,
  extraStyle?: ViewStyleProp,
  labelStyle?: TextStyleProp,
  badgeRef?: () => void,
  testID?: string,
}

export type StylesType = {
  container: ViewStyleProp,
  label: TextStyleProp,
}
