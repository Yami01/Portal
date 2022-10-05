/**
 *
 * @format
 *
 */
import type {PropsType} from "@/Components/ScreenContainer/components/BlurOverlay/types";
import {Dimensions} from "react-native";

export const defaultProps: PropsType = {
  overlayBlurType: 'dark',
  overlayGradientColors: ['transparent', '#1e3c60'],
  overlayType: 'solid',
  overlaySolidColor: '#ffffff',
};

export const SCREEN_HEIGHT = Dimensions.get('screen').height;