import { endPoints, requestType } from '../constants/index';
import Api from './index';

// export const sendOtp = params => {
//   return Api(endPoints.otp, params, requestType.POST);
// };

export const login = params => {
  return Api(endPoints.login.login, params, requestType.POST);
};

export const logout = () => {
  return Api(endPoints.login.logout, null, requestType.POST);
};

export const verifySession = () => {
  return Api(endPoints.login.verifySession, null, requestType.GET);
}