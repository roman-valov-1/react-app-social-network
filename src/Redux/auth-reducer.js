import { authAPI, securityAPI } from './../API/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   authError: '',
   captchaUrl: null
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
         return {
            ...state,
            ...action.payload
         }
      case SET_AUTH_ERROR:
         return {
            ...state,
            authError: action.authError
         }
      default:
         return state;
   }
}

export const setAuthUserData = (userId, email, login, isAuth, authError) => ({
   type: SET_USER_DATA,
   payload: { userId, email, login, isAuth, authError }
});

export const getAuthUserData = () => async (dispatch) => {
   let response = await authAPI.me();

   if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true, null));
   }
}
export const setAuthError = (authError) => ({
   type: SET_AUTH_ERROR,
   authError
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({
   type: GET_CAPTCHA_URL_SUCCESS,
   payload: { captchaUrl }
});

export const autorizationUser = (email, password, rememberMe, captcha) => async (dispatch) => {
   let response = await authAPI.autorization(email, password, rememberMe, captcha);

   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
   } else {
      if (response.data.resultCode === 10) {
         dispatch(getCaptchaUrl());
      }

      let messageError = response.data.messages.length > 0
         ? response.data.messages[0] : "Some Error";
      dispatch( setAuthError(messageError) )    
   }
}


export const logout = () => async (dispatch) => {
   let response = await authAPI.logout();

   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false, null));
   }
}

export const getCaptchaUrl = () => async (dispatch) => {
   let response = await securityAPI.getCaptchaUrl();
   let captchaUrl = response.data.url;

   dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;