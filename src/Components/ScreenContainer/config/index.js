/**
 *
 * @format
 *
 */
import type {ScreenContainerOptionalProps} from "@/Components/ScreenContainer/types";
import {Colors} from "@/Theme/Variables";

export const defaultProps: ScreenContainerOptionalProps = {
    backgroundType: 'color',
    backgroundImage: 0,
    backgroundColor: Colors.transparent,
    showOverlay: false,
    overlayType: 'solid',
    overlayGradientColors: ['transparent', '#1e3c60'],
    overlaySolidColor: '#ffffff',
    showLoaderModal: false,
    testID: 'ScreenContainerTestID',
};
