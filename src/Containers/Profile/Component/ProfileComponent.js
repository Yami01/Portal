import React, { memo, useMemo, useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/Hooks"
import ProfileComponentStyles from "../Styles"
import { useForm } from "react-hook-form"
import ScreenContainer from "@/Components/ScreenContainer"
import ScreenLayout from "@/Components/ScreenLayout"
import Input from "@/Components/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import { validatorLogin } from "@/validation"
import Button from "@/Components/Button"
import type { PropsType } from "@/Containers/Profile/Types"
import { Colors } from "@/Theme/Variables"


const ProfileComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
    const { primaryButtonPress, secondaryButtonPress } = props
    const { Layout, Fonts, Gutters } = useTheme()
    const { t } = useTranslation()
    // const [isDisableLoginBTN, setIsDisableLoginBTN] = useState(true);

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
      mode: "onBlur",
      reValidateMode: "onChange",
    })

    console.log(errors?.userName?.message)
    return (
      <ScreenContainer backgroundType={"image"} backgroundImage={require("@/Assets/Images/bgr_login.png")}>
        <View style={{ height: "20%" }} />
        <ScreenLayout scrollable>
          <View style={[ProfileComponentStyles.container]}>
            <Text style={[ProfileComponentStyles.tileStyle]}>Đăng nhập tài khoản</Text>
            <Input label={""}
                   fieldName={"userName"}
                   control={control}
                   placeholder={"Tên đăng nhập"}
                   error={errors?.userName?.message} />
            <View style={{ height: 10 }} />
            <Input label={""} fieldName={"password"} control={control} placeholder={"Mật khẩu"}
                   error={errors?.password?.message} />
            <View style={{ flexDirection: "row", marginTop: 60, justifyContent: "space-between" }}>
              <View style={[Layout.fill, Gutters.smallRMargin]}>
                <Button isDisable = {errors?.userName?.message != undefined} label={"Dang nhap"} onPress={handleSubmit(secondaryButtonPress)}
                        textStyle={[ProfileComponentStyles.buttonText]}
                        btnStyle={ProfileComponentStyles.backButtonStyles} />
              </View>
              <Button label={"Quay lai"} onPress={() => primaryButtonPress(1)} btnStyle={{
                flex: 1,
              }} />
            </View>
          </View>
        </ScreenLayout>
      </ScreenContainer>
    )
  },
)

export default ProfileComponent
