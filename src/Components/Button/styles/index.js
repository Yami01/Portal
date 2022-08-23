/**
 *
 * @format
 * @flow
 *
 */

import { StyleSheet } from "react-native"
import { LARGE_BUTTON_HEIGHT, MEDIUM_BUTTON_HEIGHT, SMALL_BUTTON_HEIGHT } from "../config"

import type { ButtonStylesType } from "../types"

const ButtonStyles: ButtonStylesType = StyleSheet.create({
  button: {
    borderStyle: 'solid',
  },
  largeButton: {
    minWidth: LARGE_BUTTON_HEIGHT,
    height: LARGE_BUTTON_HEIGHT,
  },
  mediumButton: {
    minWidth: MEDIUM_BUTTON_HEIGHT,
    height: MEDIUM_BUTTON_HEIGHT,
  },
  smallButton: {
    minWidth: SMALL_BUTTON_HEIGHT,
    height: SMALL_BUTTON_HEIGHT,
  },
  compact: {
    minWidth: 'auto',
    height: 'auto',
  },
  compactLabel: {
    marginHorizontal: 8,
  },
  content: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentLoading: {
    opacity: 0,
  },
  iconContainer: {
    marginHorizontal: 4,
  },
  textStyleLabel: {
    textAlign: 'center',
    marginRight: 4,
  },
  largeTextStyleLabel: {
    fontSize: 16,
    lineHeight: 24,
  },
  mediumTextStyleLabel: {
    fontSize: 14,
    lineHeight: 20,
  },
  smallTextStyleLabel: {
    fontSize: 12,
    lineHeight: 18,
  },
  label: {
    textAlign: 'center',
    marginHorizontal: 4,
    letterSpacing: 0.1,
  },
  largeLabel: {
    fontSize: 20,
    lineHeight: 24,
  },
  mediumLabel: {
    fontSize: 16,
    lineHeight: 20,
  },
  smallLabel: {
    fontSize: 14,
    lineHeight: 20,
  },
  spinnerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uppercaseLabel: {
    textTransform: 'uppercase',
  },
  underlineLabel: {
    textDecorationLine: 'underline',
  },
  fullWidthContainer: {
    width: '100%',
  },
  halfWidthContainer: {
    width: '45%',
  },
  autoWidthContainer: {
    width: 'auto',
  },
})

export default ButtonStyles
