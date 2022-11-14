/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native"
import { HomeComponentStylesType } from "@/Containers/Home/Types"
import type { LiveComponentStylesType } from "@/Containers/Live/Types"


const LiveComponentStyles: LiveComponentStylesType = StyleSheet.create({
  listItem: {
    marginRight: 20
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 8,
  },
});

export default LiveComponentStyles;
