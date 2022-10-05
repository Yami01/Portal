import type {AbstractComponent, Node} from "react";
import React, {memo, useMemo} from 'react'
import {Text, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useTheme} from '@/Hooks'
import {Button, InputItem, WhiteSpace} from "@ant-design/react-native";
import type {PropsType} from "@/Containers/Auth/Login/Types";
import {Brand} from "@/Components";
import {Colors} from "@/Theme/Variables";
import ScreenContainer from "@/Components/ScreenContainer";
import ScreenLayout from "@/Components/ScreenLayout";
import LoginPinComponentStyles from "@/Containers/Auth/LoginPin/Styles";

const LoginPinComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {primaryButtonProps, secondaryButtonProps} = props;
  const {Layout, Fonts, Gutters} = useTheme()
  const {t} = useTranslation()

  const titleNode = useMemo((): Node => {
    return (
      <View style={[Layout.colCenter]}>
        <Brand/>
        <Text style={[Fonts.textCenter, Fonts.textLarge]}>Enter OTP</Text>
        <Text style={[Fonts.textCenter, Fonts.textSmall]}>OTP code is sent to email:</Text>
        <Text style={[Fonts.textCenter, Fonts.textSmall]}>**********@gmail.com</Text>
      </View>
    );
  }, [])

  const inputNode = useMemo((): Node => {
    return (
      <View style={[Gutters.largeTMargin, Layout.colCenter, Gutters.regularRPadding]}>
        <InputItem
          clear
          placeholderTextColor={Colors.black}
          labelNumber={1}
        />
      </View>
    );
  }, [])

  const buttonNode = useMemo((): Node => {
    return (
      <View style={[Gutters.largeTMargin, Gutters.largeHPadding, Layout.colCenter, LoginPinComponentStyles.buttonContainerStyle]}>
        <Button type={'primary'} size={'small'} onPress={primaryButtonProps.onPress}>
          Authenticate
        </Button>
        <WhiteSpace size="md"/>
        <Button type={'ghost'} size={'small'} onPress={secondaryButtonProps.onPress}>Resend</Button>
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

export default LoginPinComponent
