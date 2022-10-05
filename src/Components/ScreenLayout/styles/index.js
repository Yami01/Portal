import {StyleSheet} from "react-native";
import {ScreenLayoutStylesType} from "@/Components/ScreenLayout/types";

const ScreenLayoutStyles: ScreenLayoutStylesType =
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
  })

export default ScreenLayoutStyles
