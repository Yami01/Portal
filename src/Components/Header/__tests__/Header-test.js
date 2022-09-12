/**
 *
 * Header Test
 * @format
 * @flow
 *
 */

import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Header from '../Header'
import {
  LEFT_BUTTON_CONTAINER_TEST_ID,
  RIGHT_BUTTON_CONTAINER_TEST_ID,
  TITLE_ICON_TEXT_TEST_ID,
} from '../config'
import { Colors } from '@/Theme/Variables'

describe('Header', () => {
  const onPressMock = jest.fn()

  const leftButtonAccessibilityLabel = 'Accessible header button left'
  const leftButton = {
    iconFillColor: Colors.white,
    iconGroup: 'general',
    iconName: 'menu',
  }

  const rightButtonAccessibilityLabel = 'Accessible header button right'
  const rightButtonLabel = 'Updated today'
  const rightButton = {
    iconFillColor: Colors.white,
    iconGroup: 'general',
    iconName: 'notifications',
    badgeNumber: 1,
  }

  const titleLabel = 'AIA Vitality'
  const titleIconProps = {
    titleIconGroup: 'general',
    titleIconName: 'logo_white',
  }

  const testID = 'Header Test ID'

  test('render with title label and side buttons', () => {
    const tree = render(
      <Header
        leftButton={leftButton}
        titleLabel={titleLabel}
        rightButton={rightButton}
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('render with title label and side buttons on right', () => {
    const tree = render(
      <Header
        leftButton={leftButton}
        titleLabel={titleLabel}
        rightButton={rightButton}
        isAllButtonsOnRight
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Render logo only', () => {
    const element = render(<Header {...titleIconProps} />).toJSON()
    expect(element).toMatchSnapshot()
  })

  test('Render title with icon', () => {
    const element = render(<Header {...titleIconProps} />).toJSON()
    expect(element).toMatchSnapshot()
  })

  test('Render left button and logo only', () => {
    const element = render(
      <Header leftButton={leftButton} {...titleIconProps} />,
    ).toJSON()
    expect(element).toMatchSnapshot()
  })

  test('Render right button with button label and title logo only', () => {
    const element = render(
      <Header
        {...titleIconProps}
        rightButton={{
          ...rightButton,
          label: rightButtonLabel,
        }}
      />,
    ).toJSON()
    expect(element).toMatchSnapshot()
  })

  test('Render with additional configs', () => {
    const element = render(
      <Header
        titleLabel={titleLabel}
        extraPaddingBottom={30}
        isLargePadding
        shouldIgnoreStatusBarHeight
        withShadow
      />,
    ).toJSON()
    expect(element).toMatchSnapshot()
  })

  test('Not render button containers if no buttons', () => {
    const { queryByTestId } = render(<Header titleLabel={titleLabel} />)

    expect(queryByTestId(LEFT_BUTTON_CONTAINER_TEST_ID)).toBeNull()
    expect(queryByTestId(RIGHT_BUTTON_CONTAINER_TEST_ID)).toBeNull()
  })

  test('Not render right button container if no right button and align to left', () => {
    const { queryByTestId } = render(
      <Header
        titleLabel={titleLabel}
        leftButton={leftButton}
        isTitleAlignLeft
      />,
    )

    expect(queryByTestId(LEFT_BUTTON_CONTAINER_TEST_ID)).not.toBeNull()
    expect(queryByTestId(RIGHT_BUTTON_CONTAINER_TEST_ID)).toBeNull()
  })

  test('render right button container even no right button but align to center', () => {
    const { queryByTestId } = render(
      <Header titleLabel={titleLabel} leftButton={leftButton} />,
    )

    expect(queryByTestId(LEFT_BUTTON_CONTAINER_TEST_ID)).not.toBeNull()
    expect(queryByTestId(RIGHT_BUTTON_CONTAINER_TEST_ID)).not.toBeNull()
  })

  test('render left button only if isOnlyLeftIcon true', () => {
    const { queryByTestId } = render(
      <Header
        titleLabel={titleLabel}
        leftButton={leftButton}
        rightButton={rightButton}
        testID={testID}
        isAllButtonsOnRight
        isTitleAlignLeft
        isOnlyLeftIcon
      />,
    )

    expect(queryByTestId(LEFT_BUTTON_CONTAINER_TEST_ID)).not.toBeNull()
    expect(queryByTestId(RIGHT_BUTTON_CONTAINER_TEST_ID)).toBeNull()
    expect(queryByTestId(TITLE_ICON_TEXT_TEST_ID)).toBeNull()
    const container = queryByTestId(testID)
    expect(container).toHaveStyle({ backgroundColor: Colors.transparent })
  })

  test('Test if header left button is clickable', () => {
    const { getByA11yLabel } = render(
      <Header
        leftButton={{
          ...leftButton,
          onPress: onPressMock,
        }}
      />,
    )

    const button = getByA11yLabel(leftButtonAccessibilityLabel)
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })

  test('Test if header right button is clickable', () => {
    const { getByA11yLabel } = render(
      <Header
        rightButton={{
          ...rightButton,
          onPress: onPressMock,
        }}
      />,
    )

    const button = getByA11yLabel(rightButtonAccessibilityLabel)
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })

  test('Test if title is clickable', () => {
    const { getByTestId } = render(
      <Header titleLabel={titleLabel} titleOnPress={onPressMock} />,
    )

    const button = getByTestId(TITLE_ICON_TEXT_TEST_ID)
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })
})
