import type {AbstractComponent, Node} from "react";
import React, {memo} from 'react';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import type {PropsType} from "@/Components/ScreenContainer/components/ScreenLoader/types";
import {defaultProps} from "@/Components/ScreenContainer/components/ScreenLoader/config";
import ScreenLoaderStyles from "@/Components/ScreenContainer/components/ScreenLoader/styles";

const ScreenLoader: AbstractComponent<PropsType> = memo(
  (props: PropsType): Node => {

    const {showLoader} = props;

    return (
      <>
        {showLoader && (
          <Animatable.View
            animation="fadeIn"
            duration={300}
            style={ScreenLoaderStyles.container}>
            <LottieView
              style={ScreenLoaderStyles.lottieView}
              source={require('../../../../Assets/ScreenLoader.json')}
              autoPlay
              loop
            />
          </Animatable.View>
        )}
      </>
    );
  });

ScreenLoader.defaultProps = defaultProps;

export default ScreenLoader;
