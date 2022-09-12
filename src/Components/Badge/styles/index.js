/**
 *
 * @format
 * @flow
 *
 */
import { StyleSheet } from 'react-native'

import type { StylesType } from '../types'
import { Colors } from '@/Theme/Variables'

const BadgeStyles: StylesType = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  label: {
    fontSize: 10,
    color: Colors.white,
  },
})

export default BadgeStyles
