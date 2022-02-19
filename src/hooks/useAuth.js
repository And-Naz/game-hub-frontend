import { useCallback, useState } from 'react'
import AuthService from '../services/AuthService'
import { setAuth, setUser } from '../store/authReducerDuck'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const storageName = 'game-hub'

const useAuth = () => {

	const [ready, setReady] = useState(true)
	const dispatch = useDispatch()

	const registration = useCallback(async (email, password) => {
		setReady(false)
		try {
			const res = await AuthService.registration(email, password)
			if (res) {
				localStorage.setItem(storageName, res.accessToken)
				dispatch(setAuth(true))
				dispatch(setUser(res.user))
			} else {
				throw new Error('Can\'t registr the user')
			}
		} catch (e) {
			console.log(e);
		} finally {
			setReady(true)
		}
	}, [])

	const login = useCallback(async (userNameOrEmail, password) => {
		setReady(false)
		try {
			const res = await AuthService.login(userNameOrEmail, password)
			if (res) {
				localStorage.setItem(storageName, res.accessToken)
				dispatch(setAuth(true))
				dispatch(setUser(res.user))
			} else {
				throw new Error('Can\'t login')
			}
		} catch (e) {
			console.log(e);
		} finally {
			setReady(true)
		}
	}, [])

	const logout = useCallback(async () => {
		setReady(false)
		try {
			const res = await AuthService.logout()
			if (res) {
				localStorage.removeItem(storageName)
				dispatch(setAuth(false))
				dispatch(setUser(null))
			} else {
				throw new Error('Can\'t logout')
			}
		} catch (e) {
			console.log(e);
		} finally {
			setReady(true)
		}
	}, [])

	const checkAuth = useCallback(async () => {
		setReady(false)
		try {
			const res = await axios.get(process.env.REACT_APP_API + '/auth/refresh', { withCredentials: true })
			if (res.status === 201) {
				localStorage.setItem(storageName, res.accessToken)
				dispatch(setAuth(true))
				dispatch(setUser(res.user))
			} else {
				throw new Error('Unauthorized token')
			}
		} catch (e) {
			localStorage.removeItem(storageName)
			dispatch(setAuth(false))
			dispatch(setUser(null))
		} finally {
			setReady(true)
		}
	}, [])

	return { registration, login, logout, checkAuth, ready }
}

export default useAuth
