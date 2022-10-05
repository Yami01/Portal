/**
 *
 * @format
 *
 */

import {StyleSheet} from 'react-native';
import {HomeComponentStylesType} from "@/Containers/Home/Types";


const HomeComponentStyles: HomeComponentStylesType = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});

export default HomeComponentStyles;
