/**
 *
 * @format
 * @flow
 *
 */
import type {
  ViewStyleProp,
  TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet'

export type KeyboardType =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
export type PropsType = {
  testID?: string,
  keyboardType?: KeyboardType,
  secureTextEntry?: boolean,
  label?: string,
  editable?: boolean,
  disabled?: boolean,
  pointerEvents?: 'auto' | 'none' | 'box-none',
  value: ?string,
  decimalPlaces?: number,
  onChangeText?: string => void,
  onBlur?: () => void,
  rightComponentType?: 'icon' | 'text',
  rightText?: string,
  iconGroup?: string,
  iconName?: string,
  iconWidth?: number,
  iconHeight?: number,
  iconFillColor?: string,
  maxLength?: number,
  placeholder?: string,
  textInputContainerStyle?: ViewStyleProp,
  textInputStyle?: TextStyleProp,
}

export type InputStylesType = {
  inputContainer: ViewStyleProp,
  container: ViewStyleProp,
  disabledContainer: ViewStyleProp,
  input: TextStyleProp,
  rightComponentContainer: ViewStyleProp,
  rightComponentText: TextStyleProp,
}
