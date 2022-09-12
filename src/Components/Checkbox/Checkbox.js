/**
 *
 * Checkbox
 * @format
 * @flow
 *
 */

import type { AbstractComponent, Node } from "react"
import React, { memo } from "react"
import { Checkbox as RNCheckbox } from "react-native-paper"
import type { PropsType } from "./types"
import { Colors } from '@/Theme/Variables'

const Checkbox: AbstractComponent<PropsType> = memo(
  (props: PropsType): Node => {
    const { checked, onPress, color, uncheckedColor, disabled, testID } = props

    return (
      <RNCheckbox.Android
        status={checked ? 'checked' : 'unchecked'}
        onPress={onPress}
        color={color || Colors.dark}
        uncheckedColor={uncheckedColor || Colors.dark}
        disabled={disabled}
        testID={testID}
      />
    )
  },
)

export default Checkbox
