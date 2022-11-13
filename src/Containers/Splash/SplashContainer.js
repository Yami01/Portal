import React, {useEffect} from 'react'
import {setDefaultTheme} from '@/Store/Theme'
import {navigateAndSimpleReset} from '@/Navigators/utils'
import SplashComponent from '@/Containers/Splash/Component/SplashComponent'

const SplashContainer = () => {
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return <SplashComponent />
}

export default SplashContainer
