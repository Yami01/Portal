/**
 *
 * Badge
 * @format
 * @flow
 *
 */

import React, { memo } from 'react'
import type { Node, AbstractComponent } from 'react'
import { View } from 'react-native'

import type { PropsType } from './types'
import { BADGE_SIZE, BADGE_RADIUS } from './config'
import BadgeStyles from './styles'
import Text from '@/Components/Text'

const Badge: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {
    children,
    size = 20,
    extraStyle,
    labelStyle,
    badgeRef,
    testID,
  } = props
  const badgeSize = BADGE_SIZE(size || 0)
  const badgeRadius = BADGE_RADIUS(size || 0)

  return (
    <View
      style={[
        { width: badgeSize, height: badgeSize, borderRadius: badgeRadius },
        BadgeStyles.container,
        extraStyle,
      ]}
      ref={badgeRef}
      testID={testID}
    >
      <Text style={[BadgeStyles.label, labelStyle]}>{children}</Text>
    </View>
  )
})

export default Badge
