import { StyleSheet } from "react-native"
import { ProfileComponentStylesType } from "../Types"
const ProfileComponentStyles: ProfileComponentStylesType = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 50,
    },
    tileStyle: {
        color: "white", 
        fontSize: 24, 
        textAlign: 'center', 
        paddingBottom: 20, 
        paddingTop: 20
    }

})
export default ProfileComponentStyles;