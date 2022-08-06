import { stopSubmit } from "redux-form";
import { authAPI, /*securityAPI*/ } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null// if null, then captcha is not required
};

export type InitialStateType = typeof initialState;



const authReducer = (state = initialState, action:any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthtUsersdata = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

export const getAuthtUsersdata = () => async (dispatch:any) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthtUsersdata(id, email, login, true));
  }
};

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

  export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const login = (email: string, password: string, rememberMe: boolean , captcha: string) => async (dispatch:any) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthtUsersdata());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

/*export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}*/

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthtUsersdata(null, null, null, false));
  }
};

export default authReducer;
