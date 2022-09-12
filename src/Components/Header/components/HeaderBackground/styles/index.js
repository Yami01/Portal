/**
 *
 * @format
 * @flow
 *
 */
import { StyleSheet } from 'react-native'

import type { StylePropsType } from '../types'
import { Colors } from '@/Theme/Variables'

const HeaderBackgroundStyles: StylePropsType = StyleSheet.create({
  container: {
    zIndex: 98,
    overflow: 'visible',
    borderBottomLeftRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.red_950,
    paddingHorizontal: 16,
  },
  containerShadow: {
    elevation: 12,
    shadowColor: Colors.dark_gray,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
})

export default HeaderBackgroundStyles
