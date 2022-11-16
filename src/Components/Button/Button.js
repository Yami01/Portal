import type { AbstractComponent, Node } from "react"
import React, { memo } from "react"
import type { PropsType } from "./types"
import { TouchableOpacity } from "react-native"
import { Text } from "@ant-design/react-native"
import { useTheme } from "@/Hooks"
import ButtonComponentStyles from "./styles"

const Button: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const { label, iconComponent, onPress, btnStyle, textStyle } = props
  const { Fonts, Layout } = useTheme()
  return (
    <TouchableOpacity onPress={onPress}
                      style={[Layout.row, ButtonComponentStyles.buttonContainer, btnStyle]}>
      {iconComponent && iconComponent}
      <Text style={[Fonts.textRegular, ButtonComponentStyles.buttonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  )
})

export default Button
