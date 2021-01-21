const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
   users: [
      // {
      //    id: 1, followed: false, avatarUrl: 'https://variety.com/wp-content/uploads/2017/06/rexfeatures_5884729u.jpg',
      //    fullName: 'Dmitry Ivanov', status: 'Hello',
      //    location: { city: 'Moscow', country: 'Russia' }
      // },
      // {
      //    id: 2, followed: true, avatarUrl: 'https://variety.com/wp-content/uploads/2017/06/rexfeatures_5884729u.jpg',
      //    fullName: 'Ivan Smirnov', status: 'Hello!',
      //    location: { city: 'Ekaterinburg', country: 'Russia' }
      // },
      // {
      //    id: 3, followed: false, avatarUrl: 'https://variety.com/wp-content/uploads/2017/06/rexfeatures_5884729u.jpg',
      //    fullName: 'Roman Popov', status: 'Hello!!',
      //    location: { city: 'Saint-P', country: 'Russia' }
      // },
      // {
      //    id: 4, followed: false, avatarUrl: 'https://variety.com/wp-content/uploads/2017/06/rexfeatures_5884729u.jpg',
      //    fullName: 'Alex Petrov', status: 'Hello!!!',
      //    location: { city: 'Minsk', country: 'Belarus' }
      // }
   ]
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
            users: [...state.users, ...action.users]
         };
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

export default usersReducer;