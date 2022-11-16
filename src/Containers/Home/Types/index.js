/**
 *
 * @format
 *
 */
import type { TextStyleProp, ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"
import { Colors } from "@/Theme/Variables"

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
  tabBarContainer: ViewStyleProp,
  activeTab: ViewStyleProp,
  activeTabLabel: TextStyleProp,
  inActiveTabLabel: TextStyleProp,
}
