/**
 *
 * @format
 * @flow
 *
 */

export type PropsType = {
  accessibilityLabel: string,
  accessibilityHint: string,
  value: string,
  checked?: boolean,
  onPress: (boolean) => void,
  color?: string,
  uncheckedColor?: string,
  disabled?: boolean,
  testID?: string,
};
