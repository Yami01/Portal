/**
 *
 * Header
 * @format
 *
 */

import React, {memo} from 'react'
import type {AbstractComponent, Node} from 'React'
import {TouchableOpacity, View} from 'react-native'

import HeaderRightStyles from './styles'
import type {HeaderRightPropsType} from './types'
import {defaultProps} from "@/Components/Header/components/HeaderRight/config";
import {Icon, Text} from "@ant-design/react-native";

const HeaderRight: AbstractComponent<HeaderRightPropsType> = memo((props: HeaderRightPropsType): Node => {
	const {
		rightContainerStyle,
		onRightPressed,
		rightIconName,
		rightIconColor,
		rightIconSize,
		rightText,
		rightTextStyle,
		rightElement,
		rightMarker,
		secondRightIconName,
		secondRightIconColor,
		secondRightIconSize,
		onSecondRightPressed,
	} = props;

	const RightElement = rightElement;

	const Marker = () => <View style={HeaderRightStyles.marker}/>;
	return (
		<View
			testID={'HeaderRight'}
			style={[HeaderRightStyles.container, rightContainerStyle]}>
			{secondRightIconName !== '' && (
				<TouchableOpacity
					style={HeaderRightStyles.elementRightItem}
					onPress={onSecondRightPressed}>
					<Icon
						name={secondRightIconName || ''}
						size={secondRightIconSize}
						color={secondRightIconColor}
					/>
				</TouchableOpacity>
			)}
			<TouchableOpacity style={HeaderRightStyles.elementRightItem} onPress={onRightPressed} disabled={!onRightPressed}>
				{rightText !== '' && (
					<Text
						textstyle={[
							{marginEnd: rightIconName !== '' ? 8 : 0},
							rightTextStyle,
						]}
						text={rightText || ''}
					/>
				)}
				{rightIconName !== '' && (
					<Icon
						name={rightIconName || ''}
						size={rightIconSize}
						color={rightIconColor}
					/>
				)}
				{rightElement && <RightElement/>}
				{rightMarker && <Marker/>}
			</TouchableOpacity>
		</View>
	);
});

HeaderRight.defaultProps = defaultProps;

HeaderRight.displayName = 'HeaderRight'

export default HeaderRight
