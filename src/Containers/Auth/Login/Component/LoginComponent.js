import type {AbstractComponent, Node} from 'react';
import React, {memo, useMemo} from 'react'
import type {PropsType} from './../Types';
import {Text, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useTheme} from '@/Hooks'
import {Button, Icon, InputItem, WhiteSpace} from "@ant-design/react-native";
import LoginComponentStyles from './../Styles/index';
import {Colors} from "@/Theme/Variables";
import {Brand} from "@/Components";
import Icons from "@/Assets/Icons";
import ScreenContainer from "@/Components/ScreenContainer";
import ScreenLayout from "@/Components/ScreenLayout";

const LoginComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
	const {primaryButtonProps, secondaryButtonProps} = props;
	const {Layout, Fonts, Gutters} = useTheme()
	const {t} = useTranslation()

	const titleNode = useMemo((): Node => {
		return (
			<View style={[Layout.colCenter]}>
				<Text style={[Fonts.textCenter, Fonts.textLarge]}>Yami Portal</Text>
				<Brand/>
			</View>
		);
	}, [])

	const inputNode = useMemo((): Node => {
		const renderExtraIcon = () => {
			return <Icon name="eye-invisible" size="sm" color={Colors.black} />
		}

		return (
			<View style={[Gutters.largeTMargin, Layout.colCenter, Gutters.regularRPadding]}>
				<InputItem
					clear
					placeholder="Username"
					placeholderTextColor={Colors.black}
					labelNumber={1}
				/>
				<InputItem
					placeholder="Password"
					updatePlaceholder
					placeholderTextColor={Colors.black}
					type={'password'}
					extra={renderExtraIcon()}
					clear
					labelNumber={2}/>
			</View>
		);
	}, [])

	const buttonNode = useMemo((): Node => {
		return (
			<View style={[Gutters.largeTMargin, Gutters.largeHPadding, LoginComponentStyles.buttonContainerStyle]}>
				<Button type={'primary'} onPress={primaryButtonProps.onPress}>
					Login
				</Button>
				<WhiteSpace size="md"/>
				<Button type={'ghost'} onPress={secondaryButtonProps.onPress}>Forgot
					Password?</Button>
			</View>
		);
	}, [])

	return (
		<ScreenContainer>
			<ScreenLayout contentContainerStyle={Layout.justifyContentCenter}>
				{titleNode}
				{inputNode}
				{buttonNode}
			</ScreenLayout>
		</ScreenContainer>
	)
});

export default LoginComponent
