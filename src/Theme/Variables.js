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
  text: '#ffffff',
  primary: '#FFFFFF',
  success: '#28a745',
  error: '#dc3545',
  black: '#000000',
  dark_gray: '#363e3f',
  charcoal: '#494949',
  gray: '#596c80',
  gray_650: '#5b636b',
  gray_250: '#d6d8da',
  gray_750: '#333d47',
  gray_950: '#5c646c',
  red_950: '#e10c0a',
  line_divider: '#e9e9e9',
  blue: '#2f3490',
  ant_blue_7: '#096dd9',
  ant_gray_2: '#fafafa',
  ant_gray_4: '#f0f0f0',
  red: '#e1171e',
  green: '#009e0f',
  orange: 'orange'
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
const xLarge = regular * 3 // 36

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
