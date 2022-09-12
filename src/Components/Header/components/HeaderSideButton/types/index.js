/**
 *
 * @format
 * @flow
 *
 */
import type {
  ViewStyleProp,
  TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet'
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes'

export type PropsType = {
  rounded?: boolean,
  iconGroup: string,
  iconName: string,
  iconFillColor: string,
  label?: string,
  badgeNumber?: number,
  isShowDot?: boolean,
  dotBorderColor?: string,
  shouldShowLabel?: boolean,
  // Only available when rounded true. Default to WHITE.
  roundedButtonBackgroundColor?: string,
  testID?: string,
  onPress?: (event: PressEvent) => any,
}

export type HeaderSideButtonStyleType = {
  absoluteDecoration: ViewStyleProp,
  badge: ViewStyleProp,
  container: ViewStyleProp,
  containerRounded: ViewStyleProp,
  dot: ViewStyleProp,
  label: TextStyleProp,
}
