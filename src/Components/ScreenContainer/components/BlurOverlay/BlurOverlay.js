import type {AbstractComponent, Node} from "react";
import React, {memo, useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {defaultProps, SCREEN_HEIGHT} from "@/Components/ScreenContainer/components/BlurOverlay/config";
import type {PropsType} from "@/Components/ScreenContainer/components/ScreenLoader/types";
import BlurOverlayStyles from "@/Components/ScreenContainer/components/BlurOverlay/styles";

const BlurOverlay: AbstractComponent<PropsType> = memo(
  (props: PropsType): Node => {
    const {
      showOverlay,
      overlayBlurType,
      overlaySolidColor,
      children,
      overlayGradientColors,
    } = props;
    const blurContainerOpacityAnimationValue = useRef(
      new Animated.Value(0),
    ).current;
    const blurContainerTranslateYAnimationValue = useRef(
      new Animated.Value(0),
    ).current;

    const viewRef = React.useRef<View | null>(null);


    const [hideOverlay, setHideOverlay] = useState(true);

    if (showOverlay)
      Animated.sequence([
        Animated.timing(blurContainerTranslateYAnimationValue, {
          toValue: -SCREEN_HEIGHT,
          duration: 1,
          useNativeDriver: true,
        }),
        Animated.timing(blurContainerOpacityAnimationValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    else
      Animated.sequence([
        Animated.timing(blurContainerOpacityAnimationValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(blurContainerTranslateYAnimationValue, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (!hideOverlay) setHideOverlay(true);
      });

    useEffect(() => {
      if (showOverlay && hideOverlay) setHideOverlay(false);
    }, [hideOverlay, showOverlay]);

    return (
      <>
        <View
          style={[
            BlurOverlayStyles.container,
            {
              backgroundColor: overlaySolidColor,
            },
          ]}
          ref={viewRef.current}>
          {children}
        </View>
        <Animated.View
          style={[
            BlurOverlayStyles.blurContainer,
            {
              opacity: blurContainerOpacityAnimationValue,
              transform: [
                {
                  translateY: blurContainerTranslateYAnimationValue,
                },
              ],
            },
          ]}>
          {!hideOverlay && (
            <BlurView
              style={BlurOverlayStyles.blur}
              // viewRef={viewRef.current}
              blurType={overlayBlurType}
              blurAmount={10}
              {...props}
            />
          )}
        </Animated.View>
      </>
    );
  });

BlurOverlay.defaultProps = defaultProps;

export default React.memo(BlurOverlay);
