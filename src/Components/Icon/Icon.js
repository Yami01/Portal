/**
 *
 * Icon
 * @format
 * @flow
 *
 */

import React, { memo } from 'react'
import type { AbstractComponent, Node } from 'React'
import { View } from 'react-native'

import IconStyles from './styles'
import type { PropsType } from './types'
import Icons from '@/Assets/Icons'

const Icon: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {
    group,
    name,
    extraStyle,
    withBorder,
    height,
    width,
    fillColor,
    isCenter,
    testID,
  } = props

  const icon = Icons[group]?.(name, extraStyle, width, height, fillColor)

  return (
    <View
      {...testID}
      style={[
        withBorder && IconStyles.iconBorder,
        isCenter && IconStyles.center,
      ]}
    >
      {icon}
    </View>
  )
})

Icon.displayName = 'Icon'

export default Icon
