import React from 'react'
import {Text, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useTheme} from '@/Hooks'

const ProfileComponent = () => {
  const { Layout, Fonts } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text style={Fonts.textCenter}>Profile Main Screen</Text>
    </View>
  )
}

export default ProfileComponent
