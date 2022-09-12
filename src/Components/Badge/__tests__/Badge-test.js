/**
 *
 * Badge Test
 * @format
 * @flow
 *
 */

import React from 'react'
import renderer from 'react-test-renderer'

import Badge from '../Badge'

describe('Badge', () => {
  const badgeNumber = 1
  test('Render Badge Notification', () => {
    const tree = renderer.create(<Badge>{badgeNumber}</Badge>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
