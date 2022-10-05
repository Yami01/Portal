import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

/**
 *
 * @format
 *
 */

export type LoginAuthComponentButtonPropsType = {
  onPress: () => void,
};

export type LoginAuthComponentRadioValueType = {
  target: { value: number | string },
};

export type LoginAuthComponentRadioPropsType = {
  onChange: (option: LoginAuthComponentRadioValueType) => void,
  option: number
};

export type PropsType = {
  buttonProps: LoginAuthComponentButtonPropsType,
  radioProps: LoginAuthComponentRadioPropsType,
};

export type LoginAuthComponentStylesType = {
  nameContainer: ViewStyleProp,
}
