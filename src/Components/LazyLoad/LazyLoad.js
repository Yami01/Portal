/**
 *
 * LazyLoad
 * @format
 *
 */

import type {AbstractComponent, Node} from 'react'
import React, {memo} from 'react'
import {View} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

import type {PropsType} from './types'
import {Colors} from '@/Theme/Variables'

const LazyLoad: AbstractComponent<PropsType> = memo(
  (props: PropsType): Node => {
    const { style, children, backgroundColor, highlightColor, speed, testID } =
      props

    return (
      <View style={style} testID={testID}>
        <SkeletonPlaceholder
          backgroundColor={backgroundColor || Colors.gray}
          highlightColor={highlightColor || Colors.gray}
          speed={speed || 800}
        >
          {children}
        </SkeletonPlaceholder>
      </View>
    )
  },
)

export default LazyLoad
