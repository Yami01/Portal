/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native"
import type { LiveComponentStylesType } from "@/Containers/Live/Types"


const LiveComponentStyles: LiveComponentStylesType = StyleSheet.create({
  listItem: {
    marginRight: 20
  },
  imageContainer: {
    width: '100%',
    maxWidth: 400,
    height: 225,
    borderRadius: 12,
    marginBottom: 8,
  },
});

export default LiveComponentStyles;
