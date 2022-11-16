import React, { memo, useMemo, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import ProfileComponentStyles from '../Styles'
import { useForm } from "react-hook-form"
import ScreenContainer from "@/Components/ScreenContainer"
import ScreenLayout from "@/Components/ScreenLayout"
import Input from '@/Components/Input'
import { yupResolver } from '@hookform/resolvers/yup';
import { validatorLogin } from '@/validation'
import Button from '@/Components/Button'
import type { PropsType } from "@/Containers/Profile/Types"

const ProfileComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {primaryButtonPress, secondaryButtonPress} = props;
  const { Layout, Fonts } = useTheme()
import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/Hooks"
import ProfileComponentStyles from "../Styles"
import { useForm } from "react-hook-form"
import ScreenContainer from "@/Components/ScreenContainer"
import ScreenLayout from "@/Components/ScreenLayout"
import Input from "@/Components/Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { validatorLogin } from "@/validation"


const ProfileComponent = () => {
  const { Layout, Fonts } = useTheme();
  const { t } = useTranslation()
  const [isDisableLoginBTN, setIsDisableLoginBTN] = useState(true)

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(validatorLogin),
    defaultValues: {
      userName: "",
      password: "",
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  console.log(control);
  return (
    <ScreenContainer backgroundType={"image"} backgroundImage={require("@/Assets/Images/bgr_login.png")}>
      <View style={{ height: "25%" }} />
      <ScreenLayout scrollable style={[Layout.fill]}>
        <View style={[ProfileComponentStyles.container]}>
          <Text style={[ProfileComponentStyles.tileStyle]}>Đăng nhập tài khoản</Text>
          <Input label={''} fieldName={'userName'} control={control} placeholder={'Tên đăng nhập'} error={errors?.userName?.message} />
          <View style={{ height: 10 }} />
          <Input label={''} fieldName={'password'} control={control} placeholder={'Mật khẩu'} error={errors?.password?.message} />
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
            <Button label = {"Quay lai"} onPress={handleSubmit(secondaryButtonPress)}></Button>
            <Button label = {"Quay lai"} onPress={() => primaryButtonPress(1)}></Button>
          </View>
        </View>
      </ScreenLayout>
    </ScreenContainer>
  )
}
)

export default ProfileComponent
