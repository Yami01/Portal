/**
 *
 * General Icons
 * @format
 *
 */

import React from "react"

import Default from "./default.svg"

const GeneralIcons = (name, extraStyle, width, height, fillColor) => {
  let widthProps = {}
  let heightProps = {}
  if (width) {
    widthProps = { width }
  }
  if (height) {
    heightProps = { height }
  }

  const getIcon = Icon => {
    return (
      <Icon
        fill={fillColor}
        style={extraStyle}
        {...widthProps}
        {...heightProps}
      />
    )
  }

  const icons = {
    default: getIcon(Default),
  }
  return icons[name]
}

export default GeneralIcons
