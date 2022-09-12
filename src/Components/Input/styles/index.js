/**
 *
 * @format
 * @flow
 *
 */

import {StyleSheet} from 'react-native';

import {
  COLOR_AIA_DARK_GREY_500,
  WHITE,
  TRANSPARENT,
  COLOR_AIA_DARK_GREY_950,
  COLOR_AIA_GREY_100,
} from '@colors';

import type {InputStylesType} from '../types';

const InputStyles: InputStylesType = StyleSheet.create({
  container: {
    paddingRight: 12,
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR_AIA_DARK_GREY_500,
    justifyContent: 'center',
    backgroundColor: WHITE,
    overflow: 'hidden',
  },
  disabledContainer: {
    backgroundColor: COLOR_AIA_GREY_100,
  },
  inputContainer: {
    overflow: 'hidden',
    flex: 1,
  },
  input: {
    fontSize: 17,
    lineHeight: 24,
    paddingLeft: 0,
    backgroundColor: TRANSPARENT,
    overflow: 'hidden',
    paddingBottom: 5,
    textAlign: 'auto',
  },
  rightComponentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 30,
  },
  rightComponentText: {
    fontSize: 12,
    lineHeight: 17,
    color: COLOR_AIA_DARK_GREY_950,
  },
});

export default InputStyles;
