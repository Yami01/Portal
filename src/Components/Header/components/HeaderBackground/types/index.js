/**
 *
 * @format
 * @flow
 *
 */

import type { Node } from 'react'
import type { LayoutEvent } from 'react-native/Libraries/Types/CoreEventTypes'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import type { AnimatedValue } from 'react-native-reanimated'

export type PropsType = {
  children?: Node,
  extraStyle?: ViewStyleProp,
  isLargePadding?: boolean,
  shouldIgnoreStatusBarHeight?: boolean,
  extraPaddingBottom?: number | AnimatedValue<number>,
  backgroundColor?: string,
  withShadow?: boolean,
  testID?: string,
  onLayout?: (event: LayoutEvent) => any,
}

export type StylePropsType = {
  container: ViewStyleProp,
  containerShadow: ViewStyleProp,
}
