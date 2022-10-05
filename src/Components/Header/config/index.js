/**
 *
 * @format
 *
 */
import {isIphoneX} from "react-native-iphone-x-helper";
import {Platform} from "react-native";

export const IS_IPHONE_X = isIphoneX();
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 10;
export const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 60;
export const HEADER_EXPANDED_HEIGHT =
	Platform.OS === 'ios' ? (IS_IPHONE_X ? 150 : 126) : 122;
export const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
