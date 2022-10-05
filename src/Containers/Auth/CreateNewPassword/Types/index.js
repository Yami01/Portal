import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

/**
 *
 * @format
 *
 */

export type CreateNewPasswordComponentButtonPropsType = {
  onPress: () => void,
};

export type PropsType = {
  primaryButtonProps: CreateNewPasswordComponentButtonPropsType,
  secondaryButtonProps: CreateNewPasswordComponentButtonPropsType,
};

export type CreateNewPasswordComponentStylesType = {
  buttonContainerStyle: ViewStyleProp,
}
