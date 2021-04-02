import { usersAPI } from './../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 20,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: true }
               }
               return user;
            })
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: false }
               }
               return user;
            })
         };
      case SET_USERS: {
         return { ...state, users: action.users }
      }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }
      }
      case SET_TOTAL_USERS_COUNT: {
         return { ...state, totalUsersCount: action.count }
      }
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching }
      }
      case TOGGLE_FOLLOWING_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         }
      }
      default:
         return state;
   }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (page, pageSize) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true));

      let data = await usersAPI.getUsers(page, pageSize);
         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
   }
}

export const follow = (userId) => {
   return async (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));

      let response = await usersAPI.follow(userId);
         if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
         }
         dispatch(toggleFollowingProgress(false, userId));
   }
}

export const unfollow = (userId) => {
   return async (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));

      let response = await usersAPI.unfollow(userId)
         if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
         }
         dispatch(toggleFollowingProgress(false, userId));
   }
}

export default usersReducer;