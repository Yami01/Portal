/**
 *
 * Header
 * @format
 *
 */
import React, {memo} from 'react'
import type {AbstractComponent, Node} from 'React'
import {View} from 'react-native'
import HeaderStyles from './styles'
import type {PropsType} from './types'
import HeaderCenter from "@/Components/Header/components/HeaderCenter";
import HeaderLeft from "@/Components/Header/components/HeaderLeft";
import HeaderRight from "@/Components/Header/components/HeaderRight";

const Header: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {headerColor, containerStyle, statusBarStyle} = props;

  return (
    <>
      <View
        testID="Header"
        style={[
          HeaderStyles.container,
          containerStyle,
          {backgroundColor: headerColor},
        ]}>
        <View style={[HeaderStyles.statusBar, statusBarStyle]} />
        <HeaderLeft {...props} />
        <HeaderCenter {...props} />
        <HeaderRight {...props} />
      </View>
    </>
  );
});

Header.displayName = 'Header'

export default Header
