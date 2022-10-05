/**
 *
 * @format
 *
 */
import type {Node} from 'react'
import type {ImageStyleProp, ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

export type ScreenContainerOptionalProps = {
    backgroundImage?: string;
    backgroundColor?: string;
    showOverlay?: boolean;
    overlayType?: string;
    overlayGradientColors?: any;
    overlaySolidColor?: string;
    showLoaderModal?: boolean;
    testID?: string,
}

export type PropsType = {
    backgroundType: any,
    children: Node,
    ...ScreenContainerOptionalProps
}

export type ScreenContainerStylesType = {
    container: ViewStyleProp,
    imageBackground: ImageStyleProp,
}
