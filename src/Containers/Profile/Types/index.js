import type { TextStyleProp, ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

export type ProfileComponentFormPropsType = {
    userName: String,
    password: String,
  };

export type PropsType = {
    primaryButtonPress: () => void,
    secondaryButtonPress: (formData) => void, 
  };

export type ProfileComponentStylesType = {
    container: ViewStyleProp,
    tileStyle: TextStyleProp

}

export default ProfileComponentStylesType
