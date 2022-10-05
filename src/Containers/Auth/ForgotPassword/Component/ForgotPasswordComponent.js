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
import ForgotPasswordComponentStyles from "@/Containers/Auth/ForgotPassword/Styles";

const ForgotPasswordComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {primaryButtonProps, secondaryButtonProps} = props;
  const {Layout, Fonts, Gutters} = useTheme()
  const {t} = useTranslation()

  const titleNode = useMemo((): Node => {
    return (
      <View style={[Layout.colCenter]}>
        <Brand/>
        <Text style={[Fonts.textCenter, Fonts.textRegular, Gutters.largeTMargin]}>Forgot Password</Text>
      </View>
    );
  }, [])

  const inputNode = useMemo((): Node => {
    return (
      <View style={[Gutters.largeTMargin, Layout.colCenter, Layout.alignItemsStart, Gutters.regularRPadding]}>
        <Text style={[Fonts.textSmall, Gutters.regularLMargin]}>Email:</Text>
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
      <View style={[Gutters.largeTMargin, Gutters.largeHPadding, ForgotPasswordComponentStyles.buttonContainerStyle]}>
        <Button type={'primary'} size={'large'} onPress={primaryButtonProps.onPress}>
          Send info
        </Button>
        <WhiteSpace size="md"/>
        <Button type={'ghost'} size={'large'} onPress={secondaryButtonProps.onPress}>Login</Button>
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

export default ForgotPasswordComponent
