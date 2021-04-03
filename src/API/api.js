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
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         })
   },
   follow(userId) {
      return instance.post(`follow/${userId}`);
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`);
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId);
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status: status });
   },
   savePhotoToServer(file) {
      const formData = new FormData();
      formData.append("image", file);
      return instance.put(`profile/photo`, formData);
   },
   saveProfile(profile) {
      return instance.put(`profile`, profile);
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`);
   },
   autorization(email, password, rememberMe = false) {
      return instance.post(`auth/login/`, {email, password, rememberMe});
   },
   logout() {
      return instance.delete(`auth/login/`);
   }
}
