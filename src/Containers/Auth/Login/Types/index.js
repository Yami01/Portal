import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

/**
 *
 * @format
 *
 */

export type LoginComponentButtonPropsType = {
  onPress: () => void,
};

export type PropsType = {
  primaryButtonProps: LoginComponentButtonPropsType,
  secondaryButtonProps: LoginComponentButtonPropsType,
};

export type LoginComponentStylesType = {
  buttonContainerStyle: ViewStyleProp,
}
