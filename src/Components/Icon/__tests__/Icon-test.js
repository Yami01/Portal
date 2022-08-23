/**
 *
 * Icon Test
 * @format
 * @flow
 *
 */

import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'
import Icon from '@/Components/Icon'

const testId = 'iconTestId'

describe('Icon', () => {
  test('is icon render properly', () => {
    const tree = renderer
      .create(<Icon testID={testId} group="general" name="arrow_backward" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('is a11y working in test', () => {
    const { queryByTestId } = render(
      <Icon testID={testId} group="general" name="arrow_backward" />,
    )
    const icon = queryByTestId(testId)
    expect(icon).not.toBeNull()
  })

  test('is icon render properly withBorder', () => {
    const { queryByTestId } = render(
      <Icon testID={testId} group="general" name="arrow_backward" withBorder />,
    )
    const icon = queryByTestId(testId)
    expect(icon).not.toBeNull()
  })

  test('is icon render properly withBorder and center', () => {
    const { queryByTestId } = render(
      <Icon
        testID={testId}
        group="general"
        name="arrow_backward"
        withBorder
        isCenter
      />,
    )
    const icon = queryByTestId(testId)
    expect(icon).not.toBeNull()
  })
})
