import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "1b7c72fc-c879-4275-88e5-e33388eb8130"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize} `)
            .then(response => response.data)
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id} `, {} )
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id} `)
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    setUserProfile(userId) {
        return instance.get(`profile/${userId} `)
            .then(response => response.data)
    }
}

export const securityAPI = {
    setUserProfile(userId) {
        return instance.get(`profile/${userId} `)
            .then(response => response.data)
    }
}