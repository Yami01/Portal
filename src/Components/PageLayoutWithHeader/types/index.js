/**
 *
 * @format
 * @flow
 *
 */
import type { Node } from 'react'
import type { ScrollViewImperativeMethods } from 'react-native/Libraries/Components/ScrollView/ScrollView'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes'
import type { AnimatedNode } from 'react-native-reanimated'

export type HeaderButtonConfigType = {
  iconGroup: string,
  iconName: string,
  iconFillColor: string,
  // Only button right can have label and badgeNumber
  label?: string,
  badgeNumber?: number,
  isShowDot?: boolean,
  testID?: string,
  onPress?: (event: PressEvent) => any,
}

export type PropsType = {
  headerBackgroundColor?: string,
  headerTitleLabel?: string,
  headerTitleColor?: string,
  headerTitleOnPress?: () => void,
  headerTitleIconGroup?: string,
  headerTitleIconName?: string,
  headerTitleIconWidth?: number,
  headerLeftButton?: HeaderButtonConfigType,
  headerRightButton?: HeaderButtonConfigType,
  isHeaderProgressBarVisible?: boolean,
  headerProgressBarPosition?: number,
  headerProgressBarBottomRightText?: string,
  headerExtraStyle?: ViewStyleProp,
  isHeaderHidden?: boolean,
  isHeaderAnimated?: boolean,
  isHeaderOnlyLeftIcon?: boolean,
  isHeaderOnlyRightIcon?: boolean,
  isHeaderAbsolute?: boolean,
  isHeaderWithShadow?: boolean,
  isHeaderAllButtonsOnRight?: boolean,
  isHeaderTitleAlignLeft?: boolean,
  isHeaderLargePadding?: boolean,
  scrollYOffsetToSolidHeader?: number,
  shouldHeaderIgnoreStatusBarHeight?: boolean,
  headerCard?: Node,
  headerCardOverlapHeight?: number,
  children?: Node,
  scrollViewContentContainerStyle?: ViewStyleProp,
  scrollViewRef?: { current: ?ScrollViewImperativeMethods },
  scrollViewScrollEnabled?: boolean,
  onScrollViewPositionChange?: (position: number) => void,
  testID?: string,
}

export type PageLayoutWithHeaderStylesType = {
  container: ViewStyleProp,
  duplicatedHeaderContainer: ViewStyleProp,
  headerAbsoluteContainer: ViewStyleProp,
  scrollView: ViewStyleProp,
}

const zero = 0
export type UseCodeReturnType = AnimatedNode<typeof zero>
