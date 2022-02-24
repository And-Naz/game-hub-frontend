import api from "../api"

export default class NewsService {
	static async all(whareclouse = null) {
		let url = "/news/all"
		try {
			const response = await api.get(url)
			if (response.status !== 200) {
				throw new Error("Can not find games.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}
	static async latest(whareclouse = null) {
		let url = "/news/latest"
		try {
			const response = await api.get(url)
			if (response.status !== 200) {
				throw new Error("Can not find games.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}


}