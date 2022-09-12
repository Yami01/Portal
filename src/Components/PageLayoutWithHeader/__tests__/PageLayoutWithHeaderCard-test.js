/**
 *
 * PageLayoutWithHeader Test
 * @format
 * @flow
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {render, within, fireEvent, act} from '@testing-library/react-native';

import {View, Text} from 'react-native';

import {WHITE} from '@colors';
import PageLayoutWithHeader from '../PageLayoutWithHeader';
import {HEADER_TEST_ID, SCROLL_VIEW_TEST_ID} from '../config';

const props = {
  headerTitleLabel: 'Header',
  headerAccessibilityLabel: 'Accessible Header',
  headerAccessibilityHint: 'This is accessible header',
  headerCardOverlapHeight: 30,
};

jest.useFakeTimers();

describe('PageLayoutWithHeader', () => {
  const leftButtonAccessibilityLabel = 'Accessible header button left';
  const leftButton = {
    iconFillColor: WHITE,
    iconGroup: 'general',
    iconName: 'menu',
    accessibilityLabel: leftButtonAccessibilityLabel,
    accessibilityHint: 'This button will take you home',
  };

  const rightButtonAccessibilityLabel = 'Accessible header button right';
  const rightButton = {
    iconFillColor: WHITE,
    iconGroup: 'general',
    iconName: 'notifications',
    accessibilityLabel: rightButtonAccessibilityLabel,
    accessibilityHint: 'This button will take to the notification',
    badgeNumber: 1,
  };

  const titleLabel = 'AIA Vitality';

  const headerProps = {
    isHeaderProgressBarVisible: true,
    headerProgressBarPosition: 0,
    headerProgressBarAccessibilityLabel: 'progressBarAccessibilityLabel',
    headerProgressBarAccessibilityHint: 'progressBarAccessibilityHint',
    headerProgressBarBottomRightText: '0% completed',
    headerProgressBarBottomRightTextAccessibilityLabel:
      'progressBarBottomRightTextAccessibilityLabel',
    headerProgressBarBottomRightTextAccessibilityHint:
      'progressBarBottomRightTextAccessibilityHint',
  };

  const getScrollEventData = (scrollY: number): Obj => {
    return {
      nativeEvent: {
        contentOffset: {
          y: scrollY,
        },
      },
    };
  };

  test('render with animated header properly', () => {
    const tree = renderer
      .create(
        <PageLayoutWithHeader
          {...props}
          headerCard={
            <View>
              <Text>Card</Text>
            </View>
          }>
          <View>
            <Text>Children</Text>
          </View>
        </PageLayoutWithHeader>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render with non animated header properly', () => {
    const tree = renderer
      .create(
        <PageLayoutWithHeader
          {...props}
          headerLeftButton={leftButton}
          headerTitleLabel={titleLabel}
          headerRightButton={rightButton}
          isHeaderAnimated={false}
          isHeaderOnlyLeftIcon
          isHeaderAbsolute
          scrollYOffsetToSolidHeader={100}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('is render properly', () => {
    const cardTestId = 'Card Test Id';
    const childrenTestId = 'Children Test Id';
    const {queryByTestId} = render(
      <PageLayoutWithHeader {...props} headerCard={<View testID={cardTestId} />}>
        <View testID={childrenTestId} />
      </PageLayoutWithHeader>
    );
    expect(queryByTestId(cardTestId)).not.toBeNull();
    expect(queryByTestId(childrenTestId)).not.toBeNull();
  });

  test('is isHeaderOnlyLeftIcon not works when isHeaderAnimated true', () => {
    const {queryAllByA11yLabel, queryAllByText} = render(
      <PageLayoutWithHeader
        {...props}
        headerLeftButton={leftButton}
        headerTitleLabel={titleLabel}
        headerRightButton={rightButton}
        isHeaderAnimated
        isHeaderOnlyLeftIcon
      />
    );
    expect(queryAllByA11yLabel(leftButtonAccessibilityLabel)).not.toBeNull();
    expect(queryAllByText(titleLabel)).not.toBeNull();
    expect(queryAllByA11yLabel(rightButtonAccessibilityLabel)).not.toBeNull();
  });

  test('is isHeaderOnlyLeftIcon work when isHeaderAnimated false', () => {
    const {queryByA11yLabel, queryByText} = render(
      <PageLayoutWithHeader
        {...props}
        headerLeftButton={leftButton}
        headerTitleLabel={titleLabel}
        headerRightButton={rightButton}
        isHeaderAnimated={false}
        isHeaderOnlyLeftIcon
      />
    );
    expect(queryByA11yLabel(leftButtonAccessibilityLabel)).not.toBeNull();
    expect(queryByText(titleLabel)).toBeNull();
    expect(queryByA11yLabel(rightButtonAccessibilityLabel)).toBeNull();
  });

  test('is Header is absolute position when isHeaderAbsolute true', () => {
    const {queryByTestId, queryAllByA11yLabel} = render(
      <PageLayoutWithHeader
        {...props}
        headerLeftButton={leftButton}
        headerTitleLabel={titleLabel}
        headerRightButton={rightButton}
        isHeaderAnimated={false}
        isHeaderOnlyLeftIcon
        isHeaderAbsolute
      />
    );
    const scrollView = queryByTestId(SCROLL_VIEW_TEST_ID);
    expect(scrollView).not.toBeNull();

    const headerLeftButtons = queryAllByA11yLabel(leftButtonAccessibilityLabel);
    expect(headerLeftButtons).not.toBeNull();
    expect(headerLeftButtons).toHaveLength(1);

    // If left button outside scroll view
    const {queryByA11yLabel: queryByA11yLabelInScrollView} = within(scrollView);
    expect(queryByA11yLabelInScrollView(leftButtonAccessibilityLabel)).toBeNull();
  });

  test('is Header is relative position when isHeaderAbsolute false', () => {
    const {queryByTestId, queryAllByA11yLabel} = render(
      <PageLayoutWithHeader
        {...props}
        headerLeftButton={leftButton}
        headerTitleLabel={titleLabel}
        headerRightButton={rightButton}
        isHeaderAnimated={false}
        isHeaderOnlyLeftIcon
        isHeaderAbsolute={false}
      />
    );
    const scrollView = queryByTestId(SCROLL_VIEW_TEST_ID);
    expect(scrollView).not.toBeNull();

    const headerLeftButtons = queryAllByA11yLabel(leftButtonAccessibilityLabel);
    expect(headerLeftButtons).not.toBeNull();
    expect(headerLeftButtons).toHaveLength(1);

    // If left button inside scroll view
    const {queryByA11yLabel: queryByA11yLabelInScrollView} = within(scrollView);
    expect(queryByA11yLabelInScrollView(leftButtonAccessibilityLabel)).not.toBeNull();
  });

  test('is headerCard not show when isHeaderAnimated false', () => {
    const cardTestId = 'Card Test Id';
    const childrenTestId = 'Children Test Id';
    const {queryByTestId} = render(
      <PageLayoutWithHeader
        {...props}
        headerCard={<View testID={cardTestId} />}
        isHeaderAnimated={false}>
        <View testID={childrenTestId} />
      </PageLayoutWithHeader>
    );
    expect(queryByTestId(cardTestId)).toBeNull();
    expect(queryByTestId(childrenTestId)).not.toBeNull();
  });

  test('is ScrollView onScroll working for non animated header', () => {
    const scrollYOffset = 50;
    const {queryByTestId} = render(
      <PageLayoutWithHeader
        {...props}
        headerLeftButton={leftButton}
        headerTitleLabel={titleLabel}
        headerRightButton={rightButton}
        isHeaderAnimated={false}
        isHeaderOnlyLeftIcon
        scrollYOffsetToSolidHeader={scrollYOffset}>
        <View style={{height: 1000}} />
      </PageLayoutWithHeader>
    );
    const scrollView = queryByTestId(SCROLL_VIEW_TEST_ID);
    expect(scrollView).not.toBeNull();

    fireEvent.scroll(scrollView, getScrollEventData(scrollYOffset + 1));
  });

  test('is Header onLayout working', () => {
    const {queryByTestId} = render(<PageLayoutWithHeader {...props} />);
    const header = queryByTestId(HEADER_TEST_ID);
    expect(header).not.toBeNull();
    act(() => {
      fireEvent(header, 'onLayout', {
        nativeEvent: {layout: {height: 120}},
      });
    });
  });

  test('is Progress Bar work', () => {
    const {queryByA11yLabel, queryByText, queryByA11yHint} = render(
      <PageLayoutWithHeader
        {...props}
        {...headerProps}
        headerLeftButton={leftButton}
        headerTitleLabel={titleLabel}
        headerRightButton={rightButton}
        isHeaderAnimated={false}
        isHeaderOnlyLeftIcon
      />
    );
    expect(queryByA11yLabel(headerProps.headerProgressBarAccessibilityLabel)).not.toBeNull();
    expect(queryByA11yHint(headerProps.headerProgressBarAccessibilityHint)).not.toBeNull();
    expect(queryByText(headerProps.headerProgressBarBottomRightText)).not.toBeNull();
    expect(
      queryByA11yLabel(headerProps.headerProgressBarBottomRightTextAccessibilityLabel)
    ).not.toBeNull();
    expect(
      queryByA11yHint(headerProps.headerProgressBarBottomRightTextAccessibilityHint)
    ).not.toBeNull();
  });
});
