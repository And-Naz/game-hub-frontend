import { forwardRef, useState, useCallback, useEffect } from "react"
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const getIsAuth = state => state.auth.isAuth

const AuthComponent = forwardRef(function (props, ref) {
	const { logout } = useAuth()
	const isAuth = useSelector(getIsAuth)
	const [showProfileControls, setShowProfileControls] = useState(false)
	const [isSignIn, setIsSignUp] = useState(true)
	const toggleForm = useCallback((e) => {
		setTimeout(() => {
			setIsSignUp(prev => !prev)
		}, 0)
	}, [])
	useEffect(() => {
		setShowProfileControls(isAuth)
	}, [isAuth])
	return (
		showProfileControls
			? (<button onClick={e => logout()}>Logount</button>)
			: (isSignIn
				? <SignIn toggleForm={toggleForm} />
				: <SignUp toggleForm={toggleForm} />
			)
	);
})

export default AuthComponent;