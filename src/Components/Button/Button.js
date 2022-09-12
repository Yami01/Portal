/**
 *
 * Button
 * @format
 * @flow
 *
 */

import React, { memo, useCallback, useMemo } from 'react'
import {
  Animated,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native'
import {
  ActivityIndicator,
  TouchableRipple,
  useTheme,
} from 'react-native-paper'
import Color from 'color'
import type { AbstractComponent, Node } from 'React'
import type {
  TextStyleProp,
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet'

import {
  BOTTOM_ICON_COLOR,
  BOTTOM_ICON_CONTAINED_COLOR,
  BUTTON_BORDER_RADIUS,
  BUTTON_COLOR,
  BUTTON_ICON_GROUP,
  BUTTON_ICON_MEDIUM_SIZE,
  BUTTON_ICON_SIZE,
  BUTTON_ICON_SMALL_SIZE,
  BUTTON_NUMBER_OF_LINES,
  BUTTON_OUTLINED_BACKGROUND_COLOR,
  LARGE_BUTTON_HEIGHT,
  MEDIUM_BUTTON_HEIGHT,
  SMALL_BUTTON_HEIGHT,
} from './config'

import ButtonStyles from './styles'
import type { IconPropsType, PropsType } from './types'
import { Colors } from '@/Theme/Variables'
import Text from '@/Components/Text'
import Icons from '@/Assets/Icons'

const Button: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {
    size = 'large',
    alignment,
    borderRadius = BUTTON_BORDER_RADIUS,
    children,
    color = BUTTON_COLOR,
    compact,
    contentStyle,
    disabled: propsDisabled = false,
    halfWidth = false,
    autoWidth = false,
    iconSize,
    labelStyle,
    leftIcon,
    loading,
    onPress,
    rightIcon,
    style: propsStyle,
    uppercase,
    underline,
    variation = 'contained',
    testID,
    textTestID,
    maxFontScale,
    numberOfLines = BUTTON_NUMBER_OF_LINES,
  } = props

  const { animation, fonts } = useTheme()

  const disabled = useMemo((): boolean => {
    return loading || !!propsDisabled
  }, [loading, propsDisabled])

  const { current: elevation } = React.useRef(
    new Animated.Value(variation === 'contained' ? 2 : 0),
  )

  const disableColor = useCallback((originalColor: string): string => {
    return Color(originalColor).lighten(0.75).desaturate(0.3).rgb().string()
  }, [])

  const backgroundColor = useMemo((): string => {
    if (variation === 'contained') {
      return color
    }
    if (variation === 'outlined') {
      return BUTTON_OUTLINED_BACKGROUND_COLOR
    }
    return 'transparent'
  }, [color, variation])

  const disabledBackgroundColor = useMemo((): string => {
    if (variation === 'contained') {
      return disableColor(backgroundColor)
    }
    return backgroundColor
  }, [variation, backgroundColor, disableColor])

  const borderColor = useMemo((): string => {
    if (variation === 'outlined') {
      return disabled ? disableColor(color) : color
    }
    return 'transparent'
  }, [variation, disabled, disableColor, color])

  const borderWidth = useMemo((): number => {
    return variation === 'outlined' ? 1 : 0
  }, [variation])

  const textColor = useMemo((): string => {
    if (variation === 'contained') {
      return Colors.white
    }
    if (disabled) {
      return disableColor(color)
    }
    return color
  }, [variation, disabled, color, disableColor])

  const rippleColor = useMemo(
    (): string => Color(textColor).alpha(0.32).rgb().string(),
    [textColor],
  )

  const buttonStyle = useMemo((): ViewStyleProp => {
    return {
      backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
    }
  }, [
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    disabled,
    disabledBackgroundColor,
  ])

  const touchableStyle = useMemo((): ViewStyleProp => {
    return {
      borderRadius,
    }
  }, [borderRadius])

  const finalLabelStyle = useMemo((): TextStyleProp => {
    const isTextStyle = variation === 'text'
    const defaultLabelStyle = isTextStyle
      ? ButtonStyles.textStyleLabel
      : [ButtonStyles.label, fonts.semiBold]
    let labelSizeStyle = isTextStyle
      ? ButtonStyles.largeTextStyleLabel
      : ButtonStyles.largeLabel
    if (size === 'small') {
      labelSizeStyle = isTextStyle
        ? ButtonStyles.smallTextStyleLabel
        : ButtonStyles.smallLabel
    } else if (size === 'medium') {
      labelSizeStyle = isTextStyle
        ? ButtonStyles.mediumTextStyleLabel
        : ButtonStyles.mediumLabel
    }
    return [
      defaultLabelStyle,
      labelSizeStyle,
      compact && ButtonStyles.compactLabel,
      uppercase && ButtonStyles.uppercaseLabel,
      underline && ButtonStyles.underlineLabel,
      { color: textColor },
      labelStyle,
    ]
  }, [
    compact,
    labelStyle,
    size,
    textColor,
    underline,
    uppercase,
    variation,
    fonts,
  ])

  const { fontScale } = useWindowDimensions()

  const finalFontScale = useMemo((): number => {
    return maxFontScale ? Math.min(maxFontScale, fontScale) : fontScale
  }, [fontScale, maxFontScale])

  const finalButtonStyle = useMemo((): ViewStyleProp => {
    let buttonSizeStyle = ButtonStyles.largeButton
    let fontScaleStyle = { height: LARGE_BUTTON_HEIGHT * finalFontScale }
    if (size === 'small') {
      buttonSizeStyle = ButtonStyles.smallButton
      fontScaleStyle = { height: SMALL_BUTTON_HEIGHT * finalFontScale }
    } else if (size === 'medium') {
      buttonSizeStyle = ButtonStyles.mediumButton
      fontScaleStyle = { height: MEDIUM_BUTTON_HEIGHT * finalFontScale }
    }
    return [
      ButtonStyles.button,
      buttonSizeStyle,
      fontScaleStyle,
      compact && ButtonStyles.compact,
      buttonStyle,
      propsStyle,
    ]
  }, [finalFontScale, size, compact, buttonStyle, propsStyle])

  const finalIconSize = useMemo((): number => {
    let resultSize = iconSize || BUTTON_ICON_SIZE
    if (!iconSize) {
      if (size === 'small') {
        resultSize = BUTTON_ICON_SMALL_SIZE
      } else if (size === 'medium') {
        resultSize = BUTTON_ICON_MEDIUM_SIZE
      }
    }
    return resultSize * fontScale
  }, [fontScale, iconSize, size])

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress()
    }
  }, [onPress])

  const handlePressIn = useCallback(() => {
    if (variation === 'contained') {
      const { scale } = animation
      Animated.timing(elevation, {
        toValue: 8,
        duration: 200 * scale,
        useNativeDriver: true,
      }).start()
    }
  }, [animation, elevation, variation])

  const handlePressOut = useCallback(() => {
    if (variation === 'contained') {
      const { scale } = animation
      Animated.timing(elevation, {
        toValue: 2,
        duration: 150 * scale,
        useNativeDriver: true,
      }).start()
    }
  }, [animation, elevation, variation])

  const renderIcon = useCallback(
    ({
      group = BUTTON_ICON_GROUP,
      name,
      iconColor = variation === 'contained'
        ? BOTTOM_ICON_CONTAINED_COLOR
        : BOTTOM_ICON_COLOR,
    }: IconPropsType): Node => {
      if (group && name) {
        const iconNode = Icons[group]?.(
          name,
          {},
          finalIconSize,
          finalIconSize,
          disabled ? disableColor(iconColor) : iconColor,
        )
        return <View style={ButtonStyles.iconContainer}>{iconNode}</View>
      }
      return null
    },
    [disableColor, disabled, finalIconSize, variation],
  )

  const finalContainerStyle = useMemo((): ViewStyleProp => {
    let alignmentStyle
    switch (alignment) {
      case 'left':
        alignmentStyle = {
          alignItems: 'flex-start',
        }
        break
      case 'right':
        alignmentStyle = {
          alignItems: 'flex-end',
        }
        break
      case 'center':
        alignmentStyle = {
          alignItems: 'center',
        }
        break
      default:
        alignmentStyle = {}
    }

    return [
      ButtonStyles.fullWidthContainer,
      halfWidth && ButtonStyles.halfWidthContainer,
      autoWidth && ButtonStyles.autoWidthContainer,
      alignmentStyle,
    ]
  }, [halfWidth, autoWidth, alignment])

  const renderButtonContent = useCallback((): Node => {
    return (
      <View>
        <View
          style={[
            ButtonStyles.content,
            contentStyle,
            loading ? ButtonStyles.contentLoading : {},
          ]}
        >
          {leftIcon && renderIcon(leftIcon)}
          {!!children && (
            <Text
              numberOfLines={numberOfLines}
              style={finalLabelStyle}
              testID={textTestID}
              maxFontSizeMultiplier={maxFontScale}
            >
              {children}
            </Text>
          )}
          {rightIcon && renderIcon(rightIcon)}
        </View>
        {loading ? (
          <View style={ButtonStyles.spinnerContainer}>
            <ActivityIndicator color={textColor} size={finalIconSize} />
          </View>
        ) : null}
      </View>
    )
  }, [
    children,
    contentStyle,
    finalIconSize,
    finalLabelStyle,
    leftIcon,
    loading,
    maxFontScale,
    renderIcon,
    rightIcon,
    textColor,
    textTestID,
    numberOfLines,
  ])

  const renderTouchableButton = useCallback((): Node => {
    const touchableProps = {
      disabled,
      onPress: handlePress,
      onPressIn: handlePressIn,
      onPressOut: handlePressOut,
    }

    if (variation === 'text') {
      return (
        <TouchableWithoutFeedback {...touchableProps}>
          {renderButtonContent()}
        </TouchableWithoutFeedback>
      )
    }
    return (
      <TouchableRipple
        {...touchableProps}
        accessibilityComponentType="button"
        borderless
        delayPressIn={0}
        rippleColor={rippleColor}
        style={touchableStyle}
      >
        {renderButtonContent()}
      </TouchableRipple>
    )
  }, [
    disabled,
    handlePress,
    handlePressIn,
    handlePressOut,
    renderButtonContent,
    rippleColor,
    touchableStyle,
    variation,
  ])

  return (
    <View testID={testID} style={finalContainerStyle}>
      <View style={finalButtonStyle}>{renderTouchableButton()}</View>
    </View>
  )
})

export default Button
