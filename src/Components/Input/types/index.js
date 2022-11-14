/**
 *
 * @format
 *
 */
import type {TextStyleProp, ViewStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';

import { TextInputProps } from 'react-native';
export type PropsType = {
  style?: ViewStyleProp,
  label?: string,
  fieldName: string,
  control: any,
  error?: string,
  leftIconName?: string,
  rightIconName?: string,
  leftIconPress?: string,
  leftIconStyle?: ViewStyleProp,
  visiblePassword?: boolean,
  clearErrors?: any,
  containerStyle?: ViewStyleProp
  extraText?: string,
  inputType?: string,
  isTextArea?: boolean,
  textInputProps: TextInputProps,
};

export type InputComponentStylesType = {
  inputContainerStyle: ViewStyleProp,
  errorStyle: ViewStyleProp,
  errorContainerStyle: ViewStyleProp,
  iconSize: ViewStyleProp,
  textAreaContainer: ViewStyleProp,
  textInputStyle: TextStyleProp,
};
