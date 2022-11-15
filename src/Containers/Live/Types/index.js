/**
 *
 * @format
 *
 */
import type { ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

export type LiveComponentStreamParamsPropsType = {
  now_playlist_id: number,
  name_now_playlist: string,
  start_time: string,
  end_time: string,
  up_next_id: number,
  name_up_next: string,
};

export type PropsType = {
  selectedIndex: number,
  onSelectedIndexChange: (index: number) => void,
};

export type LiveComponentStylesType = {
  listItem: ViewStyleProp,
  imageContainer: ViewStyleProp,
}
