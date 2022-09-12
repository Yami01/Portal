/**
 *
 * HeaderSideButton
 * @format
 * @flow
 *
 */

import React, { memo } from 'react'
import type { Node, AbstractComponent } from 'react'
import { View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

import {
  BADGE_SIZE,
  BADGE_TEST_ID,
  DOT_TEST_ID,
  LINE_HEIGHT,
  TOUCHABLE_WRAPPER_TEST_ID,
} from './config'

import HeaderSideButtonStyles from './styles'
import type { PropsType } from './types'
import { Colors } from '@/Theme/Variables'
import Badge from '@/Components/Badge'
import Icon from '@/Components/Icon'
import Text from '@/Components/Text'

const HeaderSideButton: AbstractComponent<PropsType> = memo(
  (props: PropsType): Node => {
    const {
      rounded,
      iconGroup,
      iconName,
      iconFillColor,
      shouldShowLabel,
      label,
      badgeNumber,
      isShowDot,
      dotBorderColor,
      roundedButtonBackgroundColor = Colors.white,
      testID,
      onPress,
    } = props

    const containerStyle = [
      HeaderSideButtonStyles.container,
      rounded && [
        HeaderSideButtonStyles.containerRounded,
        {
          backgroundColor: roundedButtonBackgroundColor,
        },
      ],
    ]

    const badgeStyle = [
      HeaderSideButtonStyles.absoluteDecoration,
      HeaderSideButtonStyles.badge,
    ]

    const dotStyle = [
      HeaderSideButtonStyles.absoluteDecoration,
      HeaderSideButtonStyles.dot,
      {
        borderColor: dotBorderColor,
        backgroundColor: iconFillColor,
      },
    ]

    return (
      <View>
        <TouchableRipple delayPressIn={0} onPress={onPress} {...testID}>
          <View style={containerStyle} testID={TOUCHABLE_WRAPPER_TEST_ID}>
            {shouldShowLabel && !!label && (
              <Text style={HeaderSideButtonStyles.label}>{label}</Text>
            )}
            <Icon
              fillColor={iconFillColor}
              group={iconGroup}
              name={iconName}
              width={LINE_HEIGHT}
              height={LINE_HEIGHT}
            />
          </View>
        </TouchableRipple>
        {!isShowDot && !!badgeNumber && (
          <Badge
            extraStyle={badgeStyle}
            size={BADGE_SIZE}
            testID={BADGE_TEST_ID}
          >
            {badgeNumber}
          </Badge>
        )}
        {isShowDot && <View style={dotStyle} testID={DOT_TEST_ID} />}
      </View>
    )
  },
)

HeaderSideButton.displayName = 'HeaderSideButton'

export default HeaderSideButton
