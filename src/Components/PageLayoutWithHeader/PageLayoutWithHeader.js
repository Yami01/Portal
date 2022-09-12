/**
 *
 * PageLayoutWithHeader
 * @format
 * @flow
 *
 */

import React, {
  memo,
  useMemo,
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react'
import type { Node, AbstractComponent } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import Animated, {
  call,
  EasingNode,
  useCode,
  useValue as useReanimatedValue,
} from 'react-native-reanimated'
import type {
  LayoutEvent,
  ScrollEvent,
} from 'react-native/Libraries/Types/CoreEventTypes'

import {
  HEADER_TEST_ID,
  SCROLL_VIEW_TEST_ID,
  SHOW_HEADER_ANIMATION_DURATION,
} from './config'

import PageLayoutWithHeaderStyles from './styles'
import type { PropsType, UseCodeReturnType } from './types'
import Header from '@/Components/Header'

const PageLayoutWithHeader: AbstractComponent<PropsType> = memo(
  (props: PropsType): Node => {
    const {
      children,
      headerBackgroundColor,
      headerTitleLabel,
      headerTitleColor,
      headerTitleOnPress,
      headerTitleIconGroup,
      headerTitleIconName,
      headerTitleIconWidth,
      headerLeftButton,
      headerRightButton,
      isHeaderProgressBarVisible,
      headerProgressBarPosition,
      headerProgressBarBottomRightText,
      headerExtraStyle,
      isHeaderHidden,
      isHeaderAnimated = true,
      isHeaderAbsolute: isHeaderAbsoluteProp,
      isHeaderOnlyLeftIcon: isHeaderOnlyLeftIconProp,
      isHeaderOnlyRightIcon,
      isHeaderWithShadow,
      isHeaderAllButtonsOnRight,
      isHeaderTitleAlignLeft,
      isHeaderLargePadding,
      scrollYOffsetToSolidHeader,
      shouldHeaderIgnoreStatusBarHeight,
      headerCard,
      headerCardOverlapHeight = 0,
      scrollViewContentContainerStyle,
      scrollViewRef,
      scrollViewScrollEnabled,
      onScrollViewPositionChange,
      testID,
    } = props

    const prevScrollYRef = useRef(0)

    // Position. Larger means scrolling up
    const scrollYAnim = useReanimatedValue<number>(0)

    // Record Header height with extra bottom padding
    const totalHeaderHeightAnim = useReanimatedValue<number>(0)

    const isAnimatingHeaderMarginTopRef = useRef(false)
    const headerMarginTopAnim = useReanimatedValue<number>(0)

    const headerExtraPaddingAnim = useReanimatedValue<number>(
      headerCardOverlapHeight,
    )

    const [isShowDuplicatedHeader, setIsShowDuplicatedHeader] = useState(false)

    // Scroll Y for RN ScrollView
    const [scrollY, recordScrollY] = useState(0)

    // Update headerExtraPaddingAnim if headerCardOverlapHeight changed
    useEffect(() => {
      headerExtraPaddingAnim.setValue(headerCardOverlapHeight)
    }, [headerCardOverlapHeight, headerExtraPaddingAnim])

    // Control header position and extra padding height
    useCode((): UseCodeReturnType => {
      return call<number>(
        [scrollYAnim, headerMarginTopAnim, totalHeaderHeightAnim],
        ([
          scrollYAnimValue,
          headerMarginTop,
          totalHeaderHeight,
        ]: $ReadOnlyArray<number>) => {
          const prevScrollY = prevScrollYRef.current
          prevScrollYRef.current = scrollYAnimValue
          // +ve: scrolling up, -ve: scrolling down
          const scrollYDiff = scrollYAnimValue - prevScrollY
          // If scrollYAnimValue changed
          if (scrollYDiff) {
            // If scrolling down
            if (
              prevScrollY !== scrollYAnimValue &&
              prevScrollY > scrollYAnimValue
            ) {
              // Show Header if header not fully shown
              if (headerMarginTop < 0) {
                // If header marginTop animation not running
                if (!isAnimatingHeaderMarginTopRef.current) {
                  isAnimatingHeaderMarginTopRef.current = true
                  // Remove Header extra padding
                  setIsShowDuplicatedHeader(true)
                  headerExtraPaddingAnim.setValue(0)
                  // Animate header from top
                  Animated.timing(headerMarginTopAnim, {
                    toValue: 0,
                    duration: SHOW_HEADER_ANIMATION_DURATION,
                    easing: EasingNode.inOut(EasingNode.ease),
                  }).start(() => {
                    isAnimatingHeaderMarginTopRef.current = false
                  })
                }
              }
              // Increase Header extra padding when reach top
              if (scrollYAnimValue < headerCardOverlapHeight) {
                const newHeaderExtraPadding =
                  headerCardOverlapHeight - scrollYAnimValue
                headerExtraPaddingAnim.setValue(newHeaderExtraPadding)
                // Hide duplicated Header when full extra padding shown
                if (newHeaderExtraPadding >= headerCardOverlapHeight) {
                  setIsShowDuplicatedHeader(false)
                }
              }
            } else if (!isAnimatingHeaderMarginTopRef.current) {
              // Set Header position by scroll diff
              const newHeaderMarginTop = -Math.min(
                Math.max(0, -headerMarginTop + scrollYDiff),
                totalHeaderHeight,
              )
              headerMarginTopAnim.setValue(newHeaderMarginTop)
            }
          }
        },
      )
    }, [scrollYAnim, headerMarginTopAnim, totalHeaderHeightAnim])

    const onHeaderLayout = useCallback(
      (e: LayoutEvent) => {
        const {
          nativeEvent: {
            layout: { height },
          },
        } = e
        totalHeaderHeightAnim.setValue(height)
      },
      [totalHeaderHeightAnim],
    )

    const onScrollViewScroll = useCallback(
      (e: ScrollEvent) => {
        recordScrollY(e.nativeEvent.contentOffset.y)
        if (onScrollViewPositionChange) {
          onScrollViewPositionChange(e.nativeEvent.contentOffset.y)
        }
      },
      [onScrollViewPositionChange],
    )

    const isAllowHeaderChangeFromIconToSolid = useMemo((): boolean => {
      return !isHeaderAnimated && !!isHeaderOnlyLeftIconProp
    }, [isHeaderAnimated, isHeaderOnlyLeftIconProp])

    const isHeaderOnlyLeftIcon = useMemo((): boolean => {
      // If isHeaderAnimated true, always false
      // If isHeaderAnimated false and isHeaderOnlyLeftIcon false, use isHeaderOnlyLeftIcon (false)
      // If isHeaderAnimated false, isHeaderOnlyLeftIcon true and scrollYOffsetToSolidHeader provided, determine by scrollY
      // If isHeaderAnimated false, isHeaderOnlyLeftIcon true and scrollYOffsetToSolidHeader undefined, use isHeaderOnlyLeftIcon (true)
      if (isAllowHeaderChangeFromIconToSolid) {
        if (typeof scrollYOffsetToSolidHeader === 'number') {
          return scrollY <= (scrollYOffsetToSolidHeader || 0)
        }
        return isHeaderOnlyLeftIconProp || false
      }
      return false
    }, [
      isAllowHeaderChangeFromIconToSolid,
      isHeaderOnlyLeftIconProp,
      scrollY,
      scrollYOffsetToSolidHeader,
    ])

    const isHeaderAbsolute = useMemo((): boolean => {
      return (
        (isAllowHeaderChangeFromIconToSolid && isHeaderAbsoluteProp) || false
      )
    }, [isAllowHeaderChangeFromIconToSolid, isHeaderAbsoluteProp])

    const headerProps = useMemo((): HeaderPropsType => {
      return {
        isOnlyLeftIcon: isHeaderOnlyLeftIcon,
        isOnlyRightIcon: isHeaderOnlyRightIcon,
        backgroundColor: headerBackgroundColor,
        withShadow: isHeaderWithShadow,
        titleLabel: headerTitleLabel,
        titleColor: headerTitleColor,
        titleOnPress: headerTitleOnPress,
        titleIconGroup: headerTitleIconGroup,
        titleIconName: headerTitleIconName,
        titleIconWidth: headerTitleIconWidth,
        leftButton: headerLeftButton,
        rightButton: headerRightButton,
        isAllButtonsOnRight: isHeaderAllButtonsOnRight,
        isTitleAlignLeft: isHeaderTitleAlignLeft,
        isLargePadding: isHeaderLargePadding,
        shouldIgnoreStatusBarHeight: shouldHeaderIgnoreStatusBarHeight,
        isProgressBarVisible: isHeaderProgressBarVisible,
        progressBarPosition: headerProgressBarPosition,
        progressBarBottomRightText: headerProgressBarBottomRightText,
      }
    }, [
      headerBackgroundColor,
      headerLeftButton,
      headerRightButton,
      headerTitleColor,
      headerTitleIconGroup,
      headerTitleIconName,
      headerTitleIconWidth,
      headerTitleLabel,
      headerTitleOnPress,
      isHeaderAllButtonsOnRight,
      isHeaderLargePadding,
      isHeaderOnlyLeftIcon,
      isHeaderOnlyRightIcon,
      isHeaderTitleAlignLeft,
      isHeaderWithShadow,
      shouldHeaderIgnoreStatusBarHeight,
      isHeaderProgressBarVisible,
      headerProgressBarPosition,
      headerProgressBarBottomRightText,
    ])

    const headerNode = useMemo((): Node => {
      return (
        <Header
          {...headerProps}
          extraPaddingBottom={headerExtraPaddingAnim}
          extraStyle={headerExtraStyle}
          testID={HEADER_TEST_ID}
          onLayout={onHeaderLayout}
        />
      )
    }, [headerProps, headerExtraPaddingAnim, headerExtraStyle, onHeaderLayout])

    const duplicatedHeaderNode = useMemo((): Node => {
      return (
        isHeaderAnimated && (
          <Animated.View
            style={[
              PageLayoutWithHeaderStyles.duplicatedHeaderContainer,
              {
                marginTop: headerMarginTopAnim,
                opacity: isShowDuplicatedHeader ? 1 : 0,
              },
            ]}
            accessible={false}
            importantForAccessibility="no-hide-descendants"
            accessibilityElementsHidden
          >
            <Header {...headerProps} />
          </Animated.View>
        )
      )
    }, [
      headerMarginTopAnim,
      headerProps,
      isHeaderAnimated,
      isShowDuplicatedHeader,
    ])

    const isNormalHeaderShow = !isHeaderHidden && !isHeaderAbsolute
    const isAbsoluteHeaderShow = !isHeaderHidden && isHeaderAbsolute
    const ref = (scrollViewRef: any)

    return (
      <View style={PageLayoutWithHeaderStyles.container} {...testID}>
        {!shouldHeaderIgnoreStatusBarHeight && (
          <StatusBar backgroundColor={headerBackgroundColor} />
        )}
        {isHeaderAnimated ? (
          <>
            <Animated.ScrollView
              testID={SCROLL_VIEW_TEST_ID}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollYAnim } } }],
                {
                  useNativeDriver: true,
                },
              )}
              bounces={false}
            >
              {headerNode}

              <Animated.View
                style={[
                  PageLayoutWithHeaderStyles.scrollView,
                  {
                    marginTop: Animated.multiply(headerExtraPaddingAnim, -1),
                  },
                ]}
              >
                <View style={scrollViewContentContainerStyle}>
                  {headerCard}
                  {children}
                </View>
              </Animated.View>
            </Animated.ScrollView>

            {duplicatedHeaderNode}
          </>
        ) : (
          <>
            <ScrollView
              contentContainerStyle={scrollViewContentContainerStyle}
              testID={SCROLL_VIEW_TEST_ID}
              stickyHeaderIndices={isHeaderAbsolute ? undefined : [0]}
              bounces={false}
              scrollEventThrottle={16}
              onScroll={onScrollViewScroll}
              ref={ref}
              scrollEnabled={scrollViewScrollEnabled}
            >
              {isNormalHeaderShow && headerNode}
              {children}
            </ScrollView>
            {isAbsoluteHeaderShow && (
              <View style={PageLayoutWithHeaderStyles.headerAbsoluteContainer}>
                {headerNode}
              </View>
            )}
          </>
        )}
      </View>
    )
  },
)

export default PageLayoutWithHeader
