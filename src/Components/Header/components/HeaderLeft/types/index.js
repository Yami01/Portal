/**
 *
 * @format
 *
 */

import type {TextStyleProp, ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet"
import {TextStyle, ViewStyle} from "react-native";

export type HeaderLeftPropsType = {
  leftContainerStyle?: ViewStyle,
  onLeftPressed?: () => void,
  leftIconName?: string,
  leftIconColor?: string,
  leftIconSize?: number,
  leftText?: string,
  leftTextStyle?: TextStyle,
}

export type HeaderLeftStyleTypes = {
  container: ViewStyleProp,
  leftText: TextStyleProp,
}
