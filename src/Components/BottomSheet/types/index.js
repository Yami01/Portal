/**
 *
 * @format
 * @flow
 *
 */
import type { Node } from 'react'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

export type PropsType = {
  containerStyle?: ViewStyleProp,
  visible: boolean,
  children: Node,
  testID?: string,
  onChange?: number => void,
  backdropTestID?: string,
  contentTestID?: string,
  onDismiss?: () => void,
}

export type BottomSheetStylesType = {
  container: ViewStyleProp,
  handlerWrapper: ViewStyleProp,
  handler: ViewStyleProp,
}
