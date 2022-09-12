/**
 *
 * @format
 * @flow
 *
 */

import { StyleSheet } from 'react-native'

import type { PageLayoutWithHeaderStylesType } from '../types'

const PageLayoutWithHeaderStyles: PageLayoutWithHeaderStylesType =
  StyleSheet.create({
    container: {
      flex: 1,
    },
    duplicatedHeaderContainer: {
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    headerAbsoluteContainer: {
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    scrollView: {
      zIndex: 99,
      elevation: 99,
    },
  })

export default PageLayoutWithHeaderStyles
