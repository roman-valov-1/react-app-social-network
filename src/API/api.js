import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "201df3f1-e0c5-420b-8d56-d790364daf70"
   }
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get( `users?page=${currentPage}&count=${pageSize}` )
      .then(response => {
         return response.data;
      })
   }
}