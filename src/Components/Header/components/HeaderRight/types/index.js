/**
 *
 * @format
 *
 */

import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet"
import {TextStyle, ViewStyle} from "react-native";

export type HeaderRightPropsType = {
  rightContainerStyle?: ViewStyle,
  onRightPressed?: () => void,
  rightIconName?: string,
  rightIconColor?: string,
  rightIconSize?: number,
  rightText?: string,
  rightTextStyle?: TextStyle,
  rightElement?: Node,
  rightMarker?: boolean,
  secondRightIconName?: string,
  secondRightIconColor?: string,
  secondRightIconSize?: number,
  onSecondRightPressed?: () => void,
}

export type HeaderRightStyleTypes = {
  container: ViewStyleProp,
  marker: ViewStyleProp,
  elementRightItem: ViewStyleProp,
}
