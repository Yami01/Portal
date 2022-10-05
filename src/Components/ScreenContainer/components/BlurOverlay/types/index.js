import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

/**
 *
 * @format
 *
 */

export type PropsType = {
  showOverlay?: boolean;
  overlayBlurType?: any;
  overlaySolidColor?: any;
  overlayType?: any;
  children?: Node;
  overlayGradientColors?: string;
}

export type BlurOverlayStylesType = {
  container: ViewStyleProp,
  blur: ViewStyleProp,
  blurContainer: ViewStyleProp,
}