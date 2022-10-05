import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

/**
 *
 * @format
 *
 */

export type LoginPinComponentButtonPropsType = {
  onPress: () => void,
};

export type PropsType = {
  primaryButtonProps: LoginPinComponentButtonPropsType,
  secondaryButtonProps: LoginPinComponentButtonPropsType,
};

export type LoginPinComponentStylesType = {
  imageContainer: ViewStyleProp,
  buttonContainerStyle: ViewStyleProp,
}
