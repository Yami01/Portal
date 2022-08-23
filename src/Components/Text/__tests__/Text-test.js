/**
 *
 * Text Test
 * @format
 * @flow
 *
 */

import React from 'react'
import renderer from 'react-test-renderer'
import Text from '../Text'
import { fontWeightOptions } from '../index'

const content = 'Testing Content'

describe('Text', () => {
  test('Text with normal content', () => {
    const tree = renderer.create(<Text>{content}</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Text with bold font weight', () => {
    const tree = renderer
      .create(<Text fontWeight={fontWeightOptions.bold}>{content}</Text>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Text with bold font weight, font size, color', () => {
    const tree = renderer
      .create(
        <Text fontWeight={fontWeightOptions.bold} fontSize={24} color="blue">
          {content}
        </Text>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
