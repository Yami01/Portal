/**
 *
 * Header
 * @format
 *
 */

import React, {memo} from 'react'
import type {AbstractComponent, Node} from 'React'
import {View} from 'react-native'

import HeaderCenterStyles from './styles'
import {HeaderCenterPropsType} from "./types";
import {Text} from "@ant-design/react-native";
import {defaultProps} from "@/Components/Header/components/HeaderCenter/config";

const HeaderCenter: AbstractComponent<HeaderCenterPropsType> = memo((props: HeaderCenterPropsType): Node => {

  const {centerContainerStyle, title, titleStyle, centerElement} = props;

  const renderHeaderCenter = () => {
    if (centerElement) {
      const CenterElement = centerElement;
      return <CenterElement />;
    }
    return (
      <View style={[HeaderCenterStyles.container, centerContainerStyle]}>
        <Text style={[HeaderCenterStyles.title, titleStyle]}>{title}</Text>
      </View>
    );
  }

  return renderHeaderCenter();
});

HeaderCenter.defaultProps = defaultProps;

HeaderCenter.displayName = 'HeaderCenter'

export default HeaderCenter
