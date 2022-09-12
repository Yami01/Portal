/**
 *
 * @format
 * @flow
 *
 */

import { StyleSheet } from 'react-native'
import type { HeaderSideButtonStyleType } from '../types'
import { LINE_HEIGHT, ROUNDED_BUTTON_PADDING } from '../config'
import { Colors } from '@/Theme/Variables'

const HeaderSideButtonStyles: HeaderSideButtonStyleType = StyleSheet.create({
  absoluteDecoration: {
    position: 'absolute',
    top: -3,
    right: -3,
    zIndex: 10,
  },
  badge: {
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.red_950,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRounded: {
    padding: ROUNDED_BUTTON_PADDING,
    margin: -ROUNDED_BUTTON_PADDING,
    borderRadius: (LINE_HEIGHT + 2 * ROUNDED_BUTTON_PADDING) / 2,
    elevation: 5,
    shadowColor: Colors.gray,
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  dot: {
    borderWidth: 2,
    backgroundColor: Colors.white,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  label: {
    color: Colors.white,
    fontSize: 12,
    marginRight: 5,
  },
})

export default HeaderSideButtonStyles
