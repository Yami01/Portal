/**
 *
 * @format
 *
 */

import {StyleSheet} from 'react-native'
import type {HeaderStyleTypes} from '../types'
import {Colors} from '@/Theme/Variables'
import {NAV_BAR_HEIGHT, STATUS_BAR_HEIGHT} from "@/Components/Header/config";

const HeaderStyles: HeaderStyleTypes = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: NAV_BAR_HEIGHT,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.line_divider,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: Colors.white,
  },
})

export default HeaderStyles
