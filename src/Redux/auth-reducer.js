import { authAPI } from './../API/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   authError: ''
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
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

export const autorizationUser = (email, password, rememberMe) => async (dispatch) => {
   let response = await authAPI.autorization(email, password, rememberMe);

   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
   } else {
      let messageError = response.data.messages.length > 0
         ? response.data.messages[0] : "Some Error";
      dispatch(setAuthError(messageError))
   }
}

export const logout = () => async (dispatch) => {
   let response = await authAPI.logout();

   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false, null));
   }
}

export default authReducer;