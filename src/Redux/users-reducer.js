const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
   users: [],
   pageSize: 100,
   totalUsersCount: 0,
   currentPage: 1
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
      case SET_USERS:
         return {
            ...state,
            users: action.users
         };
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         };
      case SET_TOTAL_USERS_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalUsersCount
         }
      default:
         return state;
   }
}

export const followAC = (userId) => { // AC - ActionCreator
   return {
      type: FOLLOW,
      userId: userId
   }
};
export const unfollowAC = (userId) => {
   return {
      type: UNFOLLOW,
      userId: userId
   }
};
export const setUsersAC = (users) => {
   return {
      type: SET_USERS,
      users: users
   }
};
export const setCurrentPageAC = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE,
      currentPage: currentPage
   }
};
export const setTotalUsersCountAC = (totalUsersCount) => {
   return{
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount: totalUsersCount
   }
}

export default usersReducer;