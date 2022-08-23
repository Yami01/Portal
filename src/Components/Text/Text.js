/**
 *
 * Text
 * @format
 * @flow
 *
 */

import type { AbstractComponent, Node } from "react"
import React, { memo, useMemo } from "react"
import { Text as LibText } from "react-native"
import type { TextStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"
import { useTheme } from "react-native-paper"
import { FONT_REGULAR } from "./config"
import type { PropsType } from "./types"

const Text: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {
    fontWeight = FONT_REGULAR,
    fontSize,
    color,
    style,
    children,
    testID,
    ...restProps
  } = props
  const theme = useTheme()

  const textStyle = useMemo((): TextStyleProp => {
    const finalTextStyle: TextStyleProp[] = []

    if (fontWeight) {
      finalTextStyle.push(theme.fonts[fontWeight])
    }
    if (fontSize) {
      finalTextStyle.push({ fontSize })
    }
    if (color) {
      finalTextStyle.push({ color })
    }
    finalTextStyle.push(style)

    return finalTextStyle
  }, [theme, fontSize, fontWeight, color, style])

  return (
    <LibText testID={testID} style={textStyle} {...restProps}>
      {children}
    </LibText>
  )
})

export default Text
