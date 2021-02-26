import {createSelector} from 'reselect';

const getUsers = (state) => {
   return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers,  (users) => {
   return users.filter(u => true);
});

// Пример использования библиотеки reselect, благодаря которой происходит мониторинг и сравнение входных данных
//  всех зависимостей и если они не изменились с предыдущего вызова, 
// то само тело функции селектора не будет выполняться, следовательно происходит оптимизация,
// потому что не происходит лишних пересчетов, рендера и т.д

export const getPageSize = (state) => {
   return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
   return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
   return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
   return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
   return state.usersPage.followingInProgress;
}

