import api from "../api"
import User from "../models/User";

export default class UserService {
	static async fetchUsers(email, password) {
		try {
			const response = await api.get("/auth/users")
			if (response.status !== 200) {
				throw new Error("Can't get users")
			}
			return response.data.map(d => new User(d))
		} catch (e) {
			console.log(e);
		}
	}
}