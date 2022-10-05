/**
 *
 * @format
 *
 */
import {HeaderRightPropsType} from "@/Components/Header/components/HeaderRight/types";
import {Colors} from "@/Theme/Variables";

export const defaultProps: HeaderRightPropsType = {
	rightContainerStyle: undefined,
	onRightPressed: () => {},
	rightIconName: '',
	rightIconColor: Colors.black,
	rightIconSize: 18,
	rightText: '',
	rightTextStyle: undefined,
	rightElement: undefined,
	rightMarker: undefined,
	secondRightIconName: '',
	secondRightIconColor: Colors.black,
	secondRightIconSize: 18,
	onSecondRightPressed: () => {},
};
