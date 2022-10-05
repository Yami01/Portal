/**
 *
 * @format
 *
 */
import type {TextStyleProp, ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

export type HomeComponentSliderItemPropsType = {
  name: string,
  index: number,
  color: string,
};

export type PropsType = {
  slider: Array<HomeComponentSliderItemPropsType>,
  selectedIndex: number,
  onSelectedIndexChange: (index: number) => void,
};

export type HomeComponentStylesType = {
  wrapper: ViewStyleProp,
  containerHorizontal: ViewStyleProp,
  text: TextStyleProp,
}
