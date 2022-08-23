/**
 *
 * Button Test
 * @format
 * @flow
 *
 */
import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-dom/extend-expect'
import Button from '../Button'

describe('Button', () => {
  const iconTestId = 'Icon'
  const iconProps = {
    group: 'general',
    name: 'arrow_forward',
  }

  test('Test if button renders properly', () => {
    const tree = renderer
      .create(<Button onPress={() => {}} leftIcon={iconProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('is not be clickable when disabled prop is true', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test'

    const { getByText } = render(
      <Button disabled onPress={onPressMock}>
        {buttonLabel}
      </Button>,
    )

    const button = getByText(buttonLabel)
    fireEvent.press(button)
    expect(button).toBeDisabled()
    expect(onPressMock).not.toHaveBeenCalled()
  })

  test('is a11y works for testing', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test Text Button'
    const testId = 'a11yTestButton'

    const { findByTestId } = render(
      <Button variation="text" onPress={onPressMock} testID={testId}>
        {buttonLabel}
      </Button>,
    )

    const button = findByTestId(testId)
    expect(button).not.toBeNull()
  })

  test('is text variation button properly render', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test Text Button'

    const { getByText } = render(
      <Button variation="text" onPress={onPressMock}>
        {buttonLabel}
      </Button>,
    )

    const button = getByText(buttonLabel)
    expect(button).not.toBeNull()
  })

  test('is text variation with left icon button properly render', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test Text Button'

    const { findAllByTestId } = render(
      <Button variation="text" leftIcon={iconProps} onPress={onPressMock}>
        {buttonLabel}
      </Button>,
    )

    const buttonWithIconLeft = findAllByTestId(iconTestId)
    expect(buttonWithIconLeft).not.toBeNull()
    expect(buttonWithIconLeft).not.toBe({})
  })

  test('is text variation with right icon button properly render', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test Text Button'

    const { findAllByTestId } = render(
      <Button variation="text" rightIcon={iconProps} onPress={onPressMock}>
        {buttonLabel}
      </Button>,
    )

    const buttonWithIconRight = findAllByTestId(iconTestId)
    expect(buttonWithIconRight).not.toBeNull()
    expect(buttonWithIconRight).not.toBe({})
  })

  test('is outlined variation with left icon button properly render', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test Text Button'

    const { findAllByTestId } = render(
      <Button variation="outlined" leftIcon={iconProps} onPress={onPressMock}>
        {buttonLabel}
      </Button>,
    )

    const buttonWithIconLeft = findAllByTestId(iconTestId)
    expect(buttonWithIconLeft).not.toBeNull()
    expect(buttonWithIconLeft).not.toBe({})
  })

  test('is outlined variation with right icon button properly render', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test Text Button'

    const { findAllByTestId } = render(
      <Button variation="outlined" rightIcon={iconProps} onPress={onPressMock}>
        {buttonLabel}
      </Button>,
    )

    const buttonWithIconRight = findAllByTestId(iconTestId)
    expect(buttonWithIconRight).not.toBeNull()
    expect(buttonWithIconRight).not.toBe({})
  })

  test('is contained variation with left icon button properly render', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test Text Button'

    const { findAllByTestId } = render(
      <Button leftIcon={iconProps} onPress={onPressMock}>
        {buttonLabel}
      </Button>,
    )

    const buttonWithIconLeft = findAllByTestId(iconTestId)
    expect(buttonWithIconLeft).not.toBeNull()
    expect(buttonWithIconLeft).not.toBe({})
  })

  test('is contained variation with right icon button properly render', () => {
    const onPressMock = jest.fn()
    const buttonLabel = 'Test Text Button'

    const { findAllByTestId } = render(
      <Button rightIcon={iconProps} onPress={onPressMock}>
        {buttonLabel}
      </Button>,
    )

    const buttonWithIconRight = findAllByTestId(iconTestId)
    expect(buttonWithIconRight).not.toBeNull()
    expect(buttonWithIconRight).not.toBe({})
  })

  test('Text should not render if it does not exists', () => {
    const textTestID = 'button_text_test_id'
    const { queryByTestId } = render(
      <Button
        underline
        onPress={() => {}}
        leftIcon={iconProps}
        textTestID={textTestID}
      />,
    )
    expect(queryByTestId(textTestID)).toBeNull()
  })

  test('Test if button renders properly with underline props', () => {
    const textTestID = 'Test Underline'
    const buttonText = 'Try me!'
    const { queryByTestId } = render(
      <Button
        underline
        onPress={() => {}}
        leftIcon={iconProps}
        textTestID={textTestID}
      >
        {buttonText}
      </Button>,
    )

    expect(queryByTestId(textTestID)).toHaveStyle({
      textDecorationLine: 'underline',
    })
  })

  test('Test if button renders properly with uppercase props', () => {
    const textTestID = 'Test Uppercase'
    const buttonText = 'Try me!'
    const { queryByTestId } = render(
      <Button
        uppercase
        onPress={() => {}}
        leftIcon={iconProps}
        textTestID={textTestID}
      >
        {buttonText}
      </Button>,
    )

    expect(queryByTestId(textTestID)).toHaveStyle({
      textTransform: 'uppercase',
    })
  })

  test('Test if button renders properly with compact props', () => {
    const tree = renderer
      .create(<Button compact onPress={() => {}} leftIcon={iconProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Test if button renders properly with size small props', () => {
    const tree = renderer
      .create(<Button size="small" onPress={() => {}} leftIcon={iconProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Test if button renders properly with size medium props', () => {
    const tree = renderer
      .create(<Button size="medium" onPress={() => {}} leftIcon={iconProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Test if button renders properly with text style and size small props', () => {
    const tree = renderer
      .create(
        <Button
          variation="text"
          size="small"
          onPress={() => {}}
          leftIcon={iconProps}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Test if button renders properly with text style and size medium props', () => {
    const tree = renderer
      .create(
        <Button
          variation="text"
          size="medium"
          onPress={() => {}}
          leftIcon={iconProps}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Test if button renders properly with autoHeight props', () => {
    const testID = 'testButton'
    const { queryByTestId } = render(
      <Button
        underline
        onPress={() => {}}
        leftIcon={iconProps}
        testID={testID}
        autoWidth
      />,
    )

    expect(queryByTestId(testID)).toHaveStyle({ width: 'auto' })
  })
})
