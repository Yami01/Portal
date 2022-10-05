/**
 *
 * @format
 *
 */
import LoginContainer from '@/Containers/Auth/Login/LoginContainer'
import ForgotPasswordContainer from "@/Containers/Auth/ForgotPassword/ForgotPasswordContainer"
import LoginAuthContainer from "@/Containers/Auth/LoginAuth/LoginAuthContainer"
import LoginPinContainer from "@/Containers/Auth/LoginPin/LoginPinContainer"
import CreateNewPasswordContainer from "@/Containers/Auth/CreateNewPassword/CreateNewPasswordContainer";

export const ROUTES = [
  {
    name: 'Login',
    screen: LoginContainer,
  },
  {
    name: 'LoginAuth',
    screen: LoginAuthContainer,
  },
  {
    name: 'LoginPin',
    screen: LoginPinContainer,
  },
  {
    name: 'ForgotPassword',
    screen: ForgotPasswordContainer,
  },
  {
    name: 'CreateNewPassword',
    screen: CreateNewPasswordContainer,
  },
]
