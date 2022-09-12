/**
 *
 * IconText Test
 * @format
 * @flow
 *
 */

import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import { WHITE } from '@colors'
import IconText from '../IconText'

describe('IconText', () => {
  const label = 'Test Icon Label'
  const labelColor = '#123456'
  const centerIcon = {
    fillColor: WHITE,
    group: 'general',
    name: 'arrow_drop_down',
  }
  const onPressMock = jest.fn()

  test('IconText render', () => {
    const tree = render(
      <IconText label={label} icon={centerIcon} onPress={onPressMock} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('IconText Disabled', () => {
    const { queryByRole } = render(<IconText label={label} />)

    const buttonByRole = queryByRole('button')
    expect(buttonByRole).toBeNull()
  })

  test('IconText render properly with label color', () => {
    const { getByText } = render(
      <IconText label={label} labelColor={labelColor} />,
    )

    const labelNode = getByText(label)
    expect(labelNode).not.toBeNull()
    expect(labelNode).toHaveStyle({ color: labelColor })
  })

  test('IconText Enabled', () => {
    const { getByRole } = render(
      <IconText label={label} icon={centerIcon} onPress={onPressMock} />,
    )

    const button = getByRole('button')
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
    expect(() => {
      fireEvent.press(button)
    }).not.toThrow()
  })
})
