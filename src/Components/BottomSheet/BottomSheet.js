/**
 *
 * BottomSheet
 * @format
 * @flow
 *
 */

import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import type {Node, AbstractComponent} from 'react';
import type {LayoutEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {View} from 'react-native';
import {BottomSheetModal as LibBottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import type {PropsType} from './types';
import {DEFAULT_BOTTOM_PADDING} from './config';
import BottomSheetStyles from './styles';

const BottomSheet: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {
    containerStyle,
    children,
    onChange,
    visible = false,
    testID,
    contentTestID,
    ...restProps
  } = props;
  const bottomSheetModalRef = useRef<any>(null);
  const [modalHeight, setModalHeight] = useState(0);

  useEffect(() => {
    if (visible) {
      bottomSheetModalRef?.current?.present?.();
    } else {
      bottomSheetModalRef?.current?.dismiss?.();
    }
  }, [bottomSheetModalRef, visible]);

  const snapPoints = useMemo((): number[] => [-1, modalHeight], [modalHeight]);

  const onContentLayout = useCallback((event: LayoutEvent) => {
    if (event?.nativeEvent?.layout) {
      const {height} = event?.nativeEvent?.layout;
      setModalHeight(height + DEFAULT_BOTTOM_PADDING);
    }
  }, []);

  const renderHandler = useCallback(
    (): Node => (
      <View style={BottomSheetStyles.handlerWrapper}>
        <View style={BottomSheetStyles.handler} />
      </View>
    ),
    []
  );

  const renderBackdrop = useCallback((backdropProps: any): Node => {
    return <BottomSheetBackdrop opacity={0.3} {...backdropProps} />;
  }, []);

  return (
    <LibBottomSheetModal
      accessibilityViewIsModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={onChange}
      handleComponent={renderHandler}
      backdropComponent={renderBackdrop}
      backgroundComponent={null}
      style={containerStyle}
      testID={testID}
      {...restProps}>
      <View testID={contentTestID} onLayout={onContentLayout}>
        {children}
      </View>
    </LibBottomSheetModal>
  );
});

export default BottomSheet;
