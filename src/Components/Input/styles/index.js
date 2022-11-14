import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';
import type { InputComponentStylesType } from '@/Components/Input/types';

/**
 *
 * @format
 *
 */

const InputComponentStyles: InputComponentStylesType = StyleSheet.create({
	inputContainerStyle: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: Colors.black,
		borderWidth: 1,
		height: 40,
		borderRadius: 4,
		marginBottom: 4
	},
	errorStyle: {
		color: '#ff0000',
		fontSize: 12,
	},
	errorContainerStyle: {
		borderColor: Colors.red,
	},
	iconSize: {
		width: 40,
		height: 40,
	},
	textAreaContainer: {
		height: 100,
	},
	textInputStyle: {
		color: Colors.black,
	},
});

export default InputComponentStyles;
