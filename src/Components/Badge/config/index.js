/**
 *
 * @format
 * @flow
 *
 */

export const BADGE_SIZE = (size: number): number => {
  if (size > 0 && size) {
    return size
  } else {
    return 20
  }
}

export const BADGE_RADIUS = (size: number): number => {
  if (size > 0 && size) {
    return size / 2
  } else {
    return 10
  }
}
