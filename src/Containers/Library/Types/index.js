/**
 *
 * @format
 *
 */
import type { TextStyleProp, ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

export type LibraryComponentListVideosPropsType = {
  id: number,
  name: string,
  description: string,
  url: string,
  thumbnail: string,
  date_created: string,
};

export type LibraryComponentListPropsType = {
  id: number,
  name: string,
  date_created: string,
  status: string,
  description: string,
  videos: Array<LibraryComponentListVideosPropsType>,
};

export type PropsType = {
  storeListProps: LibraryComponentListPropsType,
  trainingListProps: LibraryComponentListPropsType,
  onPressVideo: (video: LibraryComponentListVideosPropsType) => void,
  backgroundImage: string,
  isLoading: boolean,
};

export type LibraryComponentStylesType = {
  listContainer: ViewStyleProp,
  listItem: ViewStyleProp,
  imageContainer: ViewStyleProp,
  listName: TextStyleProp,
}
