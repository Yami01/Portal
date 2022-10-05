import {HeaderLeftPropsType} from "@/Components/Header/components/HeaderLeft/types";
import {Colors} from "@/Theme/Variables";

/**
 *
 * @format
 *
 */

export const defaultProps: HeaderLeftPropsType = {
	leftContainerStyle: {},
	onLeftPressed: () => {},
	leftIconName: '',
	leftIconColor: Colors.black,
	leftIconSize: 16,
	leftText: '',
	leftTextStyle: {},
};
