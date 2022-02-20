import api from "../api"

export default class GameService {
	static async all(whareclouse = null) {
		let url = "/games/all"
		if (whareclouse) {
			const params = Object.entries(whareclouse).reduce((acc, entry) => {
				acc += (entry[0] + "=" + entry[1] + "&")
				return acc
			}, "")
			url = url + "?" + params.slice(0, -1)
		}
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