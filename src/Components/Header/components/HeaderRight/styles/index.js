/**
 *
 * @format
 *
 */

import {StyleSheet} from 'react-native'

const HeaderRightStyles: HeaderRightStyleTypes = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  elementRightItem: {
    height: '100%',
    justifyContent: 'center',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default HeaderRightStyles
