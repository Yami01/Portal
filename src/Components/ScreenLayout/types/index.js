/**
 *
 * @format
 *
 */
import type {Node} from 'react'
import type {ViewStyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";

export type PropsType = {
    header: any;
    paddingTop: number;
    paddingBottom: number;
    paddingHorizontal: number;
    useSafeArea: boolean;
    neverForceInset: any;
    scrollable: boolean;
    children: Node;
    contentContainerStyle: any;
}

export type ScreenLayoutStylesType = {
    container: ViewStyleProp,
    scrollView: ViewStyleProp,
}
