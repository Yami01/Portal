import {StyleSheet} from "react-native";
import type {ScreenContainerStylesType} from "@/Components/ScreenContainer/types";

const ScreenContainerStyles: ScreenContainerStylesType =
  StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      height: '100%',
      width: '100%',
    },
  })

export default ScreenContainerStyles