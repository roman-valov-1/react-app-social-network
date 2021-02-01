import {usersAPI} from './../API/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
   profile: null,
   postsData: [
      { id: 1, message: "Hi, how are you?", likesCount: 2 },
      { id: 2, message: "It's my first post", likesCount: 223 }
   ],
   newPostText: ''
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            newPostText: '',
            postsData: [...state.postsData, { id: 5, message: state.newPostText, likesCount: 0 }],
         };
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         };
      default:
         return state;
   }
}

export const addPostActionCreator = () => {
   return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export const setUserProfile = (profile) => {
   return { type: SET_USER_PROFILE, profile }
}

export const getUserProfile = (userId) => (dispatch) => {
   usersAPI.getProfile(userId)
         .then(response => {
            dispatch(setUserProfile(response.data));
         });
}

export default profileReducer;