/**
 *
 * Header
 * @format
 * @flow
 *
 */

import React, { useMemo, memo } from 'react'
import type { Node, AbstractComponent } from 'React'
import { View } from 'react-native'
import HeaderStyles from './styles'
import type { PropsType } from './types'
import {
  LEFT_BUTTON_CONTAINER_TEST_ID,
  RIGHT_BUTTON_CONTAINER_TEST_ID,
  TITLE_ICON_HEIGHT,
  TITLE_ICON_TEXT_TEST_ID,
} from './config'
import { Colors } from '@/Theme/Variables'
import IconText from '@/Components/IconText'
import HeaderSideButton from '@/Components/Header/components/HeaderSideButton'
import HeaderBackground from '@/Components/Header/components/HeaderBackground'

const Header: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {
    backgroundColor = Colors.primary,
    withShadow,
    titleLabel,
    titleColor = Colors.white,
    titleIconGroup,
    titleIconName,
    titleIconWidth,
    leftButton,
    rightButton,
    extraPaddingBottom,
    isOnlyLeftIcon,
    isOnlyRightIcon = false,
    isTitleAlignLeft: isTitleAlignLeftProp,
    isAllButtonsOnRight,
    isLargePadding,
    shouldIgnoreStatusBarHeight,
    extraStyle,
    testID,
    titleOnPress,
    onLayout,
  } = props

  const isTitleAlignLeft = useMemo((): boolean => {
    return isTitleAlignLeftProp || !!rightButton?.label || !!isAllButtonsOnRight
  }, [isAllButtonsOnRight, isTitleAlignLeftProp, rightButton?.label])

  // Show left button container if any side button exists
  const shouldShowLeftButtonContainer = useMemo((): boolean => {
    return !!leftButton || !!rightButton
  }, [leftButton, rightButton])

  const leftButtonNode = useMemo((): Node => {
    const style = [
      HeaderStyles.buttonContainer,
      isAllButtonsOnRight && !isOnlyLeftIcon
        ? HeaderStyles.buttonContainerLeftOnRight
        : HeaderStyles.buttonContainerLeft,
    ]
    return (
      shouldShowLeftButtonContainer && (
        <View style={style} testID={LEFT_BUTTON_CONTAINER_TEST_ID}>
          {leftButton && (
            <HeaderSideButton
              {...leftButton}
              rounded={isOnlyLeftIcon}
              roundedButtonBackgroundColor={backgroundColor}
              dotBorderColor={backgroundColor}
            />
          )}
        </View>
      )
    )
  }, [
    backgroundColor,
    isAllButtonsOnRight,
    isOnlyLeftIcon,
    leftButton,
    shouldShowLeftButtonContainer,
  ])

  // If title align to left, can hide right button container if no right button.
  // If title align to center, must show right button container if left button container shown
  const shouldShowRightButtonContainer = useMemo((): boolean => {
    return isTitleAlignLeft ? !!rightButton : shouldShowLeftButtonContainer
  }, [isTitleAlignLeft, rightButton, shouldShowLeftButtonContainer])

  const rightButtonNode = useMemo((): Node => {
    return (
      shouldShowRightButtonContainer && (
        <View
          style={[
            HeaderStyles.buttonContainer,
            HeaderStyles.buttonContainerRight,
          ]}
          testID={RIGHT_BUTTON_CONTAINER_TEST_ID}
        >
          {rightButton && (
            <HeaderSideButton
              {...rightButton}
              rounded={isOnlyRightIcon}
              dotBorderColor={backgroundColor}
              shouldShowLabel
            />
          )}
        </View>
      )
    )
  }, [
    backgroundColor,
    isOnlyRightIcon,
    rightButton,
    shouldShowRightButtonContainer,
  ])

  const titleNode = useMemo((): Node => {
    return (
      <View
        style={[
          HeaderStyles.titleContainer,
          { justifyContent: isTitleAlignLeft ? 'flex-start' : 'center' },
        ]}
      >
        <IconText
          label={titleLabel}
          labelColor={titleColor}
          icon={
            !!titleIconGroup && !!titleIconName
              ? {
                  group: titleIconGroup,
                  name: titleIconName,
                  width: titleIconWidth,
                  height: TITLE_ICON_HEIGHT,
                  fillColor: titleColor,
                }
              : undefined
          }
          onPress={titleOnPress}
          testID={TITLE_ICON_TEXT_TEST_ID}
        />
      </View>
    )
  }, [
    isTitleAlignLeft,
    titleColor,
    titleIconGroup,
    titleIconName,
    titleIconWidth,
    titleLabel,
    titleOnPress,
  ])

  return (
    <HeaderBackground
      backgroundColor={isOnlyLeftIcon ? Colors.transparent : backgroundColor}
      extraPaddingBottom={extraPaddingBottom}
      isLargePadding={isLargePadding}
      shouldIgnoreStatusBarHeight={shouldIgnoreStatusBarHeight}
      withShadow={!isOnlyLeftIcon && withShadow}
      testID={testID}
      extraStyle={extraStyle}
      onLayout={onLayout}
    >
      <View style={HeaderStyles.container}>
        {(!isAllButtonsOnRight || isOnlyLeftIcon) && leftButtonNode}
        {!isOnlyLeftIcon && (
          <>
            {titleNode}
            {isAllButtonsOnRight && leftButtonNode}
            {rightButtonNode}
          </>
        )}
      </View>
    </HeaderBackground>
  )
})

Header.displayName = 'Header'

export default Header
