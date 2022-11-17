/**
 *
 * @format
 *
 */
import type { TextStyleProp, ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"

export type LiveComponentStreamParamsPropsType = {
  now_playlist_id: number,
  name_now_playlist: string,
  start_time: string,
  end_time: string,
  up_next_id: number,
  name_up_next: string,
};

export type LiveComponentListVideosPropsType = {
  id: number,
  name: string,
  description: string,
  url: string,
  thumbnail: string,
  date_created: string,
};

export type LiveComponentListPropsType = {
  id: number,
  name: string,
  date_created: string,
  status: string,
  description: string,
  videos: Array<LiveComponentListVideosPropsType>,
  listType?: string,
};

export type PropsType = {
  nowPLayingProps: LiveComponentListPropsType,
  upNextProps: LiveComponentListPropsType,
  backgroundImage: string,
  isLoading: boolean,
  onPressVideo: (video: LiveComponentListVideosPropsType) => void,
  onStartNowPlayingList: () => void,
};

export type LiveComponentStylesType = {
  listItem: ViewStyleProp,
  imageContainer: ViewStyleProp,
  listContainer: ViewStyleProp,
  listName: TextStyleProp,
}
