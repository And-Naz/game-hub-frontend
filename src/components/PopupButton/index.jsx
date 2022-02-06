import { useState, forwardRef, useCallback } from "react";
import Button from "../ui/Button";
import "./style.css"
import SignIn from "../AuthComponent/SignIn";
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
					<SignIn />
				</div>
			}
		</button>
	);
})

export default PopupButton;
