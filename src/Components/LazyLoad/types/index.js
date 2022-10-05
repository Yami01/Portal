/**
 *
 * @format
 *
 */

import type {ViewStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet'
import type {Node} from 'react'

export type PropsType = {
  style?: ViewStyleProp,
  children?: Node,
  backgroundColor?: string,
  highlightColor?: string,
  speed?: number,
  testID?: string,
}
