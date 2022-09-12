/**
 *
 * @format
 * @flow
 *
 */

import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import type {
  LayoutEvent,
  PressEvent,
} from 'react-native/Libraries/Types/CoreEventTypes'
import type { AnimatedValue } from 'react-native-reanimated'

export type HeaderButtonConfigType = {
  iconGroup: string,
  iconName: string,
  iconFillColor: string,
  // Only button right can have label
  label?: string,
  badgeNumber?: number,
  isShowDot?: boolean,
  testID?: string,
  onPress?: (event: PressEvent) => any,
}

export type PropsType = {
  isOnlyLeftIcon?: boolean,
  isOnlyRightIcon?: boolean,
  // This color will be used as left button background color if isOnlyLeftIcon true
  backgroundColor?: string,
  // No shadow if isOnlyLeftIcon true
  withShadow?: boolean,
  titleLabel?: string,
  // For both title label and title icon fill color
  titleColor?: string,
  titleOnPress?: () => void,
  titleIconGroup?: string,
  titleIconName?: string,
  titleIconWidth?: number,
  leftButton?: HeaderButtonConfigType,
  rightButton?: HeaderButtonConfigType,
  extraPaddingBottom?: number | AnimatedValue<number>,
  isAllButtonsOnRight?: boolean,
  // If rightButton have label or isAllButtonsOnRight true, auto align to left
  isTitleAlignLeft?: boolean,
  isLargePadding?: boolean,
  shouldIgnoreStatusBarHeight?: boolean,
  // Style for header background
  extraStyle?: ViewStyleProp,
  testID?: string,
  onLayout?: (event: LayoutEvent) => any,
}

export type HeaderStyleType = {
  buttonContainer: ViewStyleProp,
  buttonContainerLeft: ViewStyleProp,
  buttonContainerLeftOnRight: ViewStyleProp,
  buttonContainerRight: ViewStyleProp,
  container: ViewStyleProp,
  titleContainer: ViewStyleProp,
}
