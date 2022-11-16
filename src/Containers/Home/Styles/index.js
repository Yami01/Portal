/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native"
import { HomeComponentStylesType } from "@/Containers/Home/Types"
import { Colors } from "@/Theme/Variables"


const HomeComponentStyles: HomeComponentStylesType = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "rgba(51, 51, 51, 0.68)",
    position: "absolute",
    top: 20,
    width: "50%",
    borderRadius: 50,
    alignSelf: "center",
  },
  activeTab: {
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  activeTabLabel: {
    color: Colors.black,
    textAlign: "center",
  },
  inActiveTabLabel: {
    color: Colors.white,
  },
})

export default HomeComponentStyles
