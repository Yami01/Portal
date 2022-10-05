/**
 *
 * @format
 *
 */

import {StyleSheet} from 'react-native'

import type {StyleType} from '../types'

const IconTextStyles: StyleType = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 17,
    lineHeight: 24,
  },
})

export default IconTextStyles
