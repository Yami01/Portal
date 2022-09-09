import React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Button from '@/Components/Button'
import { navigate } from '@/Navigators/utils'

const LoginAuthComponent = () => {
  const { Layout, Fonts, Gutters } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text style={Fonts.textCenter}>Login Auth screen</Text>
      <View style={[Gutters.smallTMargin, Layout.colCenter]}>
        <Button
          onPress={() => navigate('LoginPin')}
          style={[Gutters.smallBMargin]}
        >
          To Pin Screen
        </Button>
      </View>
    </View>
  )
}

export default LoginAuthComponent
