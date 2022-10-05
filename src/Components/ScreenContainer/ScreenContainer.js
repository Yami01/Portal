import type {AbstractComponent, Node} from "react";
import React, {memo, useMemo} from 'react';
import {ImageBackground, View} from 'react-native';
import BlurOverlay from '../ScreenContainer/components/BlurOverlay';
import ScreenLoader from '../ScreenContainer/components/ScreenLoader';
import type {PropsType} from "@/Components/ScreenContainer/types";
import {defaultProps} from "@/Components/ScreenContainer/config";
import ScreenContainerStyles from "@/Components/ScreenContainer/styles";


const ScreenContainer: AbstractComponent<PropsType> = memo(
	(props: PropsType): Node => {
		const {
			backgroundType,
			backgroundImage,
			backgroundColor,
			showOverlay,
			overlayType,
			overlaySolidColor,
			children,
			showLoaderModal,
			overlayGradientColors,
		} = props;

		const childrenNode = useMemo((): Node => {
			if (backgroundType === 'image') {
				return (
					<View style={[ScreenContainerStyles.container, {backgroundColor}]}>
						<ImageBackground
							source={backgroundImage}
							style={ScreenContainerStyles.imageBackground}>
							{children}
							<ScreenLoader showLoader={showLoaderModal}/>
						</ImageBackground>
					</View>
				);
			} else {
				return (
					<View style={[ScreenContainerStyles.container, {backgroundColor}]}>
						{children}
						<ScreenLoader showLoader={showLoaderModal}/>
					</View>
				);
			}
		}, [children])

		return (
			<React.Fragment>
				<BlurOverlay
					showOverlay={showOverlay}
					overlayType={overlayType}
					overlayGradientColors={overlayGradientColors}
					overlaySolidColor={overlaySolidColor}>
					{childrenNode}
				</BlurOverlay>
				{/* Back handler */}
				{/* <BackHandlerInterceptor /> */}
			</React.Fragment>
		);
	});

ScreenContainer.defaultProps = defaultProps;

export default ScreenContainer;
