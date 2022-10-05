/**
 *
 * @format
 *
 */

import type {TextStyleProp, ViewStyleProp,} from 'react-native/Libraries/StyleSheet/StyleSheet'
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes'

export type IconType = {
  group: string,
  name: string,
  width?: number,
  height?: number,
  fillColor?: string,
}

export type PropsType = {
  label?: string,
  labelColor?: string,
  icon?: IconType,
  testID?: string,
  onPress?: (event: PressEvent) => any,
}

export type StyleType = {
  container: ViewStyleProp,
  label: TextStyleProp,
}
