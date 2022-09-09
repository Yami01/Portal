import React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Button from '@/Components/Button'
import { navigate, navigateAndSimpleReset } from '@/Navigators/utils'

const LoginPinComponent = () => {
  const { Layout, Fonts, Gutters } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text style={Fonts.textCenter}>Login Pin Screen</Text>
      <View style={[Gutters.smallTMargin, Layout.colCenter]}>
        <Button
          onPress={() => navigateAndSimpleReset('Main')}
          style={[Gutters.smallBMargin]}
        >
          To Home Screen
        </Button>
      </View>
    </View>
  )
}

export default LoginPinComponent
