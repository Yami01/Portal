/**
 *
 * Radio Test
 * @format
 * @flow
 *
 */

import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'

import Radio from '../Radio'

describe('Radio', () => {
  const testId = 'Radio Test Id'
  const onPressMock = jest.fn()
  const value = 'Test Value 1'

  test('Radio Render', () => {
    const tree = renderer
      .create(<Radio onPress={onPressMock} value={value} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Radio Disable Render', () => {
    const tree = renderer
      .create(<Radio onPress={onPressMock} value={value} disabled />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Radio Press', () => {
    const { queryByTestId } = render(
      <Radio testId={testId} onPress={onPressMock} value={value} />,
    )

    const button = queryByTestId(testId)
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })
})
