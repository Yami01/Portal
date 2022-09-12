/**
 *
 * HeaderBackground Test
 * @format
 * @flow
 *
 */

import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'

import HeaderBackground from '../HeaderBackground'
import HeaderBackgroundStyles from '../styles'

const testID = 'headerBackgroundTestID'

describe('HeaderBackground', () => {
  test('render with default props', () => {
    const tree = renderer
      .create(
        <HeaderBackground>
          <View />
        </HeaderBackground>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('render with shadow', () => {
    const tree = renderer
      .create(
        <HeaderBackground testID={testID} withShadow>
          <View />
        </HeaderBackground>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('render with large padding', () => {
    const tree = renderer
      .create(
        <HeaderBackground isLargePadding>
          <View />
        </HeaderBackground>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('render without status bar padding', () => {
    const tree = renderer
      .create(
        <HeaderBackground shouldIgnoreStatusBarHeight>
          <View />
        </HeaderBackground>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('is testID works', () => {
    const { getByTestId } = render(
      <HeaderBackground testID={testID}>
        <View />
      </HeaderBackground>,
    )
    expect(getByTestId(testID)).not.toBeNull()
  })

  test('is render properly without shadow', () => {
    const { getByTestId } = render(
      <HeaderBackground testID={testID}>
        <View />
      </HeaderBackground>,
    )
    const background = getByTestId(testID)
    expect(background).not.toBeNull()
    expect(background).not.toHaveStyle(HeaderBackgroundStyles.containerShadow)
  })

  test('is render properly with shadow', () => {
    const { getByTestId } = render(
      <HeaderBackground testID={testID} withShadow>
        <View />
      </HeaderBackground>,
    )
    const background = getByTestId(testID)
    expect(background).not.toBeNull()
    expect(background).toHaveStyle(HeaderBackgroundStyles.containerShadow)
  })
})
