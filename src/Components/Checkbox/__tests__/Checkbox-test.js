/**
 *
 * Checkbox Test
 * @format
 * @flow
 *
 */

import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'

import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  const checkBoxTestId = 'checkBoxTestId'
  const onPressMock = jest.fn()

  test('Checkbox Render', () => {
    const tree = renderer.create(<Checkbox onPress={onPressMock} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Checkbox Press', () => {
    const { queryByTestId } = render(
      <Checkbox testID={checkBoxTestId} onPress={onPressMock} />,
    )

    const button = queryByTestId(checkBoxTestId)
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })
})
