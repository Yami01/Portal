/**
 *
 * @format
 *
 */

import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet"
import {ViewStyle} from "react-native";
import type {HeaderCenterPropsType} from "@/Components/Header/components/HeaderCenter/types";
import type {HeaderLeftPropsType} from "@/Components/Header/components/HeaderLeft/types";
import type {HeaderRightPropsType} from "@/Components/Header/components/HeaderRight/types";

export type PropsType = {
  headerColor?: string,
  containerStyle?: ViewStyle,
  statusBarStyle?: ViewStyle,
  ...HeaderCenterPropsType,
  ...HeaderLeftPropsType,
  ...HeaderRightPropsType
}

export type HeaderStyleTypes = {
  container: ViewStyleProp,
  statusBar: ViewStyleProp,
}
