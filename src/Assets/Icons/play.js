import React from 'react';
import {Path, Svg} from 'react-native-svg';

export default ({color = "#494949", width = '20', height = '20', viewBox = "0 0 20 25"}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill={color}>
    <Path d="M0 0L21 12L0 24V0Z" stroke={color} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
);
