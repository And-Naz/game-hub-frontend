import { forwardRef, useState, useCallback } from "react"
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthComponent = forwardRef(function (props, ref) {
	const [isSignIn, setIsSignUp] = useState(true)
	const toggleForm = useCallback((e) => {
		setIsSignUp(prev => !prev)
	}, [])
	return (
		isSignIn
			? <SignIn toggleForm={toggleForm} />
			: <SignUp toggleForm={toggleForm} />
	);
})

export default AuthComponent;
