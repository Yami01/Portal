/**
 *
 * @format
 *
 */

import {StyleSheet} from 'react-native'
import type {HeaderLeftStyleTypes} from '../types'
import {Colors} from '@/Theme/Variables'

const HeaderLeftStyles: HeaderLeftStyleTypes = StyleSheet.create({
  container: {
    height: '100%',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },
  leftText: {
    color: Colors.black,
  },
})

export default HeaderLeftStyles
