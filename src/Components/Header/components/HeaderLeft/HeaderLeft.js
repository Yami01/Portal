/**
 *
 * Header
 * @format
 *
 */
import React, {memo} from 'react'
import type {AbstractComponent, Node} from 'React'
import {TouchableOpacity} from 'react-native'

import HeaderLeftStyles from './styles'
import {HeaderLeftPropsType} from "./types";
import {Icon, Text} from "@ant-design/react-native";
import {defaultProps} from "@/Components/Header/components/HeaderLeft/config";

const HeaderLeft: AbstractComponent<HeaderLeftPropsType> = memo((props: HeaderLeftPropsType): Node => {
  const {
    leftContainerStyle,
    onLeftPressed,
    leftText,
    leftTextStyle,
    leftIconName,
    leftIconColor,
    leftIconSize,
  } = props;
  return (
    <TouchableOpacity
      testID={'HeaderLeft'}
      style={[HeaderLeftStyles.container, leftContainerStyle]}
      onPress={onLeftPressed}>
      {leftIconName !== '' && (
        <Icon
          name={leftIconName || ''}
          size={leftIconSize}
          color={leftIconColor}
        />
      )}
      {leftText !== '' && (
        <Text
          textstyle={[
            HeaderLeftStyles.leftText,
            {marginStart: leftIconName !== '' ? 8 : 0},
            leftTextStyle,
          ]}
          text={leftText || ''}
        />
      )}
    </TouchableOpacity>
  );
});

HeaderLeft.defaultProps = defaultProps;

HeaderLeft.displayName = 'HeaderLeft'

export default HeaderLeft
