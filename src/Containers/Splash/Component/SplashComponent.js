import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'

const SplashComponent = () => {
  const { Layout, Gutters, Fonts } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  )
}

export default SplashComponent
