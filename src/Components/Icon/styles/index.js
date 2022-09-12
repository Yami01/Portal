/**
 *
 * @format
 * @flow
 *
 */

import { StyleSheet } from 'react-native'
import type { IconStyleType } from '../types'
import { Colors } from '@/Theme/Variables'

const IconStyles: IconStyleType = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBorder: {
    position: 'relative',
    borderColor: Colors.black,
    borderRadius: 5,
    borderWidth: 1,
    overflow: 'hidden',
    padding: 10,
  },
})

export default IconStyles
