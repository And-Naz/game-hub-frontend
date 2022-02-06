import { useState, forwardRef, useCallback } from "react";
import Button from "../ui/Button";
import "./style.css"
const PopupButton = forwardRef(function ({ children }, ref) {
	const [showPopup, setShowPopup] = useState(false)
	const onClickBtn = useCallback(() => { setShowPopup(prev => !prev) }, [])
	const onBlurBtn = useCallback(() => { /* setShowPopup(false) */ }, [])
	return (
		<button ref={ref} className='popup-btn' onClick={onClickBtn} onBlur={onBlurBtn}>
			{
				children && (
					<span>
						{children}
					</span>
				)
			}
			<span className='popup-btn__caret'></span>
			{
				showPopup &&
				<div className="popup-btn__popup-element">
					<div className='navbar-login-form'>
						<form action="#" method='post'>
							<p> Username:</p>
							<div><input className="login-form-inp" type="text" name="log" /></div>
							<p> Password:</p>
							<div><input className="login-form-inp" type="password" name="psw" /></div>
							<br />
							<div className='checkbox'>
								<input className="login-form-checkbox" type="checkbox" name="rememberme" />
								<label>Remember Me</label>
							</div>
							<Button buttonSize='btn-small' children='Log In' />
							<div className="lostPwd">
								<a href="#" title="Password Lost and Found">Lost password?</a>
							</div>
						</form>
					</div>
				</div>
			}
		</button>
	);
})

export default PopupButton;
