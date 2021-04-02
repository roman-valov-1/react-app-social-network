import { profileAPI } from './../API/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
   profile: null,
   postsData: [
      { id: 1, message: "Hi, how are you?", likesCount: 2 },
      { id: 2, message: "It's my first post", likesCount: 223 }
   ],
   status: ''
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            newPostText: '',
            postsData: [...state.postsData, { id: 5, message: action.newPostText, likesCount: 0 }],
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
            profile: {...state.profile, photos: action.photos}
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

export default profileReducer;