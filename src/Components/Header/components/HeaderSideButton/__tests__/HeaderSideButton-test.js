/**
 *
 * HeaderSideButton Test
 * @format
 * @flow
 *
 */

import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'

import HeaderSideButton from '../HeaderSideButton'
import {
  BADGE_TEST_ID,
  DOT_TEST_ID,
  TOUCHABLE_WRAPPER_TEST_ID,
} from '../config'
import HeaderSideButtonStyles from '../styles'

describe('HeaderSideButton', () => {
  const label = 'Updated today'
  const badgeNumber = 1
  const dotBorderColor = '#098765'
  const testID = 'headerButtonTestID'
  const buttonBackgroundColor = '#135790'
  const props = {
    iconFillColor: '#fff',
    iconGroup: 'general',
    iconName: 'menu',
    testID,
  }

  test('render with icon only', () => {
    const tree = renderer.create(<HeaderSideButton {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('render with dot', () => {
    const tree = renderer
      .create(
        <HeaderSideButton
          {...props}
          isShowDot
          dotBorderColor={dotBorderColor}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('render with label and badge', () => {
    const tree = renderer
      .create(
        <HeaderSideButton
          {...props}
          shouldShowLabel
          label={label}
          badgeNumber={badgeNumber}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('is accessibility works', () => {
    const { getByTestId } = render(<HeaderSideButton {...props} />)

    expect(getByTestId(testID)).not.toBeNull()
  })

  test('is label not show if shouldShowLabel not true', () => {
    const { queryByText } = render(
      <HeaderSideButton {...props} label={label} />,
    )

    expect(queryByText(label)).toBeNull()
  })

  test('is label show if shouldShowLabel true', () => {
    const { getByText } = render(
      <HeaderSideButton {...props} shouldShowLabel label={label} />,
    )

    expect(getByText(label)).not.toBeNull()
  })

  test('can render if badgeNumber is 0', () => {
    const { queryByTestId } = render(
      <HeaderSideButton {...props} badgeNumber={0} />,
    )

    expect(queryByTestId(testID)).not.toBeNull()
    expect(queryByTestId(BADGE_TEST_ID)).toBeNull()
  })

  test('can render with badgeNumber', () => {
    const { queryByTestId, queryByText } = render(
      <HeaderSideButton {...props} badgeNumber={badgeNumber} />,
    )

    expect(queryByTestId(testID)).not.toBeNull()
    expect(queryByTestId(BADGE_TEST_ID)).not.toBeNull()
    expect(queryByText(badgeNumber.toString())).not.toBeNull()
  })

  test('can render with dot', () => {
    const { queryByTestId } = render(
      <HeaderSideButton {...props} isShowDot dotBorderColor={dotBorderColor} />,
    )

    const dot = queryByTestId(DOT_TEST_ID)

    expect(queryByTestId(testID)).not.toBeNull()
    expect(queryByTestId(BADGE_TEST_ID)).toBeNull()
    expect(dot).not.toBeNull()
    expect(dot).toHaveStyle({ borderColor: dotBorderColor })
  })

  test('can render dot only even badgeNumber provider', () => {
    const { queryByTestId } = render(
      <HeaderSideButton
        {...props}
        isShowDot
        dotBorderColor={dotBorderColor}
        badgeNumber={badgeNumber}
      />,
    )

    const dot = queryByTestId(DOT_TEST_ID)

    expect(queryByTestId(testID)).not.toBeNull()
    expect(queryByTestId(BADGE_TEST_ID)).toBeNull()
    expect(dot).not.toBeNull()
  })

  test('can render as rounded button', () => {
    const { queryByTestId } = render(
      <HeaderSideButton
        {...props}
        rounded
        roundedButtonBackgroundColor={buttonBackgroundColor}
      />,
    )

    const touchableWrapper = queryByTestId(TOUCHABLE_WRAPPER_TEST_ID)

    expect(touchableWrapper).not.toBeNull()
    expect(touchableWrapper).toHaveStyle(
      HeaderSideButtonStyles.containerRounded,
    )
    expect(touchableWrapper).toHaveStyle({
      backgroundColor: buttonBackgroundColor,
    })
  })

  test('is roundedButtonBackgroundColor not affecting if rounded is false', () => {
    const { queryByTestId } = render(
      <HeaderSideButton
        {...props}
        roundedButtonBackgroundColor={buttonBackgroundColor}
      />,
    )

    const touchableWrapper = queryByTestId(TOUCHABLE_WRAPPER_TEST_ID)

    expect(touchableWrapper).not.toBeNull()
    expect(touchableWrapper).not.toHaveStyle(
      HeaderSideButtonStyles.containerRounded,
    )
    expect(touchableWrapper).not.toHaveStyle({
      backgroundColor: buttonBackgroundColor,
    })
  })

  test('is pressable', () => {
    const onPressMock = jest.fn()

    const { getByTestId } = render(
      <HeaderSideButton {...props} onPress={onPressMock} />,
    )

    const button = getByTestId(testID)
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })
})
