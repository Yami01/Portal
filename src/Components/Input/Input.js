/**
 *
 * Input
 * @format
 *
 */
import type {AbstractComponent, Node} from 'react';
import React, {memo} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';

import type {PropsType} from './types';
import {Controller} from 'react-hook-form';
import InputComponentStyles from '@/Components/Input/styles';
import {useTheme} from '@/Hooks';
import {Icon, View} from '@ant-design/react-native';
import {Colors} from '@/Theme/Variables';

const Input: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
	const {
		style,
		label,
		control,
		error,
		fieldName,
		leftIconName,
		rightIconName,
		rightIconPress,
		rightIconStyle,
		visiblePassword = true,
		clearErrors,
		containerStyle,
		extraText,
		inputType = 'default',
		isTextArea = false,
		placeholder,
    textInputProps,
	} = props;
	const {Gutters, Layout} = useTheme();

	const handleFocus = () => {
		clearErrors && fieldName && clearErrors([`${fieldName}`]);
	};

	return (
		<>
			{label && <Text style={[Gutters.miniBMargin]}>{label}</Text>}
			<View style={[Layout.row, Layout.alignItemsCenter]}>
				<View
					style={[InputComponentStyles.inputContainerStyle, Layout.row, error && InputComponentStyles.errorContainerStyle, isTextArea && InputComponentStyles.textAreaContainer, containerStyle]}>
					{!!leftIconName && (
						<View style={[Layout.alignItemsCenter, Layout.justifyContentCenter, InputComponentStyles.iconSize]}>
							<Icon name={leftIconName} size={20} color={Colors.black}/>
						</View>
					)}
					<Controller
						control={control}
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
							     placeholder={placeholder}
								 placeholderTextColor = 'white'
								style={[Layout.fullSize, Layout.fill, Layout.fullHeight, Gutters.smallLPadding, style, InputComponentStyles.textInputStyle, {backgroundColor: 'white',opacity : 0.4,borderRadius : 9,}]}
								multiline={isTextArea}
								numberOfLines={5}
								onBlur={onBlur}
								keyboardType={inputType}
								secureTextEntry={!visiblePassword}
								onChangeText={(value) => {
									onChange(value);
								}}
								onFocus={handleFocus}
								value={value}
                {...textInputProps}
							/>
						)}
						name={fieldName}
					/>
					{!!rightIconName && (
						<TouchableOpacity
							onPress={rightIconPress}
							style={[Layout.alignItemsCenter, Layout.justifyContentCenter, rightIconStyle, InputComponentStyles.iconSize]}
						>
							<Icon name={rightIconName} size={20} color={Colors.black}/>
						</TouchableOpacity>
					)}

				</View>
				{!!extraText && <Text style={[Gutters.smallLMargin]}>{extraText}</Text>}
			</View>
			{error && <Text style={[InputComponentStyles.errorStyle]}>{error}</Text>}
		</>
	);
});

Input.displayName = 'Input';

export default Input;
