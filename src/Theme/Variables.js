/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  black: '#000000',
  dark_gray: '#363e3f',
  gray: '#596c80',
  gray_650: '#5b636b',
  gray_250: '#d6d8da',
  gray_750: '#333d47',
  gray_950: '#5c646c',
  red_950: '#e10c0a',
}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  regular: 20,
  large: 40,
}

/**
 * Metrics Sizes
 */
const tiny = 4 // 8
const small = tiny * 2 // 8
const regular = tiny * 3 // 12
const large = regular * 2 // 24
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
