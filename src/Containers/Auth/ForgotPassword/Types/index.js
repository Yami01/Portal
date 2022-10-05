import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

/**
 *
 * @format
 *
 */

export type ForgotPasswordComponentButtonPropsType = {
  onPress: () => void,
};

export type PropsType = {
  primaryButtonProps: ForgotPasswordComponentButtonPropsType,
  secondaryButtonProps: ForgotPasswordComponentButtonPropsType,
};

export type ForgotPasswordComponentStylesType = {
  buttonContainerStyle: ViewStyleProp,
}
