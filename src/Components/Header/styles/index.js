/**
 *
 * @format
 * @flow
 *
 */

import { StyleSheet } from 'react-native'

import type { HeaderStyleType } from '../types'

const HeaderStyles: HeaderStyleType = StyleSheet.create({
  buttonContainer: {
    minWidth: 24,
    height: 24,
  },
  buttonContainerLeft: {
    marginRight: 12,
  },
  buttonContainerLeftOnRight: {
    marginLeft: 12,
    marginRight: 4,
  },
  buttonContainerRight: {
    marginLeft: 12,
  },
  container: {
    flexShrink: 1,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexShrink: 1,
    flexGrow: 1,
    flexDirection: 'row',
  },
  progressBarContainer: {
    width: '60%',
    right: 0,
    top: 8,
    position: 'absolute',
    alignSelf: 'center',
  },
})

export default HeaderStyles
