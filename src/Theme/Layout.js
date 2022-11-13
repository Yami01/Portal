/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
import {StyleSheet} from 'react-native'

export default function () {
  return StyleSheet.create({
    /* Column Layouts */
    column: {
      flexDirection: 'column',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    /* Row Layouts */
    row: {
      flexDirection: 'row',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    /* Sizes Layouts */
    fill: {
      flex: 1,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    col1: {
      width: '10%',
    },
    col2: {
      width: '20%',
    },
    col3: {
      width: '30%',
    },
    col4: {
      width: '40%',
    },
    col5: {
      width: '50%',
    },
    col6: {
      width: '60%',
    },
    col7: {
      width: '70%',
    },
    col8: {
      width: '80%',
    },
    col9: {
      width: '90%',
    },
    fullWidth: {
      width: '100%',
    },
    row1: {
      height: '10%',
    },
    row2: {
      height: '20%',
    },
    row3: {
      height: '30%',
    },
    row4: {
      height: '40%',
    },
    row5: {
      height: '50%',
    },
    row6: {
      height: '60%',
    },
    row7: {
      height: '70%',
    },
    row8: {
      height: '80%',
    },
    row9: {
      height: '90%',
    },
    fullHeight: {
      height: '100%',
    },
    /* Operation Layout */
    mirror: {
      transform: [{ scaleX: -1 }],
    },
    rotate90: {
      transform: [{ rotate: '90deg' }],
    },
    rotate90Inverse: {
      transform: [{ rotate: '-90deg' }],
    },
  })
}
