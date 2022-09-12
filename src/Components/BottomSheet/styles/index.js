/**
 *
 * @format
 * @flow
 *
 */
import { StyleSheet } from 'react-native'
import type { BottomSheetStylesType } from '../types'
import { Colors } from '@/Theme/Variables'

const BottomSheetStyles: BottomSheetStylesType = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray_250,
  },
  handlerWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  handler: {
    marginTop: 8,
    width: 40,
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.gray_650,
  },
})

export default BottomSheetStyles
