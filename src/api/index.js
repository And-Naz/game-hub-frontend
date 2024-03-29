import axios from "axios"
const api = axios.create({
	baseURL: process.env.REACT_APP_API,
	withCredentials: true
})

api.interceptors.request.use(config => {
	config.headers.Authorization = `Baerer ${localStorage.getItem('token')}`;
	return config;
})

export default api;
export { axios };