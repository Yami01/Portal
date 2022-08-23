/**
 *
 * Radio Button
 * @format
 * @flow
 *
 */

import type { AbstractComponent, Node } from "react"
import React, { memo } from "react"
import { RadioButton as RNRadioButton } from "react-native-paper"
import type { PropsType } from "./types"
import Colors from "react-native/Libraries/NewAppScreen/components/Colors"

const Radio: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const { checked, onPress, value, color, uncheckedColor, disabled, testID } =
    props

  return (
    <RNRadioButton.Android
      {...testID}
      accessibilityRole="radio"
      status={checked ? 'checked' : 'unchecked'}
      value={value}
      onPress={onPress}
      color={color || Colors.primary}
      uncheckedColor={uncheckedColor || Colors.primary}
      disabled={disabled}
    />
  )
})

export default Radio
