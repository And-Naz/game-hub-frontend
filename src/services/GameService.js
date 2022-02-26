import api from "../api"

export default class GameService {
	static async all() {
		try {
			const response = await api.get("/games/all")
			if (response.status !== 200) {
				throw new Error("Can not find games.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}
	static async gameForHomePage() {
		try {
			const response = await api.get("/games/homePage")
			if (response.status !== 200) {
				throw new Error("Can not find games.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}
	static async getGame(id) {
		const response = await api.get("/games/game/" + id)
		if (response.status !== 200) {
			throw new Error("Can not find game.")
		}
		return response.data
	}
}