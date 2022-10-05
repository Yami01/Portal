import {useSafeAreaInsets} from "react-native-safe-area-context";
import type {AbstractComponent, Node} from "react";
import React, {memo, useMemo} from "react";
import type {PropsType} from "@/Components/PageLayoutWithHeader/types";
import {ScrollView, View} from "react-native";
import {defaultProps} from "@/Components/ScreenLayout/config";
import ScreenLayoutStyles from "@/Components/ScreenLayout/styles";

const ScreenLayout: AbstractComponent<PropsType> = memo(
	(props: PropsType): Node => {
		const {
			header,
			paddingBottom,
			paddingHorizontal,
			paddingTop,
			useSafeArea: enableSafeView,
			neverForceInset,
			children,
			scrollable,
			contentContainerStyle,
		} = props;

		const safeAreaInsets = useSafeAreaInsets();

		const contentAreaNode = useMemo((): Node => {
			if (scrollable) {
				return (
					<ScrollView
						style={[
							{marginTop: paddingTop, paddingBottom, paddingHorizontal},
							contentContainerStyle,
						]}
						// contentContainerStyle={styles.scrollView}
						showsHorizontalScrollIndicator={false}
						showsVerticalScrollIndicator={false}
						{...props}>
						{children}
					</ScrollView>
				);
			} else {
				return (
					<View
						style={[
							ScreenLayoutStyles.container,
							{paddingTop, paddingBottom, paddingHorizontal},
							contentContainerStyle,
						]}
						{...props}>
						{children}
					</View>
				);
			}
		}, [children])

		const defaultInset = {
			// if header is included set it to 0, header layout will have its safe area
			paddingTop: header ? 0 : safeAreaInsets.top,
			paddingRight: safeAreaInsets.right,
			paddingBottom: safeAreaInsets.bottom,
			paddingLeft: safeAreaInsets.left,
		};

		let forceInsets =
			neverForceInset && neverForceInset.length
				? neverForceInset.reduce(
					(m: any, inset: string) => {
						let paddingString = '';

						// although technically right and left have a 0 value anyway, we maintain this,
						// because it could have a value in landscape mode (which we don't support)
						if (inset === 'top') paddingString = 'paddingTop';
						if (inset === 'right') paddingString = 'paddingRight';
						if (inset === 'bottom') paddingString = 'paddingBottom';
						if (inset === 'left') paddingString = 'paddingLeft';

						return {
							...m,
							[paddingString]: 0,
						};
					},
					{
						...defaultInset,
					},
				)
				: {...defaultInset};

		return (
			<View style={[ScreenLayoutStyles.container, enableSafeView ? forceInsets : null]}>
				{header}
				{contentAreaNode}
			</View>
		);
	});

ScreenLayout.defaultProps = defaultProps;

export default ScreenLayout;
