/**
 *
 * useFontScale
 * @format
 *
 */
import {useWindowDimensions} from 'react-native'

const useFontScale = (): number => {
  const { fontScale } = useWindowDimensions()
  return fontScale
}

export default useFontScale
