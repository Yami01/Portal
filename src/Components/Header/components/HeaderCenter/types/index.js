/**
 *
 * @format
 *
 */

import type {TextStyleProp, ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet"
import {TextStyle, ViewStyle} from "react-native";

export type HeaderCenterPropsType = {
  title: string,
  centerContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  centerElement?: Node;
}

export type HeaderCenterStyleTypes = {
  container: ViewStyleProp,
  title: TextStyleProp,
}
