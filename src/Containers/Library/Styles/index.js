/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native"
import { LibraryComponentStylesType } from "@/Containers/Library/Types"
import { Colors } from "@/Theme/Variables"


const LibraryComponentStyles: LibraryComponentStylesType = StyleSheet.create({
  listContainer: {
    marginBottom: 52,
  },
  listItem: {
    marginRight: 20,
  },
  listName: {
    marginBottom: 32,
    fontSize: 34,
    color: Colors.white,
  },
  imageContainer: {
    width: 400,
    height: 200,
    borderRadius: 12,
    marginBottom: 8,
  },
})

export default LibraryComponentStyles
