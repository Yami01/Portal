import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

export type PropsType = {
  label: string,
  iconComponent?: Node,
  onPress: () => void,
};

export type ButtonComponentStyleTypes = {
  buttonContainer: ViewStyleProp,
  buttonText: TextStyleProp,
};
