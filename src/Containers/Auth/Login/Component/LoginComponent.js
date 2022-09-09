import React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Button from '@/Components/Button'
import { navigate } from '@/Navigators/utils'

const LoginComponent = () => {
  const { Layout, Fonts, Gutters } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text style={Fonts.textCenter}>Login screen</Text>
      <View style={[Gutters.smallTMargin, Layout.colCenter]}>
        <Button onPress={() => navigate('LoginAuth')} style={[Gutters.smallBMargin]}>
          To Auth Screen
        </Button>
        <Button onPress={() => navigate('ForgotPassword')}>To Forgot Password</Button>
      </View>
    </View>
  )
}

export default LoginComponent
