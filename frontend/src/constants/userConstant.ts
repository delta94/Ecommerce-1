import { Iuserinfo } from "../store/types";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";

export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAILURE = "USER_DETAILS_FAILURE";

export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAILURE = "USER_UPDATE_FAILURE";

export const USER_LOGOUT = "USER_LOGOUT";

interface userDetailRequest {
  type: typeof USER_DETAILS_REQUEST;
}
interface userDetailSuccess {
  type: typeof USER_DETAILS_SUCCESS;
  payload: Iuserinfo;
}
interface userDetailFailure {
  type: typeof USER_DETAILS_FAILURE;
  payload: string;
}

interface userUpdateRequest {
  type: typeof USER_UPDATE_REQUEST;
}
interface userUpdateSuccess {
  type: typeof USER_UPDATE_SUCCESS;
  payload: Iuserinfo;
}
interface userUpdateFailure {
  type: typeof USER_UPDATE_FAILURE;
  payload: string;
}

interface userRegisterRequest {
  type: typeof USER_REGISTER_REQUEST;
}
interface userRegisterSuccess {
  type: typeof USER_REGISTER_SUCCESS;
  payload: Iuserinfo;
}
interface userRegisterFailure {
  type: typeof USER_REGISTER_FAILURE;
  payload: string;
}

interface userLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
}
interface userLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: Iuserinfo;
}
interface userLoginFailure {
  type: typeof USER_LOGIN_FAILURE;
  payload: string;
}

interface userLogout {
  type: typeof USER_LOGOUT;
}

export type userActions =
  | userLoginFailure
  | userLoginRequest
  | userLoginSuccess
  | userLogout
  | userRegisterRequest
  | userRegisterFailure
  | userRegisterSuccess
  | userDetailRequest
  | userDetailSuccess
  | userDetailFailure
  | userUpdateRequest
  | userUpdateSuccess
  | userUpdateFailure;
