/**
 *
 * @format
 *
 */
import {StyleSheet} from "react-native";
import {SCREEN_HEIGHT} from "@/Components/ScreenContainer/components/BlurOverlay/config";
import type {BlurOverlayStylesType} from "@/Components/ScreenContainer/components/BlurOverlay/types";

const BlurOverlayStyles: BlurOverlayStylesType =
  StyleSheet.create({
    blur: {flex: 1},
    blurContainer: {
      height: SCREEN_HEIGHT,
      left: 0,
      position: 'absolute',
      right: 0,
      top: SCREEN_HEIGHT,
    },
    container: {
      flex: 1,
    },
  })

export default BlurOverlayStyles
