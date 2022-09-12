/**
 *
 * Input
 * @format
 * @flow
 *
 */

import React, { memo, useMemo, useCallback } from 'react'
import type { Node, AbstractComponent } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { INPUT_LINE_HEIGHT_1X, INPUT_PADDING_VERTICAL } from './config'
import InputStyles from './styles'
import type { PropsType } from './types'
import Text from '@/Components/Text'
import { Colors } from '@/Theme/Variables'
import Icon from '@/Components/Icon'
import { useFontScale } from '@/Hooks'

const Input: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {
    testID,
    keyboardType,
    secureTextEntry,
    label,
    editable,
    disabled,
    pointerEvents,
    value,
    decimalPlaces,
    onChangeText,
    onBlur: onBlurProp,
    rightComponentType,
    rightText,
    iconGroup,
    iconName,
    iconWidth,
    iconHeight,
    iconFillColor,
    maxLength,
    placeholder,
    textInputContainerStyle,
    textInputStyle,
  } = props

  const fontScale = useFontScale()

  const inputHeight = useMemo((): number => {
    return INPUT_LINE_HEIGHT_1X * fontScale + 2 * INPUT_PADDING_VERTICAL
  }, [fontScale])

  const textNode = useMemo((): Node => {
    return (
      <View>
        <Text style={InputStyles.rightComponentText}>{rightText}</Text>
      </View>
    )
  }, [rightText])

  const iconNode = useMemo((): Node => {
    return (
      <Icon
        group={iconGroup || ''}
        name={iconName || ''}
        fillColor={iconFillColor}
        width={iconWidth}
        height={iconHeight}
      />
    )
  }, [iconGroup, iconName, iconWidth, iconHeight, iconFillColor])

  const rightComponent = useMemo((): Node => {
    if (!rightComponentType) {
      return null
    }

    return rightComponentType === 'text' ? textNode : iconNode
  }, [rightComponentType, textNode, iconNode])

  // Ensure no params pass to TextInput onBlur
  const onBlur = useCallback(() => {
    onBlurProp?.()
  }, [onBlurProp])

  const validateInputValue = useCallback(
    (inputValue: string) => {
      if (!onChangeText) {
        return
      }

      if (decimalPlaces && decimalPlaces > 0) {
        const pattern = new RegExp(`^(\\d*\\.{0,1}\\d{0,${decimalPlaces}}$)`)
        const validated = inputValue.match(pattern)

        if (validated) {
          onChangeText(inputValue)
        }
      } else {
        onChangeText(inputValue)
      }
    },
    [decimalPlaces, onChangeText],
  )

  return (
    <View
      style={[
        InputStyles.container,
        disabled && InputStyles.disabledContainer,
        textInputContainerStyle,
      ]}
    >
      <View style={[InputStyles.inputContainer, { height: inputHeight }]}>
        <TextInput
          {...testID}
          style={[InputStyles.input, { height: inputHeight }, textInputStyle]}
          value={value}
          disabled={disabled}
          editable={editable}
          pointerEvents={pointerEvents}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={validateInputValue}
          onBlur={onBlur}
          blurOnSubmit
          label={label}
          underlineColor={Colors.transparent}
          placeholder={placeholder}
          maxLength={maxLength}
          theme={{
            colors: {
              primary: Colors.gray_950,
              text: Colors.gray_750,
            },
          }}
        />
      </View>
      {rightComponentType && (
        <View style={InputStyles.rightComponentContainer}>
          {rightComponent}
        </View>
      )}
    </View>
  )
})

export default Input
