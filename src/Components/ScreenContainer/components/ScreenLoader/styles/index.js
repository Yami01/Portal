/**
 *
 * @format
 *
 */
import {StyleSheet} from "react-native";
import type {ScreenLoaderStylesType} from "@/Components/ScreenContainer/components/ScreenLoader/types";

const ScreenLoaderStyles: ScreenLoaderStylesType =
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#ffffff',
      bottom: 0,
      flex: 1,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    lottieView: {
      height: 135,
      width: 135,
    },
  })

export default ScreenLoaderStyles
