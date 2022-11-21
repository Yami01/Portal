import { StyleSheet } from "react-native"
import { ProfileComponentStylesType } from "../Types"
import { Colors } from "@/Theme/Variables"

const ProfileComponentStyles: ProfileComponentStylesType = StyleSheet.create({
  container: {
    paddingVertical: "15%",
    paddingHorizontal: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 50,
  },
  tileStyle: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  buttonText: {
    fontSize: 30,
    color: Colors.white,
  },
  backButtonStyles: {
    backgroundColor: Colors.blurWhite,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
  },
})
export default ProfileComponentStyles
