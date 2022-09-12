/**
 *
 * HeaderBackground
 * @format
 * @flow
 *
 */

import React, { memo, useMemo } from 'react'
import type { Node, AbstractComponent } from 'react'
import Animated from 'react-native-reanimated'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import HeaderBackgroundStyles from './styles'

import type { PropsType } from './types'

import {
  DEFAULT_PADDING_VERTICAL,
  LARGE_PADDING_VERTICAL,
  STATUS_BAR_PADDING,
} from './config'
import { Colors } from '@/Theme/Variables'

const HeaderBackground: AbstractComponent<PropsType> = memo(
  (props: PropsType): Node => {
    const {
      children,
      testID,
      shouldIgnoreStatusBarHeight = false,
      extraStyle,
      extraPaddingBottom = 0,
      backgroundColor = Colors.red_950,
      withShadow = false,
      isLargePadding = false,
      onLayout,
    } = props

    const style = useMemo((): ViewStyleProp => {
      const paddingVertical: number = isLargePadding
        ? LARGE_PADDING_VERTICAL
        : DEFAULT_PADDING_VERTICAL
      const paddingBottom = Animated.add(paddingVertical, extraPaddingBottom)
      const paddingTop: number =
        paddingVertical + (shouldIgnoreStatusBarHeight ? 0 : STATUS_BAR_PADDING)
      return [
        HeaderBackgroundStyles.container,
        {
          paddingTop,
          paddingBottom,
          backgroundColor,
        },
        withShadow && HeaderBackgroundStyles.containerShadow,
        extraStyle,
      ]
    }, [
      backgroundColor,
      extraPaddingBottom,
      extraStyle,
      isLargePadding,
      shouldIgnoreStatusBarHeight,
      withShadow,
    ])

    return (
      <Animated.View style={style} testID={testID} onLayout={onLayout}>
        {children}
      </Animated.View>
    )
  },
)

export default HeaderBackground
