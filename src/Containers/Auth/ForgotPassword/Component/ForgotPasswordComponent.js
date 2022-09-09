import React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Button from '@/Components/Button'
import { navigate } from '@/Navigators/utils'

const ForgotPasswordComponent = () => {
  const { Layout, Fonts, Gutters } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text style={Fonts.textCenter}>Forgot Password screen</Text>
      <View style={[Gutters.smallTMargin, Layout.colCenter]}>
        <Button onPress={() => navigate('Auth')} style={[Gutters.smallBMargin]}>
          To Create Password Screen
        </Button>
      </View>
    </View>
  )
}

export default ForgotPasswordComponent
