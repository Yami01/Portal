/**
 *
 * @format
 *
 */
import type { ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

export type PropsType = {
  videoProps: Array<string>,
  videoIndex?: number,
  isLoading: boolean,
};

export type VideoComponentStylesType = {
  videoContainer: ViewStyleProp,
}
