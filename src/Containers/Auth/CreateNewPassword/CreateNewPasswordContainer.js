import React, {useCallback, useMemo} from 'react'
import {navigate} from "@/Navigators/utils";
import type {LoginComponentButtonPropsType} from "@/Containers/Auth/Login/Types";
import CreateNewPasswordComponent from "@/Containers/Auth/CreateNewPassword/Component/CreateNewPasswordComponent";

const CreateNewPasswordContainer = () => {
  const primaryButtonPress = useCallback(() => {
    navigate('Main');
  }, []);

  const secondaryButtonPress = useCallback(() => {
    navigate('Login');
  }, []);

  const primaryButtonProps = useMemo((): LoginComponentButtonPropsType => {
    return {
      onPress: primaryButtonPress,
    };
  }, []);

  const secondaryButtonProps = useMemo((): LoginComponentButtonPropsType => {
    return {
      onPress: secondaryButtonPress,
    };
  }, []);
  return <CreateNewPasswordComponent  primaryButtonProps={primaryButtonProps} secondaryButtonProps={secondaryButtonProps} />
}

export default CreateNewPasswordContainer
