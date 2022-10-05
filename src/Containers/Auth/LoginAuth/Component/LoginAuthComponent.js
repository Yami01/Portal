import type {AbstractComponent, Node} from "react";
import React, {memo, useMemo} from 'react'
import {Text, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useTheme} from '@/Hooks'
import {Button, Radio, WhiteSpace} from "@ant-design/react-native";
import {Brand} from "@/Components";
import type {PropsType} from "@/Containers/Auth/LoginAuth/Types";
import ScreenLayout from "@/Components/ScreenLayout";
import ScreenContainer from "@/Components/ScreenContainer";
import LoginAuthComponentStyles from "@/Containers/Auth/LoginAuth/Styles";

const RadioItem = Radio.RadioItem

const LoginAuthComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
	const {buttonProps, radioProps} = props;
	const {Layout, Fonts, Gutters} = useTheme()
	const {t} = useTranslation()

	const titleNode = useMemo((): Node => {
		return (
			<View style={[Layout.colCenter]}>
				<Brand/>
				<Text style={[Fonts.textCenter, Fonts.textRegular]}>Two factors authentication</Text>
				<Text style={[Fonts.textCenter, Fonts.textSmall]}>To keep your account safe, we need to verify that you are the
					account's owner</Text>
				<WhiteSpace size={'lg'}/>
				<View
					style={[Gutters.regularHPadding, Layout.rowCenter, LoginAuthComponentStyles.nameContainer]}>
					<Text style={[Fonts.textCenter, Fonts.textSmall, Gutters.smallRPadding]}>I</Text>
					<Text style={[Fonts.textCenter, Fonts.textSmall]}>Yami Chan</Text>
				</View>
			</View>
		);
	}, [])

	const radioNode = useMemo((): Node => {
		return (
			<View style={[Gutters.largeTMargin]}>
				<Radio.Group
					onChange={radioProps.onChange}
					value={radioProps.option}>
					<RadioItem value={1} left>Receive via Email</RadioItem>
					<RadioItem value={2} left>Receive via Telegram</RadioItem>
				</Radio.Group>
			</View>
		);
	}, [radioProps])

	const buttonNode = useMemo((): Node => {
		return (
			<View style={[Gutters.largeTMargin, Gutters.largeHPadding, Layout.colCenter]}>
				<Button type={'primary'} size={'small'} onPress={buttonProps.onPress} style={[Gutters.smallBMargin]}>
					Send code
				</Button>
			</View>
		);
	}, [])

	return (
		<ScreenContainer>
			<ScreenLayout contentContainerStyle={Layout.justifyContentCenter}>
				{titleNode}
				{radioNode}
				{buttonNode}
			</ScreenLayout>
		</ScreenContainer>
	)
});

export default LoginAuthComponent
