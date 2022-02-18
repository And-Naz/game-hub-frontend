import api from "../api"

export default class UserService {
    static async fetchUsers(email, password) {
        return api.get("/auth/users")
    }
}