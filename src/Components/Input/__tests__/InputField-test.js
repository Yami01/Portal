/**
 *
 * Input Test
 * @format
 * @flow
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {COLOR_AIA_DARK_GREY_650} from '@colors';

import Input from '../Input';

describe('Input', () => {
  const props = {
    accessibilityLabel: 'Input',
    accessibilityHint: 'Please Input',
    label: 'Textinput',
    value: '',
    onChangeText: () => {
      jest.fn();
    },
  };

  const iconProps = {
    rightComponentType: 'icon',
    iconGroup: 'general',
    iconName: 'timer',
    iconFillColor: COLOR_AIA_DARK_GREY_650,
    iconAccessibilityLabel: 'Icon',
    iconAccessibilityHint: 'Icon Hint',
  };

  const textProps = {
    rightComponentType: 'text',
    rightText: 'test',
    rightTextAccessibilityLabel: 'Text label',
    rightTextAccessibilityHint: 'Text Hint',
  };

  test('Input Render Properly', () => {
    const tree = renderer.create(<Input {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Input & Icon Accessibility', () => {
    const {queryByA11yLabel, queryByA11yHint} = render(<Input {...props} {...iconProps} />);
    expect(queryByA11yLabel(props.accessibilityLabel)).not.toBeNull();
    expect(queryByA11yHint(props.accessibilityHint)).not.toBeNull();
    expect(queryByA11yLabel(iconProps.iconAccessibilityLabel)).not.toBeNull();
    expect(queryByA11yHint(iconProps.iconAccessibilityHint)).not.toBeNull();
  });

  test('Input RHS Text Component Accessibility', () => {
    const {queryByA11yLabel, queryByA11yHint, queryByText} = render(
      <Input {...props} {...textProps} />
    );
    expect(queryByA11yLabel(textProps.rightTextAccessibilityLabel)).not.toBeNull();
    expect(queryByA11yHint(textProps.rightTextAccessibilityHint)).not.toBeNull();
    expect(queryByText(textProps.rightText)).not.toBeNull();
  });

  test('onChangeText handler is called', () => {
    const onChangeTextMock = jest.fn();
    const mockValue = 'Test';
    const {getByDisplayValue} = render(
      <Input {...props} value={mockValue} onChangeText={onChangeTextMock} />
    );

    const input = getByDisplayValue(mockValue);
    fireEvent.changeText(input, 'Test');
    expect(onChangeTextMock).toHaveBeenCalled();
  });

  test('value is set by value prop', () => {
    const value = 'Hello, world.';
    const {queryByDisplayValue} = render(<Input {...props} value={value} />);

    const input = queryByDisplayValue(value);
    expect(input).not.toBeNull();
  });

  test("onChangeText is called with the value if the value's decimal places is less than or equal to to decimalPlaces prop", () => {
    const testID = 'inputTestID';
    const mockOnChangeText = jest.fn();
    const mockValue = '100.00';
    const decimalPlaces = 2;

    const {getByTestId} = render(
      <Input
        {...props}
        testID={testID}
        onChangeText={mockOnChangeText}
        decimalPlaces={decimalPlaces}
      />
    );

    const input = getByTestId(testID);

    fireEvent.changeText(input, mockValue);

    expect(mockOnChangeText).toHaveBeenCalledWith(mockValue);
  });

  test("onChangeText is not called if the value's decimal places is more than decimalPlaces prop", () => {
    const testID = 'inputTestID';
    const mockOnChangeText = jest.fn();
    const mockValue = '100.000';
    const decimalPlaces = 2;

    const {getByTestId} = render(
      <Input
        {...props}
        testID={testID}
        onChangeText={mockOnChangeText}
        decimalPlaces={decimalPlaces}
      />
    );

    const input = getByTestId(testID);

    fireEvent.changeText(input, mockValue);

    expect(mockOnChangeText).not.toHaveBeenCalled();
  });
});
