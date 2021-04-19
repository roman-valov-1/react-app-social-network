import { profileAPI } from './../API/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
   profile: null,
   postsData: [
      { id: 1, message: "It's my first post", likesCount: 2 },
      { id: 2, message: "It's my second post", likesCount: 223 },
      { id: 3, message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`, likesCount: 123 }
   ],
   status: ''
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            newPostText: '',
            postsData: [...state.postsData, 
               { id: (state.postsData.length + 1), message: action.newPostText, likesCount: 0 }],
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         };
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         };
      case DELETE_POST:
         return {
            ...state,
            postsData: state.postsData.filter(p => p.id != action.postId)
         }
      case SAVE_PHOTO_SUCCESS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos }
         }
      default:
         return state;
   }
}

export const addPostActionCreator = (newPostText) => {
   return { type: ADD_POST, newPostText }
}

export const deletePost = (postId) => {
   return { type: DELETE_POST, postId }
}

export const setUserProfile = (profile) => {
   return { type: SET_USER_PROFILE, profile }
}

export const setStatus = (status) => {
   return { type: SET_STATUS, status }
}
export const savePhotoToServerSuccess = (photos) => {
   return { type: SAVE_PHOTO_SUCCESS, photos }
}


export const getUserProfile = (userId) => async (dispatch) => {
   let response = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
   }
}

export const savePhotoToServer = (file) => async (dispatch) => {
   let response = await profileAPI.savePhotoToServer(file);
   if (response.data.resultCode === 0) {
      dispatch(savePhotoToServerSuccess(response.data.data.photos));
   }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
   let userId = getState().auth.userId;
   let response = await profileAPI.saveProfile(profile);
   if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
   } 
}

export default profileReducer;