/**
 *
 * IconText
 * @format
 *
 */

import type {AbstractComponent, Node} from 'react'
import React, {memo} from 'react'
import {View} from 'react-native'
import {TouchableRipple} from 'react-native-paper'
import IconTextStyles from './styles'
import type {PropsType} from './types'
import {Colors} from '@/Theme/Variables'
import Text from '@/Components/Text'
import Icon from '@/Components/Icon'

const IconText: AbstractComponent<PropsType> = memo(
  (props: PropsType): Node => {
    const { label, labelColor = Colors.white, icon, testID, onPress } = props

    const labelStyle = [IconTextStyles.label, { color: labelColor }]

    return (
      <TouchableRipple
        {...testID}
        style={IconTextStyles.container}
        disabled={!onPress}
        onPress={onPress}
      >
        <View style={IconTextStyles.container}>
          <Text fontWeight={'bold'} style={labelStyle} numberOfLines={1}>
            {label}
          </Text>
          {icon && (
            <Icon
              fillColor={icon.fillColor}
              group={icon.group}
              name={icon.name}
              width={icon.width}
              height={icon.height}
            />
          )}
        </View>
      </TouchableRipple>
    )
  },
)

IconText.displayName = 'IconText'

export default IconText
