/**
 *
 * BottomSheet Test
 * @format
 * @flow
 *
 */

import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, act } from '@testing-library/react-native'

import BottomSheet from '../BottomSheet'
import Text from '@/Components/Text'

describe('BottomSheet', () => {
  const props = {
    containerStyle: {},
    onChange: (index: number) => {
      console.log(index)
    },
    testID: 'bottom_sheet_test_id',
    contentTestID: 'bottom_sheet_content_test_id',
  }
  test('BottomSheet with visible props', () => {
    const tree = renderer
      .create(
        <BottomSheet visible {...props}>
          <Text>Testing Bottom Sheet</Text>
        </BottomSheet>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('BottomSheet without visible props', () => {
    const tree = renderer
      .create(
        <BottomSheet visible={false} {...props}>
          <Text>Testing Bottom Sheet</Text>
        </BottomSheet>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('BottomSheet with visible props and trigger onLayout', () => {
    const { getByTestId } = render(
      <BottomSheet visible {...props}>
        <Text>Testing Bottom Sheet</Text>
      </BottomSheet>,
    )
    const bottomSheetView = getByTestId(props.testID)
    const contentView = getByTestId(props.contentTestID)
    act(() => {
      fireEvent(contentView, 'onLayout', {
        nativeEvent: { layout: { height: 300 } },
      })
    })
    expect(bottomSheetView).not.toBeNull()
    expect(contentView).not.toBeNull()
  })
})
